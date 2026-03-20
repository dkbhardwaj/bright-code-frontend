import React from "react";

type RecognitionData = {
    topText: string;
    bottomText: string;
    sectionPadding?: string[];
    textAlignment?: "left" | "center" | "right";
};

type Props = {
    data: RecognitionData;
};

const RecognitionSection: React.FC<Props> = ({ data }) => {
    const alignmentClass =
        data.textAlignment === "center"
            ? "text-center"
            : data.textAlignment === "right"
            ? "text-right"
            : "text-left";

    return (
        <section className={`w-full ${data.sectionPadding?.join(" ")}`}>
            <div className="container">
                
                {/* Top Paragraph */}
                <p className={`text-[#000D20B2] text-[16px] leading-[32px] mb-8 ${alignmentClass}`}>
                    {data.topText}
                </p>

                {/* Bottom Paragraph */}
                <p className={`text-[#000D20B2] text-[16px] leading-[30px] ${alignmentClass}`}>
                    {data.bottomText}
                </p>

            </div>
        </section>
    );
};

export default RecognitionSection;