import { Link } from "@tanstack/react-router";
import { business } from "@/data/business";

/** Sticky call / text / quote bar on small screens. */
export function MobileBar() {
  return (
    <div
      className="section-light fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t p-2 lg:hidden"
      style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}
    >
      <a href={business.phoneHref} className="btn btn-secondary min-h-12 px-2">
        Call
      </a>
      <a href={business.smsHref} className="btn btn-secondary min-h-12 px-2">
        Text
      </a>
      <Link to="/contact" className="btn btn-primary min-h-12 px-2">
        Get a quote
      </Link>
    </div>
  );
}
