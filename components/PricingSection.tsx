import React from "react";

type CTA = {
    linkText: string;
    linkUrl: string;
    target?: string;
};

type PricingData = {
    eyebrowText?: string;
    introTitle: string;
    subtitle?: string;
    description?: string;
    supportingText?: string;
    note?: string | string[]; // ✅ FIX
    footerText?: string;
    cta?: CTA;
    sectionPadding?: string[];
    textAlignment?: "left" | "center" | "right";
};

type Props = {
    data: PricingData;
};

const PricingSection: React.FC<Props> = ({ data }) => {
    return (
        <section className={`pricing w-full ${data.sectionPadding?.join(" ")}`}>
            <div className="container">

                {/* Top Label */}
                {data.eyebrowText && (
                    <div className="mb-4">
                        <span className="announcemnet-badge">
                            {data.eyebrowText}
                        </span>
                    </div>
                )}

                {/* Description */}
                {data.description && (
                    <p className="text-[#8E8E93] text-[16px] font-normal mb-4 diff-on-dark-mode ">
                        {data.description}
                    </p>
                )}

                {/* Price */}
                <div className="flex items-end gap-3 mb-6">
                    <h2 className=" lg-up:!text-[64px] font-normal text-[#000D20]">
                        {data.introTitle}
                    </h2>
                    {data.subtitle && (
                        <span className="text-gray-500 text-lg mb-2">
                            {data.subtitle}
                        </span>
                    )}
                </div>

                {/* Supporting Text */}
                {data.supportingText && (
                    <p className="text-[#8E8E93] text-[16px] font-normal mb-4">
                        {data.supportingText}
                    </p>
                )}

                <hr className="my-8 border-gray-200" />

                {/* Note */}
                {data.note && (
                    <p className="text-[#8E8E93] text-[16px] font-normal mb-4">
                        {Array.isArray(data.note) ? (
                            <>
                                {data.note[0]}
                                <strong className="font-semibold text-black">
                                    {data.note[1]}
                                </strong>
                                {data.note[2]}
                            </>
                        ) : (
                            data.note
                        )}
                    </p>
                )}

                {/* Footer + CTA */}
                <div className="flex flex-col md-up:flex-row md:items-center md-up:justify-between md-up:items-center gap-6">

                    {data.footerText && (
                        <a className="text-[#000D20] text-[16px] font-[400] md:mb-[15px] diff-on-dark-mode delay-75 transition-all duration-300 hover:underline " href={"/"}>   {data.footerText}
                            </a>
                    )}

                    {data.cta?.linkText && (
                        <div className="btn-wrap w-fit text-right">
                             <a  target={data.cta.target} className="btn-primary btn-blue-rect dark-gradint" href={data.cta.linkUrl}><span>{data.cta.linkText}</span>
                             </a>
                         </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;