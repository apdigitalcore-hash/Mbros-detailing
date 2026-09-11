/**
 * Service page content. Prices and "what's included" come from pricing.ts
 * (see pagePricing) so there's one source of truth for numbers.
 * Body copy supports [link text](/path) markup.
 */
export type ServicePage = {
  slug: string;
  path: string;
  name: string;
  group: "Packages" | "Exterior" | "Interior" | "Add-ons";
  blurb: string;
  h1: string;
  title: string;
  description: string;
  photo: string;
  intro: string[];
  whoFor: string[];
  process: { n: string; title: string; body: string }[];
  body: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "full-detail",
    path: "/services/full-detail",
    name: "Full Detail",
    group: "Packages",
    blurb: "One exterior and one interior service in a single visit, Basic or Deep.",
    h1: "Full car detail in Maple Ridge",
    title: "Full Car Detail Maple Ridge | M BROS Auto Detailing",
    description:
      "Mobile full car detail in Maple Ridge from $105. Interior and exterior in your driveway, Basic or Deep. Open 7 days, 5 AM – 7 PM. Get a free quote.",
    photo: "[PHOTO: finished full detail, car in a customer's driveway]",
    intro: [
      "A full car detail in Maple Ridge means the whole vehicle in one visit: one exterior service and one interior service, done in your driveway or at your workplace.",
      "The Basic Full Detail keeps a car that's in decent shape looking right. The Deep Full Detail is the reset — the one people book before selling, before a lease return, or after a Lower Mainland winter has had its way with the car.",
    ],
    whoFor: [
      "Selling privately on Marketplace and wanting the photos to do the work",
      "A lease return coming up with a wear-and-tear inspection to pass",
      "A car that has never had a proper detail",
      "The spring reset after a winter of brine, grit and damp",
    ],
    process: [
      {
        n: "01",
        title: "Walkaround",
        body: "We go over the car with you inside and out and agree on Basic or Deep.",
      },
      {
        n: "02",
        title: "Wash & decon",
        body: "Wheels, foam pre-soak and hand wash. On Deep, clay bar and iron decontamination.",
      },
      {
        n: "03",
        title: "Interior",
        body: "Vacuum and wipe-down on Basic. Steam and hot-water extraction through carpet and fabric on Deep.",
      },
      {
        n: "04",
        title: "Protect",
        body: "On Deep, long-lasting machine wax on the paint and leather conditioning inside.",
      },
      {
        n: "05",
        title: "Final inspection",
        body: "Glass last, then we walk the finished car with you.",
      },
    ],
    body: [
      {
        h: "What a full detail is worth before you sell",
        p: [
          "A buyer looking at two similar cars on Marketplace picks the one that looks cared for. Clean carpet, clear headlights and paint that beads water say the car was looked after, whether or not that's a fair conclusion.",
          "The same applies at a lease return. Interior wear and tear is what gets flagged, and a lot of what looks like wear is dirt ground into fabric that extraction removes. There's more on this in our guide to [prepping a car for sale](/blog/prep-car-for-sale-metro-vancouver).",
        ],
      },
      {
        h: "Complete mobile detailing, one visit",
        p: [
          "Because we're mobile, the car doesn't leave. You're not driving somewhere, waiting, and driving back. Book an early slot and a lot of this happens before your day starts.",
          "If your car needs something beyond the package — heavy pet hair, an odour problem, foggy headlights — add it in your quote request and it's priced in up front rather than sprung on you on the day.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's in a full detail?",
        a: "The Basic Full Detail is Hand Wash & Dry plus Interior Maintenance Clean. The Deep Full Detail is Exterior Paint Decontamination & Protection plus Interior Deep Restoration.",
      },
      {
        q: "How much is a full detail?",
        a: "Basic runs $105 – $210 and Deep runs $320 – $570, depending on vehicle size and condition. See the table on this page for your vehicle.",
      },
      {
        q: "How long does it take?",
        a: "It varies by vehicle size and condition, so we give you a time estimate along with your quote.",
      },
      {
        q: "Do you offer paint correction or ceramic coating?",
        a: "No. We do hand washing, clay bar and iron decontamination, and machine wax. We'd rather be straight about what we offer.",
      },
      {
        q: "Can I add pet hair removal or headlight restoration?",
        a: "Yes. Add-ons can be combined with any service, including both full details.",
      },
    ],
    related: ["interior-detailing", "exterior-detailing"],
  },
  {
    slug: "exterior-detailing",
    path: "/services/exterior-detailing",
    name: "Exterior Detailing",
    group: "Exterior",
    blurb: "Hand wash on Basic; clay bar, iron decon and machine wax on Deep.",
    h1: "Exterior car detailing in Maple Ridge",
    title: "Exterior Car Detailing Maple Ridge | M BROS",
    description:
      "Mobile exterior car detailing in Maple Ridge. Hand wash from $40; clay bar, iron decon and machine wax from $130. We come to you, 7 days a week.",
    photo: "[PHOTO: water beading on a freshly waxed dark hood]",
    intro: [
      "Exterior car detailing in Maple Ridge is about removing what the road put on your paint, then leaving something behind that keeps it off. A mobile hand car wash is the start of that, not the whole job.",
      "There are two levels. Hand Wash & Dry is the regular upkeep. Exterior Paint Decontamination & Protection adds a clay bar, iron decontamination and a long-lasting machine wax. Both are done at your place, with no brushes and no automated wash dragging grit across your clear coat.",
    ],
    whoFor: [
      "Daily commuters on Lougheed or Hwy 1 dealing with winter brine",
      "Dark cars where every bit of road film shows",
      "Cars parked under cedars collecting sap and needles",
      "Anyone about to list a car and wanting the paint to look sharp in photos",
    ],
    process: [
      {
        n: "01",
        title: "Wheels first",
        body: "Wheels and tires get cleaned before the paint so their grime doesn't end up on it.",
      },
      {
        n: "02",
        title: "Foam and hand wash",
        body: "A foam pre-soak loosens the dirt, then a hand wash top down and a towel dry.",
      },
      {
        n: "03",
        title: "Decontaminate",
        body: "On Deep: iron remover and clay bar to lift the bonded grit, brake dust and sap a wash leaves behind.",
      },
      {
        n: "04",
        title: "Protect",
        body: "On Deep: long-lasting machine wax, applied panel by panel.",
      },
      {
        n: "05",
        title: "Walkaround",
        body: "We check the car in good light and walk it with you.",
      },
    ],
    body: [
      {
        h: "Hand wash and wax versus a drive-through",
        p: [
          "An automated wash drags whatever the last vehicle left on its brushes across your paint. On a dark car you can see the result under any streetlight. A hand wash takes longer because the point is to lift dirt off rather than push it around.",
          "The wash is only step one. If you run your hand over a washed hood and it still feels gritty, that's bonded contamination — brake dust, rail dust from the tracks, sap. Clay and iron decontamination remove it, and paint that's been decontaminated actually holds wax instead of shedding it. That's what our [clay bar and wax](/services/clay-bar-wax) service is for.",
        ],
      },
      {
        h: "Wheels, trim and the rest of the outside",
        p: [
          "Brake dust is hot metal fused to the wheel face, and a Lower Mainland winter speeds up the damage. Wheels are their own service with two levels — see [wheel and tire cleaning](/services/wheel-tire-cleaning).",
          "Grey, chalky plastic trim is UV damage plus dried wash chemicals. Exterior Plastic Trim Restoration brings it back to an even dark finish and can be added to any exterior service; it's priced by quote because trim varies so much from car to car.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between Basic and Deep?",
        a: "Hand Wash & Dry is a foam pre-soak, hand wash and towel dry. Exterior Paint Decontamination & Protection adds a clay bar treatment, iron decontamination and long-lasting machine wax.",
      },
      {
        q: "Can you do just a wash?",
        a: "Yes. Hand Wash & Dry is $40 – $60 for a coupe or sedan, $50 – $70 for an SUV or truck, and $60 – $80 for a large SUV or minivan.",
      },
      {
        q: "Will clay bar remove scratches?",
        a: "No. Clay removes bonded contamination from the surface. It doesn't correct scratches or swirls, and we don't offer paint correction.",
      },
      {
        q: "Do you clean engine bays too?",
        a: "Yes. Engine Bay Detail is an add-on at $60 – $90.",
      },
    ],
    related: ["clay-bar-wax", "wheel-tire-cleaning"],
  },
  {
    slug: "interior-detailing",
    path: "/services/interior-detailing",
    name: "Interior Detailing",
    group: "Interior",
    blurb: "Maintenance clean on Basic; extraction, steam and leather care on Deep.",
    h1: "Interior car detailing in Maple Ridge",
    title: "Interior Car Detailing Maple Ridge | M BROS",
    description:
      "Mobile interior car detailing in Maple Ridge from $65. Steam, hot-water extraction, leather conditioning and stain removal. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: seat before/after hot-water extraction on a family SUV]",
    intro: [
      "Interior car detailing in Maple Ridge is the job most cars around here need, because the inside of a car in the Lower Mainland takes a beating nine months of the year. Wet boots, wet dogs, wet jackets, coffee, sand, gravel dust — it all ends up in the carpet and stays there.",
      "Interior Maintenance Clean keeps a tidy car tidy. Interior Deep Restoration is the one that changes how a car looks and smells: hot-water extraction through carpet and seats, steam into every vent and crevice, leather conditioning and stain removal, done in your driveway.",
    ],
    whoFor: [
      "Family cars with kids, car seats and the crumbs that come with them",
      "Anyone whose car smells like it has been damp since November",
      "Work vehicles that carry dust, sawdust or gravel every day",
      "Lease returns and pre-sale cleanups where the interior is what gets judged",
    ],
    process: [
      {
        n: "01",
        title: "Walkaround",
        body: "We look through the car with you and flag stains and problem areas before we start.",
      },
      { n: "02", title: "Vacuum", body: "Mats out and a vacuum through the cabin." },
      { n: "03", title: "Wipe-down", body: "Dashboard, console and cup holders cleaned by hand." },
      {
        n: "04",
        title: "Steam and extraction",
        body: "On Deep: steam into vents and crevices, hot-water extraction through carpet and fabric, stains treated, leather conditioned.",
      },
      { n: "05", title: "Glass", body: "Glass done last so it stays streak-free." },
    ],
    body: [
      {
        h: "Why a vacuum is not an interior detail",
        p: [
          "A vacuum takes out the loose material sitting on top of the carpet. Everything that got wet and then dried — road salt, mud from a Golden Ears trailhead, spilled milk under a car seat — is bonded into the fibre, and a vacuum won't touch it.",
          "Steam loosens what's stuck to hard surfaces and gets into vents and seams. Hot-water extraction handles the soft surfaces: hot water and solution go into the carpet, and the machine pulls the dirty water back out. More on that on the [seat and carpet shampoo](/services/seat-carpet-shampoo) page.",
        ],
      },
      {
        h: "Rain, damp and why interiors go musty here",
        p: [
          "From October through April, Lower Mainland carpets rarely get fully dry. Water comes in on boots, sits in the padding, and every warm day it evaporates back into the cabin. That's the musty smell, and an air freshener just covers it for a week.",
          "Extraction removes the water and the material feeding the smell. If there's a specific source — spilled milk, smoke, a gym bag left through a long weekend — add an [odour elimination treatment](/services/odour-removal) after the clean.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between Maintenance and Deep Restoration?",
        a: "Interior Maintenance Clean is a light vacuum, dashboard wipe-down, cup holder wipe and glass cleaning. Interior Deep Restoration is deep carpet and seat extraction, steam cleaning of all vents and crevices, leather conditioning and stain removal.",
      },
      {
        q: "How long does an interior detail take?",
        a: "It depends on the size of the vehicle and its condition. We give you a time estimate with your quote rather than guessing here.",
      },
      {
        q: "Will the carpets be soaking wet afterwards?",
        a: "No. Extraction pulls most of the water back out, so carpets are damp rather than wet.",
      },
      {
        q: "Can you get pet hair out?",
        a: "Yes. Pet hair is an add-on — $35 – $50 for light shedding, $60 – $90+ for heavy hair worked into the carpet.",
      },
      {
        q: "Do I need to empty the car first?",
        a: "It helps. Take out anything valuable or fragile, and we'll work around the rest.",
      },
    ],
    related: ["seat-carpet-shampoo", "leather-cleaning"],
  },
  {
    slug: "clay-bar-wax",
    path: "/services/clay-bar-wax",
    name: "Clay Bar & Wax",
    group: "Exterior",
    blurb: "Clay bar, iron decontamination and long-lasting machine wax.",
    h1: "Clay bar and wax in Maple Ridge",
    title: "Clay Bar and Wax Maple Ridge | M BROS Auto Detailing",
    description:
      "Clay bar treatment, iron decontamination and long-lasting machine wax in Maple Ridge from $130. Mobile, done in your driveway. Get a free quote.",
    photo: "[PHOTO: clay bar on a wet panel, contamination visible on the clay]",
    intro: [
      "A clay bar and wax in Maple Ridge only works if the paint underneath is clean. That's why decontamination comes first: an iron remover dissolves embedded brake and rail dust, and a clay bar lifts the bonded grit a wash leaves behind, so the wax has bare paint to grab.",
      "This is our Exterior Paint Decontamination & Protection service: hand wash, clay bar treatment, iron decontamination and a long-lasting machine wax, all done in your driveway.",
    ],
    whoFor: [
      "Paint that feels rough after a wash",
      "Cars parked under cedars picking up sap all summer",
      "Commuters coating the car in winter brine on Hwy 1",
      "Dark paint where road film shows every time",
    ],
    process: [
      { n: "01", title: "Wash", body: "Wheels, then a foam pre-soak and hand wash." },
      {
        n: "02",
        title: "Iron decon",
        body: "Iron remover on the paint to dissolve embedded brake dust and rail dust.",
      },
      { n: "03", title: "Clay", body: "Clay bar with lubricant across every painted panel." },
      {
        n: "04",
        title: "Machine wax",
        body: "Wax applied by machine for an even, long-lasting coat.",
      },
      {
        n: "05",
        title: "Buff and inspect",
        body: "Buffed off, checked in the light, walked with you.",
      },
    ],
    body: [
      {
        h: "What a clay bar treatment removes",
        p: [
          "Run your hand over a freshly washed hood through a plastic sandwich bag. The roughness you feel is bonded contamination: brake dust, industrial fallout, rail dust from the tracks, tree sap, overspray. Washing doesn't move it because it's stuck in the clear coat, not sitting on it.",
          "Iron decontamination chemically dissolves the metal particles. Clay pulls out the rest mechanically. Afterwards the paint feels like glass, and the wax actually bonds instead of sitting on top of grit.",
        ],
      },
      {
        h: "Why wax matters in BC rain",
        p: [
          "Wax is a sacrificial layer. Rain, road film and brine wear at it instead of at your clear coat. Water sheets off, dirt has less to hold on to, and the next wash takes less work.",
          "Applying it by machine gets an even coat across every panel, which is a big part of how long it lasts on a car parked outside from October to April. Pair it with a [hand wash](/services/exterior-detailing) between visits to keep it working.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is a clay bar and wax?",
        a: "Exterior Paint Decontamination & Protection is $130 – $160 for a coupe or sedan, $155 – $180 for an SUV or truck, and $180 – $220 for a large SUV or minivan.",
      },
      {
        q: "Does clay bar damage paint?",
        a: "Not when it's used with plenty of lubricant and a clean piece of clay. Clay that gets dropped is replaced, not reused.",
      },
      {
        q: "How long does the wax last on a car parked outside?",
        a: "It depends on the weather, how the car is stored and how often it's washed, so we'll give you a realistic expectation on the day rather than a marketing number.",
      },
      {
        q: "Will this remove swirl marks?",
        a: "No. This is decontamination and protection, not paint correction. We don't offer paint correction.",
      },
      {
        q: "Do I need clay every time?",
        a: "No. Most cars here benefit once or twice a year. In between, a hand wash is enough.",
      },
    ],
    related: ["exterior-detailing", "wheel-tire-cleaning"],
  },
  {
    slug: "wheel-tire-cleaning",
    path: "/services/wheel-tire-cleaning",
    name: "Wheels & Tires",
    group: "Exterior",
    blurb: "Quick wheel and tire clean, or full brake dust and barrel restoration.",
    h1: "Wheel and tire cleaning in Maple Ridge",
    title: "Wheel and Tire Cleaning Maple Ridge | M BROS",
    description:
      "Mobile wheel and tire cleaning in Maple Ridge from $30. Brake dust removal, wheel barrels, fender wells and tire sealant. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: wheel barrel before/after brake dust removal]",
    intro: [
      "Wheel and tire cleaning is the part of a wash most places rush. Brake dust is iron — hot metal particles that land on the wheel, bake on, and on a Lower Mainland winter commute get glued in place by road brine.",
      "We offer it two ways. Wheel & Tire Cleaning is the upkeep: wheel faces washed, tires scrubbed and shined. Wheel & Tire Restoration is the deep one: brake dust extracted, barrels cleaned behind the spokes, plastic fender wells scrubbed and the tires sealed.",
    ],
    whoFor: [
      "Alloy wheels gone grey-brown with baked-on brake dust",
      "Open-spoke wheels where the dirty barrel shows",
      "Trucks and SUVs with mud packed into the fender wells",
      "Anyone selling a car — wheels are in every listing photo",
    ],
    process: [
      {
        n: "01",
        title: "Cool check",
        body: "Wheels need to be cool. Cleaner on a hot wheel dries too fast and can stain.",
      },
      {
        n: "02",
        title: "Rinse and dwell",
        body: "Loose grime rinsed off, then cleaner left to work on the brake dust.",
      },
      {
        n: "03",
        title: "Agitate",
        body: "Faces, spokes and tires scrubbed. On Restoration, the barrels too.",
      },
      {
        n: "04",
        title: "Fender wells",
        body: "On Restoration, the plastic fender well liners are scrubbed out.",
      },
      { n: "05", title: "Finish", body: "Tire shine on Cleaning. Tire sealant on Restoration." },
    ],
    body: [
      {
        h: "Why brake dust eats wheels",
        p: [
          "Every stop grinds a little metal off the rotors and pads. It comes off hot, lands on the wheel and bonds to the finish. Rain and winter brine speed up the corrosion, which is why wheels in this region go from shiny to pitted faster than people expect.",
          "A spray-and-rinse takes off the loose layer. The bonded layer needs time, the right cleaner and a brush that reaches into the barrel. That's the difference between our two levels.",
        ],
      },
      {
        h: "Basic or Deep: which one you need",
        p: [
          "If the wheels were cleaned properly in the last month or two, Wheel & Tire Cleaning keeps them there.",
          "If you can't remember the last time, or the inside of the barrel is dark brown, book Wheel & Tire Restoration. It resets the whole corner of the car, and it pairs well with an [exterior detail](/services/exterior-detailing).",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between Cleaning and Restoration?",
        a: "Wheel & Tire Cleaning is a surface wheel wash, tire scrubbing and tire shine. Wheel & Tire Restoration is deep brake dust extraction, wheel barrel cleaning, plastic fender well scrubbing and tire sealant.",
      },
      {
        q: "How much does it cost?",
        a: "Wheel & Tire Cleaning is $30 – $50 and Wheel & Tire Restoration is $60 – $100, depending on vehicle size.",
      },
      {
        q: "Will it fix curb rash or scratches?",
        a: "No. Cleaning removes dirt and brake dust. Curb rash and scratches are damage, and that's a job for a wheel repair shop.",
      },
      {
        q: "Can I book wheels with a hand wash?",
        a: "Yes. Tell us both in your quote request and we'll price them together.",
      },
    ],
    related: ["exterior-detailing", "clay-bar-wax"],
  },
  {
    slug: "seat-carpet-shampoo",
    path: "/services/seat-carpet-shampoo",
    name: "Seat & Carpet Shampoo",
    group: "Interior",
    blurb: "Hot-water extraction and steam. Part of Interior Deep Restoration.",
    h1: "Car seat shampoo in Maple Ridge",
    title: "Car Seat Shampoo Maple Ridge | M BROS",
    description:
      "Car seat shampoo and carpet cleaning in Maple Ridge — hot-water extraction and steam, part of Interior Deep Restoration from $190. We come to you.",
    photo: "[PHOTO: extraction wand pulling dirty water from a rear bench seat]",
    intro: [
      "Car seat shampoo in Maple Ridge means hot-water extraction, not a spray bottle and a brush. Hot water and solution go into the fabric, and the machine pulls it back out with the dirt suspended in it.",
      "It's car upholstery cleaning and car carpet cleaning done at your place, paired with steam for the seams and hard edges an extractor can't reach. Both are part of our Interior Deep Restoration.",
    ],
    whoFor: [
      "Carpets that have absorbed a winter of wet boots and road salt",
      "Fabric seats with coffee, food or kid-related history",
      "Cars that smell damp no matter how long the windows are open",
      "Anyone getting a car ready to sell where the interior lets it down",
    ],
    process: [
      {
        n: "01",
        title: "Assess",
        body: "We check the stains with you and tell you honestly what's likely to lift and what's dye damage.",
      },
      {
        n: "02",
        title: "Vacuum",
        body: "Loose dirt out first so extraction isn't just moving it around.",
      },
      {
        n: "03",
        title: "Steam",
        body: "Steam into seams, edges, vents and the hard surfaces around the fabric.",
      },
      {
        n: "04",
        title: "Extract",
        body: "Hot-water extraction through carpet, mats and fabric seats, passing until the water runs clean.",
      },
      {
        n: "05",
        title: "Dry down",
        body: "Extra dry passes so the car is damp, not soaked, when we leave.",
      },
    ],
    body: [
      {
        h: "What hot-water extraction actually removes",
        p: [
          "Most of what makes a car interior look tired isn't on the surface. It's fine grit and dissolved road salt that soaked in while the carpet was wet and dried in place. Extraction re-wets it, breaks it loose and takes it out of the vehicle.",
          "You can see it happen — the water in the recovery tank tells you what was in the carpet. On a Lower Mainland commuter car it usually comes out grey-brown on the first pass.",
        ],
      },
      {
        h: "Car steam cleaning as part of the job",
        p: [
          "Steam handles what extraction can't reach: seat rails, belt anchors, the plastic between the seat and the console, and the edges of the carpet where it meets trim.",
          "Together they cover the whole soft-and-hard boundary inside a car, which is where most of the grime you can smell actually lives. Both come with [Interior Deep Restoration](/services/interior-detailing), along with leather conditioning and stain removal.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is a seat and carpet shampoo?",
        a: "Extraction and steam are part of Interior Deep Restoration: $190 – $250 for a coupe or sedan, $230 – $300 for an SUV or truck, $270 – $350 for a large SUV or minivan.",
      },
      {
        q: "Will every stain come out?",
        a: "No, and we'll tell you which ones before we start. Dye transfer and bleach damage are permanent. Most food, drink and dirt stains lift well.",
      },
      {
        q: "How long until the seats are dry?",
        a: "They come out damp rather than wet. Drying time depends on the weather and airflow, so we'll give you a realistic idea on the day.",
      },
      {
        q: "Do you do leather seats too?",
        a: "Leather is cleaned and conditioned rather than extracted. Leather conditioning is included in Interior Deep Restoration.",
      },
    ],
    related: ["interior-detailing", "odour-removal"],
  },
  {
    slug: "leather-cleaning",
    path: "/services/leather-cleaning",
    name: "Leather Cleaning",
    group: "Interior",
    blurb: "Leather cleaned and conditioned, with an optional stain shield.",
    h1: "Leather seat cleaning in Maple Ridge",
    title: "Leather Seat Cleaning Maple Ridge | M BROS",
    description:
      "Leather seat cleaning and conditioning in Maple Ridge, with an optional stain shield. Part of Interior Deep Restoration from $190. Mobile, 7 days a week.",
    photo: "[PHOTO: driver's leather bolster mid-clean, one half done]",
    intro: [
      "Leather seat cleaning in Maple Ridge is mostly about the driver's seat. The outer bolster takes every entry and exit, and that's where body oils, denim dye and grit break the finish down first.",
      "Leather conditioning is part of our Interior Deep Restoration. On top of that, you can add the Upholstery & Leather Stain Shield so the next spill has somewhere to sit before it soaks in.",
    ],
    whoFor: [
      "Light-coloured leather picking up dye from jeans",
      "Driver's bolsters starting to look shiny and worn",
      "Leased vehicles heading back for inspection",
      "Anyone who wants leather to stay soft through dry winter cabin heat",
    ],
    process: [
      {
        n: "01",
        title: "Inspect",
        body: "We check for cracking, wear-through and dye transfer, and tell you what cleaning will and won't fix.",
      },
      {
        n: "02",
        title: "Clear the seams",
        body: "Grit out of the perforations and seams first, since grit is what does the damage.",
      },
      {
        n: "03",
        title: "Clean",
        body: "Worked gently by hand across the panels, bolsters and seat backs.",
      },
      {
        n: "04",
        title: "Condition",
        body: "Moisture back into the leather, then buffed so nothing is left greasy or slippery.",
      },
      { n: "05", title: "Protect", body: "Optional stain shield on leather and fabric." },
    ],
    body: [
      {
        h: "Why leather cracks, and what conditioning does",
        p: [
          "Automotive leather is coated. What cracks is that coating, and it cracks when it dries out and flexes over grit. Conditioning keeps the material pliable so daily flexing doesn't split the surface.",
          "Cars here swing between cold damp and blasting cabin heat, which is harder on leather than a steady climate. A couple of times a year is a reasonable rhythm for most cars.",
        ],
      },
      {
        h: "Leather seat protection and fabric protection for car seats",
        p: [
          "The stain shield puts a barrier on leather and fabric so coffee, rain-soaked jackets and dropped food bead up for a moment instead of going straight into the material.",
          "It buys you time to wipe. It doesn't make seats spill-proof, and we won't tell you otherwise. It's priced by quote — mention it with your [Interior Deep Restoration](/services/interior-detailing) request.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is leather cleaning?",
        a: "Leather conditioning is part of Interior Deep Restoration, which is $190 – $350 depending on vehicle size. The stain shield is priced by quote.",
      },
      {
        q: "Can you fix cracked leather?",
        a: "No. Cleaning and conditioning slow further damage, but cracks and wear-through are permanent.",
      },
      {
        q: "Will blue jean dye come out of light leather?",
        a: "Often partly, sometimes fully, depending on how long it's been there. We'll tell you what we expect before starting.",
      },
      {
        q: "Will the seats be slippery?",
        a: "No. The conditioner is buffed off so the finish is dry to the touch.",
      },
    ],
    related: ["interior-detailing", "seat-carpet-shampoo"],
  },
  {
    slug: "headlight-restoration",
    path: "/services/headlight-restoration",
    name: "Headlight Restoration",
    group: "Add-ons",
    blurb: "Yellowed lenses sanded, polished and sealed. $75 – $100 a pair.",
    h1: "Headlight restoration in Maple Ridge",
    title: "Headlight Restoration Maple Ridge | M BROS",
    description:
      "Foggy or yellow headlights restored in Maple Ridge — $75 – $100 for the pair. Sanded, polished and sealed at your home or work. Open 7 days.",
    photo: "[PHOTO: one headlight restored, one still yellowed, same vehicle]",
    intro: [
      "Headlight restoration in Maple Ridge is one of the fastest changes you can make to how a car looks, and it's a safety job as much as a cosmetic one. A yellow, hazy lens scatters light instead of putting it on the road, and it gets dark early here from October on.",
      "We do foggy headlight repair on site: sand the oxidised layer off, polish the lens back to clear, and seal it so it doesn't go yellow again in a month. It's $75 – $100 for the pair.",
    ],
    whoFor: [
      "Older cars with yellowed lenses",
      "Anyone struggling to see on unlit roads out past 232nd or up Burke Mountain",
      "Pre-sale cars where cloudy lights age the whole front end",
      "Vehicles parked outside where UV has done its work",
    ],
    process: [
      { n: "01", title: "Mask", body: "Paint and trim around the lens taped off." },
      {
        n: "02",
        title: "Sand",
        body: "Wet sanding through grades to take the oxidised layer off evenly.",
      },
      { n: "03", title: "Polish", body: "Polished back to clarity." },
      {
        n: "04",
        title: "Seal",
        body: "A UV-resistant sealant on the lens — the step that decides how long it lasts.",
      },
      {
        n: "05",
        title: "Check",
        body: "Both lenses compared side by side before we call it done.",
      },
    ],
    body: [
      {
        h: "Why headlights go yellow",
        p: [
          "Modern lenses are polycarbonate with a factory UV coating. That coating breaks down over years of sun and weather, and once it fails, the plastic underneath oxidises. That's the yellow haze.",
          "Wiping the outside does nothing, because the damage is in the plastic. Restoration means removing the failed layer and putting a new protective layer on.",
        ],
      },
      {
        h: "A yellow headlight fix that holds",
        p: [
          "Cheap restorations often skip the sealing step. They look great for a few weeks and then yellow faster than before, because the lens is now bare plastic facing the sun.",
          "Sealing isn't optional in our process. Headlight restoration can be added to any service, and it's a common pairing with a [full detail](/services/full-detail) before a sale.",
        ],
      },
    ],
    faqs: [
      { q: "How much is headlight restoration?", a: "$75 – $100 for the pair." },
      {
        q: "Can you fix lenses that are cracked or have moisture inside?",
        a: "No. Cracks and internal condensation are a housing problem, not a surface one.",
      },
      {
        q: "Do you do one headlight or both?",
        a: "Both, so they match. The price is for the pair.",
      },
      {
        q: "Does it improve night visibility?",
        a: "A clear lens directs the beam instead of scattering it, which is noticeable on unlit roads.",
      },
    ],
    related: ["exterior-detailing", "full-detail"],
  },
  {
    slug: "engine-bay-detailing",
    path: "/services/engine-bay-detailing",
    name: "Engine Bay Detail",
    group: "Add-ons",
    blurb: "Careful low-pressure clean and dress. $60 – $90.",
    h1: "Engine bay cleaning in Maple Ridge",
    title: "Engine Bay Cleaning Maple Ridge | M BROS",
    description:
      "Mobile engine bay cleaning in Maple Ridge, $60 – $90. Low pressure, sensitive parts covered, plastics dressed. At your home or work, 7 days a week.",
    photo: "[PHOTO: engine bay half cleaned, grime line visible across the cover]",
    intro: [
      "Engine bay cleaning in Maple Ridge is worth doing for two reasons: a clean bay makes leaks and worn parts visible, and it's the first thing a careful buyer opens when they look at a used car.",
      "Our Engine Bay Detail is done carefully — low pressure, water kept away from what should stay dry, and plastics dressed afterwards so they don't look washed out. It's $60 – $90.",
    ],
    whoFor: [
      "Cars being sold privately where a buyer will look under the hood",
      "Older vehicles with years of dust, oil film and leaf debris",
      "Anyone trying to spot where a small leak is coming from",
      "Trucks and work vehicles that pick up gravel dust",
    ],
    process: [
      { n: "01", title: "Cool down", body: "The engine has to be cool before anything starts." },
      {
        n: "02",
        title: "Cover",
        body: "Sensitive electrical connectors and intake areas are protected.",
      },
      { n: "03", title: "Clean", body: "Degreased and agitated by hand, with low pressure only." },
      { n: "04", title: "Dry", body: "Blown and wiped dry rather than left to sit wet." },
      {
        n: "05",
        title: "Dress",
        body: "Plastics and hoses dressed to an even finish, not a greasy shine.",
      },
    ],
    body: [
      {
        h: "Is engine bay cleaning safe?",
        p: [
          "It is when it's done with care. What causes problems is a pressure washer aimed at connectors, fuse boxes and coil packs.",
          "The job is low pressure and hand agitation. Anything that shouldn't get soaked is covered first, and the bay is dried rather than left damp.",
        ],
      },
      {
        h: "What a clean bay tells you",
        p: [
          "Once the grime is off, a fresh oil weep, a leaking hose or a cracked belt is obvious. Mechanics see it faster, and so do you.",
          "For anyone selling a car, an engine bay that's clearly been looked after does a lot of quiet work in a buyer's head. It pairs well with a [Deep Full Detail](/services/full-detail).",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is an engine bay detail?",
        a: "$60 – $90, depending on the vehicle and its condition.",
      },
      {
        q: "Could water get into the electronics?",
        a: "That risk is managed by covering sensitive components and using low pressure.",
      },
      {
        q: "Will you find leaks for me?",
        a: "We're detailers, not mechanics. A clean bay makes leaks visible; diagnosing them is for your mechanic.",
      },
      {
        q: "Does it need to be done often?",
        a: "No. Once a year, or before a sale, is enough for most vehicles.",
      },
    ],
    related: ["exterior-detailing", "full-detail"],
  },
  {
    slug: "pet-hair-removal",
    path: "/services/pet-hair-removal",
    name: "Pet Hair Removal",
    group: "Add-ons",
    blurb: "Light shedding from $35, heavy embedded hair from $60.",
    h1: "Pet hair removal for your car",
    title: "Pet Hair Removal for Cars | M BROS Auto Detailing",
    description:
      "Dog hair removal for car interiors from $35, Maple Ridge to Vancouver. Light or heavy — worked out of carpet and seats, not vacuumed over. Open 7 days.",
    photo: "[PHOTO: rear cargo area half cleared of embedded dog hair]",
    intro: [
      "Pet hair removal in a car is its own job, not something a vacuum finishes. Dog hair works itself into carpet and fabric weave point-first and stays there, and a shop vac will pass over it without lifting it.",
      "We price it two ways: Pet Hair Removal for light shedding ($35 – $50), and Pet Hair Extraction for hair that's worked deep into cargo carpet and seats ($60 – $90+). It's the aftermath of Rocky Point, Golden Ears and every off-leash park between here and Kits.",
    ],
    whoFor: [
      "Dogs that ride in the back every weekend",
      "Cargo areas and folding rear seats full of embedded hair",
      "Cars being sold or returned where hair is a deal-breaker",
      "Anyone with allergies riding in a car a pet uses",
    ],
    process: [
      {
        n: "01",
        title: "Assess",
        body: "We check how deep the hair is set, since a short-haired dog and a husky are different jobs.",
      },
      {
        n: "02",
        title: "Loosen",
        body: "Hair worked up out of the weave with rubber and bristle tools before any vacuum touches it.",
      },
      {
        n: "03",
        title: "Vacuum",
        body: "Pass after pass across carpet, seats, cargo area and seat backs.",
      },
      { n: "04", title: "Detail", body: "Seams, edges and rails where hair collects." },
      {
        n: "05",
        title: "Final pass",
        body: "A second full pass, since hair always surfaces after the first round.",
      },
    ],
    body: [
      {
        h: "Why dog hair is so hard to get out",
        p: [
          "Pet hair has a scale structure that catches in fabric fibres. It doesn't sit on the surface; it works down into the weave and locks in place, especially in the tight loop carpet used in cargo areas.",
          "Suction alone doesn't beat that grip. The hair has to be lifted out mechanically first, which is slow, and it's why heavy hair is priced separately from light.",
        ],
      },
      {
        h: "Beach sand, trail dirt and hair together",
        p: [
          "Around here, hair rarely comes alone. There's sand from Spanish Banks or Jericho and mud from Golden Ears mixed in with it.",
          "If the carpet has all three, [Interior Deep Restoration](/services/interior-detailing) after the hair removal is the combination that actually resets the interior.",
        ],
      },
    ],
    faqs: [
      {
        q: "Light or heavy — which do I need?",
        a: "If the hair mostly sits on top and comes up with a lint roller, it's light ($35 – $50). If it's woven into the carpet and you've given up on it, it's heavy ($60 – $90+). We confirm when we see the car.",
      },
      {
        q: "Can you get all the hair out?",
        a: "In most cars, effectively all of it. In heavily used cargo areas with long-haired dogs, some hair set deep in loop carpet can persist, and we'll tell you if we see that.",
      },
      {
        q: "Can you deal with the pet smell too?",
        a: "Yes, with an odour elimination treatment after the cleaning.",
      },
      {
        q: "Which cities do you do this in?",
        a: "All eight we serve, from Maple Ridge through to Vancouver.",
      },
    ],
    related: ["odour-removal", "seat-carpet-shampoo"],
  },
  {
    slug: "odour-removal",
    path: "/services/odour-removal",
    name: "Odour Removal",
    group: "Add-ons",
    blurb: "Smoke, damp, milk and pet smells. Source cleaned, then treated.",
    h1: "Car odour removal, Maple Ridge to Vancouver",
    title: "Car Odour Removal | M BROS Auto Detailing",
    description:
      "Mobile car odour removal from Maple Ridge to Vancouver — smoke, damp, spilled milk and pet smells. We clean the source, then treat it. Free quote.",
    photo: "[PHOTO: interior mid-treatment with doors open in a driveway]",
    intro: [
      "Car odour removal works in one order only: clean the source, then treat what's left. Spraying a car odor treatment over dirty carpet hides the problem for about a week, and then it comes back stronger.",
      "Our Odour Elimination Treatment handles smoke smells, damp and musty smells, spilled milk, gym gear and pets, at your home or workplace anywhere from Maple Ridge to Vancouver. It's priced by quote, because every smell has a different source.",
    ],
    whoFor: [
      "A used car that came with someone else's smoke",
      "Interiors that have smelled damp since the fall rain started",
      "Spilled milk, food or drink that's had time to work in",
      "Pet smell that survives every air freshener",
    ],
    process: [
      {
        n: "01",
        title: "Find the source",
        body: "Under seats, under mats, in the trunk well, in the vents. The smell always has a location.",
      },
      {
        n: "02",
        title: "Deep clean",
        body: "Steam on hard surfaces, hot-water extraction through carpet and fabric.",
      },
      {
        n: "03",
        title: "Dry",
        body: "Getting moisture out, because damp is a smell source in its own right here.",
      },
      {
        n: "04",
        title: "Treat",
        body: "Odour elimination treatment applied to the cleaned interior.",
      },
      {
        n: "05",
        title: "Air out",
        body: "Doors open, cabin aired, then checked before we finish.",
      },
    ],
    body: [
      {
        h: "Why smoke is the hardest one",
        p: [
          "Smoke residue coats everything, including surfaces you don't think about: the inside of the windshield, the vents, the headliner. That's why a car can smell fine at first and then smell like smoke as soon as the heat is turned on.",
          "We clean the accessible surfaces properly and then treat. We'll be honest about how much we expect to remove in one visit rather than promising a perfect result up front.",
        ],
      },
      {
        h: "Damp: the Lower Mainland special",
        p: [
          "From October to April, water gets tracked in faster than it evaporates. It sits in the padding under the carpet and feeds a musty smell no spray fixes.",
          "Extraction pulls the water, and the material in it, back out. That's why odour work almost always goes with [Interior Deep Restoration](/services/interior-detailing).",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is odour removal?",
        a: "It's priced by quote. Tell us what the smell is and how long it's been there, and text a photo if there's a visible source.",
      },
      {
        q: "Can you guarantee the smell will be gone?",
        a: "No, and anyone who guarantees it before seeing the car is guessing. We clean the source thoroughly and treat it, and we'll tell you what we expect after the walkaround.",
      },
      {
        q: "Will the car smell like chemicals afterwards?",
        a: "The goal is neutral, not perfumed. We air the car out before we finish.",
      },
      {
        q: "Can you deal with spilled milk?",
        a: "Yes, and extraction is essential for it. Milk goes into the padding, which is why the smell keeps coming back.",
      },
    ],
    related: ["seat-carpet-shampoo", "pet-hair-removal"],
  },
];

export const serviceBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);

export const serviceGroups: ServicePage["group"][] = [
  "Packages",
  "Exterior",
  "Interior",
  "Add-ons",
];
