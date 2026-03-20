import React, { FC } from 'react';

export interface ProcessTimelineStep {
    id: string | number;
    title: string;
    description: string;
}

export interface ProcessTimelineProps {
    data: {
        sectionId?: string;
        sectionPadding?: string[];
        steps: ProcessTimelineStep[];
    };
}

const ProcessTimeline: FC<ProcessTimelineProps> = ({ data }) => {
    const {
        sectionId,
        sectionPadding,
        steps = [],
    } = data;

    const safePadding = Array.isArray(sectionPadding)
        ? sectionPadding.join(" ")
        : "py-16 md:py-24"; 

    return (
        <section id={sectionId} className={`process-timeline w-full ${safePadding}`}>
            <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
                <div className="flex flex-col w-full overflow-hidden">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;
                        return (
                            <div key={index} className="flex w-full">
                                {/* Left Column: Number & Vertical Line */}
                                <div className="relative flex flex-col items-center mr-6 md:mr-12 shrink-0">
                                    {/* The Circle */}
                                    <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-[#e2e8f0] bg-white text-black text-[12px] font-[500] z-10 relative mt-2">
                                        {step.id}
                                    </div>
                                    {/* The Connecting Line */}
                                        <div className="absolute top-[32px] bottom-[-32px] md:bottom-[-48px] left-1/2 -translate-x-1/2 w-[1px] bg-[#e2e8f0]" />
                                </div>

                                {/* Right Column: Content */}
                                <div className={`flex-1 pb-8 md:pb-12 border-b border-[#e2e8f0] ${!isLast ? 'mb-8 md:mb-12' : ''}`}>
                                    <h4 className="!text-[12px] md:text-[14px] tracking-[0.08em] text-[#64748b] uppercase font-medium mb-3 md:mb-4 mt-2 md:mt-3 m-0">
                                        {step.title}
                                    </h4>
                                    <p className="text-[17px] md:text-[20px] text-[#334155] leading-[1.6] m-0 font-normal">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
