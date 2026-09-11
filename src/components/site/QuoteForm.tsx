import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cities } from "@/data/cities";
import {
  addOnById,
  addOns,
  formatFrom,
  formatRange,
  fullDetailById,
  fullDetailName,
  fullDetailPrices,
  fullDetails,
  sizedById,
  sizedServices,
  vehicleSizes,
  type Range,
  type SizeId,
} from "@/data/pricing";
import { track } from "@/lib/track";

type Option = { id: string; name: string };

const groups: { title: string; options: Option[] }[] = [
  {
    title: "Full detail",
    options: fullDetails.map((f) => ({ id: f.id, name: fullDetailName(f) })),
  },
  {
    title: "Exterior",
    options: sizedServices
      .filter((s) => s.group === "Exterior")
      .map((s) => ({ id: s.id, name: s.name })),
  },
  {
    title: "Interior",
    options: sizedServices
      .filter((s) => s.group === "Interior")
      .map((s) => ({ id: s.id, name: s.name })),
  },
  { title: "Add-ons", options: addOns.map((a) => ({ id: a.id, name: a.name })) },
];

const allOptions = groups.flatMap((g) => g.options);
export const quoteServiceIds = new Set(allOptions.map((o) => o.id));

function priceFor(id: string, size: SizeId | ""): Range | null {
  const fd = fullDetailById(id);
  const sized = sizedById(id);
  const s: SizeId = size || "sedan";
  if (fd) return fullDetailPrices(fd)[s];
  if (sized) return sized.prices[s];
  return addOnById(id)?.price ?? null;
}

function estimate(size: SizeId | "", selected: string[]) {
  if (!size || !selected.length) return null;
  const sized = new Set<string>();
  const extras: string[] = [];
  for (const id of selected) {
    const fd = fullDetailById(id);
    if (fd) fd.parts.forEach((p) => sized.add(p));
    else if (sizedById(id)) sized.add(id);
    else extras.push(id);
  }
  let min = 0;
  let max = 0;
  let plus = false;
  let quoted = 0;
  for (const id of sized) {
    const r = sizedById(id)!.prices[size];
    min += r.min;
    max += r.max;
  }
  for (const id of extras) {
    const a = addOnById(id)!;
    if (a.price) {
      min += a.price.min;
      max += a.price.max;
      plus ||= !!a.price.plus;
    } else quoted++;
  }
  return { min, max, plus, quoted };
}

const timeWindows = [
  "Early (5 – 8 AM)",
  "Morning (8 – 11 AM)",
  "Midday (11 AM – 2 PM)",
  "Afternoon (2 – 5 PM)",
  "Evening (5 – 7 PM)",
  "Flexible",
];

const field =
  "mt-1.5 block w-full min-h-12 rounded-md border border-[var(--line-strong)] bg-white/60 px-3 py-2.5 text-base outline-none transition-colors focus:border-ink";
const fieldLabel = "text-[0.9375rem] font-medium";

