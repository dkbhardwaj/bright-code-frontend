import React, { FC } from "react";
import { PricingSectionBlade } from "./PageBuilder/section.types";

type Props = {
    data: PricingSectionBlade;
};

const PricingSection: FC<Props> = ({ data }) => {
    const {
        sectionId,
        sectionPadding,
        sectionClasses,
        theme,
        eyebrowText,
        introTitle,
        subtitle,
        description,
        supportingText,
        footerText,
        wrapItems = [],
        link,
    } = data;

    const safePadding = Array.isArray(sectionPadding)
        ? sectionPadding.join(" ")
        : "";

    return (
        <section
            id={sectionId}
            className={`pricing w-full ${safePadding}${sectionClasses ? ` ${sectionClasses}` : ""}${theme ? ` theme-${theme}` : ""}`}
        >
            <div className="container">

                {/* Top Label */}
                {eyebrowText && (
                    <div className="mb-4">
                        <span className="announcemnet-badge">
                            {eyebrowText}
                        </span>
                    </div>
                )}

                {/* Description */}
                {description && (
                    <p className="text-[#8E8E93] text-[16px] font-normal mb-4 diff-on-dark-mode">
                        {description}
                    </p>
                )}

                {/* Price */}
                <div className="flex items-end gap-3 mb-6">
                    <h2 className="lg-up:!text-[64px] font-normal text-[#000D20]">
                        {introTitle}
                    </h2>
                    {subtitle && (
                        <span className="text-gray-500 text-lg mb-2">
                            {subtitle}
                        </span>
                    )}
                </div>

                {/* Supporting Text */}
                {supportingText && (
                    <p className="text-[#8E8E93] text-[16px] font-normal mb-4">
                        {supportingText}
                    </p>
                )}

                <hr className="my-8 border-gray-200" />

                {/* Wrap Items — repeatable note blocks from ACF */}
                {wrapItems.length > 0 && (
                    <div className="flex flex-col gap-4 mb-4">
                        {wrapItems.map((item, index) => (
                            <div key={index} className="wrapper w-full">
                                <p className="text-[#8E8E93] text-[16px] font-normal">
                                    {item.note}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer + CTA */}
                <div className="flex flex-col md-up:flex-row md:items-center md-up:justify-between md-up:items-center gap-6">

                    {footerText && (
                        <a
                            className="text-[#000D20] text-[16px] font-[400] md:mb-[15px] diff-on-dark-mode delay-75 transition-all duration-300 hover:underline"
                            href="/"
                        >
                            {footerText}
                        </a>
                    )}

                    {link?.linkText && (
                        <div className="btn-wrap w-fit text-right">
                            <a
                                target={link.target ? "_blank" : "_self"}
                                className={`btn-primary btn-blue-rect dark-gradint${link.classname ? ` ${link.classname.join(" ")}` : ""}`}
                                href={link.linkUrl}
                            >
                                <span>{link.linkText}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;