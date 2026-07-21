import type { Blade } from "../components/PageBuilder/section.types";

// /ai-workflow-implementation — design & build AI workflows for agencies.

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsHeroBannerLayout",
    theme: "light",
    varient: "light",
    image: {
      node: {
        altText: "AI workflow implementation",
        guid: "",
        sourceUrl: "/what-we-do-blades/embedded.svg",
      },
    },
    title: {
      titlePrefix: "AI workflows designed for",
      titleGradient: "agency delivery",
      titleSuffix: "",
    },
    subtitle:
      "Not another tool to adopt. We design and build AI workflows around how your agency already delivers — inside your stack, with guardrails and human checkpoints from day one.",
    textUnderCta: "Most pilots go from audit to production in 4–6 weeks.",
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
          linkText: "Already run AI? Get oversight",
          classname: "rounded-white",
        },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsIntroductionLayout",
    eyebrowText: "Implementation",
    introTitle: "From \"we should use AI\" to workflows that ship",
    textAlighment: "center",
    sub: "Most agencies don't have an AI problem — they have a workflow problem. Tools get bought, experiments stall, and nothing reaches production. We do the unglamorous part: picking the right use cases, wiring them into your delivery, and making them stick.",
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
    fieldGroupName: "PagebuilderSectionsColThreeCardsLayout",
    theme: "light",
    sectionPadding: ["padding-medium"],
    cards: [
      {
        cardTitle: "Map & design",
        fieldGroupName: "",
        subtitle:
          "We audit your delivery pipeline, find where AI genuinely saves hours, and design workflows with review checkpoints built in — not bolted on.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Map and design", sourceUrl: "/what-we-do-blades/marketing.svg" },
        },
      },
      {
        cardTitle: "Build & integrate",
        fieldGroupName: "",
        subtitle:
          "We build into the tools you already use — project management, docs, CMS, code — so adoption doesn't depend on your team changing habits.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Build and integrate", sourceUrl: "/what-we-do-blades/embedded.svg" },
        },
      },
      {
        cardTitle: "Train & hand off",
        fieldGroupName: "",
        subtitle:
          "Your team gets SOPs, prompt libraries and guardrails — and the option of our ongoing human oversight once workflows run in production.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Train and hand off", sourceUrl: "/what-we-do-blades/teams.svg" },
        },
      },
    ],
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
    imageOnLeft: true,
    timageOnLeft: true,
    image: {
      node: {
        altText: "Production software engineering",
        sourceUrl: "/what-we-do-blades/white_label_dark_theme.svg",
      },
    },
    eyebrowText: "Why us",
    imageWithContentTitle: "Built by people who ship production software",
    blurb:
      "Bright Code started as an engineering team building and maintaining production websites for agencies. That's why our workflows are real integrations with error handling and monitoring — not prompt collections in a slide deck — and why our oversight is technical, not just editorial.",
    link: {
      target: false,
      linkUrl: "/how-we-work",
      linkText: "How we work",
      classname: "",
    },
    buttonText: "",
    buttonLink: "",
    theme: "dark",
    sectionPadding: ["padding-medium"],
  },
  {
    fieldGroupName: "PagebuilderSectionsWorkflowDiagramLayout",
    eyebrowText: "The process",
    diagramTitle: "Audit to production in four steps",
    sectionPadding: ["padding-medium"],
    steps: [
      {
        stepTitle: "Discovery",
        stepDescription: "A week mapping your delivery, tools and quality bar.",
        icon: { node: { sourceUrl: "/analysis.svg", altText: "Discovery" } },
      },
      {
        stepTitle: "Pilot workflow",
        stepDescription: "One high-leverage workflow built and tested with your team.",
        icon: { node: { sourceUrl: "/window.svg", altText: "Pilot" } },
      },
      {
        stepTitle: "Rollout",
        stepDescription: "Hardened, documented and expanded to more of your delivery.",
        icon: { node: { sourceUrl: "/uis_graph-bar.svg", altText: "Rollout" } },
      },
      {
        stepTitle: "Ongoing oversight",
        stepDescription: "Optional: our reviewers keep owning quality in production.",
        icon: { node: { sourceUrl: "/globe.svg", altText: "Oversight" } },
        highlight: true,
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFooterCtaLayout",
    footerCtaTitle: "Start with one workflow",
    subtitle:
      "Bring us the most repetitive part of your delivery. We'll scope a pilot you can judge us on.",
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
