import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./buttons/Button";

type Theme = "light" | "dark";

interface CtaProps {

  data: {
    subtitle: string;
    sectionPadding: string[];
    theme: string;
    footerCtaTitle: string;
    link: {
      target: string;
      linkUrl: string;
      linkText: string;
      fieldGroupName: string;
      classname: string;
    };
    sectionId?: string;
  };
}

const btnClass = {
  "rounded-blue": "btn-primary",
  "rounded-gray": "btn-tertiary",
  "rounded-white": "btn-secondary",
  "btn-blue-rect": "btn-primary",
} as const;

export default function Cta({ data }: CtaProps) {

  const {
    subtitle: description,
    theme,
    sectionPadding,
    link,
    sectionId,
    footerCtaTitle: title
  } = data;

  const isDark = theme;
  const buttonLink = link?.linkUrl
  const buttonText = link?.linkText
  const buttonUrl = link?.linkUrl
  const buttonClassValue = typeof link?.classname === 'string' ? link.classname : (Array.isArray(link?.classname) ? link.classname[0] : "");

  return (
    <section
      id={sectionId}
      className={`cta-section ${sectionPadding ? sectionPadding.join(" ") : "padding-medium"} ${isDark == "dark" ? "darkMode" : ""
        }`}
    >
      <div className="container">
        <div className="wrap relative rounded-[32px] py-[100px] lg:py-[60px] overflow-hidden">
          <div className="bg-image absolute w-full h-full top-0 left-0 z-0">
            <Image
              src={`/what-we-do-blades/cta_image.png`}
              alt="CTA Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="content relative z-10 text-center max-w-[1000px] mx-auto px-4">
            <h3 className="text-white lg-up:text-[40px]">{title}</h3>

            <p className="text-white lg-up:text-[16px] mt-[20px] max-w-[524px] mx-auto">
              {description}
            </p>

            {buttonText && buttonUrl && (
              <Button
                href={buttonUrl}
                className={`mt-[20px] inline-block text-white no-arrow ${buttonClassValue
                  ? btnClass[buttonClassValue as keyof typeof btnClass]
                  : "btn-primary"

                  }`}
                target={data.link?.target === "_blank" ? "_blank" : "_self"}
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
