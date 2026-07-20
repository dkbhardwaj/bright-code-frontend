"use client";
import React, { useState } from "react";
import { FaqBlade } from "./PageBuilder/section.types";

interface Props {
  data: FaqBlade;
}

const FaqAccordion: React.FC<Props> = ({ data }) => {
  const { theme, sectionPadding, sectionId, faqTitle, subtitle, faqs } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const safePadding = Array.isArray(sectionPadding) ? sectionPadding.join(" ") : "padding-medium";

  if (!faqs?.length) return null;

  return (
    <section
      id={sectionId}
      className={`faq-section ${safePadding} ${theme === "dark" ? "darkMode" : ""}`}
    >
      <div className="container">
        {(faqTitle || subtitle) && (
          <div className="text-center max-w-[928px] mx-auto mb-[50px] lg:mb-[30px]">
            {faqTitle && <h3 className="lg-up:text-[40px] !font-[600]">{faqTitle}</h3>}
            {subtitle && (
              <p className="md-up:text-[16px] text-[#8d97ad] mt-[20px]">{subtitle}</p>
            )}
          </div>
        )}

        <div className="max-w-[928px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-[#E5E5EA] rounded-[16px] mb-[15px] last:mb-0 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-[15px] text-left p-[24px] md:p-[18px] cursor-pointer"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-[600] text-[18px] md:text-[16px]">{faq.question}</span>
                  <svg
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#0044FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="px-[24px] pb-[24px] md:px-[18px] md:pb-[18px] text-[16px] md:text-[14px] text-[#6b7280]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
