/** Guides. Paragraphs support [link text](/path) markup. */
export type Post = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  description: string;
  date: string;
  excerpt: string;
  sections: { h?: string; p: string[]; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "car-detailing-cost-maple-ridge-vancouver",
    path: "/blog/car-detailing-cost-maple-ridge-vancouver",
    title: "How Much Does Car Detailing Cost in Maple Ridge? (2026)",
    h1: "How much does car detailing cost in Maple Ridge & Metro Vancouver? (2026 price guide)",
    description:
      "What car detailing costs in Maple Ridge and Metro Vancouver in 2026, with real prices by vehicle size, and what pushes a job to the top of the range.",
    date: "2026-09-10",
    excerpt:
      "Real 2026 prices by vehicle size for hand washes, interior details and full details, and what moves a job up or down the range.",
    sections: [
      {
        p: [
          "Plenty of detailers make you call before they'll talk numbers. We'd rather put ours on the page, explain what moves a job up or down, and let you decide what your car actually needs. Every price below is a real M BROS price for 2026, in Canadian dollars.",
        ],
      },
      {
        h: "The short answer",
        p: [
          "For a coupe or sedan, a hand wash is $40 – $60, an interior maintenance clean is $65 – $95, and a full detail runs $105 – $155 for Basic or $320 – $410 for Deep. SUVs, trucks, large SUVs and minivans cost more because there's more car to clean. The full tables are on our [pricing page](/pricing).",
        ],
      },
      {
        h: "What you get at each price",
        p: [
          "On the outside there are two levels. Hand Wash & Dry ($40 – $80 depending on size) is a foam pre-soak, a hand wash and a towel dry. Exterior Paint Decontamination & Protection ($130 – $220) adds a clay bar treatment, iron decontamination and a long-lasting machine wax.",
          "Wheels have their own two levels: Wheel & Tire Cleaning ($30 – $50) for faces, tires and tire shine, and Wheel & Tire Restoration ($60 – $100) for deep brake dust extraction, barrels, fender wells and tire sealant.",
          "Inside, Interior Maintenance Clean ($65 – $130) is a light vacuum, dashboard and cup holder wipe-down and glass cleaning. Interior Deep Restoration ($190 – $350) is the big one: hot-water extraction of carpets and seats, steam cleaning of every vent and crevice, leather conditioning and stain removal.",
        ],
      },
      {
        h: "Why prices are a range",
        p: [
          "Two things move a job within its range: size and condition. A large SUV or minivan has more paint, more glass and often a third row of seats. And a three-year-old sedan that's washed every month isn't the same job as one that's done a winter of Hwy 1 commutes with a dog in the back.",
          "Where your car lands is confirmed once we've seen it. If you text a few photos with your [quote request](/contact), we can usually give you a tighter number up front.",
        ],
      },
      {
        h: "Basic or Deep: where the money goes",
        p: [
          "Basic services pay for time spent keeping a car clean. They're the right call when the car is already in decent shape and you want it to stay that way.",
          "Deep services pay for fixing what's built up. If you can feel grit when you run your hand over the hood after a wash, or the carpet smells damp when the heat comes on, a Basic service will make the car look better for a week. Deep deals with the cause: bonded contamination on the paint, and dirt and moisture down in the carpet padding.",
        ],
      },
      {
        h: "What a full detail costs",
        p: [
          "A full detail is one exterior service plus one interior service in the same visit. Here's what the two combinations come to:",
        ],
        list: [
          "Basic Full Detail (Hand Wash & Dry + Interior Maintenance Clean): $105 – $155 coupe/sedan, $130 – $180 SUV/truck, $155 – $210 large SUV/minivan",
          "Deep Full Detail (Exterior Paint Decontamination & Protection + Interior Deep Restoration): $320 – $410 coupe/sedan, $385 – $480 SUV/truck, $450 – $570 large SUV/minivan",
        ],
      },
      {
        h: "Add-ons",
        p: [
          "Add-ons are flat-priced rather than by vehicle size, and they can be combined with any service: Pet Hair Removal for light shedding ($35 – $50), Pet Hair Extraction for heavy, embedded hair ($60 – $90+), Headlight Restoration ($75 – $100 for the pair) and an Engine Bay Detail ($60 – $90).",
          "Exterior plastic trim restoration, odour elimination and the upholstery and leather stain shield are priced by quote, because they vary too much from car to car to price honestly in advance.",
        ],
      },
      {
        h: "Is a Deep detail worth it?",
        p: [
          "For most cars in the Lower Mainland, a Deep detail a couple of times a year is money well spent. It's cheaper to protect paint than to fix it, and extraction deals with the damp that makes interiors smell. We've laid out a season-by-season rhythm in [how often you should detail your car here](/blog/how-often-detail-car-lower-mainland).",
          "If you're selling, a Deep Full Detail is usually the first thing to do. See [how to prep your car for sale](/blog/prep-car-for-sale-metro-vancouver).",
        ],
      },
      {
        h: "Getting an accurate quote",
        p: [
          "Send us the year, make and model, which size class it falls into, what's bothering you about it, and where it's parked. Use the [quote form](/contact), or call or text (672) 472-1024. We're mobile and serve [Maple Ridge](/car-detailing-maple-ridge) through to Vancouver, 7 days a week from 5 AM.",
        ],
      },
    ],
  },
  {
    slug: "how-often-detail-car-lower-mainland",
    path: "/blog/how-often-detail-car-lower-mainland",
    title: "How Often to Detail Your Car in the Lower Mainland",
    h1: "How often should you detail your car in the Lower Mainland?",
    description:
      "A season-by-season detailing schedule for Lower Mainland drivers: rain, winter brine, brake dust and spring pollen, and the services each one calls for.",
    date: "2026-09-10",
    excerpt:
      "Generic advice says every three to six months. Here's a schedule built around rain, brine, brake dust and pollen instead.",
    sections: [
      {
        p: [
          "The usual advice is to detail your car every three to six months. That's fine for somewhere dry. In the Lower Mainland, the calendar matters more than the interval: what the car needs in October is different from what it needs in April.",
          "Here's a schedule built around what our roads and weather actually do to a car.",
        ],
      },
      {
        h: "Fall: protect before the rain",
        p: [
          "Late September and October is the time for a Deep exterior. [Clay bar, iron decontamination and machine wax](/services/clay-bar-wax) take off a summer's worth of sap, bug residue and brake dust, and put down a layer that rain and road film wear at instead of your clear coat.",
          "It's also the time to deal with hazy headlights. It gets dark early from here on, and a yellowed lens scatters light instead of putting it on the road. [Headlight restoration](/services/headlight-restoration) is $75 – $100 for the pair.",
        ],
      },
      {
        h: "Winter: keep the brine moving",
        p: [
          "When the temperature drops, brine goes down on Lougheed, Hwy 1 and the bridges, and it dries white on the lower doors and rockers. It shouldn't sit there. A [Hand Wash & Dry](/services/exterior-detailing) every few weeks through the salty stretch keeps it moving, and [Wheel & Tire Cleaning](/services/wheel-tire-cleaning) stops brake dust and brine baking onto the wheels together.",
          "Inside, winter is wet boots and soaked floor mats. An Interior Maintenance Clean keeps the loose dirt from getting ground in, but it won't dry out the padding. That's spring's job.",
        ],
      },
      {
        h: "Spring: the reset",
        p: [
          "March and April are when a [Deep Full Detail](/services/full-detail) earns its keep. Outside, decontamination strips the winter's embedded iron and road film. Inside, hot-water extraction pulls out the salt and grit that soaked into the carpet, and the moisture feeding that musty smell.",
          "If the car smells damp even after a dry week, that's water in the padding, and [Interior Deep Restoration](/services/interior-detailing) is the fix. Air fresheners aren't.",
        ],
      },
      {
        h: "Summer: sap, pollen and road trips",
        p: [
          "Cars parked under cedars and maples collect sap that etches if it's left through a hot week, and pollen coats everything in late spring. Regular hand washes handle most of it; bonded sap needs a clay bar.",
          "Summer is also beach and trail season. Sand from Spanish Banks and mud from Golden Ears end up in the carpet, usually with dog hair mixed in. [Pet hair removal](/services/pet-hair-removal) starts at $35 for light shedding.",
        ],
      },
      {
        h: "A simple rhythm by driver",
        p: ["Every car is different, but these are good starting points:"],
        list: [
          "Daily commuter, parked outside: Deep exterior in fall, hand wash every few weeks in winter, Deep Full Detail in spring.",
          "Family car or dog car: Interior Maintenance Clean every month or two, Interior Deep Restoration twice a year, pet hair as needed.",
          "Weekend car, garaged: Deep Full Detail once a year, hand washes when it's been driven in the rain.",
          "Work truck: Interior Deep Restoration when the cab starts to smell, Wheel & Tire Restoration after a muddy season.",
        ],
      },
      {
        h: "Signs you're overdue",
        p: ["If any of these sound familiar, the car needs more than a wash:"],
        list: [
          "The paint feels gritty after washing",
          "Water sits in flat patches instead of beading",
          "The wheel barrels are dark brown",
          "The cabin smells musty when the heat or AC comes on",
          "There are white salt lines on the carpet",
          "The headlights look yellow or cloudy",
        ],
      },
      {
        h: "Book it around your schedule",
        p: [
          "We're mobile and open 7 days a week from 5 AM to 7 PM, so the car can be done in your driveway or at work without you giving up a Saturday. See our [prices](/pricing), or [get a quote](/contact) for your car. We cover everywhere from Maple Ridge to [Coquitlam](/car-detailing-coquitlam) and Vancouver.",
        ],
      },
    ],
  },
  {
    slug: "prep-car-for-sale-metro-vancouver",
    path: "/blog/prep-car-for-sale-metro-vancouver",
    title: "How to Prep Your Car for Sale in Metro Vancouver",
    h1: "How to prep your car before selling it in Metro Vancouver (and what a pre-sale detail is worth)",
    description:
      "A step-by-step checklist for getting a car ready to sell privately or trade in around Metro Vancouver, and which detailing actually makes a difference.",
    date: "2026-09-10",
    excerpt:
      "A practical checklist for selling on Marketplace or trading in, and which parts of a detail buyers actually notice.",
    sections: [
      {
        p: [
          "Buyers on Marketplace, Craigslist and AutoTrader scroll past dozens of listings for the same model. They decide which ones to message from the photos, then decide what to offer in the first five minutes of seeing the car. Both of those moments come down to how the car looks and smells.",
          "Here's how to get a car ready, in order.",
        ],
      },
      {
        h: "Step 1: clear it out",
        p: [
          "Take everything out: the trunk, the glovebox, the door pockets, under the seats. Remove the phone mount, the air freshener and the kids' car seats. A buyer should be able to picture the car as theirs, not yours.",
        ],
      },
      {
        h: "Step 2: gather the paperwork",
        p: [
          "Pull together the service records and receipts, both sets of keys and the owner's manual. A folder of oil change receipts does more for your price than most people expect. Check ICBC's guidance on private sales so the transfer is ready to go when you find a buyer.",
        ],
      },
      {
        h: "Step 3: fix the cheap stuff",
        p: [
          "Replace burnt-out bulbs and streaky wiper blades, top up the washer fluid, and deal with any warning lights you can. Small, cheap problems give buyers easy reasons to knock money off.",
        ],
      },
      {
        h: "Step 4: get the detail that buyers notice",
        p: [
          "Start with the interior, because that's where buyers spend their time and where smells live. Stained seats and a musty or smoky smell are the fastest ways to lose a buyer. [Interior Deep Restoration](/services/interior-detailing) (extraction, steam, leather conditioning and stain removal) takes care of most of it, and [odour elimination](/services/odour-removal) handles what's left.",
          "Outside, [decontamination and machine wax](/services/clay-bar-wax) give the paint depth in photos. Then look at the details that age a car:",
        ],
        list: [
          "Headlights: yellowed lenses make a car look years older. Restoration is $75 – $100 for the pair.",
          "Wheels: they're in every listing photo. Wheel & Tire Restoration removes baked-on brake dust.",
          "Engine bay: serious buyers open the hood. A clean bay suggests a car that was looked after. An Engine Bay Detail is $60 – $90.",
          "Pet hair: a deal-breaker for buyers with allergies. Heavy hair extraction is $60 – $90+.",
        ],
      },
      {
        h: "What a pre-sale detail is worth",
        p: [
          'Nobody can honestly promise that a detail adds a set dollar amount to your sale. What it reliably does is remove things for a buyer to point at while they negotiate. Stains, smells, hazy lights and a grimy engine bay all turn into "I\'d need to deal with that" and a lower offer.',
          "A [Deep Full Detail](/services/full-detail) runs $320 – $410 for a coupe or sedan and up to $570 for a large SUV or minivan. The Basic Full Detail, from $105, is enough if the car is already in good shape and just needs to look its best.",
        ],
      },
      {
        h: "Step 5: photograph it properly",
        p: [
          "Take photos within a day or two of the detail, before the car picks up road film again. An overcast day, which we have plenty of, gives soft light and fewer reflections than harsh sun. Avoid shooting right after rain, when water spots show on dark paint.",
        ],
        list: [
          "Front three-quarter, rear three-quarter, both sides, front and back",
          "Driver's seat, rear seats, dashboard with the car on (no warning lights), trunk",
          "Wheels and tires, engine bay, odometer",
          "Close-ups of any damage, so buyers trust the rest of the photos",
        ],
      },
      {
        h: "Lease returns",
        p: [
          "The same logic applies to a lease return. Interior wear is what gets flagged, and a lot of what looks like wear is ground-in dirt that extraction removes. Book the detail a few days before the inspection.",
        ],
      },
      {
        h: "Book it before you list",
        p: [
          "We're mobile, so the car doesn't have to go anywhere. We come to you anywhere from Maple Ridge to [Burnaby](/car-detailing-burnaby) and Vancouver, 7 days a week from 5 AM. Check our [prices](/pricing) or [get a quote](/contact).",
        ],
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
