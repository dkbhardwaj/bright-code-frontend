import React from "react";
import Image from "next/image";
import { WorkflowDiagramBlade } from "./PageBuilder/section.types";

interface Props {
  data: WorkflowDiagramBlade;
}

const WorkflowDiagram: React.FC<Props> = ({ data }) => {
  const {
    theme,
    sectionPadding,
    sectionId,
    eyebrowText,
    diagramTitle,
    subtitle,
    steps,
  } = data;

  const safePadding = Array.isArray(sectionPadding) ? sectionPadding.join(" ") : "padding-medium";

  if (!steps?.length) return null;

  return (
    <section
      id={sectionId}
      className={`workflow-diagram ${safePadding} ${theme === "dark" ? "darkMode" : ""}`}
    >
      <div className="container">
        {(eyebrowText || diagramTitle || subtitle) && (
          <div className="text-center max-w-[928px] mx-auto mb-[50px] lg:mb-[30px]">
            {eyebrowText && <span className="announcemnet-badge">{eyebrowText}</span>}
            {diagramTitle && (
              <h3 className="lg-up:text-[40px] !font-[600]">{diagramTitle}</h3>
            )}
            {subtitle && (
              <p className="md-up:text-[16px] text-[#8d97ad] mt-[20px]">{subtitle}</p>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-stretch justify-center gap-y-[24px]">
          {steps.map((step, index) => (
            <React.Fragment key={step.stepTitle}>
              <div
                className={`flex-1 min-w-[220px] lg:min-w-full rounded-[24px] border p-[30px] text-center ${
                  step.highlight
                    ? "border-[#0044FF] bg-[#0044FF]/[0.04]"
                    : "border-[#E5E5EA]"
                }`}
              >
                {step.icon?.node?.sourceUrl && (
                  <div className="w-[48px] h-[48px] mx-auto mb-[15px]">
                    <Image
                      src={step.icon.node.sourceUrl}
                      width={48}
                      height={48}
                      alt={step.icon.node.altText || step.stepTitle}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <span className="block text-[12px] font-[600] text-[#0044FF] mb-[5px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="font-[600] text-[20px] md:text-[16px]">{step.stepTitle}</h4>
                {step.stepDescription && (
                  <p className="text-[14px] mt-[5px] text-[#6b7280]">{step.stepDescription}</p>
                )}
              </div>

              {index < steps.length - 1 && (
                <div
                  className="flex items-center justify-center px-[12px] lg:w-full lg:rotate-90 lg:px-0"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#0044FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDiagram;
