import React from "react";
import Link from "next/link";

/**
 * Props contract for TitleSection component
 */
interface IntroProps {
  data : {
    eyebrowText?: string;
    introTitle: string;
    textAlighment: string;
    sub?: string;
    buttonText?: string;
    buttonLink?: string;
    theme?: "light" | "dark";
    sectionPadding: string[];
  }
}

const IntroSection: React.FC<IntroProps> = ({data}) => {
    const {
            eyebrowText,
        sub,
        introTitle,
        textAlighment,
        buttonText,
        buttonLink = "#",
        theme,
        sectionPadding
  } = data;
  // console.log(sectionPadding)
  return (
    <section
      className={`title-section ${sectionPadding ? sectionPadding.join(" ") : "padding-medium"}  ${theme === "dark" ? "darkMode" : ""
        }`}
    >

      <div className="container">
        <div className={`wrap mx-auto ${textAlighment == "left" ? "text-left max-w-[480px] ml-0 mr-auto" : "text-center max-w-[928px]"} `}>
          {/* Badge */}
          {eyebrowText && <span className="announcemnet-badge">{eyebrowText}</span>}

          {/* Title */}
          <h3 className={`lg-up:text-[40px] font-[600] ${textAlighment == "left" ? "" : " mx-auto"}`}>
            {introTitle}
          </h3>

          {/* Description */}
          {sub && (
            <p className={`md-up:text-[16px] text-[#8d97ad] mt-[20px] ${textAlighment == "left" ? "" : " mx-auto"}`}>
              {sub}
            </p>
          )}

          {/* Button */}
          {buttonText && (
            <Link
              href={buttonLink}
              className="gradient-btn-blue mt-[20px] inline-block"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
