# Detailer's Driveway

Build a fast, SEO-first, multi-page marketing website for M BROS Auto Detailing, a mobile auto detailing business run by two brothers in British Columbia's Lower Mainland. They serve Maple Ridge, Pitt Meadows, Port Coquitlam, Coquitlam, Port Moody, Burnaby, New Westminster, and Vancouver.

The site has two jobs: rank on Google for local detailing searches in those cities, and turn visitors into quote requests and phone calls. It must look like two real, hands-on local detailers built it. It must not look like a generic AI template.

0. BUSINESS FACTS (use exactly; never invent anything not listed here)
Put all business facts in one file, src/data/business.ts, and all prices in src/data/pricing.ts, so they can be updated in one place later.

Business name: M BROS Auto Detailing. Use this exact spelling everywhere.
Service model: 100% mobile. Two brothers who come to the customer's home or workplace. There is no shop and no public address. Never show or imply a storefront, never say "visit us" or "drop off your car", and never use the words "in-shop".
Base: Maple Ridge, BC. This is a service-area business with no street address.
Phone: (672) 472-1024. Link it as tel:+16724721024, and add a click-to-text link sms:+16724721024.
Email: mbros.autodetailing@gmail.com
Hours: open 7 days a week, 5:00 AM – 7:00 PM (schema: Mo-Su 05:00-19:00).
This is a real selling point: early starts mean the car can be done before the customer leaves for work, and weekends are always open.
Show "Open 7 days · 5 AM – 7 PM" prominently.
Prices: not confirmed yet.
Everywhere a price would appear, show "Get a quote" instead of a number.
Read all price displays from pricing.ts so real numbers can be swapped in later.
Don't invent prices, and don't show "$—" or placeholder text.
Social links: none yet. Don't show social icons. Leave an empty socials array in business.ts.
Water and power: not confirmed yet. Don't claim either way, and leave this question out of the FAQ for now.
Job durations, payment methods, and rain/cancellation policy: not confirmed yet. Don't state specific times or policies. Say that a time estimate comes with the quote.
Owner story: [OPTIONAL: 2–3 sentences]. If this is blank, the About page only states the facts: two brothers, based in Maple Ridge, fully mobile, open 7 days.
Services offered. Use exactly this list. Do not add ceramic coating, paint correction, window tint, or anything else.

Exterior

Hand Wash & Microfiber Dry
Wheel & Tire Deep Clean
Clay Bar Paint Decontamination
Paint Wax & Sealant
Exterior Plastic Trim Restoration
Headlight Restoration
Engine Bay Detail
Interior

Interior Vacuuming
Dashboard & Console Wipe-Down
Interior Steam Cleaning
Carpet & Seat Hot-Water Extraction
Leather Cleaning & Conditioning
Streak-Free Glass Cleaning
Specialty

Pet Hair Removal
Odour Elimination Treatment
Upholstery & Leather Stain Shield
Hard rules: no made-up reviews, star ratings, customer counts, years in business, awards, certifications, or "trusted by 1,000+" stats. Where real reviews will go later, leave a clearly marked empty slot with a "Read our Google reviews" link.

1. DESIGN DIRECTION: "detailer's workbench, not tech startup"
The site should feel like a spec sheet from a serious detailing crew: industrial, confident, precise, with the photos doing most of the work.

Palette (use only these):

Graphite #141414 for main dark backgrounds and text
Bone #EDEAE4 for light backgrounds
Concrete #9A968F for secondary text and 1px rules
Signal Orange #FF5B14, the only accent. Use it for primary buttons, small labels, and the before/after slider handle. Never for large fills.
Typography (Google Fonts):

Headlines: Archivo, weight 800, expanded width (wdth 115–125), uppercase, tight tracking.
Body: IBM Plex Sans, 17–18px, line-height 1.6.
Labels, prices, step numbers, specs, hours: IBM Plex Mono (for example "01 / DECON WASH", "OPEN 7 DAYS · 5 AM – 7 PM").
Layout:

Thin top bar in mono font: "Mobile detailing · Maple Ridge to Vancouver · Open 7 days 5 AM – 7 PM · (672) 472-1024".
Left-aligned, asymmetric 12-column grid. Don't center everything.
Separate sections with thin 1px horizontal rules, like a technical document.
Square corners (0–2px radius). No drop shadows, gradients, glassmorphism, blurred blobs, or glowing borders.
Use big numbered steps (01, 02, 03) and real photography instead of icon grids. No rows of three cards with Lucide icons.
Mix dark (Graphite) and light (Bone) sections for rhythm.
Motion stays minimal: short fade/slide-up on scroll, nothing bouncy. Respect prefers-reduced-motion.
Photography:

