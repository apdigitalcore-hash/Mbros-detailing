import { createFileRoute, Link } from "@tanstack/react-router";
import { business } from "@/data/business";
import { Section } from "@/components/site/Section";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    seo({
      title: "Thanks, Quote Request Received | M BROS",
      description: "Your quote request has been sent to M BROS Auto Detailing.",
      path: "/thank-you",
      noindex: true,
    }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <Section className="md:!py-32">
      <h1 className="h-display max-w-3xl text-[clamp(2.2rem,4.8vw,3.7rem)]">
        Thanks, we've got your request.
      </h1>
      <p className="muted mt-6 max-w-xl text-lg">
        We'll get back to you with a price and a time estimate. If it's urgent, call or text{" "}
        {business.phoneDisplay}. Texting photos of the car helps us firm up the price.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={business.smsHref} className="btn btn-primary">
          Text us photos
        </a>
        <Link to="/pricing" className="btn btn-secondary">
          See prices
        </Link>
      </div>
    </Section>
  );
}
