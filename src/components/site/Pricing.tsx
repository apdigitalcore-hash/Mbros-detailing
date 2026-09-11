import { Link } from "@tanstack/react-router";
import {
  addOnById,
  formatRange,
  PRICE_NOTE,
  vehicleSizes,
  type Range,
  type SizeId,
  type Tier,
} from "@/data/pricing";
import { A } from "./A";

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span className="muted inline-flex items-center rounded-full border border-[var(--line-strong)] px-2 py-px text-xs font-medium">
      {tier}
    </span>
  );
}

export function SizeToggle({ size, onChange }: { size: SizeId; onChange: (s: SizeId) => void }) {
  return (
    <div
      role="group"
      aria-label="Vehicle size"
      className="inline-flex flex-wrap gap-1 rounded-lg border bg-paper p-1"
    >
      {vehicleSizes.map((s) => {
        const active = s.id === size;
        return (
          <button
            key={s.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(s.id)}
            className={`min-h-10 rounded-md px-3.5 text-[0.9375rem] font-medium transition-colors ${
              active ? "bg-ink text-paper" : "text-ink hover:bg-paper-2"
            }`}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}

export type PriceRow = {
  name: string;
  href?: string | undefined;
  tier?: Tier | undefined;
  detail?: string | undefined;
  prices: Record<SizeId, Range | null>;
};

/**
 * Price table by vehicle size. On small screens only the selected size's
 * column shows, so it never scrolls sideways; on desktop all three show.
 */
export function PriceTable({
  caption,
  rows,
  size,
}: {
  caption: string;
  rows: PriceRow[];
  size: SizeId;
}) {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="small mb-2 text-left">{caption}</caption>
      <thead>
        <tr className="border-b">
          <th scope="col" className="small py-3 pr-4 font-medium">
            Service
          </th>
          {vehicleSizes.map((s) => (
            <th
              key={s.id}
              scope="col"
              className={`py-3 pl-4 text-right text-sm font-medium ${
                s.id === size ? "table-cell" : "muted hidden md:table-cell"
              }`}
            >
              {s.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name} className="border-b align-top">
            <th scope="row" className="py-4 pr-4 font-normal">
              <span className="flex flex-wrap items-center gap-2">
                {r.href ? (
                  <A href={r.href} className="link font-semibold">
                    {r.name}
                  </A>
                ) : (
                  <span className="font-semibold">{r.name}</span>
                )}
                {r.tier ? <TierBadge tier={r.tier} /> : null}
              </span>
              {r.detail ? <span className="small mt-1 block">{r.detail}</span> : null}
            </th>
            {vehicleSizes.map((s) => (
              <td
                key={s.id}
                className={`num whitespace-nowrap py-4 pl-4 text-right ${
                  s.id === size ? "table-cell font-semibold" : "muted hidden md:table-cell"
                }`}
              >
                {formatRange(r.prices[s.id])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Flat-priced items (add-ons), not by vehicle size. */
export function FlatTable({ caption, ids }: { caption: string; ids: string[] }) {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="small mb-2 text-left">{caption}</caption>
      <thead>
        <tr className="border-b">
          <th scope="col" className="small py-3 pr-4 font-medium">
            Add-on
          </th>
          <th scope="col" className="small py-3 text-right font-medium">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {ids.map((id) => {
          const a = addOnById(id)!;
          return (
            <tr key={id} className="border-b align-top">
              <th scope="row" className="py-4 pr-4 font-normal">
                <A href={a.page} className="link font-semibold">
                  {a.name}
                </A>
                <span className="small mt-1 block">{a.blurb}</span>
              </th>
              <td className="num whitespace-nowrap py-4 text-right font-semibold">
                {formatRange(a.price)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function PriceNote() {
  return <p className="small mt-4">{PRICE_NOTE}</p>;
}

type CardProps = {
  tier?: Tier | undefined;
  name: string;
  includes: string[];
  prices: Record<SizeId, Range>;
  serviceId: string;
  href?: string | undefined;
};

/** One service: what's included, price for each vehicle size, and a book button. */
export function PriceCard({ tier, name, includes, prices, serviceId, href }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-paper p-6 md:p-8">
      {tier ? (
        <div>
          <TierBadge tier={tier} />
        </div>
      ) : null}
      <h3 className={`h3 ${tier ? "mt-3" : ""}`}>
        {href ? (
          <A href={href} className="link">
            {name}
          </A>
        ) : (
          name
        )}
      </h3>
      <ul className="tick-list mt-4 space-y-1.5">
        {includes.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <dl className="mt-6 border-t">
        {vehicleSizes.map((s) => (
          <div key={s.id} className="flex items-baseline justify-between gap-4 border-b py-3">
            <dt className="muted">{s.label}</dt>
            <dd className="num font-semibold">{formatRange(prices[s.id])}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto pt-6">
        <Link to="/contact" search={{ service: serviceId }} className="btn btn-secondary">
          Book this
        </Link>
      </div>
    </article>
  );
}

export function AddOnRows({ ids }: { ids: string[] }) {
  if (!ids.length) return null;
  return (
    <ul className="border-t">
      {ids.map((id) => {
        const a = addOnById(id)!;
        return (
          <li key={id} className="grid gap-1 border-b py-4 sm:grid-cols-12 sm:gap-4">
            <A href={a.page} className="link font-semibold sm:col-span-5">
              {a.name}
            </A>
            <span className="muted sm:col-span-5">{a.blurb}</span>
            <span className="num font-semibold sm:col-span-2 sm:text-right">
              {formatRange(a.price)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
