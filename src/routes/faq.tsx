import { createFileRoute } from "@tanstack/react-router";
import { generalFaqs } from "@/data/faqs";
import { CtaBand, FaqList, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      title: "Mobile Car Detailing FAQ | M BROS Auto Detailing",
      description:
        "Answers about M BROS mobile detailing: prices, Basic vs Deep, hours, service area, pet hair, extraction, headlights and how to get a quote.",
      path: "/faq",
      jsonLd: [faqSchema(generalFaqs), breadcrumbSchema(crumbs)],
    }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Questions about mobile detailing">
        <p className="muted">If yours isn't here, call or text (672) 472-1024.</p>
      </PageHero>
      <Section className="!pt-0">
        <div className="max-w-3xl">
          <FaqList faqs={generalFaqs} />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
