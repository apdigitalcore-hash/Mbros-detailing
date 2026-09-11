import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { business, processSteps } from "@/data/business";
import { cities } from "@/data/cities";
import type { Faq } from "@/data/faqs";
import { A } from "./A";

type Step = { n: string; title: string; body: string };

export function ProcessList({ steps = processSteps }: { steps?: Step[] }) {
  return (
    <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <li key={s.n} className="border-t pt-5">
          <p className="small num">Step {i + 1}</p>
          <h3 className="h3 mt-1">{s.title}</h3>
          <p className="muted mt-2">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t">
      {faqs.map((f) => (
        <details key={f.q} className="faq border-b">
          <summary className="flex items-start justify-between gap-6 py-5">
            <h3 className="text-lg font-semibold leading-snug">{f.q}</h3>
            <span aria-hidden className="faq-mark muted text-2xl leading-none">
              +
            </span>
          </summary>
          <p className="muted max-w-3xl pb-6">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Ready to book?", text }: { title?: string; text?: string }) {
  return (
    <section className="section-dark py-16 md:py-24">
      <div className="wrap grid gap-8 md:grid-cols-12 md:items-end">
        <div className="min-w-0 md:col-span-7">
          <h2 className="h-display text-[clamp(2rem,4.2vw,3.1rem)]">{title}</h2>
          <p className="muted mt-4 max-w-xl text-lg">
            {text ??
              "Tell us about the car and what it needs. We'll come to your driveway or workplace, anywhere from Maple Ridge to Vancouver, any day from 5 AM."}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <Link to="/contact" className="btn btn-primary">
            Get a quote
          </Link>
          <a href={business.phoneHref} className="btn btn-secondary">
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="small flex flex-wrap gap-x-2 gap-y-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex gap-2">
              {last ? (
                <span aria-current="page">{it.name}</span>
              ) : (
                <>
                  <A href={it.path} className="hover:underline">
                    {it.name}
                  </A>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The eight service-area cities as a simple linked list. */
export function CityList({ current }: { current?: string | undefined }) {
  return (
    <ul className="grid grid-cols-2 gap-x-8 border-t sm:grid-cols-4">
      {cities.map((c) => (
        <li key={c.slug} className="border-b py-3">
          {c.slug === current ? (
            <span aria-current="page" className="font-semibold">
              {c.name}
            </span>
          ) : (
            <A href={c.path} className="link">
              {c.name}
            </A>
          )}
        </li>
      ))}
    </ul>
  );
}

export function PageHero({
  crumbs,
  title,
  children,
  aside,
}: {
  crumbs: { name: string; path: string }[];
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="section-light pb-14 pt-8 md:pb-20">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className={aside ? "lg:col-span-6" : "lg:col-span-9"}>
            <h1 className="h-display text-[clamp(2.2rem,4.8vw,3.7rem)]">{title}</h1>
            {children ? <div className="mt-6 max-w-2xl text-lg">{children}</div> : null}
          </div>
          {aside ? <div className="lg:col-span-6">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}
