import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";
import engineAfter from "@/assets/gallery/engine-after.jpg";
import engineBefore from "@/assets/gallery/engine-before.jpg";
import headlightAfter from "@/assets/gallery/headlight-after.jpg";
import headlightBefore from "@/assets/gallery/headlight-before.jpg";
import hoodAfter from "@/assets/gallery/hood-after.jpg";
import hoodBefore from "@/assets/gallery/hood-before.jpg";
import pethairAfter from "@/assets/gallery/pethair-after.jpg";
import pethairBefore from "@/assets/gallery/pethair-before.jpg";
import seatAfter from "@/assets/gallery/seat-after.jpg";
import seatBefore from "@/assets/gallery/seat-before.jpg";
import wheelAfter from "@/assets/gallery/wheel-after.jpg";
import wheelBefore from "@/assets/gallery/wheel-before.jpg";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

const items = [
  {
    before: "[PHOTO: rear seat with ground-in stains, before]",
    after: "[PHOTO: the same seat after extraction]",
    beforeSrc: seatBefore,
    afterSrc: seatAfter,
    caption: "Interior Deep Restoration",
  },
  {
    before: "[PHOTO: dull, gritty dark hood, before]",
    after: "[PHOTO: the same hood after clay, iron decon and machine wax]",
    beforeSrc: hoodBefore,
    afterSrc: hoodAfter,
    caption: "Exterior Paint Decontamination & Protection",
  },
  {
    before: "[PHOTO: wheel barrel caked in brake dust, before]",
    after: "[PHOTO: the same wheel after restoration]",
    beforeSrc: wheelBefore,
    afterSrc: wheelAfter,
    caption: "Wheel & Tire Restoration",
  },
  {
    before: "[PHOTO: yellowed headlight, before]",
    after: "[PHOTO: the same headlight, restored and sealed]",
    beforeSrc: headlightBefore,
    afterSrc: headlightAfter,
    caption: "Headlight Restoration",
  },
  {
    before: "[PHOTO: cargo carpet full of dog hair, before]",
    after: "[PHOTO: the same cargo area, cleared]",
    beforeSrc: pethairBefore,
    afterSrc: pethairAfter,
    caption: "Pet Hair Extraction",
  },
  {
    before: "[PHOTO: dusty engine bay, before]",
    after: "[PHOTO: the same engine bay, cleaned and dressed]",
    beforeSrc: engineBefore,
    afterSrc: engineAfter,
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
              beforeSrc={it.beforeSrc}
              afterSrc={it.afterSrc}
              caption={it.caption}
            />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
