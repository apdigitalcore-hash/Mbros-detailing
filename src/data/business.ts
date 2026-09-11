export const business = {
  name: "M BROS Auto Detailing",
  shortName: "M BROS",
  /** Change to the custom domain once it's connected. Used for canonicals, sitemap and schema. */
  siteUrl: "https://detailer-s-driveway.lovable.app",
  tagline: "Mobile detailing — serving Maple Ridge to Vancouver",
  phoneDisplay: "(672) 472-1024",
  phoneHref: "tel:+16724721024",
  smsHref: "sms:+16724721024",
  phoneSchema: "+1-672-472-1024",
  email: "mbros.autodetailing@gmail.com",
  emailHref: "mailto:mbros.autodetailing@gmail.com",
  hoursDisplay: "Open 7 days · 5 AM – 7 PM",
  hoursLong: "Open 7 days a week, 5:00 AM – 7:00 PM",
  hoursSchema: { opens: "05:00", closes: "19:00" },
  baseCity: "Maple Ridge",
  region: "BC",
  country: "CA",
  googleReviewsUrl: "https://www.google.com/search?q=M+BROS+Auto+Detailing+Maple+Ridge",
  /** No social profiles yet. */
  socials: [] as { label: string; url: string }[],
  /** OPTIONAL owner story — leave empty until confirmed. */
  ownerStory: "" as string,
  /**
   * Web3Forms access key (free at web3forms.com, sent to the business email).
   * Safe to publish. While empty, the quote form opens a pre-filled email instead.
   */
  quoteFormKey: "" as string,
  /** GA4 measurement ID, e.g. "G-XXXXXXX". Tracking is off while empty. */
  ga4Id: "" as string,
  /** Google Search Console HTML-tag verification token. */
  gscVerification: "" as string,
  /** Credit link in the footer. */
  builtBy: { name: "AP Digital", url: "https://ap-digital.ca" },
} as const;

export const processSteps = [
  {
    n: "01",
    title: "Walkaround",
    body: "We look at the car with you and agree on what it actually needs.",
  },
  {
    n: "02",
    title: "Wash & Decon",
    body: "Wheels first, then a foam pre-soak and hand wash. Clay and iron decon on Deep.",
  },
  {
    n: "03",
    title: "Deep Clean",
    body: "Vacuum and wipe-down, or steam and hot-water extraction on Deep.",
  },
  {
    n: "04",
    title: "Protect",
    body: "Machine wax on the paint and leather conditioning inside, on Deep services.",
  },
  { n: "05", title: "Final Inspection", body: "We walk the car with you before we pack up." },
];
