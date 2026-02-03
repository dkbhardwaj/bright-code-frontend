import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Types
========================= */


 

  export interface GridCardsProps {
    data: {
        fieldGroupName : 'PagebuilderSectionsGridCardsSectionLayout';
        theme:string;
          gridCards: {
            cardTitle:string;
            cardDescription:string;
            cardImage: {
              node: {
                altText:string;
                sourceUrl:string;
              }
            }
            cta: {
              ctaLabel:string;
              ctaUrl:string;
              openInNewTab:boolean;
            }
          }[];
          sectionPadding:string[];
          link: {
            target:string;
            linkUrl:string;
            linkText:string;
            classname:string[];
          }
    }
  }
  

/* =========================
   Component
========================= */

const GridCards: React.FC<GridCardsProps> = ({
    data,
  }) => {

    const gridCards = data?.gridCards
    const btntext = data?.link?.linkText
    const btnUrl = data?.link?.linkUrl
    return (
      <section
        className={`GridCards padding-medium ${
          data?.theme === "dark" ? "darkMode" : ""
        }`}
      >
  
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

                                <div className="card h-full rounded-[24px] border border-[#E5E5EA] bg-white pb-[40px] flex flex-col justify-between overflow-hidden relative ">
                                <Link
                                    href={card.cta?.ctaUrl}
                                    className="redirect rounded-[24px] overflow-hidden"
                                >
                                    {card.cta?.ctaLabel}
                                </Link> 
                                    {/* Image */}
                                    <div className="imageWrap mb-[24px] h-[220px]">
                                        <Image
                                            src={card.cardImage?.node?.sourceUrl}
                                            alt={card.cardImage?.node?.altText}
                                            width={500}
                                            height={300}
                                            className={`${data.theme == "dark" ? "dark-image" : "light-image"} w-full h-full object-cover"`}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="content px-[30px]">
                                        <h4 className="font-[600] text-[20px] md:text-[16px] ">
                                            {card?.cardTitle}
                                        </h4>
                                        <p className="text-[16px] md:text-[12px] mt-[5px] text-[#6b7280]">
                                            {card?.cardDescription}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    {card.cta?.ctaLabel && card.cta?.ctaUrl && (
                                        <div className="btn-wrap px-[30px]">
                                            <Link
                                                href={card.cta?.ctaUrl}
                                                className="blue-link inline-block text-[#0044FF] text-[12px] mt-[10px]"
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
                        <Link href={btnUrl} className="gradient-btn-blue">
                            {btntext}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GridCards;
