import { createFileRoute, Link } from "@tanstack/react-router";
import { formatFrom, pageFromRange } from "@/data/pricing";
import { serviceGroups, servicePages } from "@/data/services";
import { A } from "@/components/site/A";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "Mobile Detailing Services | M BROS Auto Detailing",
      description:
        "Mobile detailing services from Maple Ridge to Vancouver: full details, hand washes, clay bar and wax, interior extraction, headlights, pet hair and more.",
      path: "/services",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: ServicesHub,
});

function ServicesHub() {
  return (
    <>
      <PageHero crumbs={crumbs} title="Mobile detailing services">
        <p className="muted">
          Everything we do, done in your driveway or at your workplace. The main services come in
          Basic and Deep, and add-ons can go with any of them.
        </p>
      </PageHero>
      <Section className="!pt-0">
        <div className="grid gap-14">
          {serviceGroups.map((g) => (
            <div key={g} className="grid gap-4 md:grid-cols-12 md:gap-8">
              <h2 className="h3 md:col-span-3 md:pt-5">{g}</h2>
              <ul className="border-t md:col-span-9">
                {servicePages
                  .filter((s) => s.group === g)
                  .map((s) => (
                    <li key={s.slug} className="border-b">
                      <A
                        href={s.path}
                        className="grid gap-1 rounded-md py-5 transition-colors hover:bg-paper-2 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-3"
                      >
                        <span className="text-lg font-semibold sm:col-span-4">{s.name}</span>
                        <span className="muted sm:col-span-6">{s.blurb}</span>
                        <span className="num font-semibold sm:col-span-2 sm:text-right">
                          {formatFrom(pageFromRange(s.slug))}
                        </span>
                      </A>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <Link to="/pricing" className="btn btn-secondary mt-12">
          Full price list
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}
