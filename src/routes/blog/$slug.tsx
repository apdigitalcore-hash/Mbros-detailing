import { createFileRoute, notFound } from "@tanstack/react-router";
import { postBySlug, posts, type Post } from "@/data/blog";
import { A } from "@/components/site/A";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { RichText } from "@/components/site/RichText";
import { Section } from "@/components/site/Section";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const crumbsFor = (p: Post) => [
  { name: "Home", path: "/" },
  { name: "Guides", path: "/blog" },
  { name: p.title, path: p.path },
];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = postBySlug(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? postBySlug(loaderData.slug) : undefined;
    if (!p) return {};
    return seo({
      title: p.title,
      description: p.description,
      path: p.path,
      type: "article",
      jsonLd: [
        articleSchema({ title: p.h1, description: p.description, path: p.path, date: p.date }),
        breadcrumbSchema(crumbsFor(p)),
      ],
    });
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useLoaderData();
  const p = postBySlug(slug)!;
  const others = posts.filter((o) => o.slug !== p.slug);
  const date = new Date(`${p.date}T12:00:00`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHero crumbs={crumbsFor(p)} title={p.h1}>
        <p className="muted text-base">By M BROS Auto Detailing · {date}</p>
      </PageHero>
      <Section className="!pt-0">
        <article className="prose-site max-w-[68ch] border-t pt-10 text-lg">
          {p.sections.map((s, i) => (
            <section key={i} className={i > 0 ? "mt-12" : ""}>
              {s.h ? <h2 className="h2 mb-4 text-[1.6rem]">{s.h}</h2> : null}
              {s.p.map((para) => (
                <p key={para.slice(0, 32)}>
                  <RichText text={para} />
                </p>
              ))}
              {s.list ? (
                <ul className="tick-list mt-5 space-y-3">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </Section>
      <Section tone="tint">
        <h2 className="h3">More guides</h2>
        <ul className="mt-4 max-w-4xl border-t">
          {others.map((o) => (
            <li key={o.slug} className="border-b">
              <A href={o.path} className="block py-4 text-lg font-semibold hover:underline">
                {o.h1}
              </A>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
