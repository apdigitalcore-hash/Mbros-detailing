import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cities } from "@/data/cities";
import { PageHero } from "@/components/site/Blocks";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Section } from "@/components/site/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Get a quote", path: "/contact" },
];

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string | undefined } => ({
    service: typeof search["service"] === "string" ? search["service"] : undefined,
  }),
  head: () =>
    seo({
      title: "Get a Quote | Mobile Car Detailing | M BROS",
      description:
        "Get a free quote for mobile car detailing from Maple Ridge to Vancouver. Pick your vehicle and services for an instant estimate, or call or text us.",
      path: "/contact",
      jsonLd: [breadcrumbSchema(crumbs)],
    }),
  component: Contact,
});

function Contact() {
  const { service } = Route.useSearch();
  return (
    <>
      <PageHero crumbs={crumbs} title="Get a quote">
        <p className="muted">
          Tell us about the car and what it needs. You'll see an estimate as you go, and we'll get
          back to you with a price and a time estimate.
        </p>
      </PageHero>
      <Section className="!pt-0">
        <div className="grid gap-14 border-t pt-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <QuoteForm initialService={service} />
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-xl bg-paper-2 p-6 md:p-8">
              <h2 className="h3">Rather talk?</h2>
              <a
                href={business.phoneHref}
                className="num mt-3 block text-[1.75rem] font-bold tracking-tight hover:underline"
              >
                {business.phoneDisplay}
              </a>
              <p className="muted">Call or text. Photos help.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={business.phoneHref} className="btn btn-primary">
                  Call
                </a>
                <a href={business.smsHref} className="btn btn-secondary">
                  Text us photos
                </a>
              </div>
              <p className="mt-6">
                <a href={business.emailHref} className="link break-all">
                  {business.email}
                </a>
              </p>
              <h3 className="mt-6 font-semibold">Hours</h3>
              <p className="muted">{business.hoursLong}</p>
              <h3 className="mt-4 font-semibold">Service area</h3>
              <p className="muted">{cities.map((c) => c.name).join(", ")}</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
