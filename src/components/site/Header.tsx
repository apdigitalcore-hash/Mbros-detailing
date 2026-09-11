import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { cities } from "@/data/cities";
import { serviceGroups, servicePages } from "@/data/services";
import { A } from "./A";

export function Logo() {
  return (
    <span className="flex items-baseline gap-1.5 whitespace-nowrap">
      <span className="text-[1.3rem] font-bold tracking-[-0.03em]">M BROS</span>
      <span className="muted hidden text-[1.05rem] font-medium sm:inline">Auto Detailing</span>
    </span>
  );
}

const navLink =
  "rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors hover:bg-paper-2";

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className="opacity-60">
      <path d="M2 3.5 5 6.5l3-3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function Dropdown({
  label,
  children,
  width,
}: {
  label: string;
  children: ReactNode;
  width: string;
}) {
  return (
    <div className="group relative">
      <button type="button" className={`${navLink} flex items-center gap-1.5`} aria-haspopup="true">
        {label}
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div
          className={`rounded-xl border bg-paper p-5 shadow-[0_12px_32px_rgb(0_0_0/0.08)] ${width}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ServiceLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {serviceGroups.map((g) => (
        <div key={g}>
          <p className="small mb-1.5 font-medium">{g}</p>
          <ul>
            {servicePages
              .filter((s) => s.group === g)
              .map((s) => (
                <li key={s.slug}>
                  <A href={s.path} onClick={onNavigate} className="block py-1 hover:underline">
                    {s.name}
                  </A>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AreaLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul>
      {cities.map((c) => (
        <li key={c.slug}>
          <A href={c.path} onClick={onNavigate} className="block py-1 hover:underline">
            {c.name}
          </A>
        </li>
      ))}
      <li className="mt-2 border-t pt-2">
        <Link to="/areas" onClick={onNavigate} className="block py-1 font-medium hover:underline">
          All service areas
        </Link>
      </li>
    </ul>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="section-light sticky top-0 z-40 border-b">
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Link to="/" aria-label={`${business.name}, home`} onClick={close}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Dropdown label="Services" width="w-[32rem]">
            <ServiceLinks />
            <Link to="/services" className="mt-4 block border-t pt-3 font-medium hover:underline">
              All services
            </Link>
          </Dropdown>
          <Dropdown label="Areas" width="w-60">
            <AreaLinks />
          </Dropdown>
          <Link to="/pricing" className={navLink}>
            Pricing
          </Link>
          <Link to="/gallery" className={navLink}>
            Gallery
          </Link>
          <Link to="/about" className={navLink}>
            About
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={business.phoneHref} className="num font-semibold hover:underline">
            {business.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-primary min-h-11 py-2">
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-secondary min-h-11 px-4 py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t lg:hidden"
        >
          <div className="wrap grid gap-8 py-8">
            <div>
              <p className="h3 mb-3">Services</p>
              <ServiceLinks onNavigate={close} />
            </div>
            <div>
              <p className="h3 mb-3">Areas</p>
              <AreaLinks onNavigate={close} />
            </div>
            <ul className="grid gap-1 border-t pt-4 text-lg">
              {[
                { to: "/pricing", label: "Pricing" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "About" },
                { to: "/faq", label: "FAQ" },
                { to: "/blog", label: "Guides" },
              ].map((l) => (
                <li key={l.to}>
                  <A href={l.to} onClick={close} className="block py-1.5">
                    {l.label}
                  </A>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
