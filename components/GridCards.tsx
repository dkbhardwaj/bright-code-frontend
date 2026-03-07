import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Types
========================= */

interface GridCard {
    cardTitle: string;
    cardDescription: string;
    cardImage: {
        node: {
            altText: string;
            sourceUrl: string;
        };
    };
    cta: {
        ctaLabel: string;
        ctaUrl: string;
        openInNewTab: boolean;
    };
}

export interface GridCardsProps {
    data: {
        fieldGroupName: 'PagebuilderSectionsGridCardsSectionLayout';
        theme: string;
        /**
         * Each row controls its own layout and holds up to 2 cards.
         * columnLayout: "equal" (50/50), "leftLarge" (8/4), "rightLarge" (4/8).
         * Defaults to equal if null/omitted. Can be an array from WP.
         */
        rows: {
            columnLayout: string | string[] | null;
            cards: GridCard[];
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
   Helpers
========================= */

function getColSpan(columnLayout: string | string[] | null | undefined, isFirst: boolean): string {
    const layout = Array.isArray(columnLayout) ? columnLayout[0] : columnLayout;

    if (layout === "leftLarge" || layout === "left") {
        return isFirst
            ? "tablet:col-span-6 lg-up:col-span-8"
            : "tablet:col-span-4 lg-up:col-span-4";
    }
    if (layout === "rightLarge" || layout === "right") {
        return isFirst
            ? "tablet:col-span-4 lg-up:col-span-4"
            : "tablet:col-span-6 lg-up:col-span-8";
    }
    // Default: equal 50/50
    return "tablet:col-span-5 lg-up:col-span-6";
}

/* =========================
   Component
========================= */

const GridCards: React.FC<GridCardsProps> = ({ data }) => {

    const {
        theme,
        rows,
        sectionPadding,
        sectionId,
        link
    } = data;

    // console.log(data);

    const btntext = link?.linkText;
    const btnUrl = link?.linkUrl;

    const safePadding = Array.isArray(sectionPadding) ? sectionPadding.join(" ") : "padding-medium";

    return (
        <section
            id={sectionId}
            className={`grid-cards-section ${safePadding} ${theme === "dark" ? "darkMode" : ""}`}
        >
            <div className="container">

                {rows?.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`grid grid-cols-1 tablet:grid-cols-10 lg-up:grid-cols-12 gap-[24px] ${rowIndex > 0 ? "mt-[24px]" : ""}`}
                    >
                        {row.cards?.map((card, cardIndex) => {
                            const isFirst = cardIndex === 0;
                            const colSpan = getColSpan(row.columnLayout, isFirst);

                            return (
                                <div
                                    key={cardIndex}
                                    className={`col-span-1 ${colSpan}`}
                                >
                                    <div className="card h-full rounded-3xl border border-[#E5E5EA] pb-[40px] flex flex-col justify-between overflow-hidden relative">
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
                                                className={`${theme === "dark" ? "dark-image" : "light-image"} w-full h-full !object-cover`}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="content px-7.5">
                                            <h4 className={`font-semibold text-[20px] md:text-[16px] ${theme === "dark" ? "text-[#f9fafb]" : "text-[#263238]"}`}>
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
                ))}

                {/* Bottom Button */}
                {btntext && btnUrl && (
                    <div className="text-center mt-[48px]">
                        <Link href={btnUrl} className="btn-primary no-arrow">
                            {btntext}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GridCards;
