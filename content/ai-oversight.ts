import type { Blade } from "../components/PageBuilder/section.types";

// /ai-oversight — flagship offer: human oversight of existing AI workflows.

export const sections: Blade[] = [
  {
    fieldGroupName: "PagebuilderSectionsHeroBannerLayout",
    theme: "light",
    varient: "light",
    image: {
      node: {
        altText: "Human reviewers overseeing AI output",
        guid: "",
        sourceUrl: "/what-we-do-blades/care.svg",
      },
    },
    title: {
      titlePrefix: "Deep human oversight for your",
      titleGradient: "AI workflows",
      titleSuffix: "",
    },
    subtitle:
      "Your agency already uses AI. The question is who catches it when it's wrong. We put experienced reviewers between your models and your clients — auditing outputs, correcting failures, and owning the quality bar.",
    textUnderCta: "Start with an audit of one workflow. See what we catch.",
    cta: [
      {
        link: {
          target: true,
          linkUrl: "/contact",
          linkText: "Book a call",
          classname: "rounded-blue",
        },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsIntroductionLayout",
    eyebrowText: "The problem",
    introTitle: "AI output is cheap. Client trust isn't.",
    textAlighment: "center",
    sub: "One hallucinated stat in a client report, one off-brand paragraph in a campaign, one subtle bug in generated code — and the time AI saved you is gone, along with credibility. Spot-checking by whoever's free isn't a quality system.",
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
    comparisonTitle: "AI alone vs. AI with oversight",
    sectionPadding: ["padding-medium"],
    leftColumn: {
      columnTitle: "AI alone",
      items: [
        { item: "Confident-sounding output, whether or not it's correct" },
        { item: "Errors surface after the client sees them" },
        { item: "Quality depends on who happened to review it" },
        { item: "Failures repeat because nobody feeds them back" },
        { item: "No one is accountable when it goes wrong" },
      ],
    },
    rightColumn: {
      columnTitle: "AI + Bright Code oversight",
      items: [
        { item: "Every output reviewed against facts, brand and brief" },
        { item: "Errors caught and corrected before delivery" },
        { item: "A consistent, documented quality bar" },
        { item: "Corrections feed back into prompts and process" },
        { item: "Named humans stand behind every deliverable" },
      ],
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsTimelineViewLayout",
    theme: "dark",
    sectionPadding: ["padding-medium"],
    timelineItems: [
      {
        item: "Audit. We map your existing AI workflows, sample recent outputs, and show you exactly where the failure risk lives.",
      },
      {
        item: "Define the bar. Together we set review criteria per workflow — facts, tone, compliance, logic — so 'good' is written down, not vibes.",
      },
      {
        item: "Review in the loop. Our reviewers check outputs inside your pipeline, correcting or flagging before anything reaches a client.",
      },
      {
        item: "Feed it back. Every correction becomes a prompt fix, a guardrail, or a process change — so your workflows get safer over time.",
      },
    ],
    link: {
      classname: ["rounded-blue"] as unknown as string,
      linkText: "Book a call",
      linkUrl: "/contact",
      target: false,
    },
  },
  {
    fieldGroupName: "PagebuilderSectionsIconWithTextCardLayout",
    topDivider: true,
    cards: [
      {
        cardTitle: "Hallucinated facts",
        subtitle: "Invented stats, fake citations, confident nonsense — verified against sources.",
        cardImage: { node: { sourceUrl: "/analysis.svg", altText: "Fact checking" } },
      },
      {
        cardTitle: "Off-brand tone",
        subtitle: "Output that's technically fine but doesn't sound like your client.",
        cardImage: { node: { sourceUrl: "/file.svg", altText: "Brand tone" } },
      },
      {
        cardTitle: "Compliance risks",
        subtitle: "Claims, disclosures and regulated language that can't ship unchecked.",
        cardImage: { node: { sourceUrl: "/header/secure-file.svg", altText: "Compliance" } },
      },
      {
        cardTitle: "Broken logic & code",
        subtitle: "Subtle bugs and flawed reasoning that pass a skim but fail in production.",
        cardImage: { node: { sourceUrl: "/window.svg", altText: "Code review" } },
      },
      {
        cardTitle: "Data leakage",
        subtitle: "Client-confidential details surfacing where they shouldn't.",
        cardImage: { node: { sourceUrl: "/globe.svg", altText: "Data protection" } },
      },
      {
        cardTitle: "Silent failures",
        subtitle: "Workflows that quietly degrade — caught by monitoring, not luck.",
        cardImage: { node: { sourceUrl: "/clock.svg", altText: "Monitoring" } },
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFaqLayout",
    faqTitle: "Questions agencies ask us",
    sectionPadding: ["padding-medium"],
    faqs: [
      {
        question: "Do you replace my team?",
        answer:
          "No. Your team keeps owning clients and creative direction. We're the quality layer around the AI parts of your delivery — reviewers and engineers your team hands work to, not a replacement for it.",
      },
      {
        question: "Who actually reviews the output?",
        answer:
          "Experienced editors, analysts and engineers — matched to the workflow. Code review is done by people who ship production software; reports are reviewed by people who've written them for clients.",
      },
      {
        question: "Which AI tools do you work with?",
        answer:
          "Whatever you already run — ChatGPT, Claude, Gemini, custom pipelines, agent frameworks. Oversight sits on top of your stack; we don't require you to switch tools.",
      },
      {
        question: "How do you handle client confidentiality?",
        answer:
          "NDAs by default, access limited to the workflows we review, and no client data used to train anything. We can work inside your accounts and infrastructure so data never leaves your environment.",
      },
      {
        question: "What does it cost?",
        answer:
          "Oversight runs as a monthly retainer scoped to workflow volume, starting with a paid audit of a single workflow so both sides can gauge value before committing.",
      },
    ],
  },
  {
    fieldGroupName: "PagebuilderSectionsFooterCtaLayout",
    footerCtaTitle: "Find out what your AI is getting wrong",
    subtitle:
      "Send us one workflow. We'll audit a sample of its recent output and walk you through what we'd catch.",
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
