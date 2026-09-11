import { createFileRoute } from "@tanstack/react-router";
import { cities } from "@/data/cities";
import { A } from "@/components/site/A";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service areas", path: "/areas" },
];

export const Route = createFileRoute("/areas")({
  head: () =>
    seo({
      title: "Service Areas: Maple Ridge to Vancouver | M BROS",
      description:
        "M BROS mobile detailing covers Maple Ridge, Pitt Meadows, Port Coquitlam, Coquitlam, Port Moody, Burnaby, New Westminster and Vancouver. We come to you.",
      path: "/areas",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: Areas,
});

function Areas() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Where we detail">
        <p className="muted">
          We're based in Maple Ridge and work west through the Tri-Cities, Burnaby and New West to
          Vancouver. We come to your home or workplace, any day from 5 AM.
        </p>
      </PageHero>
      <Section className="!pt-0">
        <ul className="grid border-t md:grid-cols-2 md:gap-x-12">
          {cities.map((c) => (
            <li key={c.slug} className="border-b py-8">
              <h2 className="h2 text-[1.6rem]">
                <A href={c.path} className="hover:underline">
                  {c.name}
                </A>
              </h2>
              <p className="small mt-2">{c.neighbourhoods.join(", ")}</p>
              <p className="muted mt-4">{c.intro[0]}</p>
              <A href={c.path} className="link mt-4 inline-block font-medium">
                Mobile car detailing in {c.name}
              </A>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
