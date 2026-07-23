import type { Blade } from "../components/PageBuilder/section.types";

// /lp/human-in-the-loop — paid/organic landing page targeting LA-area
// agencies and product teams shipping code fast with AI coding tools,
// positioning Bright Code as the senior human review layer.

// All "Book a call" CTAs on this page point to the #book-a-call anchor
// below instead of /contact, so the booking form opens on the same page.
export const booking = {
  title: "Book your code review audit",
  subtitle:
    "Thirty minutes on your repo and how AI-generated code moves through it today. Pick a date and we'll confirm by email.",
};

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsHeroBannerLayout",
    theme: "light",
    varient: "light",
    eyebrowText: "For Los Angeles agencies & product teams",
    image: {
      node: {
        altText: "A senior engineer reviewing an AI-generated pull request before it merges",
        guid: "",
        sourceUrl: "/what-we-do-blades/hero-code-review.svg",
      },
    },
    title: {
      titlePrefix: "AI ships the code.",
      titleGradient: "We're the human in the loop.",
      titleSuffix: "",
    },
    subtitle:
      "Copilot, Cursor and Claude Code help your team ship fast. We're the senior engineers who review it before it reaches production — catching security gaps, broken logic and bad architecture along the way.",
    textUnderCta: "Free 30-minute code review audit for LA-based teams.",
    cta: [
      {
        link: {
          target: true,
          linkUrl: "#book-a-call",
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
    eyebrowText: "The problem",
    introTitle: "AI ships code fast. It doesn't own what happens next.",
    textAlighment: "center",
    sub: "Your team is moving faster than ever with AI coding tools — and shipping more surface area for bugs, security holes and architectural debt along with it. A pull request that looks clean can still leak data, break under load, or quietly rack up debt nobody planned for. Someone still needs to be accountable for what goes to production.",
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
    fieldGroupName: "PagebuilderSectionsComparisonBlockLayout",
    eyebrowText: "The difference",
    comparisonTitle: "Shipping AI code alone vs. with a human in the loop",
    sectionPadding: ["padding-medium"],
    leftColumn: {
      columnTitle: "AI-generated code alone",
      items: [
        { item: "Confident, working-looking code that may still be wrong" },
        { item: "Security and edge cases missed until they're exploited" },
        { item: "Review quality depends on whoever's free that day" },
        { item: "Technical debt piles up with no one tracking it" },
        { item: "No senior engineer accountable for what ships" },
      ],
    },
    rightColumn: {
      columnTitle: "AI code + Bright Code in the loop",
      items: [
        { item: "Every pull request reviewed by a senior engineer before merge" },
        { item: "Security, performance and edge cases checked systematically" },
        { item: "A consistent, documented review bar across your repos" },
        { item: "Debt flagged and prioritized, not left to compound" },
        { item: "A named engineer accountable for what reaches production" },
      ],
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsWorkflowDiagramLayout",
    eyebrowText: "Where we fit",
    diagramTitle: "Between your AI tools and production",
    subtitle: "Every pull request gets a human checkpoint before it merges.",
    sectionPadding: ["padding-medium"],
    steps: [
      {
        stepTitle: "Your repo",
        stepDescription: "PRs open the way they already do — your repo, your CI, your stack.",
        icon: { node: { sourceUrl: "/file.svg", altText: "Your repo" } },
      },
      {
        stepTitle: "AI generates the code",
        stepDescription: "Copilot, Cursor, Claude Code and agents draft implementations in minutes.",
        icon: { node: { sourceUrl: "/window.svg", altText: "AI generates code" } },
      },
      {
        stepTitle: "Senior engineer reviews",
        stepDescription: "We check logic, security, performance and architecture before anything merges.",
        icon: { node: { sourceUrl: "/analysis.svg", altText: "Human review" } },
        highlight: true,
      },
      {
        stepTitle: "Ships to production",
        stepDescription: "Merged with confidence, with a named engineer standing behind it.",
        icon: { node: { sourceUrl: "/globe.svg", altText: "Ships to production" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsTimelineViewLayout",
    theme: "dark",
    sectionPadding: ["padding-medium"],
    timelineItems: [
      {
        item: "Audit your stack. We look at your repos, CI/CD and how AI coding tools are already being used across your team.",
      },
      {
        item: "Define the bar. We set review standards per repo — security, performance, architecture — so 'good' is written down, not vibes.",
      },
      {
        item: "Review in the loop. Our engineers review pull requests inside your existing workflow, before merge, not after launch.",
      },
      {
        item: "Feed it back. Patterns we catch become linting rules, prompts and guardrails — so your AI output gets safer over time.",
      },
    ],
    link: {
      classname: ["rounded-blue"] as unknown as string,
      linkText: "Book a call",
      linkUrl: "#book-a-call",
      target: false,
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsIconWithTextCardLayout",
    topDivider: true,
    cards: [
      {
        cardTitle: "Security vulnerabilities",
        subtitle: "Injection risks, auth gaps and exposed secrets AI won't flag in its own output.",
        cardImage: { node: { sourceUrl: "/header/secure-file.svg", altText: "Security review" } },
      },
      {
        cardTitle: "Broken business logic",
        subtitle: "Edge cases and requirements the AI didn't have context for.",
        cardImage: { node: { sourceUrl: "/analysis.svg", altText: "Logic review" } },
      },
      {
        cardTitle: "Performance issues",
        subtitle: "N+1 queries, unbounded loops and other code that works until it doesn't.",
        cardImage: { node: { sourceUrl: "/clock.svg", altText: "Performance review" } },
      },
      {
        cardTitle: "Bad architecture",
        subtitle: "Shortcuts that ship fast today and cost weeks to unwind later.",
        cardImage: { node: { sourceUrl: "/window.svg", altText: "Architecture review" } },
      },
      {
        cardTitle: "Data exposure",
        subtitle: "Client or user data surfacing where it shouldn't.",
        cardImage: { node: { sourceUrl: "/globe.svg", altText: "Data protection" } },
      },
      {
        cardTitle: "Silent technical debt",
        subtitle: "Debt that compounds quietly because no one's tracking it.",
        cardImage: { node: { sourceUrl: "/file.svg", altText: "Technical debt" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFaqLayout",
    faqTitle: "Questions LA teams ask us",
    sectionPadding: ["padding-medium"],
    faqs: [
      {
        question: "Do you replace our developers?",
        answer:
          "No. Your team keeps building and shipping. We're the senior review layer for the AI-generated parts of your codebase — engineers your team hands pull requests to, not a replacement for it.",
      },
      {
        question: "Which AI coding tools do you support?",
        answer:
          "Whatever your team already uses — GitHub Copilot, Cursor, Claude Code, Windsurf, custom agents. We review the output regardless of what generated it.",
      },
      {
        question: "Are you actually based in LA?",
        answer:
          "Yes — we're based in Santa Monica and work with agencies and product teams across Los Angeles. We can meet in person or work fully async, whichever fits your team.",
      },
      {
        question: "How does review fit into our existing workflow?",
        answer:
          "We work inside your repo and CI — reviewing pull requests before merge, the same way a senior engineer on your team would. No new tools for your developers to learn.",
      },
      {
        question: "What does it cost?",
        answer:
          "Review runs as a monthly retainer scoped to your pull request volume, starting with a paid audit of one repo so you can see what we catch before committing.",
      },
    ],
  },
];
