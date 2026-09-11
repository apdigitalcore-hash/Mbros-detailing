/**
 * Every price on the site reads from this file: service pages, tables, the
 * quote estimate and structured data. Prices are CAD ranges supplied by M BROS.
 * To change a price, change it here.
 */

export type SizeId = "sedan" | "suv" | "large";

export const vehicleSizes: { id: SizeId; label: string }[] = [
  { id: "sedan", label: "Coupe / Sedan" },
  { id: "suv", label: "SUV / Truck" },
  { id: "large", label: "Large SUV / Minivan" },
];

export type Range = { min: number; max: number; plus?: boolean };
export type Tier = "Basic" | "Deep";

export type SizedService = {
  id: string;
  name: string;
  group: "Exterior" | "Interior";
  tier: Tier;
  page: string;
  blurb: string;
  includes: string[];
  prices: Record<SizeId, Range>;
};

export const sizedServices: SizedService[] = [
  {
    id: "hand-wash",
    name: "Hand Wash & Dry",
    group: "Exterior",
    tier: "Basic",
    page: "/services/exterior-detailing",
    blurb: "Foam pre-soak, hand wash, towel dry.",
    includes: ["Foam pre-soak", "Hand wash", "Towel dry"],
    prices: {
      sedan: { min: 40, max: 60 },
      suv: { min: 50, max: 70 },
      large: { min: 60, max: 80 },
    },
  },
  {
    id: "paint-decon",
    name: "Exterior Paint Decontamination & Protection",
    group: "Exterior",
    tier: "Deep",
    page: "/services/clay-bar-wax",
    blurb: "Hand wash, clay bar, iron decon and long-lasting machine wax.",
    includes: [
      "Hand wash",
      "Clay bar treatment",
      "Iron decontamination",
      "Long-lasting machine wax",
    ],
    prices: {
      sedan: { min: 130, max: 160 },
      suv: { min: 155, max: 180 },
      large: { min: 180, max: 220 },
    },
  },
  {
    id: "wheel-basic",
    name: "Wheel & Tire Cleaning",
    group: "Exterior",
    tier: "Basic",
    page: "/services/wheel-tire-cleaning",
    blurb: "Wheel faces washed, tires scrubbed and shined.",
    includes: ["Surface wheel wash", "Tire scrubbing", "Tire shine"],
    prices: {
      sedan: { min: 30, max: 40 },
      suv: { min: 35, max: 45 },
      large: { min: 40, max: 50 },
    },
  },
  {
    id: "wheel-deep",
    name: "Wheel & Tire Restoration",
    group: "Exterior",
    tier: "Deep",
    page: "/services/wheel-tire-cleaning",
    blurb: "Brake dust extracted, barrels and fender wells scrubbed, tires sealed.",
    includes: [
      "Deep brake dust extraction",
      "Wheel barrel cleaning",
      "Plastic fender well scrubbing",
      "Tire sealant",
    ],
    prices: {
      sedan: { min: 60, max: 80 },
      suv: { min: 70, max: 90 },
      large: { min: 80, max: 100 },
    },
  },
  {
    id: "interior-maintenance",
    name: "Interior Maintenance Clean",
    group: "Interior",
    tier: "Basic",
    page: "/services/interior-detailing",
    blurb: "Vacuum, dash and cup holders wiped, glass cleaned.",
    includes: ["Light interior vacuum", "Dashboard wipe-down", "Cup holder wipe", "Glass cleaning"],
    prices: {
      sedan: { min: 65, max: 95 },
      suv: { min: 80, max: 110 },
      large: { min: 95, max: 130 },
    },
  },
  {
    id: "interior-deep",
    name: "Interior Deep Restoration",
    group: "Interior",
    tier: "Deep",
    page: "/services/interior-detailing",
    blurb: "Carpet and seat extraction, steam, leather conditioning, stain removal.",
    includes: [
      "Deep carpet & seat extraction",
      "Steam cleaning of all vents and crevices",
      "Leather conditioning",
      "Stain removal",
    ],
    prices: {
      sedan: { min: 190, max: 250 },
      suv: { min: 230, max: 300 },
      large: { min: 270, max: 350 },
    },
  },
];

export type AddOn = {
  id: string;
  name: string;
  /** null means priced by quote. */
  price: Range | null;
  page: string;
  blurb: string;
};

export const addOns: AddOn[] = [
  {
    id: "pet-hair-light",
    name: "Pet Hair Removal (Basic / Light)",
    price: { min: 35, max: 50 },
    page: "/services/pet-hair-removal",
    blurb: "Light shedding lifted out of carpet and seats.",
  },
  {
    id: "pet-hair-heavy",
    name: "Pet Hair Extraction (Deep / Heavy)",
    price: { min: 60, max: 90, plus: true },
    page: "/services/pet-hair-removal",
    blurb: "Hair worked into cargo carpet and fabric weave.",
  },
  {
    id: "headlights",
    name: "Headlight Restoration (pair)",
    price: { min: 75, max: 100 },
    page: "/services/headlight-restoration",
    blurb: "Yellowed lenses sanded, polished and sealed.",
  },
  {
    id: "engine-bay",
    name: "Engine Bay Detail",
    price: { min: 60, max: 90 },
    page: "/services/engine-bay-detailing",
    blurb: "Low-pressure clean and dress of the engine bay.",
  },
  {
    id: "trim",
    name: "Exterior Plastic Trim Restoration",
    price: null,
    page: "/services/exterior-detailing",
    blurb: "Grey, chalky trim brought back to an even dark finish.",
  },
  {
    id: "odour",
    name: "Odour Elimination Treatment",
    price: null,
    page: "/services/odour-removal",
    blurb: "Source cleaned first, then treated.",
  },
  {
    id: "stain-shield",
    name: "Upholstery & Leather Stain Shield",
    price: null,
    page: "/services/leather-cleaning",
    blurb: "A barrier so spills bead up instead of soaking in.",
  },
];

