import type { Blade } from "../components/PageBuilder/section.types";

// Homepage sections, shaped like the WPGraphQL pagebuilder response so this
// file can be swapped for a CMS query later without touching components.

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsHeroBannerLayout",
    theme: "light",
    varient: "light",
    eyebrowText: "For agencies",
    image: {
      node: {
        altText: "AI workflow output reviewed by humans before client delivery",
        guid: "",
        sourceUrl: "/hero-oversight-loop.svg",
      },
    },
    title: {
      titlePrefix: "AI workflows,",
      titleGradient: "human-verified",
      titleSuffix: "",
    },
    subtitle:
      "We implement AI workflows for agencies and provide deep human oversight of the ones you already run.",
    textUnderCta: "Free 30-minute workflow audit. No commitment.",
    cta: [
      {
        link: {
          target: true,
          linkUrl: "/contact",
          linkText: "Book a call",
          classname: "rounded-blue",
        },
      },
      {
        link: {
          target: true,
          linkUrl: "/ai-oversight",
          linkText: "See how oversight works",
          classname: "rounded-white",
        },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsIntroductionLayout",
    eyebrowText: "For agencies",
    introTitle: "AI speed. Human judgment. Client-ready output.",
    textAlighment: "center",
    sub: "Your clients expect AI-era turnaround at agency-grade quality. We make both possible: we build AI workflows around how your team already delivers, then keep experienced reviewers between the model and your clients — so nothing ships on autopilot.",
    sectionPadding: ["padding-medium"],
    link: {
      classname: "",
      fieldGroupName: "",
      linkText: "",
      linkUrl: "",
      target: "",
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsImageWithContentLayout",
    sectionId: "implement",
    imageOnLeft: true,
    timageOnLeft: true,
    image: {
      node: {
        altText: "An AI workflow with data pull, AI draft, auto-checks and human review steps",
        sourceUrl: "/implement-workflow.svg",
      },
    },
    eyebrowText: "Implement",
    imageWithContentTitle: "AI workflows built for your delivery",
    blurb:
      "We map your delivery pipeline, find where AI genuinely saves time — content production, research, reporting, QA — and build the workflows into the tools your team already uses. No platform to adopt, no black boxes.",
    link: {
      target: false,
      linkUrl: "/ai-workflow-implementation",
      linkText: "Explore implementation",
      classname: "",
    },
    buttonText: "",
    buttonLink: "",
    sectionPadding: ["padding-medium"],
  },
  {
    fieldGroupName: "PagebuilderSectionsImageWithContentLayout",
    sectionId: "oversee",
    imageOnLeft: false,
    timageOnLeft: false,
    image: {
      node: {
        altText: "A review queue where human reviewers approve and correct AI output",
        sourceUrl: "/oversee-review-queue.svg",
      },
    },
    eyebrowText: "Oversee",
    imageWithContentTitle: "Deep human oversight of the AI you already run",
    blurb:
      "Already using AI in production? We become your quality layer: experienced reviewers who audit outputs, catch hallucinations and off-brand work, and feed corrections back into your workflow — before clients ever see a mistake.",
    link: {
      target: false,
      linkUrl: "/ai-oversight",
      linkText: "Explore oversight",
      classname: "",
    },
    buttonText: "",
    buttonLink: "",
    sectionPadding: ["padding-medium"],
  },
  {
    fieldGroupName: "PagebuilderSectionsWorkflowDiagramLayout",
    eyebrowText: "Where we fit",
    diagramTitle: "Between the model and your clients",
    subtitle: "Every workflow we touch ships with a human checkpoint before delivery.",
    sectionPadding: ["padding-medium"],
    steps: [
      {
        stepTitle: "Your brief",
        stepDescription: "Work enters the pipeline the way it always has.",
        icon: { node: { sourceUrl: "/file.svg", altText: "Brief" } },
      },
      {
        stepTitle: "AI workflow runs",
        stepDescription: "Drafts, research, reports and checks generated in minutes.",
        icon: { node: { sourceUrl: "/window.svg", altText: "AI workflow" } },
      },
      {
        stepTitle: "Human oversight",
        stepDescription: "Experienced reviewers verify facts, tone, logic and compliance.",
        icon: { node: { sourceUrl: "/analysis.svg", altText: "Human review" } },
        highlight: true,
      },
      {
        stepTitle: "Client-ready output",
        stepDescription: "Delivered under your brand, with someone accountable for it.",
        icon: { node: { sourceUrl: "/globe.svg", altText: "Delivery" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsIconWithTextCardLayout",
    topDivider: true,
    cards: [
      {
        cardTitle: "Content production",
        subtitle: "Drafting, adaptation and localization with editorial review built in.",
        cardImage: { node: { sourceUrl: "/file.svg", altText: "Content production" } },
      },
      {
        cardTitle: "Client reporting",
        subtitle: "Automated performance reports, verified before they hit an inbox.",
        cardImage: { node: { sourceUrl: "/uis_graph-bar.svg", altText: "Client reporting" } },
      },
      {
        cardTitle: "Research & briefs",
        subtitle: "AI-gathered research, fact-checked by humans who cite sources.",
        cardImage: { node: { sourceUrl: "/analysis.svg", altText: "Research" } },
      },
      {
        cardTitle: "QA pipelines",
        subtitle: "Automated checks on deliverables, with human sign-off on edge cases.",
        cardImage: { node: { sourceUrl: "/clock.svg", altText: "QA pipelines" } },
      },
      {
        cardTitle: "Code & web delivery",
        subtitle: "AI-assisted development reviewed by engineers who ship production software.",
        cardImage: { node: { sourceUrl: "/window.svg", altText: "Code delivery" } },
      },
      {
        cardTitle: "Data enrichment",
        subtitle: "Cleaned, structured and validated data your team can actually rely on.",
        cardImage: { node: { sourceUrl: "/globe.svg", altText: "Data enrichment" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFooterCtaLayout",
    footerCtaTitle: "Put humans back in the loop",
    subtitle:
      "Tell us how your agency delivers today. We'll show you where AI fits — and where it needs supervision.",
    theme: "light",
    sectionPadding: ["padding-medium"],
    link: {
      target: "_self",
      linkUrl: "/contact",
      linkText: "Book a call",
      fieldGroupName: "",
      classname: "rounded-blue",
    },
  },
];
