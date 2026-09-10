/**
 * Prices are not confirmed yet. Every price display in the site reads from here.
 * To publish real prices, replace the `quote` values with strings like "$149".
 */
export const QUOTE = "Quote";

export type VehicleSize = "Car" | "SUV" | "Truck-Van";

export const vehicleSizes: VehicleSize[] = ["Car", "SUV", "Truck-Van"];

export type PriceRow = {
  service: string;
  slug?: string;
  prices: Record<VehicleSize, string>;
};

const q: Record<VehicleSize, string> = { Car: QUOTE, SUV: QUOTE, "Truck-Van": QUOTE };

export const priceTable: { group: string; rows: PriceRow[] }[] = [
  {
    group: "Packages",
    rows: [
      { service: "Full Detail (interior + exterior)", slug: "/services/full-detail", prices: { ...q } },
      { service: "Interior Detailing", slug: "/services/interior-detailing", prices: { ...q } },
      { service: "Exterior Detailing", slug: "/services/exterior-detailing", prices: { ...q } },
    ],
  },
  {
    group: "Exterior",
    rows: [
      { service: "Hand Wash & Microfiber Dry", prices: { ...q } },
      { service: "Wheel & Tire Deep Clean", prices: { ...q } },
      { service: "Clay Bar + Wax & Sealant", slug: "/services/clay-bar-wax-sealant", prices: { ...q } },
      { service: "Exterior Plastic Trim Restoration", prices: { ...q } },
      { service: "Headlight Restoration", slug: "/services/headlight-restoration", prices: { ...q } },
      { service: "Engine Bay Detail", slug: "/services/engine-bay-detailing", prices: { ...q } },
    ],
  },
  {
    group: "Interior",
    rows: [
      { service: "Carpet & Seat Hot-Water Extraction", slug: "/services/seat-carpet-shampoo", prices: { ...q } },
      { service: "Interior Steam Cleaning", prices: { ...q } },
      { service: "Leather Cleaning & Protection", slug: "/services/leather-cleaning-protection", prices: { ...q } },
      { service: "Streak-Free Glass Cleaning", prices: { ...q } },
    ],
  },
  {
    group: "Specialty",
    rows: [
      { service: "Pet Hair Removal", slug: "/services/pet-hair-removal", prices: { ...q } },
      { service: "Odour Elimination Treatment", slug: "/services/odour-removal", prices: { ...q } },
      { service: "Upholstery & Leather Stain Shield", prices: { ...q } },
    ],
  },
];

/** Single place a service page pulls its price display from. */
export function priceFor(_service: string): Record<VehicleSize, string> {
  return { ...q };
}
