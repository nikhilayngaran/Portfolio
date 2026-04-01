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
  objective: string
  analysis: string
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
    analysis: `The project began by challenging a common assumption: that going digital automatically means going green. Research revealed that online advertising consumed 106 TWh of energy globally in 2016, generating 60 million tonnes of CO₂ — driven largely by AI-powered ad targeting, programmatic networks, and energy-intensive data centres. A direct carbon audit comparing Lindt's website (rated F — dirtier than 93% of web pages globally) against L'Oréal's (rated B) made the gap concrete and urgent. Competitor benchmarking surfaced two leading practices: Dentsu and Nestlé achieved a 25% reduction in digital ad emissions through Scope3's diagnostics-to-delivery model, while L'Oréal earned shortlisting for the Ad Net Zero Best Practice in Sustainability award. Analysis of the broader marketing technology landscape highlighted how fragmented the adtech supply chain is — and how much untapped data exists to measure and reduce emissions at a campaign level.`,
    recommendations: {
      intro: "Four strategic pillars were proposed for Lindt:",
      pillars: [
        {
          title: "Track & Optimise Data",
          body: "Implement carbon measurement across ad impressions, data centre energy use, supply chain partners, and geographic delivery patterns. Align with Lindt's existing Scope 3 data commitments from its 2024 Sustainability Report.",
        },
        {
          title: "Sustainable Internal Mindset",
          body: "Introduce sustainability KPIs for marketing teams, tie performance reviews to carbon-efficient campaign delivery, and reward employees who reduce Lindt's advertising emissions footprint.",
        },
        {
          title: "Intrapreneurial Mindset",
          body: "Launch an annual internal hackathon for employees and stakeholders to pitch and pilot the best green marketing campaign — drawing on benchmarks from Mars (8% carbon reduction alongside 60% revenue growth) and Unilever's Sustainable Living Lab.",
        },
        {
          title: "Empower Internal Voices",
          body: "Shift toward in-house content production and employee advocacy to reduce dependence on high-energy external advertising channels, supported by Lindt's own 2025 earnings call acknowledging the need for faster in-house content pipelines.",
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
]
