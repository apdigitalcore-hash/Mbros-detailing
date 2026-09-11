import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { servicePages } from "@/data/services";
import { A } from "@/components/site/A";
import { CityList, CtaBand, PageHero } from "@/components/site/Blocks";
import { Photo } from "@/components/site/Photo";
import { Section, SectionHead } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About M BROS | Mobile Detailing in Maple Ridge, BC",
      description:
        "M BROS Auto Detailing is two brothers from Maple Ridge running a fully mobile detailing service, Maple Ridge to Vancouver, 7 days a week from 5 AM.",
      path: "/about",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: About,
});

const facts = [
  { k: "Who", v: "Two brothers" },
  { k: "Based in", v: "Maple Ridge, BC" },
  { k: "How", v: "Fully mobile. No shop, no drop-off." },
  { k: "When", v: "Every day, 5 AM to 7 PM" },
  { k: "Where", v: "Maple Ridge to Vancouver" },
];

function About() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        title="About M BROS Auto Detailing"
        aside={
          <Photo
            label="[PHOTO: the brothers working in a customer's driveway]"
            className="aspect-[4/5] w-full"
          />
        }
      >
        <p>
          M BROS is two brothers based in Maple Ridge. We're fully mobile: there's no shop and no
          drop-off. We come to your driveway or workplace anywhere from Maple Ridge to Vancouver,
          and we work every day from 5 AM to 7 PM.
        </p>
        {business.ownerStory ? <p className="mt-4">{business.ownerStory}</p> : null}
        <dl className="mt-8 border-t">
          {facts.map((f) => (
            <div key={f.k} className="grid grid-cols-3 gap-4 border-b py-3 text-base">
              <dt className="muted">{f.k}</dt>
              <dd className="col-span-2">{f.v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <Section tone="tint" labelledBy="how-h">
        <SectionHead id="how-h" title="Straight about what we do">
          Our prices are on the website. At the walkaround we tell you what will and won't come out.
          And if something isn't a job for us, we say so.
        </SectionHead>
        <div className="mt-10 grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h3 className="h3">What we do</h3>
            <ul className="mt-3 border-t">
              {servicePages.map((s) => (
                <li key={s.slug} className="border-b py-2.5">
                  <A href={s.path} className="link">
                    {s.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="h3">What we don't do</h3>
            <ul className="mt-3 border-t">
              {["Paint correction", "Ceramic coating", "Window tint", "Mechanical repairs"].map(
                (x) => (
                  <li key={x} className="muted border-b py-2.5">
                    {x}
                  </li>
                ),
              )}
            </ul>
            <p className="muted mt-5">
              If you need one of these, we'd rather tell you up front than sell you something else.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="area-h">
        <SectionHead id="area-h" title="Where we work" />
        <div className="mt-8 max-w-4xl">
          <CityList />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
