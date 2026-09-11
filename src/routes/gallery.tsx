import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

const items = [
  {
    before: "[PHOTO: rear seat with ground-in stains, before]",
    after: "[PHOTO: the same seat after extraction]",
    caption: "Interior Deep Restoration",
  },
  {
    before: "[PHOTO: dull, gritty dark hood, before]",
    after: "[PHOTO: the same hood after clay, iron decon and machine wax]",
    caption: "Exterior Paint Decontamination & Protection",
  },
  {
    before: "[PHOTO: wheel barrel caked in brake dust, before]",
    after: "[PHOTO: the same wheel after restoration]",
    caption: "Wheel & Tire Restoration",
  },
  {
    before: "[PHOTO: yellowed headlight, before]",
    after: "[PHOTO: the same headlight, restored and sealed]",
    caption: "Headlight Restoration",
  },
  {
    before: "[PHOTO: cargo carpet full of dog hair, before]",
    after: "[PHOTO: the same cargo area, cleared]",
    caption: "Pet Hair Extraction",
  },
  {
    before: "[PHOTO: dusty engine bay, before]",
    after: "[PHOTO: the same engine bay, cleaned and dressed]",
    caption: "Engine Bay Detail",
  },
];

export const Route = createFileRoute("/gallery")({
  head: () =>
    seo({
      title: "Before & After Detailing Gallery | M BROS Auto Detailing",
      description:
        "Before and after photos of mobile detailing jobs from Maple Ridge to Vancouver: interior extraction, paint decontamination, wheels, headlights and more.",
      path: "/gallery",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Before and after">
        <p className="muted">
          Real cars in real driveways. Drag each slider to compare. We add new jobs as we finish
          them.
        </p>
      </PageHero>
      <Section className="!pt-0">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {items.map((it) => (
            <BeforeAfter
              key={it.caption}
              before={it.before}
              after={it.after}
              caption={it.caption}
            />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
