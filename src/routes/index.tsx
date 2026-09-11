import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { generalFaqs } from "@/data/faqs";
import {
  addOns,
  formatFrom,
  formatRange,
  fullDetailPrices,
  fullDetails,
  sizedById,
  sizedServices,
  type SizeId,
  type Tier,
} from "@/data/pricing";
import { A } from "@/components/site/A";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CityList, CtaBand, FaqList, ProcessList } from "@/components/site/Blocks";
import { PriceCard, PriceNote, PriceTable, SizeToggle, TierBadge } from "@/components/site/Pricing";
import { Section, SectionHead } from "@/components/site/Section";
import { faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";
import seatAfter from "@/assets/gallery/seat-after.jpg";
import seatBefore from "@/assets/gallery/seat-before.jpg";

const homeFaqs = [generalFaqs[4]!, generalFaqs[2]!, generalFaqs[3]!, generalFaqs[0]!];

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Mobile Car Detailing Maple Ridge | M BROS Auto Detailing",
      description:
        "Mobile car detailing from Maple Ridge to Vancouver. We come to your driveway or workplace, 7 days a week from 5 AM. Hand wash from $40. Free quote.",
      path: "/",
      jsonLd: [faqSchema(homeFaqs)],
    }),
  component: Home,
});

type Row = {
  key: string;
  name: string;
  blurb: string;
  tier?: Tier | undefined;
  from: string;
  href: string;
};

const serviceRows: { group: string; rows: Row[] }[] = [
  {
    group: "Exterior",
    rows: sizedServices
      .filter((s) => s.group === "Exterior")
      .map((s) => ({
        key: s.id,
        name: s.name,
        blurb: s.blurb,
        tier: s.tier,
        from: formatFrom(s.prices.sedan),
        href: s.page,
      })),
  },
  {
    group: "Interior",
    rows: sizedServices
      .filter((s) => s.group === "Interior")
      .map((s) => ({
        key: s.id,
        name: s.name,
        blurb: s.blurb,
        tier: s.tier,
        from: formatFrom(s.prices.sedan),
        href: s.page,
      })),
  },
  {
    group: "Add-ons",
    rows: addOns.map((a) => ({
      key: a.id,
      name: a.name,
      blurb: a.blurb,
      from: formatFrom(a.price),
      href: a.page,
    })),
  },
];

const bcProblems = [
  { problem: "Rain and road film", fix: "Hand wash & dry", href: "/services/exterior-detailing" },
  {
    problem: "Winter brine from Lougheed and Hwy 1",
    fix: "Decontamination & wax",
    href: "/services/clay-bar-wax",
  },
  {
    problem: "Baked-on brake dust",
    fix: "Wheel & tire restoration",
    href: "/services/wheel-tire-cleaning",
  },
  { problem: "Cedar sap and spring pollen", fix: "Clay bar", href: "/services/clay-bar-wax" },
  {
    problem: "Sand, trail mud and dog hair",
    fix: "Pet hair removal",
    href: "/services/pet-hair-removal",
  },
  {
    problem: "Damp, musty carpet",
    fix: "Hot-water extraction",
    href: "/services/seat-carpet-shampoo",
  },
];

/** The four jobs people ask about most, priced for the chosen vehicle size. */
const heroPrices = [
  { name: "Hand Wash & Dry", detail: "Outside only", prices: sizedById("hand-wash")!.prices },
  {
    name: "Interior Clean",
    detail: "Vacuum, wipe-down, glass",
    prices: sizedById("interior-maintenance")!.prices,
  },
  {
    name: "Basic Full Detail",
    detail: "Hand wash + interior clean",
    prices: fullDetailPrices(fullDetails[0]!),
  },
  {
    name: "Deep Full Detail",
    detail: "Clay, iron decon & wax + deep interior",
    prices: fullDetailPrices(fullDetails[1]!),
  },
];

