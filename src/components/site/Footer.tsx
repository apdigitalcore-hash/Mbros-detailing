import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cities } from "@/data/cities";
import { servicePages } from "@/data/services";
import { A } from "./A";
import { Logo } from "./Header";

function Col({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-semibold">{title}</p>
      <ul className="muted mt-3 space-y-1.5 text-[0.9375rem]">{children}</ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark border-t pb-24 pt-14 lg:pb-12">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" aria-label={`${business.name}, home`}>
              <Logo />
            </Link>
            <p className="muted mt-4 max-w-xs">{business.tagline}.</p>
            <ul className="mt-6 space-y-1.5">
              <li>
                <a href={business.phoneHref} className="num font-semibold hover:underline">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={business.smsHref} className="hover:underline">
                  Text us
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="break-all hover:underline">
                  {business.email}
                </a>
              </li>
              <li className="muted">{business.hoursLong}</li>
            </ul>
          </div>

          <Col title="Services" className="md:col-span-3">
            {servicePages.map((s) => (
              <li key={s.slug}>
                <A href={s.path} className="hover:text-paper hover:underline">
                  {s.name}
                </A>
              </li>
            ))}
          </Col>

          <Col title="Mobile detailing in" className="md:col-span-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <A href={c.path} className="hover:text-paper hover:underline">
                  {c.name}
                </A>
              </li>
            ))}
          </Col>

          <Col title="M BROS" className="md:col-span-2">
            {[
              { to: "/pricing", label: "Pricing" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
              { to: "/faq", label: "FAQ" },
              { to: "/blog", label: "Guides" },
              { to: "/areas", label: "Service areas" },
              { to: "/contact", label: "Get a quote" },
            ].map((l) => (
              <li key={l.to}>
                <A href={l.to} className="hover:text-paper hover:underline">
                  {l.label}
                </A>
              </li>
            ))}
          </Col>
        </div>

        <div className="small mt-12 flex flex-col gap-2 border-t pt-6 sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <p>
            Website by{" "}
            <a
              href={business.builtBy.url}
              target="_blank"
              rel="noopener"
              className="link hover:text-paper"
            >
              {business.builtBy.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
