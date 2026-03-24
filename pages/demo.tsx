import React from "react";
import IntroSection from "../components/Intro";
import ComparisonRowGrid from "../components/ComparisonRowGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import PricingSection from "@/components/PricingSection";
import RecognitionSection from "@/components/RecognitionSection";
import FeaturedHighlights from "../components/FeaturedHighlights";
import GridLayout from "../components/GridLayout";
import { GridLayoutBlade } from "../components/PageBuilder/section.types";

const gridLayoutData: GridLayoutBlade = {
    fieldGroupName: "PagebuilderSectionsGridLayoutSectionLayout",
    theme: "dark",
    sectionPadding: ["padding-medium"],
    rows: [
        {
            columnLayout: "leftLarge",
            cards: [
                {
                    cardTitle: "Large Left Card",
                    cardDescription: "This is a demonstration of the leftLarge layout, stretching this card out more horizontally and presenting a larger image.",
                    cardImage: {
                        node: {
                            altText: "Sample Image",
                            sourceUrl: "/embedded.svg",
                        },
                    },
                    cta: {
                        ctaLabel: "Learn more",
                        ctaUrl: "#",
                        openInNewTab: false,
                    },
                },
                {
                    cardTitle: "Small Right Card",
                    cardDescription: "This card sits next to the large one, taking up less space in a 8/4 grid split on desktop.",
                    cardImage: {
                        node: {
                            altText: "Sample Image",
                            sourceUrl: "/embedded.svg",
                        },
                    },
                    cta: {
                        ctaLabel: "View details",
                        ctaUrl: "#",
                        openInNewTab: false,
                    },
                },
            ],
        },
        {
            columnLayout: "rightLarge",
            cards: [
                {
                    cardTitle: "Small Left Card",
                    cardDescription: "This is a demonstration of the rightLarge layout, stretching this card out more horizontally and presenting a larger image.",
                    cardImage: {
                        node: {
                            altText: "Sample Image",
                            sourceUrl: "/embedded.svg",
                        },
                    },
                    cta: {
                        ctaLabel: "Learn more",
                        ctaUrl: "#",
                        openInNewTab: false,
                    },
                },
                {
                    cardTitle: "Large Right Card",
                    cardDescription: "This card sits next to the large one, taking up less space in a 8/4 grid split on desktop.",
                    cardImage: {
                        node: {
                            altText: "Sample Image",
                            sourceUrl: "/embedded.svg",
                        },
                    },
                    cta: {
                        ctaLabel: "View details",
                        ctaUrl: "#",
                        openInNewTab: false,
                    },
                },
            ],
        },
    ],
    link: {
        target: "",
        linkUrl: "#",
        linkText: "View all features",
        classname: [],
    },
};

const introData = {
    eyebrowText: "Check your fit",
    introTitle: "The Work fits some engagements better than others",
    textAlighment: "left",
    sectionPadding: ["padding-medium"],
    link: {
        classname: "",
        fieldGroupName: "",
        linkText: "",
        linkUrl: "",
        target: "",
    },
};

const comparisonData = {
    sectionPadding: ["pb-[80px]"],
    leftColumnLabel: "GOOD FIT IF",
    rightColumnLabel: "NOT A FIT IF",
    rows: [
        {
            goodFit: "You're building something real and need a partner who moves fast without cutting corners.",
            notFit: "You need a vendor to execute a fully-formed brief, not a thinking partner.",
        },
        {
            goodFit: "You value directness over decks, and want thinking that challenges yours.",
            notFit: "Budget is the primary filter and you're comparison shopping on hourly rate.",
        },
        {
            goodFit: "Your timeline is tight and your standards aren't and looking for High Quality Product.",
            notFit: "You're not ready to move for 6+ months during the software development",
        },
        {
            goodFit: "You're ready to make decisions and own the outcome solely within the product.",
            notFit: "No hard feelings either way. The filter exists so that the engagements that do happen can go deep",
        },
    ],
    footerText: "Fewer projects, done properly — that's the trade.",
    link: {
        linkText: "See Budget",
        linkUrl: "#",
        target: "_self",
    },
};

const introData2 = {
    eyebrowText: "Check your fit",
    introTitle: "Four Steps No suprises in between.",
    sub: "Every engagement follows the same sequence — not because of process for its own sake, but because each step clears the ground for the next one.",
    textAlighment: "left",
    sectionPadding: ["padding-medium"],
    link: {
        classname: "",
        fieldGroupName: "",
        linkText: "",
        linkUrl: "",
        target: "",
    },
};

