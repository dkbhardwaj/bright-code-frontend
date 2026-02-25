import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Types
========================= */




export interface GridCardsProps {
    data: {
        fieldGroupName: 'PagebuilderSectionsGridCardsSectionLayout';
        theme: string;
        gridCards: {
            cardTitle: string;
            cardDescription: string;
            cardImage: {
                node: {
                    altText: string;
                    sourceUrl: string;
                }
            }
            cta: {
                ctaLabel: string;
                ctaUrl: string;
                openInNewTab: boolean;
            }
        }[];
        sectionPadding: string[];
        link: {
            target: string;
            linkUrl: string;
            linkText: string;
            classname: string[];
        };
        sectionId?: string;
    }
}


/* =========================
   Component
========================= */

const GridCards: React.FC<GridCardsProps> = ({
    data,
}) => {

    const {
        theme,
        gridCards,
        sectionPadding,
        sectionId,
        link
    } = data;

    const btntext = link?.linkText
    const btnUrl = link?.linkUrl
    return (
        <section id={sectionId} className={`grid-cards-section ${sectionPadding ? sectionPadding.join(" ") : "padding-medium"} ${theme === "dark" ? "darkMode" : ""}`}>

            <div className="container">

                {/* Grid */}
                <div className="
                            grid
                            grid-cols-1
                            tablet:grid-cols-10
                            lg-up:grid-cols-12
                            gap-[24px]
                            ">

                    {gridCards.map((card, index) => {
                        const rowIndex = Math.floor(index / 2);
                        const isFirstInRow = index % 2 === 0;

                        // Row 1: BIG | SMALL
                        // Row 2: SMALL | BIG
                        const isBig =
                            rowIndex % 2 === 0
                                ? isFirstInRow
                                : !isFirstInRow;

                        return (
                            <div
                                key={index}
                                className={`
                                            col-span-1 col-four
                                            ${isBig
                                        ? "tablet:col-span-6 lg-up:col-span-8"
                                        : "tablet:col-span-4 lg-up:col-span-4"
                                    }
                                    `}
                            >

                                <div className="card h-full rounded-3xl border border-[#E5E5EA] pb-[40px] flex flex-col justify-between overflow-hidden relative ">
                                    {card.cta?.ctaUrl && (
                                        <Link
                                            href={card.cta?.ctaUrl}
                                            className="redirect rounded-3xl overflow-hidden"
                                        >
                                            {card.cta?.ctaLabel}
                                        </Link>
                                    )}
                                    {/* Image */}
                                    <div className="imageWrap mb-6 h-55">
                                        <Image
                                            src={card.cardImage?.node?.sourceUrl}
                                            alt={card.cardImage?.node?.altText}
                                            width={500}
                                            height={300}
                                            className={`${data.theme == "dark" ? "dark-image" : "light-image"} w-full h-full !object-cover`}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="content px-7.5">
                                        <h4 className={`font-semibold text-[20px] md:text-[16px] ${data.theme == "dark" ? "text-[#f9fafb]" : "text-[#263238]"} `}>
                                            {card?.cardTitle}
                                        </h4>
                                        <p className="text-[16px] md:text-[12px] mt-1.25 text-[#6b7280]">
                                            {card?.cardDescription}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    {card.cta?.ctaLabel && card.cta?.ctaUrl && (
                                        <div className="btn-wrap px-7.5">
                                            <Link
                                                href={card.cta?.ctaUrl}
                                                className="blue-link inline-block text-[#0044FF] text-[12px] mt-2.5"
                                            >
                                                {card.cta?.ctaLabel}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>



                {/* Bottom Button */}
                {btntext && btnUrl && (
                    <div className="text-center mt-[48px]">
                        <Link href={btnUrl} className="btn-primary no-arrow">
                            {btntext}
                        </Link>
                    </div>
                )}
            </div>
        </section >
    );
};

export default GridCards;
