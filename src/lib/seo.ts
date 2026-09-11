import { business } from "@/data/business";

export const absUrl = (path: string) => `${business.siteUrl}${path === "/" ? "/" : path}`;

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  jsonLd?: object[];
};

/** Per-route <head> tags: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export function seo(o: SeoOptions) {
  const url = absUrl(o.path);
  // TanStack's head() renders { "script:ld+json": {...} } entries as JSON-LD script tags,
  // but its meta type only models <meta> attributes, so the array is untyped.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meta: any[] = [
    { title: o.title },
    { name: "description", content: o.description },
    { property: "og:title", content: o.title },
    { property: "og:description", content: o.description },
    { property: "og:url", content: url },
    { property: "og:type", content: o.type ?? "website" },
    { property: "og:site_name", content: business.name },
    { property: "og:locale", content: "en_CA" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: o.title },
    { name: "twitter:description", content: o.description },
  ];
  if (o.noindex) meta.push({ name: "robots", content: "noindex, follow" });
  for (const j of o.jsonLd ?? []) meta.push({ "script:ld+json": j });
  return { meta, links: [{ rel: "canonical", href: url }] };
}