export function QuoteForm({ initialService }: { initialService?: string | undefined }) {
  const navigate = useNavigate();
  const [size, setSize] = useState<SizeId | "">("");
  const [selected, setSelected] = useState<string[]>(
    initialService && quoteServiceIds.has(initialService) ? [initialService] : [],
  );
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "mailto">("idle");
  const [error, setError] = useState("");
  const est = useMemo(() => estimate(size, selected), [size, selected]);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    if (!size) {
      setStatus("error");
      setError("Pick a vehicle size.");
      return;
    }
    if (!selected.length) {
      setStatus("error");
      setError("Pick at least one service.");
      return;
    }

    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const sizeLabel = vehicleSizes.find((s) => s.id === size)?.label ?? "";
    const serviceNames = selected.map((id) => allOptions.find((o) => o.id === id)?.name ?? id);
    const estText = est
      ? `$${est.min} – $${est.max}${est.plus ? "+" : ""}${est.quoted ? ` + ${est.quoted} item(s) priced by quote` : ""}`
      : "n/a";
    const message = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email") || "—"}`,
      `City: ${get("city")}`,
      `Vehicle: ${get("vehicle")}`,
      `Size: ${sizeLabel}`,
      `Services: ${serviceNames.join("; ")}`,
      `Website estimate: ${estText}`,
      `Preferred date: ${get("date") || "—"}`,
      `Preferred time: ${get("time") || "—"}`,
      `Notes: ${get("notes") || "—"}`,
    ].join("\n");
    const subject = `Quote request — ${get("name")} (${get("city")})`;

    if (!business.quoteFormKey) {
      track("generate_lead", { method: "email_app", city: get("city") });
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: business.quoteFormKey,
          subject,
          from_name: "M BROS website",
          name: get("name"),
          phone: get("phone"),
          ...(get("email") ? { email: get("email") } : {}),
          message,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean };
      if (!res.ok || data.success === false) throw new Error("send failed");
      track("generate_lead", { method: "form", city: get("city") });
      void navigate({ to: "/thank-you" });
    } catch {
      setStatus("error");
      setError("That didn't send. Please try again, or call or text us.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-10">
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="h3 mb-4">Your details</legend>
        <label className="block">
          <span className={fieldLabel}>Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className={fieldLabel}>Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className={fieldLabel}>
            Email <span className="muted font-normal">(optional)</span>
          </span>
          <input name="email" type="email" autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className={fieldLabel}>City</span>
          <select name="city" required defaultValue="" className={field}>
            <option value="" disabled>
              Choose your city
            </option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </fieldset>

      <fieldset className="grid gap-5">
        <legend className="h3 mb-4">Your vehicle</legend>
        <label className="block">
          <span className={fieldLabel}>Year, make and model</span>
          <input name="vehicle" required placeholder="e.g. 2019 Honda CR-V" className={field} />
        </label>
        <div>
          <span className={fieldLabel} id="size-label">
            Size
          </span>
          <div
            role="radiogroup"
            aria-labelledby="size-label"
            className="mt-1.5 grid gap-2 sm:grid-cols-3"
          >
            {vehicleSizes.map((s) => (
              <label
                key={s.id}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-md border px-3 py-2 transition-colors ${
                  size === s.id
                    ? "border-ink bg-paper-2"
                    : "border-[var(--line-strong)] hover:border-ink"
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value={s.id}
                  checked={size === s.id}
                  onChange={() => setSize(s.id)}
                  className="accent-[var(--ink)]"
                />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="h3 mb-4">What you'd like done</legend>
        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title}>
              <p className="small mb-1 font-medium">{g.title}</p>
              <ul className="border-t">
                {g.options.map((o) => {
                  const checked = selected.includes(o.id);
                  const price = priceFor(o.id, size);
                  return (
                    <li key={o.id} className="border-b">
                      <label className="flex min-h-12 cursor-pointer items-start gap-3 py-3">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(o.id)}
                          className="mt-1 size-4 accent-[var(--ink)]"
                        />
                        <span className="flex-1 leading-snug">{o.name}</span>
                        <span className="num muted whitespace-nowrap text-[0.9375rem]">
                          {size ? formatRange(price) : formatFrom(price)}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          aria-live="polite"
          className="mt-8 grid gap-2 rounded-xl bg-paper-2 p-6 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-6">
            <p className="font-medium">Estimate</p>
            <p className="num mt-1 text-[clamp(1.8rem,4vw,2.5rem)] font-bold tracking-tight">
              {est ? `$${est.min} – $${est.max}${est.plus ? "+" : ""}` : "–"}
            </p>
          </div>
          <p className="muted text-[0.9375rem] md:col-span-6">
            {!size
              ? "Pick a vehicle size and services to see an estimate."
              : !selected.length
                ? "Pick the services you want."
                : est && est.quoted
                  ? `Plus ${est.quoted} item${est.quoted > 1 ? "s" : ""} we price by quote. Final price is confirmed once we've seen the vehicle.`
                  : "Final price is confirmed once we've seen the vehicle."}
          </p>
        </div>
      </fieldset>

      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="h3 mb-4">When</legend>
        <label className="block">
          <span className={fieldLabel}>Preferred date</span>
          <input name="date" type="date" className={field} />
        </label>
        <label className="block">
          <span className={fieldLabel}>Preferred time</span>
          <select name="time" defaultValue="" className={field}>
            <option value="">No preference</option>
            {timeWindows.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className={fieldLabel}>
            Anything else? <span className="muted font-normal">(optional)</span>
          </span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Where the car is parked, stains or smells we should know about."
            className={`${field} min-h-28`}
          />
        </label>
        <p className="muted text-[0.9375rem] md:col-span-2">
          Got photos of the car? Text them to{" "}
          <a href={business.smsHref} className="link">
            {business.phoneDisplay}
          </a>
          . It helps us give you an accurate price.
        </p>
      </fieldset>

      <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send quote request"}
        </button>
        <div aria-live="polite" className="text-[0.9375rem]">
          {status === "error" ? <p className="font-medium text-[#9b2c1f]">{error}</p> : null}
          {status === "mailto" ? (
            <p>
              Your email app should open with the request filled in. Just hit send. If it didn't,
              call or text{" "}
              <a href={business.phoneHref} className="link">
                {business.phoneDisplay}
              </a>
              .
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