Don't use stock photos of supercars or AI-generated car images.
Use neutral grey placeholder blocks with a mono label describing the real shot needed, e.g. [PHOTO: water beading on freshly sealed dark hood], [PHOTO: seat before/after hot-water extraction], [PHOTO: the brothers working in a customer's driveway]. I'll upload real photos of their work.
Signature components:

Before/after drag slider with an orange handle, used on the home page, the gallery, and every service page.
Services / pricing table set like a spec sheet: rows are services, columns are Car / SUV / Truck-Van, values in mono font, read from pricing.ts (currently "Quote").
Process strip: horizontal numbered steps (01 Walkaround → 02 Wash & Decon → 03 Deep Clean → 04 Protect → 05 Final Inspection).
Sticky mobile bottom bar with three buttons: "Call", "Text", and "Get a Quote".
Copy voice: plain-spoken, confident, short sentences, specific to BC. Write like a detailer talking to a customer, not a marketing agency.

Banned words and phrases: elevate, unleash, transform, seamless, top-notch, state-of-the-art, meticulous, "look no further", "your car deserves", "premium experience", "in today's fast-paced world", "we pride ourselves". No emojis.
Use real local context:
months of Lower Mainland rain and road grime, and winter brine on Lougheed Hwy and Hwy 1
cedar sap and spring pollen
mud from Golden Ears and Alouette trips, and slush and salt from Cypress/Seymour/Whistler ski runs
dog hair and beach sand, lease returns, and prepping a car to sell on Marketplace
having your car detailed in the driveway at 6 AM before work
2. SITE STRUCTURE AND URLS
/                                        Home
/services                                Services hub (Exterior / Interior / Specialty)
/services/interior-detailing             Vacuuming, dash & console, steam, extraction, leather, glass
/services/exterior-detailing             Hand wash & dry, wheels & tires, clay bar, wax & sealant, trim restoration
/services/full-detail                    Interior + exterior together (combination of listed services only)
/services/seat-carpet-shampoo            Carpet & seat hot-water extraction + interior steam cleaning
/services/leather-cleaning-protection    Leather cleaning & conditioning + upholstery & leather stain shield
/services/clay-bar-wax-sealant           Clay bar decontamination + paint wax & sealant
/services/headlight-restoration
/services/engine-bay-detailing
/services/pet-hair-removal
/services/odour-removal
/pricing
/gallery                                 Before/after gallery
/areas                                   Service areas hub
/car-detailing-maple-ridge
/car-detailing-pitt-meadows
/car-detailing-port-coquitlam
/car-detailing-coquitlam
/car-detailing-port-moody
/car-detailing-burnaby
/car-detailing-new-westminster
/car-detailing-vancouver
/about
/faq
/contact                                 Quote form + call + text
/thank-you                               noindex, shown after form submit
/blog                                    3 starter posts (see section 6)
404 page                                 Branded, with links to services and areas
3. KEYWORDS: map one primary keyword to each page
Place the primary keyword in the title tag, H1, first 100 words, one H2, the image alt text, and the URL. Use secondary keywords naturally. Never stuff keywords, and never write "near me" repeatedly.

Page	Primary keyword	Secondary keywords
Home	mobile car detailing Maple Ridge	car detailing Maple Ridge, mobile detailing Lower Mainland, mobile car detailing Vancouver, Tri-Cities mobile detailing
Interior	interior car detailing Maple Ridge	car interior cleaning, mobile interior detailing, car interior steam cleaning
Exterior	exterior car detailing Maple Ridge	mobile hand car wash, hand wash and wax, wheel and tire cleaning, plastic trim restoration
Full Detail	full car detail Maple Ridge	complete mobile detailing, pre-sale car detailing, lease return detailing
Seat & Carpet Shampoo	car seat shampoo Maple Ridge	car carpet cleaning, car upholstery cleaning, hot water extraction, car steam cleaning
Leather	leather seat cleaning Maple Ridge	leather conditioning, leather seat protection, fabric protection car seats
Clay / Wax / Sealant	car wax and sealant Maple Ridge	clay bar treatment, paint sealant, hand wax
Headlights	headlight restoration Maple Ridge	foggy headlight repair, yellow headlight fix
Engine Bay	engine bay cleaning Maple Ridge	engine bay detailing
Pet Hair	pet hair removal car	dog hair removal car interior
Odour	car odour removal	smoke smell removal car, car odor elimination (Canadians search both spellings, so use "odor" once naturally)
Pricing	car detailing prices Maple Ridge	mobile detailing cost, how much is a full car detail BC
City pages	mobile car detailing [City]	car detailing [City], auto detailing [City], interior car cleaning [City], car seat shampoo [City]
Because the business is mobile, "mobile detailing" is its strongest angle against shops. Work "we come to you", "in your driveway", and "at your workplace" into the copy naturally.

Title tag formula (≤ 60 chars): [Primary Keyword] | M BROS Auto Detailing, or [Service] in [City], BC | M BROS. Meta description (140–155 chars): unique per page, includes the keyword, a city, and a call to action ("Get a free quote"). Home H1: "Mobile car detailing from Maple Ridge to Vancouver."

4. PAGE CONTENT REQUIREMENTS
Home page, in this order:

Hero: full-bleed photo placeholder, H1 bottom-left, and a one-line sub: "We come to your driveway or workplace — Maple Ridge, Pitt Meadows, the Tri-Cities, Burnaby, New West and Vancouver. Open 7 days, 5 AM to 7 PM." Buttons: "Get a Quote" (orange) and "Call (672) 472-1024" (outlined).
Services: grouped into Exterior / Interior / Specialty, with rules between rows. Each row has the service name, a one-line description, and an arrow link to its page.
Before/after slider.
Process strip (01–05).
"Why BC cars need more than a car wash": a short, specific paragraph about rain, brine, sap, and grime.
Early-bird block: "Done before you leave for work." Explain the 5 AM starts and 7-day availability.
Service-area block: all 8 cities, each linked to its city page.
Reviews slot (empty, marked) plus a Google reviews link.
FAQ preview (4 questions).
Final CTA band: "Book your detail", with the form or phone.
Service pages (600–1,000 words each, all unique):

H1 with the keyword.
What's included, as a checklist in mono font. List only the matching services from section 0.
Who it's for.
The process for this service.
"Get a quote" pricing block read from pricing.ts.
A before/after slider.
4–6 service-specific FAQs.
"Available in:" links to all 8 city pages.
Links to 2 related services.
CTA.
City pages (500–800 words each):

These must be genuinely unique. Don't use a template that only swaps the city name, because Google treats that as doorway pages.
Each page needs:
H1 "Mobile Car Detailing in [City], BC"
An intro specific to that city
Neighbourhoods served
A local driving-conditions angle
The services list linked to service pages
The hours (open 7 days, 5 AM – 7 PM)
3 city-specific FAQs (e.g. "Do you come to Burke Mountain?")
A lazy-loaded Google Map embed of the city
Links to nearby city pages
A CTA
Neighbourhood references to use:
Maple Ridge: Albion, Silver Valley, Cottonwood, Haney / downtown, Hammond, Thornhill
Pitt Meadows: Osprey Village, South Bonson, Harris Road area
Port Coquitlam: Citadel Heights, Mary Hill, Riverwood, Oxford Heights
Coquitlam: Burke Mountain, Westwood Plateau, Maillardville, Austin Heights
Port Moody: Heritage Mountain, Ioco, Moody Centre, Newport Village
Burnaby: Metrotown, Brentwood, Capitol Hill, Edmonds, Burnaby Heights
New Westminster: Queensborough, Sapperton, Uptown, Queens Park
Vancouver: Kitsilano, Mount Pleasant, East Van, Kerrisdale, Yaletown
About page: facts only (see section 0), a photo placeholder of the brothers at work, the service list, and the service area.

FAQ page: 10–12 questions that can be answered from the facts above. For example:

What are your hours? (7 days, 5 AM – 7 PM)
Where do you detail my car? (at your home or workplace, Maple Ridge to Vancouver)
Which cities do you cover?
What's the difference between wax and a sealant in BC rain?
How often should I get my car detailed in the Lower Mainland?
Can you get dog hair out of my seats and carpet?
Can you remove smoke or other odours?
What does hot-water extraction do that vacuuming doesn't?
What does the upholstery and leather stain shield do?
Can you fix foggy or yellow headlights?
Is engine bay cleaning safe?
How do I get a price? (send a quote request with your vehicle and the services you want)
Contact / Quote form:

Fields:
Name
Phone
Email
City (dropdown of the 8 cities plus "Other")
Vehicle year / make / model
Vehicle size (Car / SUV / Truck-Van)
Service(s) wanted: checkboxes grouped Exterior / Interior / Specialty, using the exact list from section 0
Preferred date and time (allow times from 5 AM)
Optional photo upload of the vehicle
Notes
Save submissions to the database and email each one to mbros.autodetailing@gmail.com.
Add a honeypot field for spam.
On submit, redirect to /thank-you.
Also show click-to-call, click-to-text, email, hours, and service area.
5. TECHNICAL SEO (must-haves)
Crawlable HTML per route. Prerender or statically generate every route at build time so each URL's <title>, meta description, canonical, Open Graph and Twitter tags, H1, body content, and JSON-LD are in the initial HTML, not only injected after JavaScript runs. Use react-helmet-async (or the framework's head API) for per-page meta.
JSON-LD structured data:
Site-wide: AutoWash (a LocalBusiness subtype) as a service-area business with:
name, url, logo, image
telephone +1-672-472-1024, email mbros.autodetailing@gmail.com
openingHoursSpecification: Monday–Sunday 05:00–19:00
areaServed: all 8 cities as City objects
address: only addressLocality "Maple Ridge", addressRegion "BC", and addressCountry "CA". No street address.
Leave out priceRange and sameAs until prices and social links exist.
Service pages: Service schema with provider = the business and areaServed.
FAQ page and page FAQ sections: FAQPage.
All inner pages: BreadcrumbList, with visible breadcrumbs too.
Don't add AggregateRating or Review schema unless real reviews exist.
Crawl files: sitemap.xml listing all indexable pages, and robots.txt pointing to the sitemap. Set /thank-you to noindex.
URLs and headings: clean lowercase hyphenated URLs, self-referencing canonical on every page, one H1 per page, logical H2/H3 order.
Internal linking:
Header nav: Services (dropdown), Areas (dropdown), Pricing, Gallery, About, and a Get a Quote button.
Footer: every service and every city page, plus the name, phone, email, "Mobile detailing — serving Maple Ridge to Vancouver", and "Open 7 days, 5 AM – 7 PM".
Keep the name and phone identical everywhere.
Images: descriptive alt text with the service and city where natural (e.g. "Hot-water seat extraction on a Honda CR-V in Coquitlam"). Serve WebP/AVIF, set explicit width and height, lazy-load below the fold, and preload the hero image.
Performance targets: Lighthouse mobile ≥ 95 for Performance, SEO, Accessibility, and Best Practices. Load fonts with font-display: swap, keep JavaScript minimal, and don't autoplay video in the hero.
Accessibility: WCAG AA contrast (check orange on bone, and use Graphite text on orange buttons if needed), visible focus states, semantic HTML, and labelled form fields.
Social sharing: Open Graph image template per page (dark background, Archivo headline, orange rule, logo).
Tracking placeholders: GA4 and Google Search Console verification meta tag. Fire a conversion event on form submit and on tel: and sms: link clicks.
6. BLOG (3 starter posts, 800–1,200 words each, genuinely useful and not fluffy)
"How Often Should You Detail Your Car in the Lower Mainland?" (rain, winter brine, pollen season)
"Wax vs Paint Sealant: What Actually Holds Up in BC Rain"
"How to Prep Your Car Before Selling It in Metro Vancouver (and What a Pre-Sale Detail Is Worth)"
Each post links to 2 relevant service pages and 1 city page, and includes Article schema with the author "M BROS Auto Detailing".

7. FINAL CHECK BEFORE YOU FINISH
Every page has a unique title, meta description, H1, and canonical.
No two city pages share more than a sentence or two of identical text.
Only the services in section 0 appear anywhere. There's no ceramic coating or paint correction.
No invented prices, durations, policies, reviews, or stats. None of the banned words appear.
Phone, email, and hours match section 0 exactly on every page and in the schema.
Every photo placeholder has a clear label.
Mobile layout is polished: the sticky call/text/quote bar works, tap targets are ≥ 44px, and there's no horizontal scroll.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2b7807e6-e217-490f-a87c-8fa1729b8d0e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
