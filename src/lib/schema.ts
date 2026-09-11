import { business } from "@/data/business";
import { cities } from "@/data/cities";
import type { Faq } from "@/data/faqs";
import {
  addOnById,
  addOns,
  fullDetailName,
  fullDetailPrices,
  fullDetails,
  pagePricing,
  sizedById,
  sizedServices,
  vehicleSizes,
  type Range,
  type SizeId,
} from "@/data/pricing";
import type { ServicePage } from "@/data/services";
import { absUrl } from "./seo";

const businessId = `${business.siteUrl}/#business`;

const areaServed = cities.map((c) => ({
  "@type": "City",
  name: c.name,
  containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia" },
}));

function offer(name: string, r: Range | null) {
  const o: Record<string, unknown> = { "@type": "Offer", name, priceCurrency: "CAD" };
  if (r) {
    o["priceSpecification"] = {
      "@type": "PriceSpecification",
      priceCurrency: "CAD",
      minPrice: r.min,
      ...(r.plus ? {} : { maxPrice: r.max }),
    };
  }
  return o;
}

function sizedOffers(name: string, prices: Record<SizeId, Range>) {
  return vehicleSizes.map((s) => offer(`${name} — ${s.label}`, prices[s.id]));
}

export function businessSchema() {
  const catalog = [
    ...sizedServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.includes.join(", ") },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "CAD",
        minPrice: s.prices.sedan.min,
        maxPrice: s.prices.large.max,
      },
    })),
    ...addOns.map((a) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: a.name },
      ...(a.price
        ? {
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CAD",
              minPrice: a.price.min,
              ...(a.price.plus ? {} : { maxPrice: a.price.max }),
            },
          }
        : {}),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": businessId,
    name: business.name,
    url: absUrl("/"),
    telephone: business.phoneSchema,
    email: business.email,
    priceRange: "$$",
    description:
      "Mobile car detailing in Maple Ridge, Pitt Meadows, Port Coquitlam, Coquitlam, Port Moody, Burnaby, New Westminster and Vancouver. Interior and exterior detailing at your home or workplace, 7 days a week from 5 AM.",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.baseCity,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: business.hoursSchema.opens,
        closes: business.hoursSchema.closes,
      },
    ],
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile detailing services",
      itemListElement: catalog,
    },
    ...(business.socials.length ? { sameAs: business.socials.map((s) => s.url) } : {}),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(page: ServicePage) {
  const spec = pagePricing[page.slug];
  let offers: Record<string, unknown>[] = [];
  if (spec) {
    switch (spec.kind) {
      case "tiers":
        offers = [spec.basic, spec.deep].flatMap((id) => {
          const s = sizedById(id)!;
          return sizedOffers(s.name, s.prices);
        });
        break;
      case "single":
      case "partOf": {
        const s = sizedById(spec.id)!;
        offers = sizedOffers(s.name, s.prices);
        break;
      }
      case "combos":
        offers = fullDetails.flatMap((fd) => sizedOffers(fullDetailName(fd), fullDetailPrices(fd)));
        break;
      case "flat":
        offers = spec.ids
          .map((id) => addOnById(id)!)
          .filter((a) => a.price)
          .map((a) => offer(a.name, a.price));
        break;
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    serviceType: page.name,
    description: page.description,
    url: absUrl(page.path),
    provider: { "@id": businessId },
    areaServed,
    ...(offers.length ? { offers } : {}),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    mainEntityOfPage: absUrl(a.path),
    author: { "@type": "Organization", name: business.name, url: absUrl("/") },
    publisher: { "@id": businessId },
  };
}
