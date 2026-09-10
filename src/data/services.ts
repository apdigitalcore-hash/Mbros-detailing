export type ServicePage = {
  slug: string;
  path: string;
  name: string;
  h1: string;
  title: string;
  description: string;
  photo: string;
  intro: string[];
  included: string[];
  whoFor: string[];
  process: { n: string; title: string; body: string }[];
  body: { h: string; p: string[] }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "interior-detailing",
    path: "/services/interior-detailing",
    name: "Interior Detailing",
    h1: "Interior car detailing in Maple Ridge",
    title: "Interior Car Detailing Maple Ridge | M BROS",
    description:
      "Mobile interior car detailing in Maple Ridge and across the Lower Mainland. Vacuum, steam, extraction, leather and glass. Open 7 days, 5 AM – 7 PM. Get a quote.",
    photo: "[PHOTO: seat before/after hot-water extraction on a family SUV]",
    intro: [
      "Interior car detailing in Maple Ridge is the job we get called for most, because the inside of a car in the Lower Mainland takes a beating nine months of the year. Wet boots, wet dogs, wet jackets, coffee, sand, gravel dust — it all ends up in the carpet and stays there.",
      "We come to your driveway or your workplace parking lot with everything needed to clean a car interior properly: vacuums, a steamer, a hot-water extractor, and hand tools for the parts a machine cannot reach.",
    ],
    included: [
      "Interior Vacuuming",
      "Dashboard & Console Wipe-Down",
      "Interior Steam Cleaning",
      "Carpet & Seat Hot-Water Extraction",
      "Leather Cleaning & Conditioning",
      "Streak-Free Glass Cleaning",
    ],
    whoFor: [
      "Family cars with kids, car seats and the crumbs that come with them",
      "Anyone whose car smells like it has been damp since November",
      "Work vehicles that carry dust, sawdust or gravel every day",
      "Lease returns and pre-sale cleanups where the interior is what gets judged",
    ],
    process: [
      { n: "01", title: "Walkaround", body: "We look through the car with you and flag stains, damage and problem areas before we start." },
      { n: "02", title: "Strip and vacuum", body: "Mats out, seats moved, and a full vacuum including rails, seams and the trunk." },
      { n: "03", title: "Steam and hand clean", body: "Steam into vents, seams, cupholders and plastics, then hand wipe the dash, console and door cards." },
      { n: "04", title: "Extraction", body: "Hot-water extraction through carpet and fabric seats so what is ground in comes back out." },
      { n: "05", title: "Protect and finish", body: "Leather cleaned and conditioned where applicable, glass done last so it stays streak-free." },
    ],
    body: [
      {
        h: "Why a vacuum is not an interior detail",
        p: [
          "A vacuum takes out the loose material sitting on top of the carpet. Everything that got wet and then dried — road salt, mud from a Golden Ears trailhead, spilled milk under a car seat — is bonded into the fibre and a vacuum will not touch it.",
          "Steam loosens what is stuck to hard surfaces and gets into vents and seams. Hot-water extraction handles the soft surfaces: hot water and solution go into the carpet under pressure, and the machine pulls the dirty water back out. That is the step that changes how a car smells, because the smell is usually in the carpet padding, not the air.",
        ],
      },
      {
        h: "Rain, damp and why interiors go musty here",
        p: [
          "From October through April, Lower Mainland carpets rarely get fully dry. Water comes in on boots, sits in the padding, and every warm day it evaporates back into the cabin. That is the musty smell, and an air freshener just covers it for a week.",
          "Extraction removes the water and the material feeding the smell. If there is a specific source — spilled milk, smoke, a gym bag left through a long weekend — we clean it first and then add an odour elimination treatment.",
        ],
      },
    ],
    faqs: [
      { q: "How long does an interior detail take?", a: "It depends on the size of the vehicle and its condition. We give you a time estimate with your quote rather than guessing here." },
      { q: "Will the carpets be soaking wet afterwards?", a: "No. Extraction pulls most of the water back out and we air the car out before we finish, so it is damp rather than wet." },
      { q: "Can you get pet hair out?", a: "Yes, though heavy pet hair is added as its own service because it takes real time to work out of the fibres." },
      { q: "Do I need to empty the car first?", a: "It helps. Take out anything valuable or fragile, and we will work around the rest." },
      { q: "Do you need to use my water or power?", a: "Tell us what you have available when you request a quote and we will confirm what we need for your job." },
    ],
    related: ["seat-carpet-shampoo", "leather-cleaning-protection"],
  },
  {
    slug: "exterior-detailing",
    path: "/services/exterior-detailing",
    name: "Exterior Detailing",
    h1: "Exterior car detailing in Maple Ridge",
    title: "Exterior Car Detailing Maple Ridge | M BROS",
    description:
      "Mobile exterior car detailing in Maple Ridge and the Lower Mainland. Hand wash, wheels, clay bar, wax and sealant, trim restoration. Open 7 days. Get a quote.",
    photo: "[PHOTO: water beading on a freshly sealed dark hood]",
    intro: [
      "Exterior car detailing in Maple Ridge is about removing what the road put on your paint and then leaving something behind that keeps it off. A mobile hand car wash is the start of that, not the whole job.",
      "We hand wash, decontaminate and protect the paint at your place. No brushes, no automated wash spinning grit across your clear coat.",
    ],
    included: [
      "Hand Wash & Microfiber Dry",
      "Wheel & Tire Deep Clean",
      "Clay Bar Paint Decontamination",
      "Paint Wax & Sealant",
      "Exterior Plastic Trim Restoration",
      "Streak-Free Glass Cleaning",
    ],
    whoFor: [
      "Daily commuters on Lougheed or Hwy 1 dealing with winter brine",
      "Dark cars where every bit of road film shows",
      "Cars parked under cedars collecting sap and needles",
      "Anyone about to list a car and wanting the paint to actually look sharp in photos",
    ],
    process: [
      { n: "01", title: "Wheels first", body: "Wheels, barrels and tires get cleaned before anything else so their grime does not end up on the paint." },
      { n: "02", title: "Hand wash", body: "Two-bucket hand wash top down with clean microfiber mitts, then a microfiber dry." },
      { n: "03", title: "Decontaminate", body: "Clay bar over the paint to lift bonded grit, rail dust and sap that washing leaves behind." },
      { n: "04", title: "Protect", body: "Wax or sealant applied by hand and levelled off." },
      { n: "05", title: "Trim and glass", body: "Plastic trim restored, glass cleaned inside and out, final walkaround with you." },
    ],
    body: [
      {
        h: "Hand wash and wax versus a drive-through",
        p: [
          "An automated wash drags whatever the last vehicle left on its brushes across your paint. On a dark car you can see the result under any streetlight. A hand wash and wax takes longer because the point is to lift dirt off rather than push it around.",
          "The wash is only step one. If you run your hand over a washed hood and it still feels gritty, that is bonded contamination — brake dust, rail dust from the tracks, sap. Clay bar work removes it, and paint that has been decontaminated actually holds wax or sealant instead of shedding it in a few weeks.",
        ],
      },
      {
        h: "Wheel and tire cleaning, plastic trim restoration",
        p: [
          "Brake dust is hot metal particles fused to the wheel face. Left alone through a Lower Mainland winter it pits the finish. We clean faces, barrels and tires properly rather than spraying and rinsing.",
          "Grey, chalky plastic trim is UV damage plus dried wash chemicals. Trim restoration brings the colour back to an even dark finish, which does more for how a car looks than most people expect.",
        ],
      },
    ],
    faqs: [
      { q: "Wax or sealant — which should I pick?", a: "Wax for depth of shine, sealant for durability through months of rain. Tell us how the car is stored and driven and we will give you a straight recommendation." },
      { q: "Can you wash my car in the rain?", a: "Rain is normal here, so we work around it. We will let you know if conditions mean the protection step should be rescheduled." },
      { q: "Will clay bar remove scratches?", a: "No. Clay removes bonded contamination from the surface. It does not correct scratches or swirls." },
      { q: "Do you clean engine bays too?", a: "Yes, engine bay detailing is available as an add-on. It is priced separately." },
      { q: "Can you do just a wash?", a: "Yes. Request a quote for a hand wash and microfiber dry and we will price it on its own." },
    ],
    related: ["clay-bar-wax-sealant", "headlight-restoration"],
  },
  {
    slug: "full-detail",
    path: "/services/full-detail",
    name: "Full Detail",
    h1: "Full car detail in Maple Ridge",
    title: "Full Car Detail Maple Ridge | M BROS Auto Detailing",
    description:
      "Complete mobile detailing in Maple Ridge — full interior and exterior in your driveway. Great before a lease return or sale. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: full detail complete, car in a customer's driveway at golden hour]",
    intro: [
      "A full car detail in Maple Ridge means the whole vehicle in one visit: everything on our exterior list and everything on our interior list, done in your driveway or at your workplace.",
      "This is the one people book for pre-sale car detailing, for a lease return inspection, or once or twice a year to reset a car that has been through a Lower Mainland winter.",
    ],
    included: [
      "Hand Wash & Microfiber Dry",
      "Wheel & Tire Deep Clean",
      "Clay Bar Paint Decontamination",
      "Paint Wax & Sealant",
      "Exterior Plastic Trim Restoration",
      "Interior Vacuuming",
      "Dashboard & Console Wipe-Down",
      "Interior Steam Cleaning",
      "Carpet & Seat Hot-Water Extraction",
      "Leather Cleaning & Conditioning",
      "Streak-Free Glass Cleaning",
    ],
    whoFor: [
      "Selling privately on Marketplace and wanting the photos to do the work",
      "Lease return coming up and a wear-and-tear inspection to pass",
      "A car that has never had a proper detail",
      "The spring reset after a winter of brine, grit and damp",
    ],
    process: [
      { n: "01", title: "Walkaround", body: "We go over the car with you inside and out and agree on the scope." },
      { n: "02", title: "Wash & decon", body: "Wheels, hand wash, microfiber dry, clay bar decontamination." },
      { n: "03", title: "Interior deep clean", body: "Vacuum, steam, hand cleaning, hot-water extraction through carpet and fabric." },
      { n: "04", title: "Protect", body: "Wax or sealant on the paint, trim restored, leather conditioned." },
      { n: "05", title: "Final inspection", body: "Glass last, then we walk the finished car with you." },
    ],
    body: [
      {
        h: "What a full detail is worth before you sell",
        p: [
          "A buyer looking at two similar cars on Marketplace picks the one that looks cared for. Clean carpet, clear headlights, dark trim and paint that beads water say the car was looked after, whether or not that is a fair conclusion.",
          "The same applies at a lease return. Interior wear and tear is what gets flagged, and a lot of what looks like wear is dirt ground into fabric that extraction removes.",
        ],
      },
      {
        h: "Complete mobile detailing, one visit",
        p: [
          "Because we are mobile, the car does not leave. You are not driving somewhere, waiting, and driving back. Book an early slot and a lot of this happens before your day starts.",
          "If your car needs something outside the standard scope — heavy pet hair, an odour problem, foggy headlights — tell us in the quote request and we will include it in the price rather than surprising you on the day.",
        ],
      },
    ],
    faqs: [
      { q: "Is a full detail interior and exterior?", a: "Yes. It is our complete interior list and our complete exterior list in one visit." },
      { q: "How long does it take?", a: "It varies by vehicle size and condition, so we give you a time estimate along with your quote." },
      { q: "Do you offer paint correction or ceramic coating?", a: "No. We do hand wash, decontamination, wax and sealant. We are straight with customers about what we do and do not offer." },
      { q: "Can I add pet hair removal or odour treatment?", a: "Yes, both can be added. Mention them in your quote request." },
      { q: "Can you do it at my workplace during the day?", a: "Yes, as long as there is a spot we can work in. Plenty of our full details happen in workplace lots." },
    ],
    related: ["interior-detailing", "exterior-detailing"],
  },
  {
    slug: "seat-carpet-shampoo",
    path: "/services/seat-carpet-shampoo",
    name: "Seat & Carpet Shampoo",
    h1: "Car seat shampoo in Maple Ridge",
    title: "Car Seat Shampoo Maple Ridge | M BROS Auto Detailing",
    description:
      "Car carpet cleaning and seat shampoo in Maple Ridge — hot water extraction and car steam cleaning at your home. Open 7 days, 5 AM – 7 PM. Get a quote.",
    photo: "[PHOTO: extraction wand pulling dirty water from a rear bench seat]",
    intro: [
      "Car seat shampoo in Maple Ridge means hot-water extraction, not a spray bottle and a brush. Hot water and solution go into the fabric, and the machine pulls it back out with the dirt suspended in it.",
      "This is car upholstery cleaning and car carpet cleaning done at your place, paired with interior steam cleaning for the seams and hard edges the extractor cannot reach.",
    ],
    included: ["Carpet & Seat Hot-Water Extraction", "Interior Steam Cleaning", "Interior Vacuuming"],
    whoFor: [
      "Carpets that have absorbed a winter of wet boots and road salt",
      "Fabric seats with coffee, food or kid-related history",
      "Cars that smell damp no matter how long the windows are open",
      "Anyone getting a car ready to sell where the interior lets it down",
    ],
    process: [
      { n: "01", title: "Assess", body: "We check the stains with you and tell you honestly what is likely to lift and what is dye damage." },
      { n: "02", title: "Vacuum", body: "Full vacuum first so extraction is not just moving loose dirt around." },
      { n: "03", title: "Steam", body: "Steam into seams, edges and hard surfaces around the fabric." },
      { n: "04", title: "Extract", body: "Hot-water extraction through carpet, mats and fabric seats, passing until the water runs clean." },
      { n: "05", title: "Dry down", body: "Extra dry passes and airing out so the car is damp, not soaked, when we leave." },
    ],
    body: [
      {
        h: "What hot water extraction actually removes",
        p: [
          "Most of what makes a car interior look tired is not on the surface. It is fine grit and dissolved road salt that soaked in while the carpet was wet and dried in place. Extraction rewets it, breaks it loose and takes it out of the vehicle.",
          "You can see it happen — the water in the recovery tank tells you what was in the carpet. On a Lower Mainland commuter car it usually comes out grey-brown on the first pass.",
        ],
      },
      {
        h: "Car steam cleaning as part of the job",
        p: [
          "Steam handles what extraction cannot reach: seat rails, belt anchors, the plastic between the seat and the console, and the edges of the carpet where it meets trim.",
          "Together they cover the whole soft-and-hard boundary inside a car, which is where most of the grime that you can smell actually lives.",
        ],
      },
    ],
    faqs: [
      { q: "Will every stain come out?", a: "No, and we will tell you which ones before we start. Dye transfer and bleach damage are permanent. Most food, drink and dirt stains lift well." },
      { q: "How long until the seats are dry?", a: "They come out damp rather than wet. Drying time depends on weather and airflow, so we will give you a realistic idea on the day." },
      { q: "Is it safe on older fabric?", a: "Yes, with the right pressure and temperature. We check the material before starting." },
      { q: "Can you do just the carpets and mats?", a: "Yes. Ask for carpets only when you request a quote." },
      { q: "Do you do leather seats too?", a: "Leather is cleaned and conditioned rather than extracted — that is a separate service." },
    ],
    related: ["interior-detailing", "odour-removal"],
  },
  {
    slug: "leather-cleaning-protection",
    path: "/services/leather-cleaning-protection",
    name: "Leather Cleaning & Protection",
    h1: "Leather seat cleaning in Maple Ridge",
    title: "Leather Seat Cleaning Maple Ridge | M BROS",
    description:
      "Leather seat cleaning, leather conditioning and leather seat protection in Maple Ridge. Mobile service at your home. Open 7 days, 5 AM – 7 PM. Get a quote.",
    photo: "[PHOTO: driver's leather bolster mid-clean, one half done]",
    intro: [
      "Leather seat cleaning in Maple Ridge is mostly about the driver's seat. The outer bolster takes every entry and exit, and that is where body oils, denim dye and grit break the finish down first.",
      "We clean the leather, condition it, and can add fabric and leather seat protection so the next spill has somewhere to sit before it soaks in.",
    ],
    included: ["Leather Cleaning & Conditioning", "Upholstery & Leather Stain Shield", "Interior Vacuuming"],
    whoFor: [
      "Light-coloured leather picking up dye from jeans",
      "Driver's bolsters starting to look shiny and worn",
      "Leased vehicles heading back for inspection",
      "Anyone who wants leather to stay soft through dry winter cabin heat",
    ],
    process: [
      { n: "01", title: "Inspect", body: "We check for cracking, wear-through and dye transfer, and tell you what cleaning will and will not fix." },
      { n: "02", title: "Vacuum and clear seams", body: "Grit out of the perforations and seams first, since grit is what does the damage." },
      { n: "03", title: "Clean", body: "Worked gently by hand across the panels, bolsters and seat backs." },
      { n: "04", title: "Condition", body: "Moisture back into the hide, then buffed so nothing is left greasy or slippery." },
      { n: "05", title: "Protect", body: "Optional stain shield on leather and adjacent fabric." },
    ],
    body: [
      {
        h: "Why leather cracks, and what conditioning does",
        p: [
          "Automotive leather is coated. What cracks is that coating, and it cracks when it dries out and flexes over grit. Conditioning keeps the material pliable so daily flexing does not split the surface.",
          "Cars alternate between cold damp and blasting cabin heat here, which is harder on leather than a steady climate. Twice a year is a reasonable rhythm for most cars.",
        ],
      },
      {
        h: "Leather seat protection and fabric protection for car seats",
        p: [
          "Our stain shield puts a barrier on leather and fabric so coffee, rain-soaked jackets and dropped food bead for a moment instead of going straight into the material.",
          "It buys you time to wipe. It does not make seats spill-proof, and we will not tell you otherwise.",
        ],
      },
    ],
    faqs: [
      { q: "Can you fix cracked leather?", a: "No. Cleaning and conditioning slow further damage but cracks and wear-through are permanent." },
      { q: "Will blue jean dye come out of light leather?", a: "Often partly, sometimes fully, depending on how long it has been there. We will tell you what we expect before starting." },
      { q: "Will the seats be slippery?", a: "No. We buff the conditioner off so the finish is matte and dry to the touch." },
      { q: "How long does the stain shield last?", a: "It wears with use, especially on the driver's seat. Most people reapply when they book their next interior detail." },
      { q: "Do you do vinyl and leatherette?", a: "Yes, the same clean-and-protect process works on coated vinyl seating." },
    ],
    related: ["interior-detailing", "seat-carpet-shampoo"],
  },
  {
    slug: "clay-bar-wax-sealant",
    path: "/services/clay-bar-wax-sealant",
    name: "Clay Bar, Wax & Sealant",
    h1: "Car wax and sealant in Maple Ridge",
    title: "Car Wax and Sealant Maple Ridge | M BROS",
    description:
      "Clay bar treatment, hand wax and paint sealant in Maple Ridge. Mobile paint decontamination and protection at your home. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: clay bar on a wet panel, contamination visible on the clay]",
    intro: [
      "Car wax and sealant in Maple Ridge only works if the paint underneath is clean. That is why clay bar treatment comes first: it lifts the bonded grit a wash leaves behind so the protection has bare paint to grab.",
      "We do all of it in your driveway — hand wash, clay bar decontamination, then hand wax or paint sealant depending on what you want out of it.",
    ],
    included: ["Hand Wash & Microfiber Dry", "Clay Bar Paint Decontamination", "Paint Wax & Sealant"],
    whoFor: [
      "Paint that feels rough after a wash",
      "Cars parked under cedars picking up sap all summer",
      "Commuters coating the car in winter brine on Hwy 1",
      "Dark paint where road film shows every time",
    ],
    process: [
      { n: "01", title: "Wash", body: "Wheels then a two-bucket hand wash and microfiber dry." },
      { n: "02", title: "Clay", body: "Clay bar with lubricant across every painted panel and the glass." },
      { n: "03", title: "Wipe down", body: "Panels wiped clean so nothing is trapped under the protection." },
      { n: "04", title: "Apply", body: "Wax or sealant applied by hand, panel by panel." },
      { n: "05", title: "Level and inspect", body: "Buffed off, inspected in the light, walked with you." },
    ],
    body: [
      {
        h: "What a clay bar treatment removes",
        p: [
          "Run your hand over a freshly washed hood through a plastic bag. The roughness you feel is bonded contamination: brake dust, industrial fallout, rail dust from the tracks, tree sap, overspray. Washing does not move it because it is stuck in the clear coat, not sitting on it.",
          "Clay pulls it out mechanically. After claying, paint feels like glass, and anything applied afterwards actually bonds instead of sitting on top of grit.",
        ],
      },
      {
        h: "Hand wax or paint sealant in BC rain",
        p: [
          "Wax gives warmth and depth, especially on dark colours. In our climate it has a shorter working life because rain and road film wear at it constantly.",
          "A sealant bonds to the paint and generally holds up longer against the same conditions. For a daily driver parked outside from October to April, that longevity usually matters more than the extra depth. For a weekend car that lives in a garage, wax is a fair choice.",
          "Either way you get the same practical result while it lasts: water sheets off, dirt has less to hold on to, and the next wash takes less work.",
        ],
      },
    ],
    faqs: [
      { q: "Does clay bar damage paint?", a: "Not when used with plenty of lubricant and a clean piece of clay. If clay is dropped it gets replaced, not reused." },
      { q: "How long does a sealant last on a car parked outside?", a: "It depends on the product, the weather and how often the car is washed, so we give you a realistic expectation on the day rather than a marketing number." },
      { q: "Will this remove swirl marks?", a: "No. This is decontamination and protection, not paint correction. We do not offer paint correction." },
      { q: "Can you do wax and sealant on a leased car?", a: "Yes, it is protective and reversible with normal washing." },
      { q: "Do I need clay every time?", a: "No. Most cars here benefit once or twice a year. Between those, a wash and a top-up of protection is enough." },
    ],
    related: ["exterior-detailing", "headlight-restoration"],
  },
  {
    slug: "headlight-restoration",
    path: "/services/headlight-restoration",
    name: "Headlight Restoration",
    h1: "Headlight restoration in Maple Ridge",
    title: "Headlight Restoration Maple Ridge | M BROS",
    description:
      "Foggy headlight repair and yellow headlight fix in Maple Ridge. Mobile headlight restoration at your home or work. Open 7 days, 5 AM – 7 PM. Get a quote.",
    photo: "[PHOTO: one headlight restored, one still yellowed, same vehicle]",
    intro: [
      "Headlight restoration in Maple Ridge is one of the fastest changes you can make to how a car looks — and it is a safety job as much as a cosmetic one. A yellow, hazy lens scatters light instead of putting it on the road, and it gets dark early here from October on.",
      "We do foggy headlight repair on site: sand the oxidised layer off, polish the lens back to clear, and seal it so it does not go yellow again in a month.",
    ],
    included: ["Headlight Restoration", "Streak-Free Glass Cleaning"],
    whoFor: [
      "Cars ten years and older with yellowed lenses",
      "Anyone failing to see well on unlit roads out past 232nd or up Burke Mountain",
      "Pre-sale cars where cloudy lights age the whole front end",
      "Vehicles parked outside where UV has done its work",
    ],
    process: [
      { n: "01", title: "Mask", body: "Paint and trim around the lens taped off so nothing gets touched." },
      { n: "02", title: "Sand", body: "Wet sanding through grades to take the oxidised layer off evenly." },
      { n: "03", title: "Polish", body: "Machine polish back to clarity." },
      { n: "04", title: "Seal", body: "A UV-resistant sealant on the lens, which is the step that decides how long it lasts." },
      { n: "05", title: "Check", body: "Both lenses compared side by side before we call it done." },
    ],
    body: [
      {
        h: "Why headlights go yellow",
        p: [
          "Modern lenses are polycarbonate with a factory UV coating. That coating breaks down over years of sun and weather, and once it fails the plastic underneath oxidises. That is the yellow haze.",
          "Wiping the outside does nothing because the damage is in the plastic. Restoration means removing the failed layer and putting a new protective layer on.",
        ],
      },
      {
        h: "Yellow headlight fix that holds",
        p: [
          "Plenty of cheap restorations skip the sealing step. They look great for a few weeks and then yellow faster than before, because the lens is now bare plastic facing the sun.",
          "Sealing is not optional in our process. It is the difference between a job that lasts and a job you pay for twice.",
        ],
      },
    ],
    faqs: [
      { q: "How long does headlight restoration last?", a: "It depends on how the car is parked and how much sun the lenses take. Sealing is what extends it, and we always seal." },
      { q: "Can you fix lenses that are cracked or have moisture inside?", a: "No. Cracks and internal condensation are a housing problem, not a surface one." },
      { q: "Do you do one headlight or both?", a: "Both, so they match. A single restored lens next to a yellow one looks worse than leaving them." },
      { q: "Does it improve night visibility?", a: "Yes. A clear lens directs the beam instead of scattering it, which is noticeable on unlit roads." },
      { q: "Can it be done with other services?", a: "Yes, it is commonly added to an exterior or full detail." },
    ],
    related: ["exterior-detailing", "full-detail"],
  },
  {
    slug: "engine-bay-detailing",
    path: "/services/engine-bay-detailing",
    name: "Engine Bay Detailing",
    h1: "Engine bay cleaning in Maple Ridge",
    title: "Engine Bay Cleaning Maple Ridge | M BROS",
    description:
      "Mobile engine bay cleaning and engine bay detailing in Maple Ridge. Careful low-pressure cleaning at your home. Open 7 days, 5 AM – 7 PM. Get a quote.",
    photo: "[PHOTO: engine bay half cleaned, grime line visible across the cover]",
    intro: [
      "Engine bay cleaning in Maple Ridge is worth doing for two reasons: a clean bay makes leaks and worn parts visible, and it is the first thing a careful buyer opens when they look at a used car.",
      "Engine bay detailing is done carefully — low pressure, water kept away from what should stay dry, and everything dressed afterwards so plastics do not look washed out.",
    ],
    included: ["Engine Bay Detail"],
    whoFor: [
      "Cars being sold privately where a buyer will look under the hood",
      "Older vehicles with years of dust, oil film and leaf debris",
      "Anyone trying to spot where a small leak is coming from",
      "Trucks and work vehicles that pick up gravel dust",
    ],
    process: [
      { n: "01", title: "Cool down", body: "We do not touch a hot engine. The bay has to be cool before anything starts." },
      { n: "02", title: "Cover", body: "Sensitive electrical connectors, the alternator and intake areas are protected." },
      { n: "03", title: "Clean", body: "Degrease and agitate by hand and brush, with low pressure only." },
      { n: "04", title: "Rinse and dry", body: "Controlled rinse, then blown and wiped dry rather than left to sit wet." },
      { n: "05", title: "Dress", body: "Plastics and hoses dressed to an even finish, not a greasy shine." },
    ],
    body: [
      {
        h: "Is engine bay cleaning safe?",
        p: [
          "It is when it is done with care. What causes problems is a pressure washer aimed at connectors, fuse boxes and coil packs. We do not work that way.",
          "The whole job is low pressure and hand agitation. Anything that should not get soaked is covered first, and the bay is dried rather than left damp.",
        ],
      },
      {
        h: "What a clean bay tells you",
        p: [
          "Once the grime is off, a fresh oil weep, a leaking hose or a cracked belt is obvious. Mechanics see it faster, and so do you.",
          "For anyone selling a car, an engine bay that has clearly been looked after does a lot of quiet work in a buyer's head.",
        ],
      },
    ],
    faqs: [
      { q: "Could water get into the electronics?", a: "That risk is managed by covering sensitive components and using low pressure. It is why we do not blast a bay with a pressure washer." },
      { q: "Can you clean the bay on a newer car with lots of plastic covers?", a: "Yes. Modern bays with covers are usually straightforward." },
      { q: "Will you find leaks for me?", a: "We are detailers, not mechanics. A clean bay makes leaks visible; diagnosing them is for your shop." },
      { q: "Does it need to be done often?", a: "No. Once a year, or before a sale, is plenty for most vehicles." },
      { q: "Can it be booked on its own?", a: "Yes, though most people add it to an exterior or full detail." },
    ],
    related: ["exterior-detailing", "full-detail"],
  },
  {
    slug: "pet-hair-removal",
    path: "/services/pet-hair-removal",
    name: "Pet Hair Removal",
    h1: "Pet hair removal from your car",
    title: "Pet Hair Removal Car | M BROS Auto Detailing",
    description:
      "Mobile pet hair removal for cars across Maple Ridge to Vancouver. Dog hair removal from car interior carpet and seats. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: rear cargo area half cleared of embedded dog hair]",
    intro: [
      "Pet hair removal in a car is its own job, not something a vacuum finishes. Dog hair works itself into carpet and fabric weave point-first and stays there, and a shop vac will pass over it without lifting any of it.",
      "This is dog hair removal for car interiors done in your driveway, and it is one of the most common requests we get around Rocky Point, Golden Ears and every off-leash park between here and Kits.",
    ],
    included: ["Pet Hair Removal", "Interior Vacuuming", "Interior Steam Cleaning"],
    whoFor: [
      "Dogs that ride in the back every weekend",
      "Cargo areas and folding rear seats full of embedded hair",
      "Cars being sold or returned where hair is a deal-breaker",
      "Anyone allergic riding in a car that a pet uses",
    ],
    process: [
      { n: "01", title: "Assess", body: "We check how deep the hair is set, since a short-haired dog and a husky are different jobs." },
      { n: "02", title: "Loosen", body: "Hair worked up out of the weave with rubber and bristle tools before any vacuum touches it." },
      { n: "03", title: "Vacuum", body: "Pass after pass across carpet, seats, cargo area, seat backs and rails." },
      { n: "04", title: "Steam and detail", body: "Steam on seams, edges and vents where hair collects." },
      { n: "05", title: "Final pass", body: "Second full pass, since hair always surfaces after the first round." },
    ],
    body: [
      {
        h: "Why dog hair is so hard to get out",
        p: [
          "Pet hair has a scale structure that catches in fabric fibres. It does not sit on the surface, it works down into the weave and locks in place, especially in the tight loop carpet used in cargo areas.",
          "Suction alone does not beat that grip. The hair has to be mechanically lifted out first, which is slow and is why this is priced as its own service.",
        ],
      },
      {
        h: "Beach sand, trail dirt and hair together",
        p: [
          "Around here, hair rarely comes alone. There is sand from Spanish Banks or Jericho and mud from Golden Ears mixed in with it.",
          "If the carpet has all three, hot-water extraction after the hair removal is the combination that actually resets the interior.",
        ],
      },
    ],
    faqs: [
      { q: "Can you get all the hair out?", a: "In most cars, effectively all of it. In heavily used cargo areas with long-haired dogs, some hair set deep in the loop carpet can persist, and we will tell you if we see that." },
      { q: "Do you need to remove seats?", a: "No. We work around and under seats with the tools we bring." },
      { q: "Should I add extraction?", a: "If there is sand or mud in with the hair, yes. Hair first, then extraction." },
      { q: "Can you deal with the pet smell too?", a: "Yes, with an odour elimination treatment after the cleaning." },
      { q: "Which cities do you do this in?", a: "All eight we serve, from Maple Ridge through to Vancouver." },
    ],
    related: ["odour-removal", "seat-carpet-shampoo"],
  },
  {
    slug: "odour-removal",
    path: "/services/odour-removal",
    name: "Odour Removal",
    h1: "Car odour removal, Maple Ridge to Vancouver",
    title: "Car Odour Removal | M BROS Auto Detailing",
    description:
      "Mobile car odour removal and smoke smell removal for cars from Maple Ridge to Vancouver. We clean the source, then treat it. Open 7 days, 5 AM – 7 PM.",
    photo: "[PHOTO: interior mid-treatment with doors open in a driveway]",
    intro: [
      "Car odour removal works in one order only: clean the source, then treat what is left. Spraying a car odor treatment over dirty carpet hides the problem for about a week and then it comes back stronger.",
      "We handle smoke smell removal in cars, damp and musty smells, spilled milk, gym gear and pet smells, at your home or workplace anywhere from Maple Ridge to Vancouver.",
    ],
    included: ["Odour Elimination Treatment", "Interior Steam Cleaning", "Carpet & Seat Hot-Water Extraction"],
    whoFor: [
      "A car bought used that came with someone else's smoke",
      "Interiors that have smelled damp since the fall rain started",
      "Spilled milk, food or drink that has had time to work in",
      "Pet smell that survives every air freshener",
    ],
    process: [
      { n: "01", title: "Find the source", body: "Under seats, under mats, in the trunk well, in the vents. The smell always has a location." },
      { n: "02", title: "Deep clean", body: "Steam on hard surfaces, hot-water extraction through carpet and fabric." },
      { n: "03", title: "Dry", body: "Getting moisture out, because damp is a smell source in its own right here." },
      { n: "04", title: "Treat", body: "Odour elimination treatment applied to the cleaned interior." },
      { n: "05", title: "Air out", body: "Doors open, cabin aired, then checked before we finish." },
    ],
    body: [
      {
        h: "Why smoke is the hardest one",
        p: [
          "Smoke residue coats everything, including surfaces you do not think about: the headliner side of the sun visors, the inside of the windshield, the vents. That is why a car can smell fine at first and then smell like smoke as soon as the heat is turned on.",
          "We clean the accessible surfaces properly and then treat. We will be honest with you about how much of it we expect to remove in one visit rather than promising a perfect result up front.",
        ],
      },
      {
        h: "Damp: the Lower Mainland special",
        p: [
          "From October to April, water gets tracked in faster than it evaporates. It sits in the padding under the carpet and feeds a musty smell that no spray fixes.",
          "Extraction pulls the water and the material in it back out. That is usually the whole fix — no treatment needed beyond a good dry-down.",
        ],
      },
    ],
    faqs: [
      { q: "Can you guarantee the smell will be gone?", a: "No, and anyone who guarantees it before seeing the car is guessing. We clean the source thoroughly and treat it, and we will tell you what we expect after the walkaround." },
      { q: "Do you treat smoke smell?", a: "Yes. Smoke needs surface cleaning first, because the residue is what holds the smell." },
      { q: "Will the car smell like chemicals afterwards?", a: "The goal is neutral, not perfumed. We air the car out before we finish." },
      { q: "Can you deal with spilled milk?", a: "Yes, and extraction is essential for it. Milk goes into the padding, which is why the smell keeps returning." },
      { q: "Is this a standalone service?", a: "It can be, but it is almost always paired with interior cleaning, because that is what makes it work." },
    ],
    related: ["seat-carpet-shampoo", "pet-hair-removal"],
  },
];

export const serviceBySlug = (slug: string) => servicePages.find((s) => s.slug === slug)!;
