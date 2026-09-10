export type City = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  neighbourhoods: string[];
  intro: string[];
  driving: string;
  faqs: { q: string; a: string }[];
  mapQuery: string;
  nearby: string[]; // slugs
};

export const cities: City[] = [
  {
    slug: "maple-ridge",
    path: "/car-detailing-maple-ridge",
    name: "Maple Ridge",
    title: "Mobile Car Detailing Maple Ridge, BC | M BROS",
    description:
      "Mobile car detailing in Maple Ridge, BC. We come to your driveway in Albion, Silver Valley, Haney or Hammond. Open 7 days, 5 AM – 7 PM. Get a free quote.",
    neighbourhoods: ["Albion", "Silver Valley", "Cottonwood", "Haney / downtown", "Hammond", "Thornhill"],
    intro: [
      "Maple Ridge is home for us. We load the van here, and most mornings we are working a driveway within ten minutes of it. Mobile car detailing in Maple Ridge means you keep your keys and your morning — we set up outside your place and get to work.",
      "Half the cars we see here have been up a gravel road recently. Golden Ears trailheads, the Alouette Lake turnoff, a work site off 232nd — that mud dries into carpet and wheel wells and stays there until somebody pulls it out properly.",
    ],
    driving:
      "Between the Haney Bypass, Lougheed and the long wet stretch from October to April, cars in Maple Ridge collect a film of road grime that a drive-through wash smears rather than removes. Add cedar sap in the older Hammond and Haney streets and pollen in Silver Valley in spring, and paint needs decontamination and a sealant, not just soap.",
    faqs: [
      { q: "Do you come up to Silver Valley and Thornhill?", a: "Yes. Silver Valley, Thornhill, Albion, Cottonwood, Hammond and downtown Haney are all part of our home area." },
      { q: "Can you detail my car before I leave for work?", a: "That is the reason we start at 5 AM. Book an early slot and the car is usually done before your commute." },
      { q: "Do I need to be home the whole time?", a: "No. We do a walkaround with you at the start, and we can text you when we are finished." },
    ],
    mapQuery: "Maple Ridge, BC",
    nearby: ["pitt-meadows", "port-coquitlam", "coquitlam"],
  },
  {
    slug: "pitt-meadows",
    path: "/car-detailing-pitt-meadows",
    name: "Pitt Meadows",
    title: "Mobile Car Detailing Pitt Meadows, BC | M BROS",
    description:
      "Mobile car detailing in Pitt Meadows, BC — Osprey Village, South Bonson and the Harris Road area. We come to you. Open 7 days, 5 AM – 7 PM. Free quote.",
    neighbourhoods: ["Osprey Village", "South Bonson", "Harris Road area", "Mid Meadows"],
    intro: [
      "Pitt Meadows is a short hop from our base, so mobile car detailing in Pitt Meadows is easy for us to schedule — including the early slots before the Pitt River Bridge fills up.",
      "A lot of Pitt Meadows driving is flat, fast and agricultural. Dust off the dyke roads in summer, field mud in winter, and river damp that keeps everything from drying out on its own.",
    ],
    driving:
      "Cars parked outside near the river sit in damp air most of the year, which is how you end up with musty carpet and green film on the lower panels. Hot-water extraction inside and a sealant outside do more here than another wash does.",
    faqs: [
      { q: "Do you service Osprey Village and South Bonson?", a: "Yes, both, plus the Harris Road area and the townhouse complexes off Ford Road." },
      { q: "Can you work in a townhouse visitor stall?", a: "Usually yes, as long as we can park beside the car. Tell us in your quote request and we will confirm." },
      { q: "Do you handle farm and job-site mud?", a: "Yes. Wheel wells, carpets and floor mats are a normal part of the job here." },
    ],
    mapQuery: "Pitt Meadows, BC",
    nearby: ["maple-ridge", "port-coquitlam", "coquitlam"],
  },
  {
    slug: "port-coquitlam",
    path: "/car-detailing-port-coquitlam",
    name: "Port Coquitlam",
    title: "Mobile Car Detailing Port Coquitlam, BC | M BROS",
    description:
      "Mobile car detailing in Port Coquitlam, BC — Citadel Heights, Mary Hill, Riverwood, Oxford Heights. We come to your driveway. Open 7 days, 5 AM – 7 PM.",
    neighbourhoods: ["Citadel Heights", "Mary Hill", "Riverwood", "Oxford Heights"],
    intro: [
      "Mobile car detailing in Port Coquitlam suits the way people here drive: work trucks, family SUVs, and a lot of kilometres on Lougheed. We come to the house so the car is not off the road for half a day.",
      "PoCo has plenty of tight driveways on the Mary Hill slope and long ones in Citadel Heights. Either works for us — we bring what we need with us.",
    ],
    driving:
      "The Lougheed and Mary Hill Bypass corridor throws up a constant spray of brine and truck grime in winter. It settles into the lower doors, the rear hatch and the wheel faces. Decontaminating the paint before waxing is what stops that film from coming back within a week.",
    faqs: [
      { q: "Do you come to Citadel Heights?", a: "Yes, Citadel Heights, Riverwood, Mary Hill and Oxford Heights are all in our regular route." },
      { q: "Can you clean out a work truck interior?", a: "Yes. Dust, sawdust and ground-in dirt in a truck cab are handled with vacuuming, steam and hot-water extraction." },
      { q: "How early can you start in PoCo?", a: "From 5 AM, seven days a week." },
    ],
    mapQuery: "Port Coquitlam, BC",
    nearby: ["coquitlam", "port-moody", "pitt-meadows"],
  },
  {
    slug: "coquitlam",
    path: "/car-detailing-coquitlam",
    name: "Coquitlam",
    title: "Mobile Car Detailing Coquitlam, BC | M BROS",
    description:
      "Mobile car detailing in Coquitlam, BC — Burke Mountain, Westwood Plateau, Maillardville and Austin Heights. We come to you. Open 7 days, 5 AM – 7 PM.",
    neighbourhoods: ["Burke Mountain", "Westwood Plateau", "Maillardville", "Austin Heights"],
    intro: [
      "Coquitlam covers a lot of ground and a lot of elevation, and mobile car detailing in Coquitlam means we bring the work to whichever part of it you live on.",
      "Cars on Burke Mountain and Westwood Plateau climb and descend wet, gritty roads every day. Cars down in Maillardville and Austin Heights spend more time in traffic and under trees.",
    ],
    driving:
      "Anyone driving up to Cypress or Seymour for a ski day comes home with salt and slush packed into the rocker panels, and it dries there. Higher-elevation Coquitlam streets also get sanded in winter, which is exactly the kind of grit that clay bar work removes before it gets dragged across paint.",
    faqs: [
      { q: "Do you come to Burke Mountain?", a: "Yes. Burke Mountain and Westwood Plateau are both regular stops for us." },
      { q: "Can you get winter salt off the underside of the doors?", a: "We clean the lower panels, rockers, wheels and wells by hand as part of exterior work." },
      { q: "Do you detail in an underground parkade?", a: "Often yes, if there is room to work beside the car and the building allows it. Mention it in your quote request." },
    ],
    mapQuery: "Coquitlam, BC",
    nearby: ["port-coquitlam", "port-moody", "burnaby"],
  },
  {
    slug: "port-moody",
    path: "/car-detailing-port-moody",
    name: "Port Moody",
    title: "Mobile Car Detailing Port Moody, BC | M BROS",
    description:
      "Mobile car detailing in Port Moody, BC — Heritage Mountain, Ioco, Moody Centre and Newport Village. We come to your driveway. Open 7 days, 5 AM – 7 PM.",
    neighbourhoods: ["Heritage Mountain", "Ioco", "Moody Centre", "Newport Village"],
    intro: [
      "Port Moody is small, green and damp, which is a hard combination on a car. Mobile car detailing in Port Moody means we handle it in your driveway or your building's parking area instead of you driving somewhere and waiting.",
      "Between Rocky Point, the trails and the dog-friendly streets, a lot of Port Moody interiors see sand, wet paws and hair on a weekly basis.",
    ],
    driving:
      "Heavy tree cover over Heritage Mountain and Ioco Road means sap, needles and pollen land on paint constantly, and moss-damp streets keep the underside wet. Sap that sits through a warm week etches into clear coat, so decontamination and a sealant matter more here than in drier parts of the region.",
    faqs: [
      { q: "Do you come out to Ioco and Heritage Mountain?", a: "Yes, along with Moody Centre, Newport Village and the Suter Brook area." },
      { q: "Can you get sand and dog hair out after Rocky Point?", a: "Yes. Pet hair removal and hot-water extraction handle sand and hair worked into carpet." },
      { q: "Can you remove tree sap from the paint?", a: "Clay bar decontamination is the step that lifts bonded sap. We follow it with wax or sealant." },
    ],
    mapQuery: "Port Moody, BC",
    nearby: ["coquitlam", "port-coquitlam", "burnaby"],
  },
  {
    slug: "burnaby",
    path: "/car-detailing-burnaby",
    name: "Burnaby",
    title: "Mobile Car Detailing Burnaby, BC | M BROS",
    description:
      "Mobile car detailing in Burnaby, BC — Metrotown, Brentwood, Capitol Hill, Edmonds and Burnaby Heights. We come to you. Open 7 days, 5 AM – 7 PM.",
    neighbourhoods: ["Metrotown", "Brentwood", "Capitol Hill", "Edmonds", "Burnaby Heights"],
    intro: [
      "Burnaby is towers, townhouses and older houses on the hill, so mobile car detailing in Burnaby often means meeting you at your building rather than a driveway. We work in the spot where the car already lives.",
      "Plenty of Burnaby cars are commuter cars: Hwy 1 every morning, parkade every night, and no time in between to deal with any of it.",
    ],
    driving:
      "Hwy 1 through Burnaby is where winter brine does its worst. It coats the back of the car, dries white, and gets baked on by the defroster and engine heat. Parkade dust does the rest, sitting on the paint as a fine grey film that clay bar work removes and a wash does not.",
    faqs: [
      { q: "Can you detail my car at a Metrotown or Brentwood condo?", a: "Usually yes, in the visitor area or your stall if there is room to work. Tell us the building type when you request a quote." },
      { q: "Do you cover Capitol Hill and Burnaby Heights?", a: "Yes, along with Edmonds, Metrotown and Brentwood." },
      { q: "Can you detail before a lease return?", a: "Yes. A full detail before an inspection is one of the most common jobs we do in Burnaby." },
    ],
    mapQuery: "Burnaby, BC",
    nearby: ["new-westminster", "vancouver", "coquitlam"],
  },
  {
    slug: "new-westminster",
    path: "/car-detailing-new-westminster",
    name: "New Westminster",
    title: "Mobile Car Detailing New Westminster, BC | M BROS",
    description:
      "Mobile car detailing in New Westminster, BC — Queensborough, Sapperton, Uptown and Queens Park. We come to your driveway. Open 7 days, 5 AM – 7 PM.",
    neighbourhoods: ["Queensborough", "Sapperton", "Uptown", "Queens Park"],
    intro: [
      "New West packs a lot into a small footprint: steep streets, narrow lanes, old houses with one parking pad. Mobile car detailing in New Westminster works because we bring everything to that pad instead of asking you to go anywhere.",
      "Queens Park and Sapperton have some of the biggest trees in the region hanging over parked cars, and Queensborough has river damp and constant bridge traffic.",
    ],
    driving:
      "Sitting under mature trees means sap, leaf stain and bird mess landing on paint year-round, and those etch faster than road dirt does. On the Queensborough side, the Alex Fraser and Queensborough Bridge corridors throw up truck grime and winter brine that settles low on the body.",
    faqs: [
      { q: "Do you detail in Queensborough?", a: "Yes, Queensborough, Sapperton, Uptown, Queens Park and the West End of New West." },
      { q: "What if my street parking is tight?", a: "We work in tight spots regularly. If you can give us the space of an open door on one side, we can usually manage." },
      { q: "Can you clean stained fabric seats in an older car?", a: "Hot-water extraction is the right tool for that. We can tell you honestly what will and will not lift." },
    ],
    mapQuery: "New Westminster, BC",
    nearby: ["burnaby", "vancouver", "coquitlam"],
  },
  {
    slug: "vancouver",
    path: "/car-detailing-vancouver",
    name: "Vancouver",
    title: "Mobile Car Detailing Vancouver, BC | M BROS",
    description:
      "Mobile car detailing in Vancouver, BC — Kitsilano, Mount Pleasant, East Van, Kerrisdale and Yaletown. We come to you. Open 7 days, 5 AM – 7 PM. Free quote.",
    neighbourhoods: ["Kitsilano", "Mount Pleasant", "East Van", "Kerrisdale", "Yaletown"],
    intro: [
      "Parking in Vancouver is the whole problem. Mobile car detailing in Vancouver removes the part where you drive across town, hand over your keys, and wait somewhere for three hours.",
      "We work in lanes, on residential streets, in driveways and in building parking where the strata allows it, from Kitsilano across to East Van.",
    ],
    driving:
      "Beach sand from Kits and Jericho ends up in carpet, and salt air plus nine months of rain keeps the exterior permanently filmed over. Street-parked cars in Mount Pleasant and East Van collect brake dust and construction grit; Kerrisdale and Yaletown cars spend their lives in parkades and pick up a fine dust instead.",
    faqs: [
      { q: "Can you detail a street-parked car in Kitsilano or East Van?", a: "Yes, as long as the spot is legal and we can work around the car. Let us know where it is parked in your quote request." },
      { q: "Do you come downtown and to Yaletown?", a: "Yes, including building parking areas when the strata allows outside work." },
      { q: "Can you get beach sand out of the carpet?", a: "Vacuuming pulls the loose sand, and hot-water extraction gets what has worked down into the fibres." },
    ],
    mapQuery: "Vancouver, BC",
    nearby: ["burnaby", "new-westminster", "port-moody"],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)!;