function HeroPriceCard() {
  const [size, setSize] = useState<SizeId>("sedan");
  return (
    <div className="rounded-xl border bg-[#fdfcf9] p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_16px_40px_-16px_rgb(0_0_0/0.16)] sm:p-7">
      <h2 className="h3">What it costs</h2>
      <p className="small mt-1">Pick your vehicle. Prices in CAD, depending on condition.</p>
      <div className="mt-5">
        <SizeToggle size={size} onChange={setSize} stretch />
      </div>
      <dl className="mt-3">
        {heroPrices.map((p) => (
          <div
            key={p.name}
            className="flex items-baseline justify-between gap-4 border-b py-3.5 last:border-b-0"
          >
            <dt>
              <span className="font-semibold">{p.name}</span>
              <span className="small block">{p.detail}</span>
            </dt>
            <dd className="num whitespace-nowrap text-lg font-semibold">
              {formatRange(p.prices[size])}
            </dd>
          </div>
        ))}
      </dl>
      <p className="small mt-2 border-t pt-4">
        Add-ons like pet hair and headlights are extra.{" "}
        <Link to="/pricing" className="link text-ink">
          See every price
        </Link>
      </p>
    </div>
  );
}

function Home() {
  const [size, setSize] = useState<SizeId>("sedan");
  const basic = sizedById("interior-maintenance")!;
  const deep = sizedById("interior-deep")!;

  return (
    <>
      {/* Hero */}
      <section className="section-light border-b pb-14 pt-10 md:pb-20 md:pt-16">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="h-display text-[clamp(2.3rem,4.6vw,3.6rem)]">
              Mobile car detailing, done right in your driveway.
            </h1>
            <p className="muted mt-5 max-w-xl text-lg md:text-xl md:leading-relaxed">
              We're two brothers from Maple Ridge. Pick a time and we'll come to your home or
              workplace, anywhere from Pitt Meadows to Vancouver, and detail your car on the spot.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-primary">
                Get a quote
              </Link>
              <a href={business.phoneHref} className="btn btn-secondary">
                Call or text {business.phoneDisplay}
              </a>
            </div>
            <ul className="tick-list mt-8 flex flex-col gap-1.5 text-[0.9375rem] sm:flex-row sm:flex-wrap sm:gap-x-8">
              <li>Open every day, 5 AM to 7 PM</li>
              <li>Maple Ridge to Vancouver, 8 cities</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <HeroPriceCard />
          </div>
        </div>
      </section>

      {/* Services and prices */}
      <Section tone="tint" labelledBy="services-h">
        <SectionHead id="services-h" title="What we do and what it costs">
          Every service has its starting price listed. Basic keeps a car that's in decent shape
          clean. Deep is for when it needs bringing back.
        </SectionHead>
        <div className="mt-12 grid gap-12">
          {serviceRows.map((g) => (
            <div key={g.group} className="grid gap-4 md:grid-cols-12 md:gap-8">
              <h3 className="h3 md:col-span-3 md:pt-4">{g.group}</h3>
              <ul className="border-t md:col-span-9">
                {g.rows.map((r) => (
                  <li key={r.key} className="border-b">
                    <A
                      href={r.href}
                      className="grid gap-1 rounded-md py-4 transition-colors hover:bg-paper sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-3"
                    >
                      <span className="flex flex-wrap items-center gap-2 sm:col-span-5">
                        <span className="font-semibold">{r.name}</span>
                        {r.tier ? <TierBadge tier={r.tier} /> : null}
                      </span>
                      <span className="muted sm:col-span-5">{r.blurb}</span>
                      <span className="num font-semibold sm:col-span-2 sm:text-right">
                        {r.from}
                      </span>
                    </A>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Before / after */}
      <Section labelledBy="ba-h">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHead id="ba-h" title="Before and after">
              Drag the slider. This is what hot-water extraction pulls out of a seat that looked
              fine.
            </SectionHead>
            <Link to="/gallery" className="link mt-6 inline-block font-medium">
              More in the gallery
            </Link>
          </div>
          <BeforeAfter
            className="lg:col-span-8"
            before="[PHOTO: rear seat with ground-in stains, before]"
            after="[PHOTO: the same seat after hot-water extraction]"
            beforeSrc={seatBefore}
            afterSrc={seatAfter}
            caption="Interior Deep Restoration"
          />
        </div>
      </Section>

      {/* Basic or Deep */}
      <Section tone="tint" labelledBy="tiers-h">
        <SectionHead id="tiers-h" title="Basic or Deep?">
          Every main service comes in two levels. If you can't remember the last proper detail, you
          probably want Deep.
        </SectionHead>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <PriceCard
            tier="Basic"
            name={basic.name}
            includes={basic.includes}
            prices={basic.prices}
            serviceId={basic.id}
            href={basic.page}
          />
          <PriceCard
            tier="Deep"
            name={deep.name}
            includes={deep.includes}
            prices={deep.prices}
            serviceId={deep.id}
            href={deep.page}
          />
        </div>
      </Section>

      {/* Process */}
      <Section labelledBy="process-h">
        <SectionHead id="process-h" title="How a visit goes" />
        <div className="mt-10">
          <ProcessList />
        </div>
      </Section>

      {/* Local conditions */}
      <Section tone="tint" labelledBy="bc-h">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 id="bc-h" className="h2">
              Why a car wash isn't enough here
            </h2>
            <div className="prose-site mt-5 max-w-xl text-lg">
              <p>
                From October to April the roads here are wet more often than they're dry. Every
                commute on Lougheed or Hwy 1 throws a film of oil, brake dust and grit onto the
                lower half of the car. When it gets cold, brine goes down, dries white on the rocker
                panels and bakes onto the wheels.
              </p>
              <p>
                Spring brings cedar sap and a yellow coat of pollen. Summer brings sand from Spanish
                Banks and mud from Golden Ears. A drive-through wash moves some of it around. It
                doesn't touch what's bonded to the paint, and it can't do anything about the damp in
                the carpet.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <table className="w-full border-collapse text-left">
              <caption className="small mb-2 text-left">
                What the Lower Mainland does to a car, and what fixes it
              </caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Problem</th>
                  <th scope="col">Fix</th>
                </tr>
              </thead>
              <tbody>
                {bcProblems.map((p) => (
                  <tr key={p.problem} className="border-t">
                    <th scope="row" className="py-4 pr-4 font-medium">
                      {p.problem}
                    </th>
                    <td className="py-4 text-right">
                      <A href={p.href} className="link">
                        {p.fix}
                      </A>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Where and when */}
      <Section labelledBy="area-h">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead id="area-h" title="Where we work">
              We're based in Maple Ridge and work west along the Lougheed corridor, all the way to
              Vancouver.
            </SectionHead>
            <div className="mt-8">
              <CityList />
            </div>
            <Link to="/areas" className="link mt-6 inline-block font-medium">
              More about our service area
            </Link>
          </div>
          <div className="lg:col-span-5">
            <h2 className="h2">When we work</h2>
            <p className="muted mt-4 text-lg">
              Every day from 5 AM to 7 PM, weekends included. Book an early slot and we can be
              working in your driveway while you're making coffee, so a lot of the job is done
              before your day starts.
            </p>
          </div>
        </div>
      </Section>

      {/* Full detail prices */}
      <Section tone="tint" labelledBy="price-h">
        <SectionHead id="price-h" title="What a full detail costs">
          A full detail is one exterior and one interior service in the same visit. Pick your
          vehicle size.
        </SectionHead>
        <div className="mt-8 max-w-4xl">
          <SizeToggle size={size} onChange={setSize} />
          <div className="mt-6">
            <PriceTable
              caption="Full detail prices by vehicle size, in Canadian dollars"
              size={size}
              rows={fullDetails.map((fd) => ({
                name: fd.name,
                tier: fd.tier,
                href: "/services/full-detail",
                detail: fd.parts.map((id) => sizedById(id)!.name).join(" + "),
                prices: fullDetailPrices(fd),
              }))}
            />
            <PriceNote />
            <Link to="/pricing" className="btn btn-secondary mt-8">
              See every price
            </Link>
          </div>
        </div>
      </Section>

      {/* Reviews and FAQ */}
      <Section labelledBy="faq-h">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="h2">Reviews</h2>
            <p className="muted mt-4">
              We're a new business, and we'd rather show you real reviews than write our own. As
              they come in, you'll find them on Google.
            </p>
            {/* Reviews slot: add real Google reviews here once they exist. */}
            <div data-slot="reviews" className="small mt-6 rounded-lg border border-dashed p-5">
              Reviews from customers will go here.
            </div>
            <a
              href={business.googleReviewsUrl}
              className="btn btn-secondary mt-6"
              rel="noopener"
              target="_blank"
            >
              Read our Google reviews
            </a>
          </div>
          <div className="lg:col-span-8">
            <h2 id="faq-h" className="h2 mb-6">
              Questions people ask
            </h2>
            <FaqList faqs={homeFaqs} />
            <Link to="/faq" className="link mt-6 inline-block font-medium">
              All questions
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
