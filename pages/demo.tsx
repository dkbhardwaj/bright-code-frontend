import React from "react";
import IntroSection from "../components/Intro";
import ComparisonRowGrid from "../components/ComparisonRowGrid";

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

export default function DemoPage() {
    return (
        <>
            <IntroSection data={introData} />
            <ComparisonRowGrid data={comparisonData} />
        </>
    );
}
