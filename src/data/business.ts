export const business = {
  name: "M BROS Auto Detailing",
  shortName: "M BROS",
  tagline: "Mobile detailing — serving Maple Ridge to Vancouver",
  phoneDisplay: "(672) 472-1024",
  phoneHref: "tel:+16724721024",
  smsHref: "sms:+16724721024",
  phoneSchema: "+1-672-472-1024",
  email: "mbros.autodetailing@gmail.com",
  emailHref: "mailto:mbros.autodetailing@gmail.com",
  hoursDisplay: "Open 7 days · 5 AM – 7 PM",
  hoursLong: "Open 7 days a week, 5:00 AM – 7:00 PM",
  hoursSchema: { days: "Mo-Su", opens: "05:00", closes: "19:00" },
  baseCity: "Maple Ridge",
  region: "BC",
  country: "CA",
  googleReviewsUrl: "https://www.google.com/search?q=M+BROS+Auto+Detailing+Maple+Ridge",
  /** No social profiles yet. */
  socials: [] as { label: string; url: string }[],
  /** OPTIONAL owner story — leave empty until confirmed. */
  ownerStory: "",
} as const;

export const topBarText =
  "Mobile detailing · Maple Ridge to Vancouver · Open 7 days 5 AM – 7 PM · (672) 472-1024";

export type ServiceGroup = "Exterior" | "Interior" | "Specialty";

export const serviceCatalog: { group: ServiceGroup; name: string; blurb: string }[] = [
  { group: "Exterior", name: "Hand Wash & Microfiber Dry", blurb: "Two-bucket hand wash, no brushes, dried with clean microfiber." },
  { group: "Exterior", name: "Wheel & Tire Deep Clean", blurb: "Brake dust and road film pulled off barrels, faces and tires." },
  { group: "Exterior", name: "Clay Bar Paint Decontamination", blurb: "Lifts bonded grit, rail dust and sap the wash leaves behind." },
  { group: "Exterior", name: "Paint Wax & Sealant", blurb: "A protective layer so rain sheets off instead of sitting on paint." },
  { group: "Exterior", name: "Exterior Plastic Trim Restoration", blurb: "Grey, chalky trim brought back to a dark, even finish." },
  { group: "Exterior", name: "Headlight Restoration", blurb: "Yellowed, hazy lenses sanded, polished and sealed." },
  { group: "Exterior", name: "Engine Bay Detail", blurb: "Careful low-pressure clean and dress of the bay." },
  { group: "Interior", name: "Interior Vacuuming", blurb: "Seats, rails, trunk, and the gaps most vacuums miss." },
  { group: "Interior", name: "Dashboard & Console Wipe-Down", blurb: "Dash, vents, cupholders and door cards cleaned by hand." },
  { group: "Interior", name: "Interior Steam Cleaning", blurb: "Heat and pressure into vents, seams and plastics." },
  { group: "Interior", name: "Carpet & Seat Hot-Water Extraction", blurb: "Hot water in, dirty water out — not just surface cleaning." },
  { group: "Interior", name: "Leather Cleaning & Conditioning", blurb: "Body oils and grime off, moisture back into the hide." },
  { group: "Interior", name: "Streak-Free Glass Cleaning", blurb: "Inside and out, including the top edge of the windshield." },
  { group: "Specialty", name: "Pet Hair Removal", blurb: "Hair worked out of carpet and fabric, not pushed around." },
  { group: "Specialty", name: "Odour Elimination Treatment", blurb: "Source cleaned first, then treated — smoke, milk, gym bags." },
  { group: "Specialty", name: "Upholstery & Leather Stain Shield", blurb: "A barrier so coffee and rain-soaked jackets don't set in." },
];

export const processSteps = [
  { n: "01", title: "Walkaround", body: "We look at the car with you and agree on what it actually needs." },
  { n: "02", title: "Wash & Decon", body: "Wheels first, then a hand wash and decontamination of the paint." },
  { n: "03", title: "Deep Clean", body: "Interior vacuum, steam, extraction — or the exterior work you booked." },
  { n: "04", title: "Protect", body: "Wax or sealant outside, conditioner and stain shield inside." },
  { n: "05", title: "Final Inspection", body: "We walk the car with you before we pack up." },
];
