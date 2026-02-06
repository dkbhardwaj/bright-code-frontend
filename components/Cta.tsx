import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./buttons/Button";

type Theme = "light" | "dark";

interface CtaProps {
  
  data: {
    subtitle:string;
  sectionPadding:string[];
  theme:string;
  footerCtaTitle:string;
  link: {
    target:string;
    linkUrl:string;
    linkText:string;
    fieldGroupName:string;
    classname:string;
  }
  };
}

 const btnClass = {
    "rounded-blue" : "rounded-btn blue",
    "rounded-gray" : "rounded-btn gray",
    "rounded-white" : "rounded-btn white",
    "btn-blue-rect" : "gradient-btn-blue",
  }as const;

export default function Cta({ data }: CtaProps) {

  const isDark = data.theme;
  const title = data?.footerCtaTitle
  const description = data?.subtitle
  const buttonText = data?.link?.linkText
  const buttonUrl = data?.link?.linkUrl
  const buttonClass = data?.link?.classname[0]

  return (
    <section
      className={`cta ${data.sectionPadding ? data?.sectionPadding.join(" ") : "padding-small"} ${
        isDark=="dark" ? "bg-[#000D20]" : ""
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

            <Button
              href={buttonUrl}
              className={`mt-[20px] inline-block text-white no-arrow ${
                 buttonClass
                        ? btnClass[buttonClass as keyof typeof btnClass]
                        : "rounded-btn blue"
                    
              }`}
              target={data.link?.target === "_blank" ? "_blank" : "_self"}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
