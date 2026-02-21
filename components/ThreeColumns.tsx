import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ThreeColumnCard {
  id: number;
  cardDelay?: string;
  cardDuration?: string;

  image: {
    light: string;
    dark: string;
  };

  imageAlt: string;
  cardTitle: string;
  cardDetail: string;
  link: string;
  linkText: string;
}


interface ThreeColumnsData {
  paddingLarge?: boolean;
  featuredClass?: boolean;
  title?: string;
  bgTransparent?: boolean;
  threeCards: readonly ThreeColumnCard[];
  btntext?: string;
  btnUrl?: string;
}


type BladeTheme = "light" | "dark";

interface ThreeColumnsProps {
  data: {
    fieldGroupName: 'PagebuilderSectionsColThreeCardsLayout';
    theme: string;
    sectionPadding: string[];
    cards: {
      cardTitle: string;
      fieldGroupName: string;
      subtitle: string;
      cta: {
        fieldGroupName: string;
        linkPath: string;
        linkText: string;
      }
      cardImage: {
        node: {
          altText: string;
          sourceUrl: string;
        }
      }
    }[];
    link: {
      classname: string;
      fieldGroupName: string;
      linkText: string;
      linkUrl: string;
      target: string;
    };
    sectionId?: string;
  }
}


const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  data,
}) => {
  const { theme, sectionPadding, cards, link, sectionId } = data;
  const threeCards = cards;

  return (
    <section
      id={sectionId}
      className={`three-column-section ${sectionPadding ? sectionPadding.join(" ") : "padding-medium"} ${theme === "dark" ? "darkMode" : ""}`}
    >
      <div className="container">
        <div className="w-[calc(100%+24px)] ml-[-12px] flex flex-wrap justify-center">
          {threeCards?.map((card) => (
            <div
              key={card?.cardTitle}
              className="colThree relative w-[calc(33.3%-24px)] tablet:w-[calc(50%-24px)] phablet:w-[calc(100%-24px)] sm:w-[calc(100%-24px)] mx-[12px] mb-[24px]"
            >

              <div className="card flex flex-col justify-between text-center rounded-[24px] overflow-hidden py-[40px] border border-[#E5E5EA] h-full relative">
              {
                card?.cta.linkPath &&
                (
                  <Link
                    href={card?.cta.linkPath}
                    className="redirect rounded-[24px] overflow-hidden"
                  >
                    {card?.cta?.linkText}
                  </Link>
                )
              }
                <div className="wrapper">
                  {/* Images */}
                  {card?.cardImage?.node?.sourceUrl && (
                    <div className="imageWrap max-w-[350px] h-[200px] mx-auto mb-[25px]">
                      <Image
                        src={card?.cardImage?.node?.sourceUrl}
                        width={400}
                        height={300}
                        alt={card?.cardImage?.node?.altText}
                        className={`w-full h-full object-contain ${data.theme == "dark" ? "dark-image" : "light-image"}`}
                      />
                    </div>
                  )}


                  <div className="content px-[30px]">
                    {/* Title */}
                    <h4 className="font-[600] text-[20px] md:text-[16px]">
                      {card?.cardTitle}
                    </h4>

                    {/* Description */}
                    <p className="text-[16px] md:text-[12px] mt-[5px] text-[#6b7280]">
                      {card?.subtitle}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                {card?.cta?.linkText && card?.cta.linkText && (
                  <div className="btn-wrap">
                    <Link
                      href={card?.cta.linkPath}
                      className="blue-link inline-block text-[#0044FF] text-[12px] mt-[10px]"
                    >
                      {card?.cta?.linkText}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        {data.link.linkText && data.link?.linkUrl && (
          <div className="text-center mt-[40px]">
            <Link href={data.link?.linkUrl} className="gradient-btn-blue">
              {data.link.linkText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ThreeColumns;
