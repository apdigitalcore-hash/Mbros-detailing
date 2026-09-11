import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pricingFaqs } from "@/data/faqs";
import {
  addOns,
  fullDetailPrices,
  fullDetails,
  sizedById,
  sizedServices,
  type SizeId,
} from "@/data/pricing";
import { CtaBand, FaqList, PageHero } from "@/components/site/Blocks";
import { FlatTable, PriceNote, PriceTable, SizeToggle } from "@/components/site/Pricing";
import { Section, SectionHead } from "@/components/site/Section";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

export const Route = createFileRoute("/pricing")({
  head: () =>
    seo({
      title: "Car Detailing Prices Maple Ridge | M BROS Auto Detailing",
      description:
        "Car detailing prices in Maple Ridge and Metro Vancouver: hand wash from $40, interior from $65, full detail from $105. Real prices by vehicle size.",
      path: "/pricing",
      jsonLd: [faqSchema(pricingFaqs), breadcrumbSchema(crumbs)],
    }),
  component: Pricing,
});

function Pricing() {
  const [size, setSize] = useState<SizeId>("sedan");
  const group = (g: "Exterior" | "Interior") =>
    sizedServices
      .filter((s) => s.group === g)
      .map((s) => ({
        name: s.name,
        href: s.page,
        tier: s.tier,
        detail: s.includes.join(", "),
        prices: s.prices,
      }));

  return (
    <>
      <PageHero crumbs={crumbs} title="Car detailing prices">
        <p className="muted">
          Real prices by vehicle size, in Canadian dollars, for Maple Ridge through to Vancouver.
          Where your car lands in the range is confirmed once we've seen it.
        </p>
      </PageHero>

      <div className="section-light sticky top-16 z-30 border-y md:top-[4.5rem]">
        <div className="wrap flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">Your vehicle</p>
          <SizeToggle size={size} onChange={setSize} />
        </div>
      </div>

      <Section labelledBy="full-h">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionHead id="full-h" title="Full detail" className="lg:col-span-4">
            One exterior service and one interior service in the same visit.
          </SectionHead>
          <div className="lg:col-span-8">
            <PriceTable
              caption="Full detail"
              size={size}
              rows={fullDetails.map((fd) => ({
                name: fd.name,
                tier: fd.tier,
                href: "/services/full-detail",
                detail: fd.parts.map((id) => sizedById(id)!.name).join(" + "),
                prices: fullDetailPrices(fd),
              }))}
            />
          </div>
        </div>
      </Section>

      <Section labelledBy="ext-h" className="!pt-0">
        <div className="grid gap-8 border-t pt-14 lg:grid-cols-12">
          <SectionHead id="ext-h" title="Exterior" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <PriceTable caption="Exterior services" size={size} rows={group("Exterior")} />
          </div>
        </div>
      </Section>

      <Section labelledBy="int-h" className="!pt-0">
        <div className="grid gap-8 border-t pt-14 lg:grid-cols-12">
          <SectionHead id="int-h" title="Interior" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <PriceTable caption="Interior services" size={size} rows={group("Interior")} />
          </div>
        </div>
      </Section>

      <Section labelledBy="add-h" className="!pt-0">
        <div className="grid gap-8 border-t pt-14 lg:grid-cols-12">
          <SectionHead id="add-h" title="Add-ons" className="lg:col-span-4">
            Flat prices, not by vehicle size. Add any of these to any service.
          </SectionHead>
          <div className="lg:col-span-8">
            <FlatTable caption="Add-ons" ids={addOns.map((a) => a.id)} />
            <PriceNote />
          </div>
        </div>
      </Section>

      <Section tone="tint" labelledBy="faq-h">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHead id="faq-h" title="Pricing questions" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <FaqList faqs={pricingFaqs} />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Want an exact price?"
        text="Tell us the car and what it needs. Texting a few photos helps us narrow down the range."
      />
    </>
  );
}
