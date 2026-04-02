export type Recommendation = {
  title: string
  body: string
}

export type Project = {
  id: string
  number: string
  title: string
  client: string
  clientLogo?: string
  tags: string[]
  accent: string
  accentSecondary: string
  darkSkills?: boolean
  modalDark?: boolean
  modalBg?: string
  objective: string
  analysis: string
  competition?: string
  recommendations: {
    intro: string
    pillars: Recommendation[]
  }
  skills: string[]
}

export const projects: Project[] = [
  {
    id: "greening-the-feed",
    number: "01",
    title: "Greening the Feed",
    client: "Lindt & Sprüngli | Live Business Case, Grenoble Ecole de Management",
    clientLogo: "/logos/lindt.png",
    tags: ["Brand Strategy", "Sustainability", "Digital Marketing", "Corporate Communications"],
    accent: "#1B5E3B",
    accentSecondary: "#C9A84C",
    objective: `Lindt & Sprüngli faces a growing tension at the intersection of brand ambition and environmental responsibility. While the company has committed to science-based emissions targets and a net-zero roadmap, its digital advertising operations remain a largely unmeasured source of Scope 3 carbon emissions. The objective of this project was to develop a corporate strategy that allows Lindt to grow its digital marketing presence without expanding its environmental footprint — and to position sustainability not as a constraint, but as a competitive advantage.`,
    analysis: `The project began by challenging a common assumption: that going digital automatically means going green. Research revealed that online advertising consumed 106 TWh of energy globally in 2016, generating 60 million tonnes of CO₂ — driven largely by AI-powered ad targeting, programmatic networks, and energy-intensive data centres. A direct carbon audit comparing Lindt's website (rated F — dirtier than 93% of web pages globally) against L'Oréal's (rated B) made the gap concrete and urgent. Competitor benchmarking surfaced two leading practices: Dentsu and Nestlé achieved a 25% reduction in digital ad emissions through Scope3's diagnostics-to-delivery model, while L'Oréal earned shortlisting for the Ad Net Zero Best Practice in Sustainability award.`,
    recommendations: {
      intro: "Four strategic pillars were proposed for Lindt:",
      pillars: [
        {
          title: "Track & Optimise Data",
          body: "Implement carbon measurement across ad impressions, data centre energy use, supply chain partners, and geographic delivery patterns.",
        },
        {
          title: "Sustainable Internal Mindset",
          body: "Introduce sustainability KPIs for marketing teams, tie performance reviews to carbon-efficient campaign delivery.",
        },
        {
          title: "Intrapreneurial Mindset",
          body: "Launch an annual internal hackathon for employees to pitch and pilot the best green marketing campaign.",
        },
        {
          title: "Empower Internal Voices",
          body: "Shift toward in-house content production and employee advocacy to reduce dependence on high-energy external advertising channels.",
        },
      ],
    },
    skills: [
      "Competitive Benchmarking",
      "Sustainability Strategy",
      "Corporate Communications",
      "Data-Driven Analysis",
      "Strategic Recommendations",
      "Brand Positioning",
    ],
  },
  {
    id: "board-to-scale",
    number: "02",
    title: "Board to Scale",
    client: "OneBoard | MSc Innovation & Entrepreneurship, GEM | Innovative Business Growth & Scale-Up Module | Presented at Tech & Fest 2026",
    tags: ["Startup Strategy", "Brand Positioning", "Go-to-Market", "Urban Mobility", "Growth Strategy", "SWOT Analysis"],
    accent: "#BFFF00",
    accentSecondary: "#1A1A1A",
    darkSkills: true,
    objective: `OneBoard is a French pre-seed mobility startup founded in 2025 by experienced automotive designers with 15 years of shared expertise. The company has developed a compact, electrically-assisted urban cargo platform capable of carrying up to 300kg — using a proprietary horizontally-embedded carbon blade suspension system that enables extreme lightweighting, mechanical simplicity, and industrial scalability. Having won a Special Award at Solutrans 2025, OneBoard is at a critical inflection point: transitioning from validated concept to commercial reality.\n\nThe objective of this project was to develop a coherent scaling strategy that addresses the company's core execution gaps — not its innovation gap — and positions it to capture the growing urban last-mile delivery market before established competitors move in.`,
    analysis: `A SWOT analysis revealed a company with genuine technological differentiation but significant execution vulnerabilities.\n\nStrengths include a proprietary carbon blade suspension architecture enabling a best-in-class payload-to-weight ratio, a founding team with 15 years of shared automotive design expertise, and recognition as a Solutrans 2025 Special Award winner.\n\nWeaknesses are equally clear: no digital brand presence, no commercial track record, and a capital-intensive path to industrialisation requiring suppliers, production partners, and significant funding before commercialisation.\n\nOpportunities are substantial. French ZFE regulations are actively restricting heavier vehicles in Paris, Lyon, and Grenoble. E-commerce growth is driving sustained demand for compact last-mile delivery. And investor appetite for sustainable urban mobility is at a historic peak.\n\nThreats include established electric mobility players adjacent to OneBoard's target territory, long French vehicle certification timelines, and the risk of better-resourced competitors entering the sub-segment before OneBoard reaches market.\n\nKey insight: the challenge for OneBoard is not innovation — it is execution.`,
    recommendations: {
      intro: "Three recommendations mapped explicitly to SWOT logic:",
      pillars: [
        {
          title: "Build Brand & Communication Strategy (WO)",
          body: "With investor interest in sustainable mobility peaking, OneBoard's weak digital presence is actively costing it credibility. Proposed: full website redesign, professional investor pitch deck, and operator-facing use-case content demonstrating real-world payload performance.",
        },
        {
          title: "Build Early Industrial Partnerships (WT)",
          body: "Capital intensity combined with France's lengthy certification process is OneBoard's most dangerous vulnerability. Proposed: collaborate with an established industrial manufacturer, secure technical validation partnerships, and develop co-development agreements to share R&D risk.",
        },
        {
          title: "Dominate Last-Mile Delivery First (SO)",
          body: "OneBoard's architecture gives it a defensible advantage in sub-300kg urban cargo in ZFE-restricted city centres — territory cargo bikes cannot reliably serve at scale. Proposed: partner with 1–2 logistics fleet operators for a pilot deployment in a single city.",
        },
      ],
    },
    skills: [
      "Strategic Analysis",
      "SWOT Methodology",
      "Brand Positioning",
      "Go-to-Market Strategy",
      "Startup Scaling",
      "Urban Mobility Research",
      "Investor Communication",
      "Strategic Sequencing",
    ],
  },
  {
    id: "light-the-way",
    number: "03",
    title: "Light the Way",
    client: "Lizia | MSc Innovation & Entrepreneurship, GEM | Marketing Strategy Module",
    tags: ["Growth Marketing", "Product Strategy", "Market Segmentation", "Retail Strategy", "Brand Positioning", "Revenue Modelling"],
    accent: "#00B4A6",
    accentSecondary: "#1A1A1A",
    objective: `Lizia is a French reading light brand operating in a fragmented, price-sensitive market being squeezed from two directions simultaneously — ultra-cheap Chinese competitors flooding Amazon at under €5, and digital reading devices like the Kindle Paperwhite eliminating the need for a physical reading light entirely. Despite strong product reviews and genuine consumer affection, Lizia lacks a clear strategic response to either threat.\n\nThe objective of this project was to identify Lizia's highest-value customer segment through a structured segmentation framework, map their behaviour and purchase triggers, and develop a prioritised multi-lever strategy to maximise revenue from both existing products and potential new product lines — without competing on price, where Lizia cannot win.`,
    analysis: `The French reading accessories market presents a clear paradox: a large installed base of readers, but minimal per-capita spending on accessories. Lizia's current annual revenue of €42M reflects a narrow reach — approximately 1M buyers at ~€35 per unit. The broader physical books market represents 25M active buyers, while the digital segment opens access to 9M buyers spending significantly more per purchase. Reading frequency is the single strongest predictor of accessory spend — making the Bedtime Reader segment the most commercially valuable target, despite representing only 30% of total readers by volume.`,
    competition: `Lizia faces competition from two fundamentally different directions that require two fundamentally different responses.\n\nAt the low end, Chinese manufacturers sell near-identical clip-on reading lights on Amazon from €1.59 — products with 11,000+ units sold and reviews praising basic functionality. The threat here is not quality but price anchoring — consumers who discover reading lights through Amazon search are immediately conditioned to expect a €2–5 price point. Lizia cannot and should not compete here.\n\nAt the high end, the Kindle Paperwhite at €120 represents a category-level threat — not a product competitor but a behavioural alternative that eliminates the use case entirely for readers willing to switch to digital.\n\nThe correct competitive response is premiumisation and emotional positioning — owning the territory that Chinese commodities cannot reach (brand story, design quality, gifting appeal) and that Kindle cannot replicate (the physical reading ritual).`,
    recommendations: {
      intro: "Three revenue-driving strategies were proposed:",
      pillars: [
        {
          title: "Retail Placement (FMOT)",
          body: "Position Lizia at the physical point of decision — bookstore checkouts, airport newsagents, and library gift shops — to convert impulse discovery into purchase at the shelf.",
        },
        {
          title: "Usage Occasion Marketing",
          body: "Create emotional campaigns tied to specific reading moments (bedtime, commute, travel) to build habitual purchasing and drive 2nd-unit sales within households.",
        },
        {
          title: "Co-branding with Bestsellers",
          body: "Partner with major publishing houses and book clubs to create limited edition Lizia bundles with bestselling titles, generating urgency and automatic add-on purchases.",
        },
      ],
    },
    skills: [
      "Market Segmentation",
      "Consumer Behaviour Analysis",
      "Competitive Positioning",
      "Retail Strategy",
      "Revenue Modelling",
      "Growth Marketing",
      "Product Strategy",
      "Brand Positioning",
      "Strategic Prioritisation",
    ],
  },
  {
    id: "first-always",
    number: "04",
    title: "First. Always.",
    client: "Ayngaran Consultancy Services | Brand Identity Commission | Logo Design & Brand Strategy",
    clientLogo: "/logos/ayngaran.png",
    tags: ["Brand Identity", "Logo Design", "Visual Strategy", "Typography", "Brand Architecture"],
    accent: "#C9A84C",
    accentSecondary: "#0F2147",
    darkSkills: true,
    modalDark: true,
    modalBg: "#0F2147",
    objective: `Ayngaran Consultancy Services required a brand identity that could do something rare: encode centuries of cultural meaning into a single, modern mark — without it feeling like costume or cliché. The company's name derives from "Ayngaran," the Tamil word for Ganesha — the elephant-headed deity revered as the remover of obstacles, the patron of new beginnings, and the god of wisdom and intellect. These are not incidental attributes. They are the exact qualities a consulting firm promises its clients.\n\nThe brief was to create a visual identity capable of speaking simultaneously to a global corporate audience and to a Tamil cultural heritage — without compromising either. The mark needed to function as a professional logo, a cultural statement, and a strategic proof point all at once.`,
    analysis: `The central challenge was representation without decoration. The risk in culturally derived logos is falling into illustration — adding a literal elephant, using traditional motifs as surface texture, or producing something that reads as "ethnic branding" rather than strategic identity.\n\nThe breakthrough came from reframing the question. Instead of asking "how do we represent Ganesha?" the design process asked: "what does the letter A look like when it carries the structural memory of an elephant?" Ganesha's silhouette — the triangular torso, the large ears extending outward, the downward-curving trunk — maps almost precisely onto the geometry of an uppercase A. The crossbar becomes the trunk. The apex becomes the crown. The counter spaces become the ears.\n\nThis structural correspondence is not forced. It emerges from the letterform itself when you know where to look — which is exactly the point. The best hidden logos work not because the shape was hidden, but because the meaning was always there.`,
    recommendations: {
      intro: "Three principles guided every decision in the identity system:",
      pillars: [
        {
          title: "Encode, Don't Illustrate",
          body: "The elephant is not drawn — it is embedded in the geometry of the letterform. This distinction separates a strategic mark from a decorative one.",
        },
        {
          title: "Earn Both Audiences",
          body: "The mark reads as a clean, modern logotype to those unfamiliar with the cultural reference. To those who know Ganesha, it reveals itself immediately. Neither reading is wrong.",
        },
        {
          title: "Let the Name Do the Work",
          body: "The wordmark 'AYNGARAN' is set in a refined geometric serif — confident, unhurried, built for longevity. The A is the anchor. The rest follows.",
        },
      ],
    },
    skills: [
      "Brand Identity Design",
      "Logo Design",
      "Cultural Strategy",
      "Typography",
      "Visual Semiotics",
      "Brand Architecture",
      "Strategic Positioning",
    ],
  },
]
