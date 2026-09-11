import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cities, type City } from "@/data/cities";
import { formatFrom, pageFromRange } from "@/data/pricing";
import { servicePages } from "@/data/services";
import { A } from "@/components/site/A";
import { CtaBand, FaqList, PageHero } from "@/components/site/Blocks";
import { Photo } from "@/components/site/Photo";
import { Section, SectionHead } from "@/components/site/Section";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";
import brothersImg from "@/assets/gallery/brothers.jpg";

const cityBy = (slug: string) => cities.find((c) => c.slug === slug);

const crumbsFor = (c: City) => [
  { name: "Home", path: "/" },
  { name: "Service areas", path: "/areas" },
  { name: c.name, path: c.path },
];

export const Route = createFileRoute("/car-detailing-{$city}")({
  loader: ({ params }) => {
    const city = cityBy(params.city);
    if (!city) throw notFound();
    return { slug: city.slug };
  },
  head: ({ loaderData }) => {
    const c = loaderData ? cityBy(loaderData.slug) : undefined;
    if (!c) return {};
    return seo({
      title: c.title,
      description: c.description,
      path: c.path,
      jsonLd: [faqSchema(c.faqs), breadcrumbSchema(crumbsFor(c))],
    });
  },
  component: CityPage,
});

function CityPage() {
  const { slug } = Route.useLoaderData();
  const c = cityBy(slug)!;
  const nearby = c.nearby.map((n) => cityBy(n)).filter((n): n is City => !!n);
  const [first, ...rest] = c.intro;

  return (
    <>
      <PageHero
        crumbs={crumbsFor(c)}
        title={`Mobile car detailing in ${c.name}, BC`}
        aside={
          <Photo
            label={`[PHOTO: M BROS working in a ${c.name} driveway]`}
            src={brothersImg}
            className="aspect-[4/3] w-full"
          />
        }
      >
        <p>{first}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Get a quote
          </Link>
          <a href={business.phoneHref} className="btn btn-secondary">
            Call {business.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <Section tone="tint" labelledBy="local-h">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="local-h" className="h2">
              Detailing for {c.name} roads
            </h2>
            <div className="prose-site muted mt-5 text-lg">
              {rest.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <p>{c.driving}</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="h3">Neighbourhoods we cover</h3>
            <ul className="tick-list mt-4 space-y-2">
              {c.neighbourhoods.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <h3 className="h3 mt-8">Hours</h3>
            <p className="muted mt-2">{business.hoursLong}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="svc-h">
        <SectionHead id="svc-h" title={`Services and prices in ${c.name}`}>
          Every service, done at your place in {c.name}.
        </SectionHead>
        <ul className="mt-8 max-w-4xl border-t">
          {servicePages.map((s) => (
            <li key={s.slug} className="border-b">
              <A
                href={s.path}
                className="grid gap-1 rounded-md py-4 transition-colors hover:bg-paper-2 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-3"
              >
                <span className="font-semibold sm:col-span-4">{s.name}</span>
                <span className="muted sm:col-span-6">{s.blurb}</span>
                <span className="num font-semibold sm:col-span-2 sm:text-right">
                  {formatFrom(pageFromRange(s.slug))}
                </span>
              </A>
            </li>
          ))}
        </ul>
        <Link to="/pricing" className="btn btn-secondary mt-8">
          Full price list
        </Link>
      </Section>

      <Section tone="tint" labelledBy="faq-h">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead id="faq-h" title={`${c.name} questions`} />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={c.faqs} />
          </div>
        </div>
      </Section>

      <Section labelledBy="map-h">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead id="map-h" title={`We come to you in ${c.name}`} />
            <iframe
              title={`Map of ${c.name}, BC`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 aspect-[4/3] w-full rounded-lg border"
            />
          </div>
          <div className="lg:col-span-5">
            <h2 className="h3">Nearby</h2>
            <ul className="mt-4 border-t">
              {nearby.map((n) => (
                <li key={n.slug} className="border-b">
                  <A href={n.path} className="block py-4 font-semibold hover:underline">
                    Mobile detailing in {n.name}
                  </A>
                </li>
              ))}
              <li className="border-b">
                <Link to="/areas" className="block py-4 hover:underline">
                  All service areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand title={`Book a detail in ${c.name}`} />
    </>
  );
}
