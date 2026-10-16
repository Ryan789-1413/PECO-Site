# Power Engineering Website: Project Context

This is the full context for rebuilding **pecowater.com**, the website of Power Engineering Company, Inc. ("PECO"). It covers the company, the content, the design system, the decisions made so far, and what still has to be confirmed. It was written at the end of a design session in Claude (Oct 13–14, 2026) that produced the prototype in `prototype/index.html`.

Read this file in full before changing anything. Treat every fact in the **Company facts** section as approved copy unless it is tagged `[CONFIRM]`.

---

## 1. Goal

Replace the current WordPress site at pecowater.com with a modern, fast, production-ready marketing site that:

1. **Looks current, sleek and engineered. No animation.** This is an explicit owner requirement: no scroll animations, parallax, carousels, auto-playing sliders or animated counters. Static and precise.
2. **Shows the "ecosystem."** PECO owns every link of an industrial water treatment program: it formulates its own chemistry, supplies and fabricates equipment, delivers chemical, monitors remotely, services on site, and runs its own analytical lab. This is the core differentiator versus competitors that stitch vendors together.
3. **Features Ridgewater Analytical**, PECO's in-house lab, which has full HPLC, ICP and IC capability.
4. **Showcases the equipment line**: chemical feed pumps, conductivity/pH controllers, probes, glycol feed systems, filtration, and everything else needed to care for customer equipment chemically.
5. **States both memberships**: the Association of Water Technologies (AWT) and Associated Labs.
6. **Generates leads**: site survey requests, training sign-ups, lab or equipment inquiries.
7. **Preserves SEO** from the existing site through redirects from old WordPress URLs.

Owner / project lead: **Ryan Preece**, Industrial Water Treatment Specialist at Power Engineering (ryan@pecowater.com).

---

## 2. Company facts (approved copy sources)

Each fact is tagged with its source: `[SCOPE]` is the PECO "Scope of Capabilities" PDF in `docs/`, `[SITE]` is the current pecowater.com, `[RYAN]` means Ryan stated it directly in the design session, and `[CONFIRM]` means it still needs verification before launch.

### Identity
- Legal name: **Power Engineering Company, Inc.** `[SITE]` (footer: "© Power Engineering Company")
- Short name: **Power Engineering**, nickname **PECO**. Domain: pecowater.com.
- Headquarters: **Salt Lake City, Utah**. `[SCOPE]` `[CONFIRM street address: not published on current site]`
  - The Salt Lake City site houses the headquarters, chemical production, a fabrication shop and Ridgewater Analytical. `[RYAN, confirmed Oct 14, 2026]`
