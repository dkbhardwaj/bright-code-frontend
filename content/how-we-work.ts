import type { Blade } from "../components/PageBuilder/section.types";

// /how-we-work — process, engagement models, principles.

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsIntroductionLayout",
    eyebrowText: "How we work",
    introTitle: "Small scope first. Trust earned, then scaled.",
    textAlighment: "center",
    sub: "Every engagement starts with one workflow and a measurable quality bar — not a transformation roadmap. Here's what working with Bright Code actually looks like.",
    sectionPadding: ["padding-large"],
    link: {
      classname: "",
      fieldGroupName: "",
      linkText: "",
      linkUrl: "",
      target: "",
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsTimelineViewLayout",
    theme: "dark",
    sectionPadding: ["padding-medium"],
    timelineItems: [
      {
        item: "Intro call. Thirty minutes on how your agency delivers today, where AI is already in play, and whether we're a fit. No deck, no pressure.",
      },
      {
        item: "Workflow audit. We go deep on one part of your delivery — sampling outputs, mapping tools and handoffs — and give you a written read on where AI helps and what it risks.",
      },
      {
        item: "Pilot. We implement or take over oversight of a single workflow, with success criteria agreed up front. You judge us on the pilot, not the pitch.",
      },
      {
        item: "Scale. What worked expands to more workflows, with our reviewers embedded in your delivery as an ongoing quality layer — reported on monthly, cancellable anytime.",
      },
    ],
    link: {
      classname: ["rounded-blue"] as unknown as string,
      linkText: "Start with an intro call",
      linkUrl: "/contact",
      target: false,
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsColThreeCardsLayout",
    theme: "light",
    sectionPadding: ["padding-medium"],
    cards: [
      {
        cardTitle: "Pilot project",
        fieldGroupName: "",
        subtitle:
          "Fixed scope, fixed price. One workflow implemented or audited end-to-end — the low-risk way to see how we work.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Pilot project", sourceUrl: "/what-we-do-blades/creative.svg" },
        },
      },
      {
        cardTitle: "Oversight retainer",
        fieldGroupName: "",
        subtitle:
          "Monthly. Our reviewers own the quality bar on your AI workflows, with reporting your account leads can forward to clients.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Oversight retainer", sourceUrl: "/what-we-do-blades/care.svg" },
        },
      },
      {
        cardTitle: "Embedded partner",
        fieldGroupName: "",
        subtitle:
          "For agencies going AI-first: implementation, oversight and engineering capacity under one white-label agreement.",
        cta: { fieldGroupName: "", linkPath: "", linkText: "" },
        cardImage: {
          node: { altText: "Embedded partner", sourceUrl: "/what-we-do-blades/white_label.svg" },
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
    fieldGroupName: "PagebuilderSectionsIconWithTextCardLayout",
    topDivider: true,
    cards: [
      {
        cardTitle: "Your tools, not ours",
        subtitle: "We build and review inside your stack. No forced migrations, no lock-in.",
        cardImage: { node: { sourceUrl: "/window.svg", altText: "Your tools" } },
      },
      {
        cardTitle: "Confidentiality first",
        subtitle: "NDAs by default. Client data stays in your environment and trains nothing.",
        cardImage: { node: { sourceUrl: "/header/secure-file.svg", altText: "Confidentiality" } },
      },
      {
        cardTitle: "White label by design",
        subtitle: "Your clients see your brand. We work behind it, like we always have.",
        cardImage: { node: { sourceUrl: "/file.svg", altText: "White label" } },
      },
      {
        cardTitle: "Humans accountable",
        subtitle: "Every deliverable has a named reviewer. When we sign off, we own it.",
        cardImage: { node: { sourceUrl: "/analysis.svg", altText: "Accountability" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFooterCtaLayout",
    footerCtaTitle: "See if we fit in thirty minutes",
    subtitle: "Bring one workflow you'd hand over tomorrow. We'll tell you honestly if we're the right layer for it.",
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
