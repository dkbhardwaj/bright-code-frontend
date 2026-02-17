import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ColTwoCardProps {
  data: {
    imageOnLeft: boolean;

    image: {
      node: {
        altText: string;
        sourceUrl: string;
      }
    };
    eyebrowText: string;
    imageWithContentTitle: string;
    blurb: string;
    link: {
      target: boolean,
      linkUrl: string,
      linkText: string,
      classname: string,
    };
    buttonText: string;
    buttonLink: string;
    theme?: "light" | "dark";
    sectionPadding: string[];
  }
}


const ColTwoCard: React.FC<ColTwoCardProps> = ({
  data
}) => {

  const {
    imageOnLeft,
    image,
    eyebrowText,
    imageWithContentTitle,
    blurb,
    link,
    theme,
    sectionPadding,
  } = data;

  return (
    <section
      className={`colTwoCard ${sectionPadding ? sectionPadding.join(" ") : "padding-large"}  ${theme === "dark" ? "darkMode" : ""
        }`}
    >
      <div className="container">
        <div
          className={`w-full flex flex-wrap items-center ${!imageOnLeft ? "flex-row-reverse" : ""
            }`}
        >
          {/* Image Column */}
          <div className="w-[var(--w-half)] lg:w-full mx-[10px]">
            <div className="w-full max-w-[541px] lg:mb-[20px] lg:mx-auto">
              <Image
                src={image?.node?.sourceUrl}
                width={2500}
                height={1200}
                alt={image?.node?.altText}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-[var(--w-half)] lg:w-full mx-[10px]">
            <div className="max-w-[641px] lg:max-w-none lg:mt-8 lg:text-center">
              {eyebrowText && (<span className="announcemnet-badge">{eyebrowText}</span>)}

              <h3 className="lg-up:text-[40px] font-[600]">
                {imageWithContentTitle}
              </h3>

              <p className="md-up:text-[16px] mt-[20px]">
                {blurb}
              </p>

              <Link href={link.linkUrl} className="gradient-btn-blue mt-[20px]">
                {link.linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColTwoCard;
