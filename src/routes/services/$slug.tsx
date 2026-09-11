import { useState, type ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { business } from "@/data/business";
import {
  addOnById,
  formatFrom,
  fullDetailPrices,
  fullDetails,
  pageFromRange,
  pagePricing,
  sizedById,
  type SizeId,
} from "@/data/pricing";
import { serviceBySlug, type ServicePage } from "@/data/services";
import { A } from "@/components/site/A";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CityList, CtaBand, FaqList, PageHero, ProcessList } from "@/components/site/Blocks";
import { Photo } from "@/components/site/Photo";
import {
  AddOnRows,
  FlatTable,
  PriceCard,
  PriceNote,
  PriceTable,
  SizeToggle,
  TierBadge,
} from "@/components/site/Pricing";
import { RichText } from "@/components/site/RichText";
import { Section, SectionHead } from "@/components/site/Section";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbsFor = (page: ServicePage) => [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: page.name, path: page.path },
];

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const page = serviceBySlug(params.slug);
    if (!page) throw notFound();
    return { slug: page.slug };
  },
  head: ({ loaderData }) => {
    const page = loaderData ? serviceBySlug(loaderData.slug) : undefined;
    if (!page) return {};
    return seo({
      title: page.title,
      description: page.description,
      path: page.path,
      jsonLd: [serviceSchema(page), faqSchema(page.faqs), breadcrumbSchema(crumbsFor(page))],
    });
  },
  component: ServiceRoute,
});

function ServicePricing({ page }: { page: ServicePage }) {
  const spec = pagePricing[page.slug];
  const [size, setSize] = useState<SizeId>("sedan");
  if (!spec) return null;

  let body: ReactNode = null;
  if (spec.kind === "tiers") {
    const b = sizedById(spec.basic)!;
    const d = sizedById(spec.deep)!;
    body = (
      <div className="grid gap-6 md:grid-cols-2">
        <PriceCard
          tier="Basic"
          name={b.name}
          includes={b.includes}
          prices={b.prices}
          serviceId={b.id}
        />
        <PriceCard
          tier="Deep"
          name={d.name}
          includes={d.includes}
          prices={d.prices}
          serviceId={d.id}
        />
      </div>
    );
  } else if (spec.kind === "single" || spec.kind === "partOf") {
    const s = sizedById(spec.id)!;
    body = (
      <div className="grid gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-7">
          <PriceCard
            tier={s.tier}
            name={s.name}
            includes={s.includes}
            prices={s.prices}
            serviceId={s.id}
            href={spec.kind === "partOf" ? s.page : undefined}
          />
        </div>
        {spec.kind === "partOf" ? (
          <p className="muted text-lg md:col-span-5">
            {page.name} is part of our{" "}
            <A href={s.page} className="link">
              {s.name}
            </A>
            , so you get the full deep clean along with it.
          </p>
        ) : null}
      </div>
    );
  } else if (spec.kind === "combos") {
    body = (
      <>
        <SizeToggle size={size} onChange={setSize} />
        <div className="mt-6 max-w-4xl">
          <PriceTable
            caption="Full detail prices by vehicle size, in Canadian dollars"
            size={size}
            rows={fullDetails.map((fd) => ({
              name: fd.name,
              tier: fd.tier,
              detail: fd.parts.map((id) => sizedById(id)!.name).join(" + "),
              prices: fullDetailPrices(fd),
            }))}
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {fullDetails.map((fd) => (
            <div key={fd.id} className="flex flex-col rounded-xl border bg-paper p-6 md:p-8">
              <div>
                <TierBadge tier={fd.tier} />
              </div>
              <h3 className="h3 mt-3">{fd.name}</h3>
              <ul className="mt-4 space-y-4">
                {fd.parts.map((id) => {
                  const s = sizedById(id)!;
                  return (
                    <li key={id}>
                      <A href={s.page} className="link font-medium">
                        {s.name}
                      </A>
                      <p className="small mt-1">{s.includes.join(", ")}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-6">
                <Link to="/contact" search={{ service: fd.id }} className="btn btn-secondary">
                  Book this
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    body = (
      <div className="max-w-3xl">
        <FlatTable caption={`${page.name} prices, in Canadian dollars`} ids={spec.ids} />
      </div>
    );
  }

  return (
    <Section tone="tint" labelledBy="pricing-h">
      <SectionHead id="pricing-h" title="What's included and what it costs" />
      <div className="mt-10">
        {body}
        <PriceNote />
      </div>
      {spec.addOns.length ? (
        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-8">
          <h3 className="h3 md:col-span-3 md:pt-4">Add to this service</h3>
          <div className="md:col-span-9">
            <AddOnRows ids={spec.addOns.filter((id) => !!addOnById(id))} />
          </div>
        </div>
      ) : null}
    </Section>
  );
}

function ServiceRoute() {
  const { slug } = Route.useLoaderData();
  const page = serviceBySlug(slug)!;
  const from = pageFromRange(page.slug);
  const [first, ...rest] = page.intro;

  return (
    <>
      <PageHero
        crumbs={crumbsFor(page)}
        title={page.h1}
        aside={<Photo label={page.photo} className="aspect-[4/3] w-full" />}
      >
        <p>{first}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Get a quote
          </Link>
          <a href={business.phoneHref} className="btn btn-secondary">
            Call {business.phoneDisplay}
          </a>
        </div>
        <p className="muted mt-5 text-base">
          {from ? `Starts at $${from.min} for a coupe or sedan.` : "Priced by quote."}{" "}
          <a href="#pricing-h" className="link">
            See pricing
          </a>
        </p>
      </PageHero>

      <Section labelledBy="about-h" className="!pt-4">
        <div className="grid gap-12 border-t pt-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="about-h" className="h2">
              {page.name}, done where you park
            </h2>
            <div className="prose-site muted mt-5 text-lg">
              {rest.map((p) => (
                <p key={p.slice(0, 24)}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="h3">Who it's for</h3>
            <ul className="tick-list mt-4 space-y-3">
              {page.whoFor.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <ServicePricing page={page} />

      <Section labelledBy="ba-h">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHead id="ba-h" title="Before and after" />
          </div>
          <BeforeAfter
            className="lg:col-span-8"
            before={`[PHOTO: ${page.name.toLowerCase()}, before]`}
            after={`[PHOTO: ${page.name.toLowerCase()}, after]`}
            caption={page.name}
          />
        </div>
      </Section>

      <Section tone="tint" labelledBy="process-h">
        <SectionHead id="process-h" title="How we do it" />
        <div className="mt-10">
          <ProcessList steps={page.process} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          {page.body.map((b) => (
            <article key={b.h}>
              <h2 className="h3 text-[1.45rem]">{b.h}</h2>
              <div className="prose-site muted mt-4 text-lg">
                {b.p.map((p) => (
                  <p key={p.slice(0, 24)}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint" labelledBy="faq-h">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead id="faq-h" title="Common questions" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={page.faqs} />
          </div>
        </div>
      </Section>

      <Section labelledBy="where-h">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead id="where-h" title={`${page.name} across the Lower Mainland`} />
            <div className="mt-8">
              <CityList />
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="h3">Related services</h2>
            <ul className="mt-4 border-t">
              {page.related.map((r) => {
                const rel = serviceBySlug(r);
                if (!rel) return null;
                return (
                  <li key={r} className="border-b">
                    <A
                      href={rel.path}
                      className="flex items-baseline justify-between gap-4 py-4 hover:underline"
                    >
                      <span className="font-semibold">{rel.name}</span>
                      <span className="num muted">{formatFrom(pageFromRange(rel.slug))}</span>
                    </A>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
