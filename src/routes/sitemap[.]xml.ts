import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/data/blog";
import { cities } from "@/data/cities";
import { servicePages } from "@/data/services";
import { absUrl } from "@/lib/seo";

const staticPaths = [
  "/",
  "/services",
  "/pricing",
  "/gallery",
  "/areas",
  "/about",
  "/faq",
  "/contact",
  "/blog",
];

function sitemapXml() {
  const paths = [
    ...staticPaths,
    ...servicePages.map((s) => s.path),
    ...cities.map((c) => c.path),
    ...posts.map((p) => p.path),
  ];
  const urls = paths.map((p) => `  <url><loc>${absUrl(p)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
