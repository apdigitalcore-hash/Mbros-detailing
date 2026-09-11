import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { business } from "@/data/business";
import { businessSchema } from "@/lib/schema";
import { track } from "@/lib/track";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";
import { servicePages } from "@/data/services";
import { cities } from "@/data/cities";
import { A } from "@/components/site/A";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&display=swap";

function NotFoundComponent() {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="wrap">
        <h1 className="h-display text-[clamp(2.2rem,4.8vw,3.7rem)]">We couldn't find that page.</h1>
        <p className="muted mt-5 max-w-xl text-lg">
          It may have moved. These are probably what you're after.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="h3 mb-3">Services</h2>
            <ul className="space-y-1.5">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <A href={s.path} className="link">
                    {s.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3 mb-3">Areas</h2>
            <ul className="space-y-1.5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <A href={c.path} className="link">
                    Mobile detailing in {c.name}
                  </A>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="section-light py-24">
      <div className="wrap">
        <h1 className="h-display text-[clamp(2.2rem,4.8vw,3.4rem)]">This page didn't load.</h1>
        <p className="muted mt-5 max-w-xl text-lg">
          Something went wrong on our end. Try again, or call us on {business.phoneDisplay}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn-secondary">
            Home
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // head() renders "script:ld+json" entries, but its meta type only models <meta> attributes.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const meta: any[] = [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: business.name },
      {
        name: "description",
        content:
          "Mobile car detailing from Maple Ridge to Vancouver. We come to your driveway or workplace, 7 days a week from 5 AM.",
      },
      { name: "theme-color", content: "#f5f2ec" },
      { "script:ld+json": businessSchema() },
    ];
    if (business.gscVerification) {
      meta.push({ name: "google-site-verification", content: business.gscVerification });
    }
    const scripts = business.ga4Id
      ? [
          { src: `https://www.googletagmanager.com/gtag/js?id=${business.ga4Id}`, async: true },
          {
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${business.ga4Id}');`,
          },
        ]
      : [];
    return {
      meta,
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: FONTS },
        { rel: "stylesheet", href: appCss },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      ],
      scripts,
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Conversion events for call and text taps anywhere on the site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="tel:"], a[href^="sms:"]');
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      track(href.startsWith("tel:") ? "click_call" : "click_text", {
        page: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <MobileBar />
    </QueryClientProvider>
  );
}
