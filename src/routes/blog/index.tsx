import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import { A } from "@/components/site/A";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/blog" },
];

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo({
      title: "Car Care Guides for the Lower Mainland | M BROS",
      description:
        "Practical car care guides for Lower Mainland drivers: what detailing costs, how often to detail in BC weather, and how to prep a car for sale.",
      path: "/blog",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Car care guides">
        <p className="muted">
          Practical advice for keeping a car in good shape in Lower Mainland weather.
        </p>
      </PageHero>
      <Section className="!pt-0">
        <ul className="max-w-4xl border-t">
          {posts.map((p) => (
            <li key={p.slug} className="border-b py-8">
              <h2 className="h3 text-[1.5rem]">
                <A href={p.path} className="hover:underline">
                  {p.h1}
                </A>
              </h2>
              <p className="muted mt-3">{p.excerpt}</p>
              <A href={p.path} className="link mt-4 inline-block font-medium">
                Read the guide
              </A>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