export type FullDetail = {
  id: string;
  name: string;
  tier: Tier;
  parts: [string, string];
};

/** One exterior service plus one interior service, priced as the sum of the two. */
export const fullDetails: FullDetail[] = [
  {
    id: "full-basic",
    name: "Basic Full Detail",
    tier: "Basic",
    parts: ["hand-wash", "interior-maintenance"],
  },
  {
    id: "full-deep",
    name: "Deep Full Detail",
    tier: "Deep",
    parts: ["paint-decon", "interior-deep"],
  },
];

export const QUOTE_LABEL = "Get a quote";
export const PRICE_NOTE =
  "Prices vary within the range based on vehicle size and condition. Add-ons can be combined with any service.";

export function sizedById(id: string): SizedService | undefined {
  return sizedServices.find((s) => s.id === id);
}

export function addOnById(id: string): AddOn | undefined {
  return addOns.find((a) => a.id === id);
}

export function fullDetailById(id: string): FullDetail | undefined {
  return fullDetails.find((f) => f.id === id);
}

export function fullDetailPrices(fd: FullDetail): Record<SizeId, Range> {
  const [a, b] = fd.parts.map((id) => sizedById(id)!);
  const sum = (size: SizeId): Range => ({
    min: a!.prices[size].min + b!.prices[size].min,
    max: a!.prices[size].max + b!.prices[size].max,
  });
  return { sedan: sum("sedan"), suv: sum("suv"), large: sum("large") };
}

export function fullDetailName(fd: FullDetail): string {
  const names = fd.parts.map((id) => sizedById(id)!.name);
  return `${fd.name}: ${names.join(" + ")}`;
}

export function formatRange(r: Range | null): string {
  if (!r) return QUOTE_LABEL;
  return `$${r.min} – $${r.max}${r.plus ? "+" : ""}`;
}

export function formatFrom(r: Range | null): string {
  return r ? `from $${r.min}` : QUOTE_LABEL;
}

/** How a service page presents its pricing. */
export type PagePricing =
  | { kind: "tiers"; basic: string; deep: string; addOns: string[] }
  | { kind: "single"; id: string; addOns: string[] }
  | { kind: "partOf"; id: string; addOns: string[] }
  | { kind: "flat"; ids: string[]; addOns: string[] }
  | { kind: "combos"; addOns: string[] };

export const pagePricing: Record<string, PagePricing> = {
  "full-detail": {
    kind: "combos",
    addOns: ["pet-hair-light", "pet-hair-heavy", "headlights", "engine-bay", "odour"],
  },
  "exterior-detailing": {
    kind: "tiers",
    basic: "hand-wash",
    deep: "paint-decon",
    addOns: ["headlights", "engine-bay", "trim"],
  },
  "interior-detailing": {
    kind: "tiers",
    basic: "interior-maintenance",
    deep: "interior-deep",
    addOns: ["pet-hair-light", "pet-hair-heavy", "odour", "stain-shield"],
  },
  "clay-bar-wax": { kind: "single", id: "paint-decon", addOns: ["headlights", "trim"] },
  "wheel-tire-cleaning": {
    kind: "tiers",
    basic: "wheel-basic",
    deep: "wheel-deep",
    addOns: ["headlights", "engine-bay"],
  },
  "seat-carpet-shampoo": {
    kind: "partOf",
    id: "interior-deep",
    addOns: ["pet-hair-heavy", "odour", "stain-shield"],
  },
  "leather-cleaning": { kind: "partOf", id: "interior-deep", addOns: ["stain-shield"] },
  "headlight-restoration": { kind: "flat", ids: ["headlights"], addOns: ["trim"] },
  "engine-bay-detailing": { kind: "flat", ids: ["engine-bay"], addOns: [] },
  "pet-hair-removal": {
    kind: "flat",
    ids: ["pet-hair-light", "pet-hair-heavy"],
    addOns: ["odour"],
  },
  "odour-removal": {
    kind: "flat",
    ids: ["odour"],
    addOns: ["pet-hair-light", "pet-hair-heavy"],
  },
};

/** Lowest price a service page starts at, or null when it's quote-only. */
export function pageFromRange(slug: string): Range | null {
  const spec = pagePricing[slug];
  if (!spec) return null;
  switch (spec.kind) {
    case "tiers":
      return sizedById(spec.basic)!.prices.sedan;
    case "single":
    case "partOf":
      return sizedById(spec.id)!.prices.sedan;
    case "combos":
      return fullDetailPrices(fullDetails[0]!).sedan;
    case "flat": {
      const priced = spec.ids.map((id) => addOnById(id)!.price).filter((p): p is Range => !!p);
      if (!priced.length) return null;
      return priced.reduce((lo, p) => (p.min < lo.min ? p : lo));
    }
  }
}
