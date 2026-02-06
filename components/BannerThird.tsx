import React from "react";
import Image from "next/image";
import Button, { ButtonVariant } from "./buttons/Button";

interface ThemeImage {
  light: string;
  dark: string;
}

export interface BannerThirdData {
  data: {
    theme?: "light" | "dark";
    image:{
      bg?: ThemeImage;
      leftIcons?: ThemeImage;
      rightImg?: ThemeImage,
      node : {
        altText : string,
        guid : string,
        sourceUrl : string,
      }
    };
    title: {
      titlePrefix: string;
    titleGradient: string;
    titleSuffix: string;
    }
    varient:string;
    subtitle: string;
    textUnderCta: string;
    cta: {
      link:{
        target: boolean;
        linkUrl: string;
        linkText: string;
        variant?: ButtonVariant;
        classname: string;
      }
    }[];
  };
}

const BannerThird: React.FC<BannerThirdData> = ({ data }) => {
  const {
    varient,
    image,
    title,
    textUnderCta,
    subtitle,
    cta,
  } = data;


  const btnClass = {
    "rounded-blue" : "rounded-btn blue",
    "rounded-gray" : "rounded-btn gray",
    "rounded-white" : "rounded-btn white",
    "btn-blue-rect" : "gradient-btn-blue",
  }as const;
  
  const isDark = data.varient;
  type ThemeImage = { light: string; dark: string };

  const resolveImage = (
    img?: string | ThemeImage
  ) => {
    if (!img) return "";

    if (typeof img === "string") return img;

    if ("light" in img && "dark" in img) {
      return isDark ? img.dark : img.light;
    }

    return "";
  };


  const bgImage =  isDark=="dark"?"/what-we-do-blades/BG_dark_theme.svg" : "/what-we-do-blades/bg_light.png";
  const leftIcons = isDark=="dark" ?  "/what-we-do-blades/hero_icons-dark-theme.svg" : "/what-we-do-blades/hero-left-icons-image.svg";

  const rightImage = image?.node?.sourceUrl

  return (
    <section
      className={`banner-third relative min-h-[750px] lg:min-h-[600px] flex items-center overflow-hidden padding-medium ${isDark == "dark" ? "darkMode" : ""
        }`}
    >
      {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={bgImage}
            fill
            priority
            alt="Banner background"
            className="object-cover"
          />
        </div>

      {/* Left Icons */}
      {leftIcons && (
        <div
          className="
      absolute left-[-2px] bottom-[50px] z-0
      hidden lg-up:block
      w-[420px] h-[300px]
      desktop:w-[600px] desktop:h-[420px]
      xxl:w-[700px] xxl:h-[520px]
      xxl-up:w-[854px] xxl-up:h-[622px]
    "
        >
          <Image
            src={leftIcons}
            fill
            className="object-contain"
            alt="Decorative icons"
          />
        </div>
      )}


      {/* Right Image */}
      {rightImage && (
        <div
          className="
      absolute right-[10%] desktop-mid-down:right-[20px] xxl:right-[50px] bottom-[80px] z-0
      hidden md-up:block
      w-[220px] h-[240px]
      tablet:w-[300px] tablet:h-[340px]
      desktop:w-[420px] desktop:h-[460px]
      xxl:w-[460px] xxl:h-[490px]
      xxl-up:w-[523px] xxl-up:h-[566px]
    "
        >
          <Image
            src={rightImage}
            fill
            className="object-contain"
            alt={image?.node?.altText}
          />
        </div>
      )}



      {/* Content */}
      <div className="container relative z-10">
        <div className="w-full lg-up:max-w-[700px] lg:pt-[100px]">
        {(title?.titlePrefix || title?.titleGradient || title?.titleSuffix) && (
            <h1
              className={`lg-up:text-[56px] ${
                isDark == "dark" ? "text-white" : "text-[#000D20]"
              }`}
            >
              {title.titlePrefix && <>{title.titlePrefix} </>}

              {title.titleGradient && (
                <span
                  className={`text-[#0044FF] font-[600]`}
                >
                  {title.titleGradient}
                </span>
              )}

              {title.titleSuffix && <> {title.titleSuffix}</>}
            </h1>
          )}

          {subtitle &&
            <p
              className={`mt-[10px] ${isDark == "dark" ? "text-[#D1D1D6]" : "text-[#333333]"
                }`}
            >
              {subtitle}
            </p>
          }

          {cta?.length > 0 && (
            <div className="flex gap-4 mt-[42px] lg:mt-5 flex-wrap">
              {cta.map((button, key) => {
                const classKey = button?.link?.classname;

                return (
                  <Button
                    key={key}
                    href={button?.link?.linkUrl}
                    className={
                      classKey && classKey in btnClass
                        ? btnClass[classKey as keyof typeof btnClass]
                        : "rounded-btn blue"
                    }
                    target={button?.link?.target ?"_self": "_blank"}
                  >
                    {button?.link?.linkText}
                  </Button>
                );
              })}
            </div>
          )}

          <span
            className={`block mt-4 text-[14px] ${isDark == "dark" ? "text-[#D1D1D6]" : "text-[#333333]"
              }`}
          >
            {textUnderCta}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BannerThird;