- Second location: **Idaho Falls, Idaho**, with a local representative and chemical storage/inventory. `[SCOPE]`
- Phone: **801-532-6972**. `[SITE]`
- Email: none published on the current site. **orders@pecowater.com** is the address for product data sheet and SDS requests. `[RYAN, Oct 16, 2026]` A general inbox for form leads is still `[CONFIRM]` (ryan@pecowater.com is Ryan's own address, not a general inbox).
- Hours: not published. `[CONFIRM]`
- Service area: Utah, Idaho and the **Mountain West / Intermountain West**. `[SITE]`
- Employees: **22**. `[SCOPE]`
- Privately held and independent. Implied by Associated Labs membership, which requires privately held, owner-operated companies. `[RYAN, confirmed Oct 14, 2026]`: "privately held and independent" and "privately held and locally run" are approved wording.

### History
- **1945**: founded as a **design-build firm for steam generating plants**. `[SITE]` Year corrected from the current site's 1946 by Ryan on Oct 16, 2026. `[RYAN]`
- **1961**: began specializing in designing, installing and maintaining **water treatment systems and programs**. `[SITE]`
- **80 years**: the site shows "Celebrating 80 years, 1945–2025". `[RYAN, Oct 16, 2026]` The letterhead files are named "Letterhead_80 years".
- Describes itself as a "growing corporation" serving the Mountain West, and a "one-stop shop" for water treatment. `[SITE]`
- Consults with design engineers during planning. `[SITE]`
- Tracks regional water supply patterns to customize treatment programs. `[SITE]`
- Has a working relationship with a **university metallurgical department** (university not named). `[SITE]` `[CONFIRM whether to name it]`

### Mission (from current site, lightly edited)
> To always provide the highest quality products and equipment with the highest value to our clients, to keep a positive working environment for customers and employees, and to honor our commitments. `[SITE]`

### Memberships `[RYAN]`
1. **Association of Water Technologies (AWT)**, https://awt.org/
   - An international association of 500+ companies that apply water treatment to industrial and commercial cooling and heating systems. Based in Madison, WI.
   - Offers the **Certified Water Technologist (CWT)** credential: 5 years of field experience, a proctored exam (Pearson VUE), and an application with references reviewed by the CWT Committee. Recertification every 5 years.
   - Offers technical training seminars, webinars, safety training, technical papers, *The Analyst* publication, a Calculations App, a "Find a Water Professional" directory, and Legionella resources (including lists of CDC ELITE labs).
   - `[CONFIRM]` how many PECO staff hold the CWT. If any do, add "CWT-certified technologists" to the site. That is strong copy.
   - `[CONFIRM]` AWT logo/badge usage rules before using the official logo. The prototype uses a text badge "AWT" instead of their logo.
2. **Associated Labs (AL)**, https://associatedlabs.org/
   - An alliance of privately held, independent water treatment companies, each owner-operated (typically $5–20M revenue). Not a franchise, a buying group or a private equity platform.
   - From the AL intro PDF (Intro-4): **9 member companies, 150 employees, 2 countries, 9 manufacturing and distribution sites, 6 labs and R&D facilities.** `[RYAN, confirmed for publication Oct 14, 2026]` Don't round these up: say "a network of labs and plants", not "dozens".
   - Members work in different regional markets with little overlap, so they share openly under confidentiality agreements.
   - Membership delivers: open exchange of ideas, benchmarking, technical expertise across boiler, cooling, closed loop, wastewater and potable treatment, and **serving customers beyond a member's footprint through shared products and services**.
   - Meeting cadence: monthly topic calls, a spring owner-level on-site, and a fall full-team on-site.
   - Recent topics include cascading boiler failures, high-silica cooling programs, RO makeup for hospital steam, closed-loop energy savings, biocide selection, facility water balance modeling, data center treatment, remote monitoring, automated inline testing, in-house equipment design/fabrication, tagged polymer monitoring, formulation testing (corrosion, scale loops, pilot towers), Legionella compliance, ANSI/AAMI ST108, OSHA/DOT/EPA Tier II, AI and automation.
   - Messaging angle: "Private equity is consolidating the industry. PECO stays independent and local, with the knowledge base of a much larger organization."
   - The AL logo is an SVG in their bundle. Get permission before using it; the prototype uses a text badge "AL".

### Ridgewater Analytical (in-house lab) `[RYAN]` `[SCOPE]` `[SITE]`
- Name: **Ridgewater Analytical**, the in-house laboratory of Power Engineering.
- Ryan's words: "we have our own lab with full capabilities and an **HPLC-ICP-IC** for all analysis."
- Led by an **in-house PhD chemist**. `[SCOPE]`
- Functions: quality control, R&D/formulation, and advanced analytical testing. `[SCOPE]`
- Current site wording: an "expanded analytical lab" that gives on-site support "to identify, define, and fix problems quickly." `[SITE]`
- Location: Salt Lake City, alongside chemical production. `[RYAN, confirmed Oct 14, 2026]`
- Instrument models, inferred from file names on Ryan's computer only. `[CONFIRM before publishing any model names]`
  - ICP: Thermo Scientific **iCAP PRO XP Duo** (ICP-OES)
  - HPLC: Thermo Scientific **Vanquish Flex** with VWD (variable wavelength detector)
  - IC: **Metrohm** ion chromatograph
- Do **not** claim CDC ELITE, ISO 17025, NELAP or any other accreditation unless Ryan confirms it. Competitors (Aqua-Serv) advertise "CDC ELITE & ISO 17025" for Legionella. If Ridgewater has none, say nothing.
- Analyte-to-instrument mapping used on the site (water chemistry). The home page table, including silica reported as **mg/L SiO₂**, was confirmed by Ryan on Oct 14, 2026:

| Analyte | Instrument | Reported as |
|---|---|---|
| Calcium hardness | ICP | mg/L as CaCO₃ |
| Magnesium hardness | ICP | mg/L as CaCO₃ |
| Total iron | ICP | mg/L Fe |
| Copper | ICP | mg/L Cu |
| Silica | ICP | mg/L SiO₂ |
| Zinc, molybdenum, total phosphorus | ICP | mg/L |
| Chloride | IC | mg/L Cl⁻ |
| Sulfate | IC | mg/L SO₄²⁻ |
| Nitrate, nitrite (closed loops), fluoride | IC | mg/L |
| Orthophosphate | IC | mg/L PO₄³⁻ |
| Tolyltriazole / azoles | HPLC | mg/L TTA |
| Product QC / active ingredients | HPLC | % or mg/L |

- Possible future offering `[CONFIRM]`: does Ridgewater accept outside samples (third-party testing)? If yes, add a "Submit a sample" flow with chain-of-custody form.

### Services `[SCOPE]` `[SITE]`
- **Chemical treatment programs** for cooling towers, boilers (hot water and steam) and closed loops.
- **Remote monitoring** integrated with the water treatment controller, with real-time alarms when parameters leave control limits. PECO is notified alongside the customer.
- **Monthly on-site testing and service.** `[RYAN, Oct 14, 2026]` This overrides the Scope PDF's "bi-monthly". Say "monthly" everywhere; don't use "bi-monthly".
- **Digital service reports**, available the moment the technician submits them on site. `[SCOPE]`
- **Online service history**: past reports, lab results and performance data. `[SCOPE]` `[RYAN, confirmed Oct 14, 2026]` The portal's name and a customer login link are still open (§9 q7).
- **Hands-free chemical delivery** and transfer directly into on-site storage tanks. `[SCOPE]`
- **Chemical production in Salt Lake City**, local inventory/storage in Idaho Falls, and expedited production for short lead times. `[SCOPE]`
- **Replacement parts stocked in Salt Lake City and Idaho Falls.** `[RYAN, confirmed Oct 14, 2026]`
- **Equipment Service Department** (Salt Lake City): solves treatment and equipment problems, distributes parts, and gets systems back in operation quickly. `[SITE]`
- **Construction Service Department**: after a bid award, it cleans out systems, disinfects domestic water lines, charges closed loops with corrosion inhibitor or glycol, and oversees installation of treatment control and feed equipment. `[SITE]`
- **New construction consulting**: water treatment equipment and applications, freeze protection, sterilization of domestic water piping, corrosion protection systems, system cleaning. `[SITE]`
- **Laboratory services**: see Ridgewater above.
- **Training**:
  - "**Water Treatment 101**": structured on-site training for operations personnel, maintenance staff and facility managers. `[SCOPE]`
  - **Seasonal one-day courses**: cooling treatment, boiler treatment, boiler maintenance. `[SITE]`
  - Held on site, at a local facility, or at the **PECO training center in Salt Lake City**. On-site sessions are tailored to the facility. `[SITE]`
- **Free site survey** with baseline water analysis (the main CTA). `[RYAN, "free" confirmed Oct 14, 2026]`

### Procurement
- **State contracts** and an **FSS (Federal Supply Schedule) contract for GSA-qualified purchases**. `[SITE]` `[SCOPE]` `[CONFIRM contract numbers/schedule SIN for display]`
- Public record: PECO holds FAA Air Route Traffic Control Center (ZLC ARTCC, Salt Lake City) water treatment awards, FY2024 and FY2025 (govconinabox). Possible case study or "who we serve" logo. `[CONFIRM]`

### Products and brands (from current site catalog) `[SITE]`, updated by Ryan Oct 15, 2026 `[RYAN]`
- **Product literature: no product data sheets (PDS) or safety data sheets (SDS) on the website.** `[RYAN, Oct 15, 2026]` Customers request them by phone (801-532-6972) or email (**orders@pecowater.com**, Ryan, Oct 16, 2026) and PECO sends them. Product pages say how to request them; there are no PDF downloads.
- **Treatments: PECO chemistry, organized as PECO's own product blends and series.** `[RYAN, Oct 15, 2026]` The catalog groups chemistry by these series:

  | Series | Products | For |
  |---|---|---|
  | **2000 Series** | Steam boiler products | Steam boilers |
  | **3000 Series** | Neutralizing amines | Condensate lines |
  | **4000 Series** | Cooling tower products | Cooling towers |
  | **5000 Series** | System cleaners, high alkaline and neutral | System cleaning |
  | **7000 Series** | Biocides, EPA-registered | Microbiological control |
  | **8000 Series** | Closed loop inhibitors | Closed loops |
  | **9000 Series** | Flocculants and biodispersants | |
  | **O Series (Other)** | Glycol (heat transfer fluids, freeze and corrosion protection) and calcium chloride | |

  - 4000 Series products named on the current site: PECO 4971, 4972, 4980, 4981, 4982, 4985, 4986, 4990, 4991, 4992 (4990–4992 are described as "multi-duty cooling water treatment"). `[SITE]`
  - **On the website, chemistry is shown as series only** `[RYAN, Oct 16, 2026]`: each series appears as a card (number, name, what it is for, a short description) on /products/ and /products/chemistry/. There are no series pages and no individual product listings or pages. Customers call 801-532-6972 or email orders@pecowater.com for information on specific products.
- **Pretreatment**: water softeners, dealkalizers, reverse osmosis (RO).
- **Controllers** (conductivity, pH, ORP, fluorescence, mass balance; basic units to systems integration; web-based reporting and trending). PECO uses all of the models below, **mainly the Walchem line**. `[RYAN, Oct 15, 2026]`
  - Walchem **WBL/WDB** (boiler controller, one or two boilers, high temperature/pressure conductivity, up to 6 relays)
  - Walchem **WCT/WDT** (cooling tower controller, one or two towers, conductivity plus pH or ORP, up to 6 relays)
  - LMI **DC4500** (cooling tower bleed-and-feed, dual biocide timers, 4 feed modes)
- **Pumps (chemical injection)**: PECO uses all of the pumps below, **plus ProMinent pumps**. `[RYAN, Oct 15, 2026]`
  - LMI: Roytronic Series A, Roytronic Excel Series AD, Series B, Series C, Series P (Liquifram positive displacement, NEMA 4X/IP65; some models NSF, UL/CUL, CE)
  - Walchem: EHE Series (up to 20 GPH, 150 psi, 1800:1 turndown), EZ Series (up to 6.3 GPH, 150 psi), EH-HV (high viscosity)
  - ProMinent (models still needed).
  - Glycol feed systems, high-pressure transfer pumps (permanent or portable).
  - **Do not list RO re-pressure pumps anywhere on the site.** `[RYAN, Oct 15, 2026]`
- **Feeders**: chemical feed stations, **GC7-22 glycol feeder**, **GC7-GC8 glycol feeder**, **GC8 glycol feeder**, **glycol recovery**, **pot feeder**. This list is correct. `[RYAN, Oct 15, 2026]` PECO also does **custom orders and custom manufacturing** of feeders. `[RYAN, Oct 15, 2026]` (The current site has lorem ipsum on these pages. Real descriptions and specs are still needed.)
- **Tanks: dual containment chemical tanks** `[RYAN, Oct 15, 2026]`. **On the website they are "PECO dual containment tanks": never name the manufacturer (Peabody Engineering) or its product line (Gemini²).** `[RYAN, Oct 15, 2026]` Internally they are Peabody Engineering Gemini² tanks. Each has an inner (primary) tank inside an outer (secondary) tank, for atmospheric service. Source: the Peabody submittal drawings Ryan shared (`Y:\Job Documents & Correspondence\PECO Submittals & O & Ms\Gemini Tanks\`). The drawings are marked proprietary to Peabody: use them for specs only, and never publish or commit them.

  | Size | Footprint | Overall height | Material | Notes |
  |---|---|---|---|---|
  | 20 gal | 18" × 18" | about 23⅝" | HDPE | |
  | 40 gal | 18" × 18" | about 41¾" | (see note) | |
  | 70 gal | 24" × 24" | about 39⅞" | LLDPE with UV inhibitor | approx. 64.6 lb |
  | 120 gal | 32" × 32" | about 49¾" | LPE | 120 gal primary inside a 167 gal secondary |

  - Common features: 8" vented twist lid; two 2" FNPT spin-weld fittings with plugs; pump suction connection; port with plug for interstitial leak detection.
  - Per the 120 gal drawing, Peabody offers other materials (XLPE, PP, PVDF), colors (natural, blue, black), an FRP wrap, and an alternate configuration that meets NSF/ANSI 61.
  - The 40 gal drawing contradicts itself: its title block and notes say "70 gal" (45.37 lb, HDLPE, Viton/Teflon gaskets), while its parts list and other sheets say 40 gal. Don't publish the 40 gal weight or material until confirmed.
- **Valves**: Belimo motorized valves and Bi-Torq actuators. Use **generic descriptions** for both, not model-by-model listings. `[RYAN, Oct 15, 2026]`
- **Test kits**: PECO **builds its own drop test kits** for field tests, such as total hardness, nitrite and sulfite. `[RYAN, Oct 15, 2026]` (A full list of the kits is still needed.)
- **Corrosion coupon racks**: offered `[SITE]`; a real description is still needed.
- **Filtration** `[RYAN]`: product lines confirmed Oct 14, 2026: side-stream and full-flow filtration for towers, cartridge and bag housings, closed loop filtration, filter elements/media/spare parts. **The filtration supplier is Quantrol** (quantrol.com). `[RYAN, Oct 15, 2026]`
  - **List only Quantrol's own filtration** `[RYAN, Oct 15, 2026]`:
    - **Quantrol Cartridge Filtration**: stainless cartridge housings, jumbo cartridge housings and filters, string-wound cartridge filters, meltblown cartridge filters, high-purity polypropylene cartridge filters, oil removal, pressure gauge kit. Quantrol also publishes side-stream filtration guidelines.
    - **Quantrol Bag Filtration**: bag housings, bag filters, oil removal.
  - Not listed: the other brands Quantrol carries (Harmsco, Hydronix, Shelco, Global Filter, Watts and its non-filtration lines). Quantrol, Inc. (Elburn, Illinois, est. 1988) is a manufacturer's representative. Describe its products in PECO's own words; don't copy Quantrol's text.
- **Probes/sensors** `[RYAN]`: conductivity, pH (plus ORP and fluorescence per the controllers page).

### Systems served
Cooling towers; boilers and steam (hot water and steam, condensate); closed loops (chilled water, hot water, process); heat transfer fluids and freeze protection (glycol); filtration, softeners and pretreatment; controls and feed equipment. Domestic water disinfection on new construction.

### Industries (prototype list) `[RYAN, all eight confirmed Oct 14, 2026]`
Commercial buildings and property portfolios; government and federal (FAA, State, GSA); healthcare (hospitals, e.g. Logan Regional appears in Ryan's files); education (school districts and universities); data centers; manufacturing; food and beverage; hospitality. Public, case-study-worthy names should only be used with customer permission.

---

## 3. Competitor research (what we borrowed)

| Site | What's worth borrowing |
|---|---|
| **watertechusa.com** (Watertech of America, Midwest) | "Request a Site Survey" as the primary CTA; "Innovations" menu for proprietary products; Knowledge Center (blog, case studies, product info, technical docs); "Watertech University" training; history timeline; applications × industries matrix; the "perfect size" argument (agile but capable). |
| **industrialwater.net** (IWE, NM/TX) | Lab as a headline capability ("Put your water back to work"); ISO 9001 trust signal; "Tales from the Boneyard" case-study series (failed systems they fixed, which is very memorable); customer portal login (IWEservice); news. |
| **aqua-serv.com** (Aqua-Serv, CA/AZ/NV) | Industries grid; service-type list (technical, full service, lab, customer, special delivery); Legionella testing lab callout; "serving since 1958" heritage line. |
| **pecowater.com** (current) | Product catalog by category and brand with bulletins; services page; training center. Weaknesses: dated WordPress theme, lorem ipsum on product pages, no address/email, thin lab story, no ecosystem narrative. |

Ideas not yet built, for the roadmap: "Tales from the Boneyard"-style case studies (deposit analyses and lab reports make great material, e.g. "Logan Regional Hospital – Deposit Analysis Report" exists in Ryan's files; anonymize unless permitted); a customer portal login link; a Knowledge Center; an 80-year history timeline.

---

## 4. Design system (from the prototype)

**Direction:** engineered and technical. A light blueprint-grid hero, a deep navy band for the lab and contact sections, mono labels for technical terms, a condensed display face. No motion. The brand color comes straight from the logo.

### Color tokens (light theme)
```css
--bg: #F4F7FB;        /* page */
--surface: #FFFFFF;   /* cards, header */
--ink: #0D1B2E;       /* text */
--muted: #4D5C71;     /* secondary text */
--line: #D6DEE9;      /* hairlines */
--grid: rgba(35,95,172,0.07); /* hero blueprint grid */
--brand: #235FAC;     /* PECO blue, sampled from the logo (rgb 35,95,172) */
--brand-strong: #1A4C8F;
--brand-tint: #E4EDF8;
--on-brand: #FFFFFF;
--deep: #0B1A2F;      /* navy bands: lab, contact, footer */
--deep-2: #12253F;
--deep-ink: #E6EDF6;
--deep-muted: #9FB0C6;
--deep-line: #24395A;
--deep-accent: #7AAAE6;
--lab: #2F9C92;       /* Ridgewater teal: used only for lab elements */
--ok: #2F8F5B;        /* semantic "within limits" */
```
Dark-mode values exist in the prototype (`prefers-color-scheme` plus a `[data-theme]` override). For the production site, decide whether to support dark mode. Recommendation: light only, so it's simpler and the brand stays consistent, unless Ryan wants it.

### Typography
- Display: **Saira Semi Condensed** 600/700 (Google Fonts). Engineered, condensed, matches the logo's italic-condensed letterforms.
- Body: **IBM Plex Sans** 400/500/600.
- Mono/labels/data: **IBM Plex Mono** 500. Used for eyebrows, units, instrument tags and table headers.
- Scale: 13 / 16 / 19 / 24 / 32 / clamp(36–56) px; hero h1 clamp(42–70) px.
- In production, **self-host the fonts** (e.g. `@fontsource`), not the Google CDN, for performance and privacy.

### Layout and components
- Max width 1200px, 24px gutters (18px under 480px).
- Section rhythm: 96px padding (64px on mobile).
- Utility bar (navy) → sticky white header → hero (copy left, photo right, on a blueprint grid) → proof strip (5 stats) → Ecosystem (closed-loop SVG diagram plus a 6-cell grid) → Systems (3 photos plus a 6-item list) → Equipment & Filtration (3 photo cards, a 4-column list, a brands row) → Ridgewater Analytical (navy band: facts list, 2 photos, 3 instrument cards, analyte table) → Service program (4 steps plus an example digital report card) → New construction (2 department cards plus a 6-item grid) → Training band (brand blue) → Industries (8 cards) → Memberships (AWT and AL cards plus a navy "independent" band) → About (giant "1945", copy, mission, 4 values) → Working with us (3 cards) → Contact (navy, with form) → Footer (with photo credits).
- **The ecosystem diagram** is an inline SVG with 6 nodes in a dashed ring around "Your Water System": 01 Formulate → 02 Fabricate → 03 Deliver → 04 Monitor → 05 Service → 06 Analyze (teal, Ridgewater) → back to Formulate. The numbering is meaningful because it is a real loop.
- Cards use 1px hairlines and a 6px radius, and are applied selectively. There are no gradients, no emoji and no animation.

### Copy voice
Plain, confident, technical. Short sentences, active voice. Use the industry's real terms: cycles of concentration, blowdown, inhibitor residual, condensate, freeze point, mg/L as CaCO₃. Avoid hype words. Never claim anything unconfirmed.

---

## 5. Photos and licensing

The prototype photos are **stock images from Wikimedia Commons** used under CC licenses. **Attribution is required** (CC BY / CC BY-SA). Credits are in the prototype footer. They were captured as screenshots at about 800–1500px wide (via browser), so they are not original resolution. For production, download the originals from the Commons pages below, or better, **replace them with PECO's own photos**.

| File | Subject | Author | License | Source |
|---|---|---|---|---|
| tower-hospital.jpg | Rooftop cooling tower and condenser piping (hero) | Kgbo | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cooling_towers_at_Queensland%E2%80%99_hospital_02.jpg |
| tower-office.jpg | Packaged cooling towers | Chris Olszewski | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cooling_Towers_at_the_office_building_in_Brisbane,_Queensland_02.jpg |
| boiler-room.jpg | Fire-tube boiler and gas train | Press Service of the Governor of Tula Oblast | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Boiler_room_in_Tula_Oblast_04.jpg |
| pumps-chilled.jpg | Chilled water pumps | Kgbo | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Chilled_water_pumps_at_Queensland%E2%80%99_hospital.jpg |
| pump-meter.jpg | LMI Excel XR metering pump | LaurelBloch | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:LMI%27s_EXCEL_XR,_Chemical_Metering_Pump.jpg |
| loop-piping.jpg | Insulated hydronic piping, gauges, actuators | Wolfmann | CC BY-SA 4.0 | Commons file "Teknisk rom (School build. Lilleh. Norway 2024-09 …) IMG 0350.jpg" |
| pumps-condenser.jpg | Condenser water pumps | Kgbo | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Condenser_water_pumps_in_large_commercial_building,_Brisbane.jpg |
| lab-hplc-icp.jpg | ICP with HPLC modules | Superchilum | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:HPLC-ICPMS_TISIS_01.JPG |
| lab-ic.jpg | Dionex ICS-3000 IC system | LukaszKatlewa | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Dionex_ICS-3000_ion_chromatography_system.jpg |

**Product catalog photos** `[RYAN, Oct 16, 2026]`: use both PECO's own product photos and manufacturer product images. Use a manufacturer image only with that manufacturer's permission, and record where it came from. Never use images from submittal drawings marked proprietary (e.g. the tank drawings). Never name the tank manufacturer, even in alt text or file names. The catalog has no product photos yet.

**Photo shot list for PECO's own photography (priority order):** Ridgewater lab with the iCAP, Vanquish and Metrohm in frame; the PhD chemist at work; a PECO technician testing at a customer cooling tower; a fabricated chemical feed panel or skid; the GC7/GC8 glycol feeder; a Walchem controller install; the delivery truck transferring into a customer tank; the Salt Lake City production and warehouse; the training center with a class in session; the team photo; the Idaho Falls location; a filtration install.

Logo: `brand/logo-power-engineering.png` (536×322, transparent, single color #235FAC). Request an **SVG** version from whoever designed it; it's needed for production (crisp at all sizes, recolorable for white-on-navy).

---

## 6. Current site: URL inventory (for 301 redirects)

The current site is WordPress (Gravity Forms contact form, `/category/...` taxonomy). Keep or redirect every URL: Ryan approved series targets for the old chemistry categories on Oct 15, 2026; on Oct 16, 2026 chemistry became series-only with no series pages, so all old chemistry URLs now go to /products/chemistry/. The live rules are in `public/_redirects`.

```
/                                         → /
/all-products/                            → /products/
/services/                                → /services
/about-us/                                → /about
/contact-us/                              → /contact
/category/treatments/                     → /products/chemistry
/category/treatments/cooling/             → /products/chemistry/
/category/treatments/boiler/              → /products/chemistry/
/category/treatments/closed-loop/         → /products/chemistry/
/category/treatments/antimicrobial/       → /products/chemistry/
/category/treatments/calcium-chloride/    → /products/chemistry/
/category/controllers/                    → /products/controllers
/category/controllers/walchem-controllers/→ /products/controllers/walchem/
/category/controllers/lmi-controllers/    → /products/controllers/lmi
/category/pumps/                          → /products/pumps
/category/pumps/lmi-pumps/                → /products/pumps/lmi
/category/pumps/walchem-pumps/            → /products/pumps/walchem
/category/feeders/                        → /products/feeders
/category/feeders/chemical-feed-stations/ → /products/feeders/feed-stations
/category/feeders/glycol-feeder/          → /products/feeders/glycol
/category/feeders/pot-feeder/             → /products/feeders/pot-feeder
/category/tanks/ , /category/tanks/peco/  → /products/tanks
/category/valves/belimo/ , /bi-torq/      → /products/valves
/category/misc/coupon-rack/               → /products/monitoring/coupon-racks
/category/misc/test-kit/                  → /products/monitoring/test-kits
/category/miscellaneous/                  → /products
/treatments/                              → /products/chemistry/
/treatments/cooling-treatment/, -2 … -8 and
/treatments/a-multi-duty-cooling-water-treatment/, -2 … -5
                                          → /products/chemistry/  (Ryan, Oct 16, 2026: series only, no per-product mapping)
```
Before cutover, crawl the live site (`wget --spider` or Screaming Frog) and export Google Search Console coverage to catch every indexed URL, especially bulletin PDFs and the `/wp-content/uploads/` files linked externally.

---

## 7. Recommended production architecture

**Stack recommendation: Astro (static output) + TypeScript + plain CSS with design tokens.**
- Astro ships zero JS by default, which matches the "not animated, fast" brief. Pages are static HTML. Content collections give a typed product catalog.
- Use the prototype's CSS directly as the design system (`src/styles/tokens.css`, `base.css`, component styles). Tailwind is not needed. If the team prefers Tailwind, map the tokens into `theme.extend`.
- Images: `astro:assets` (`<Image>` / `<Picture>`) for responsive AVIF/WebP and width/height attributes.
- Fonts: `@fontsource/saira-semi-condensed`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`, self-hosted with subsetting.
- Content: Markdown/MDX plus YAML in `src/content/` with Zod schemas: `products`, `systems`, `industries`, `services`, `caseStudies`, `team`, `courses`, `locations`, `memberships`.
- Optional CMS later, so non-developers can edit: Decap CMS (git-based, free), TinaCMS, or Keystatic. Keystatic or Decap fits the "edit products and bulletins without a developer" need.
- Hosting: **Cloudflare Pages**, **Netlify** or **Vercel** (all free or cheap for a static site). Netlify gives built-in form handling (Netlify Forms) without a backend. With Cloudflare, use a Pages Function or Turnstile plus an email API (Resend/Postmark/SendGrid) for the forms.
- Forms: site survey request, training sign-up, lab/sample inquiry, general contact. Requirements: spam protection (Turnstile or hCaptcha, plus a honeypot), routing to a shared inbox (needs a general address such as info@ or sales@ `[CONFIRM]`), an auto-reply, and optional CRM push.
- Product bulletins and SDS: **not on the website** (Ryan, Oct 15, 2026). Product pages tell customers to request a product data sheet or SDS by phone or at orders@pecowater.com. No PDF downloads.
- Analytics: privacy-friendly (Plausible or Cloudflare Web Analytics) or GA4 `[CONFIRM preference]`. If GA4 is used, a cookie consent banner may be needed.
- SEO:
  - Per-page title and description; Open Graph images.
  - `sitemap.xml` (`@astrojs/sitemap`) and `robots.txt`.
  - JSON-LD `Organization` + `LocalBusiness` (two locations), `Product` for catalog items, `BreadcrumbList`.
  - Canonical URLs and 301 redirects (`_redirects` file or host config).
  - Target keywords: "industrial water treatment Salt Lake City", "cooling tower water treatment Utah", "boiler water treatment Idaho", "glycol feeder", "Walchem controller Utah", "water treatment lab HPLC ICP".
- Accessibility: WCAG 2.2 AA, semantic landmarks, visible focus, form labels, alt text for every photo, a skip link, contrast verified, and `prefers-reduced-motion` respected (there is no motion anyway).
- Performance budget: LCP < 2.0s on 4G, CLS < 0.05, under ~200KB of JS (target: none), and a hero image under 150KB AVIF. Run Lighthouse CI in GitHub Actions.
- Quality gates in CI (GitHub Actions): `astro check`, `tsc`, Prettier, ESLint, link checker (lychee), Lighthouse CI, Playwright smoke tests (nav, forms, 404, redirects), and an axe accessibility scan.

### Proposed site map
```
/                         Home (ecosystem story, as in the prototype)
/ecosystem                How the closed loop works (deep dive)
/systems/cooling-towers
/systems/boilers
/systems/closed-loops
/systems/glycol-freeze-protection
/systems/filtration-pretreatment
/equipment                Equipment overview (pumps, controllers, probes, glycol, filtration)
/products                 Catalog index (filter by category, brand)
/products/[category]/[slug]
/ridgewater-analytical    Lab page (instruments, analyte table, sample submission if offered)
/services                 Service program, monitoring, digital reports, delivery
/new-construction         Construction Service Dept, consulting, cleaning, disinfection
/training                 Water Treatment 101 + seasonal courses + schedule + sign-up
/industries/[slug]
/about                    History (1945 → 1961 → today), mission, team, locations
/memberships              AWT + Associated Labs (could live in /about)
/resources                Knowledge center: bulletins, SDS, articles, case studies ("Boneyard")
/contact                  Form, phone, locations, map link
/portal                   Link out to customer service portal (if one exists)
/privacy, /terms, /404
```

### Proposed repo layout
```
peco-website/
  CLAUDE.md
  README.md
  docs/PROJECT_CONTEXT.md     ← this file
  docs/source-scope-of-capabilities.pdf
  brand/                      logo source files (add SVG)
  prototype/                  approved single-file design prototype (reference only)
  src/
    styles/ tokens.css base.css
    components/ Header.astro Footer.astro Hero.astro EcosystemDiagram.astro ProofStrip.astro
                PhotoFigure.astro SectionHead.astro EquipmentCard.astro InstrumentCard.astro
                AnalyteTable.astro ServiceReport.astro MembershipCard.astro ContactForm.astro
    layouts/ BaseLayout.astro
    pages/ (see site map)
    content/ products/ systems/ industries/ courses/ case-studies/ config.ts
  public/ images/ docs/bulletins/ docs/sds/ favicon.svg _redirects robots.txt
  tests/ e2e/*.spec.ts
  .github/workflows/ci.yml
```

---

## 8. Build plan (phases)

**Phase 0: Repo and scaffolding.** Initialize Astro (`npm create astro@latest`, minimal template, TypeScript strict). Add Prettier and ESLint, the CI workflow, and the font packages. Port the tokens and base CSS from `prototype/index.html`.

**Phase 1: Port the home page 1:1.** Split the prototype into components and confirm visual parity with `prototype/index.html` (Playwright screenshot diff at 1280 and 390 widths).

**Phase 2: Content model plus catalog.** Zod schemas, then migrate products from the current site (names above). Collect real descriptions and bulletins from PECO. Build category and brand pages and product detail pages with bulletin and SDS links.

**Phase 3: Inner pages.** Systems, Equipment, Ridgewater, Services, New Construction, Training, Industries, About, Memberships, Contact, Resources.

**Phase 4: Forms and integrations.** Form handling, spam protection, email routing, auto-replies, and a thank-you page. Optional CRM.

**Phase 5: SEO and launch prep.** Redirect map, sitemap, JSON-LD, OG images, analytics, accessibility audit, performance audit, content proofreading by Ryan and the PhD chemist, legal pages.

**Phase 6: Cutover.** Staging URL review, DNS change (find out who controls pecowater.com DNS and the current WordPress host `[CONFIRM]`), verification in Search Console, monitoring for 404s, and decommissioning WordPress after 30 days.

---

## 9. Open questions for Ryan (blockers marked ★)

1. ★ Street addresses for Salt Lake City and Idaho Falls, a general email inbox for form leads, and business hours. (PDS/SDS requests go to orders@pecowater.com: confirmed Oct 16, 2026.)
2. ★ Who controls DNS and hosting for pecowater.com today? Which hosting platform do we want (Netlify / Cloudflare Pages / Vercel / the existing host)?
3. ★ Confirm the Ridgewater instrument models (iCAP PRO XP Duo, Vanquish Flex, Metrohm IC), whether to name them, and whether Ridgewater takes outside samples. (Lab location confirmed Oct 14, 2026.)
4. ★ Get logo-use permission for AWT and AL. (The Associated Labs figures were confirmed for publication Oct 14, 2026.)
5. How many staff are AWT **CWT**-certified?
6. ~~Is the site survey free? What does "bi-monthly" mean?~~ Resolved Oct 14, 2026: the survey is free, and on-site service visits are monthly.
7. Customer portal: is there a customer-facing service report portal (Ryan's files mention "AquaCore Hub" implementation/exclusivity docs and "Aquassist" licenses)? If so, add a "Customer login" link and feature smart testing on the site.
8. ~~Filtration brands?~~ Resolved Oct 15, 2026: list only Quantrol's own cartridge and bag filtration.
9. Real descriptions and specs for the feeders (GC7-22, GC7-GC8, GC8, glycol recovery, pot feeder, feed stations) and coupon racks, and the full list of PECO's drop test kits. (The feeder list and custom manufacturing were confirmed Oct 15, 2026.)
10. ~~Product numbers and names in each chemistry series~~ Not needed: the site shows chemistry as series only (Oct 16, 2026). (Resolved Oct 15, 2026: no PDS or SDS on the website; customers request them.) Also needed: ProMinent pump models, and confirmation of the 40 gal Gemini tank's weight and material.
11. Any customers willing to be named or given a case study (FAA ZLC ARTCC, hospitals, school districts)? (The industries list was confirmed Oct 14, 2026.)
12. Team page: names, titles and photos to include (e.g. the PhD chemist, service techs)?
13. Real photography: can we schedule a shoot (see the shot list in §5)? For the catalog: send PECO product photos, and manufacturer images with permission noted (policy set Oct 16, 2026). Until then, keep the Commons photos with credits.
14. Dark mode: wanted or not?
15. The university metallurgical relationship: can we name the university?
16. Analytics preference and any cookie/privacy requirements.
17. Water management plan / Legionella services: does PECO write ASHRAE 188 water management plans or perform Legionella sampling? (Competitors advertise this heavily. Don't claim it without confirmation.)

---

## 10. Guardrails

- Never publish unconfirmed claims: certifications, accreditations, instrument models, customer names, "free" offers, numbers.
- Never use competitor content verbatim. The research was for structure and ideas only.
- Keep Wikimedia photo credits on any page that uses those photos.
- Don't commit secrets (form API keys, analytics tokens). Use host environment variables.
- Don't put personal or HR information in the repo. Ryan's Outlook cache folder contained unrelated personnel and financial documents. Only company marketing facts belong here.
- Static and no animation is a hard requirement, not a style preference.

## 11. Reference links
- Approved prototype (Claude artifact, private to Ryan): https://claude.ai/artifact/6u9neAGuHFjbXd58WAXzG1
- Current site: https://pecowater.com/
- AWT: https://awt.org/ · Certification: https://awt.org/become-certified/ · Legionella: https://awt.org/legionella-resources/
- Associated Labs: https://associatedlabs.org/
- Competitors: https://watertechusa.com/ · https://industrialwater.net/ · https://www.aqua-serv.com/