const processTimelineData = {
    sectionPadding: ["pt-16 pb-16 md:pt-24 md:pb-24"],
    steps: [
        {
            id: 1,
            title: "DIAGNOSE",
            description: "The first conversation is a structured intake — current state, constraints, what's already been tried. By the end, both sides know whether there's a fit worth pursuing and what the shape of it might be."
        },
        {
            id: 2,
            title: "SCOPE",
            description: "A short written document sets the boundaries: deliverables, timeline, decision rights, and what success looks like. Ambiguity at this stage is expensive. Clarity here makes the rest fast."
        },
        {
            id: 3,
            title: "EXECUTE",
            description: "Progress is visible from day one. Weekly checkpoints are short and focused on decisions, not status updates. You stay close enough to redirect; distant enough to let the work breathe."
        },
        {
            id: 4,
            title: "TRANSFER",
            description: "Every engagement ends with documentation, a handoff session, and a clear owner on your side. The goal is that the work stands on its own — and that next time, you need less help, not more."
        }
    ]
};
const pricingData = {
    eyebrowText: "Pricing",
    introTitle: "$8–18k",
    subtitle: "per engagement",
    description: "Most projects fall within a clear range. Here it is.",
    supportingText:
        "Where you land depends on scope, existing infrastructure, and how much of the diagnostic work has already been done on your side.",
    note: [
        "There's no discovery call required to get a number. ",
        "If the range doesn't fit, this probably isn't the right fit either",
        " — and that's useful to know before either of us spends time finding out."
        ],
    footerText: "Not sure what scope you need? Start with a Website Audit →",
    cta: {
        linkText: "Website Audit",
        linkUrl: "#",
        target: "_self",
    },
    sectionPadding: ["padding-medium"],
    textAlignment: "left" as const, 
};
const recognitionData = {
    topText:
        "You've been running the same systems long enough to know exactly where they break. The workarounds have workarounds. The team has adapted so thoroughly to the friction that no one mentions it anymore — it's just the way things work here. You're not in crisis. You're in drift, which is harder to act on because nothing is obviously on fire.",
    
    bottomText:
        "At some point you started a conversation about fixing it — internally, with a vendor, maybe both. That conversation produced a document. The document produced a roadmap. The roadmap is now eighteen months old and the first phase still hasn't shipped. You know what needs to change. The question is why it hasn't, and whether the next attempt will be any different.",

    sectionPadding: ["padding-medium"],
    textAlignment: "center" as const,
};

const featureHighlightsData = {
    fieldGroupName: "PagebuilderSectionsFeatureHighlightsLayout" as const,
    sectionPadding: ["padding-medium"],
    theme: "light" as const,
    items: [
        {
            title: "Scope Before Sprint",
            description:
                "We don't open a ticket until the edges of the problem are understood. That means a short written brief, agreed constraints, and a named outcome — before a single line of code is planned.",
            bulletColor: "white" as const,
        },
        {
            title: "Decisions in Writing",
            description:
                "Every meaningful technical choice produces a brief record of what was decided and why. Not documentation for its own sake — a transfer mechanism, so context survives personnel changes.",
            bulletColor: "blue" as const,
        },
        {
            title: "Reviews as Checkpoints",
            description:
                "We build review into the process at fixed intervals, not as a final gate. Catching a wrong turn at week two costs a fraction of what it costs at week eight.",
            // no bulletColor — defaults to blue
        },
        {
            title: "Outcomes Over Output",
            description:
                "Velocity is a proxy. We track whether the system is getting more capable and more reliable over time — not whether the team looks busy. The metrics follow from that framing.",
            // bulletColor: "white" as const,
        },
    ],
    link: {
        linkText: "Book an intro call",
        linkUrl: "#",
    },
};
export default function DemoPage() {
    return (
        <>
            <IntroSection data={introData2} />
            <ProcessTimeline data={processTimelineData} />
            <FeaturedHighlights data={featureHighlightsData} />
            <GridLayout data={gridLayoutData} />
            <IntroSection data={introData} />
            <ComparisonRowGrid data={comparisonData} />
            <PricingSection data={pricingData}/>
            <RecognitionSection data={recognitionData}/>
        </>
    );
}
