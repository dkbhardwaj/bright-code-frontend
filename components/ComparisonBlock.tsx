import React from "react";
import { ComparisonBlockBlade } from "./PageBuilder/section.types";

interface Props {
  data: ComparisonBlockBlade;
}

const ComparisonBlock: React.FC<Props> = ({ data }) => {
  const {
    theme,
    sectionPadding,
    sectionId,
    eyebrowText,
    comparisonTitle,
    subtitle,
    leftColumn,
    rightColumn,
  } = data;

  const safePadding = Array.isArray(sectionPadding) ? sectionPadding.join(" ") : "padding-medium";

  return (
    <section
      id={sectionId}
      className={`comparison-block ${safePadding} ${theme === "dark" ? "darkMode" : ""}`}
    >
      <div className="container">
        {(eyebrowText || comparisonTitle || subtitle) && (
          <div className="text-center max-w-[928px] mx-auto mb-[50px] lg:mb-[30px]">
            {eyebrowText && <span className="announcemnet-badge">{eyebrowText}</span>}
            {comparisonTitle && (
              <h3 className="lg-up:text-[40px] !font-[600]">{comparisonTitle}</h3>
            )}
            {subtitle && (
              <p className="md-up:text-[16px] text-[#8d97ad] mt-[20px]">{subtitle}</p>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-[24px] max-w-[1000px] mx-auto">
          {/* AI alone */}
          <div className="flex-1 min-w-[300px] sm:min-w-full rounded-[24px] border border-[#E5E5EA] p-[40px] md:p-[24px]">
            <h4 className="font-[600] text-[20px] md:text-[16px] text-[#6b7280]">
              {leftColumn.columnTitle}
            </h4>
            <ul className="mt-[20px]">
              {leftColumn.items.map((entry) => (
                <li key={entry.item} className="flex items-start gap-[10px] mb-[15px] last:mb-0">
                  <svg className="shrink-0 mt-[4px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M4 4L12 12M12 4L4 12" stroke="#8d97ad" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="text-[16px] md:text-[14px] text-[#6b7280]">{entry.item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI + oversight */}
          <div className="flex-1 min-w-[300px] sm:min-w-full rounded-[24px] border border-[#0044FF] bg-[#0044FF]/[0.04] p-[40px] md:p-[24px]">
            <h4 className="font-[600] text-[20px] md:text-[16px] text-[#0044FF]">
              {rightColumn.columnTitle}
            </h4>
            <ul className="mt-[20px]">
              {rightColumn.items.map((entry) => (
                <li key={entry.item} className="flex items-start gap-[10px] mb-[15px] last:mb-0">
                  <svg className="shrink-0 mt-[4px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2.5 8.5L6 12L13.5 4.5" stroke="#0044FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[16px] md:text-[14px]">{entry.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonBlock;
