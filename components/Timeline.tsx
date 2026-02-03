import React, { useState, useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button, { ButtonVariant } from "./buttons/button";
import style from "../styles/timeline.module.css";

gsap.registerPlugin(ScrollTrigger);

// Type definitions
interface TimelineItem {
  item: string;
}

interface TimelineLink {
  classname: string;
  linkText: string;
  linkUrl: string;
  target: boolean;
}

interface TimelineViewBlade {
  fieldGroupName: 'PagebuilderSectionsTimelineViewLayout';
  theme?: "light" | "dark";
  link?: TimelineLink;
  sectionPadding?: string[];
  timelineItems?: TimelineItem[];
}

interface AnimationState {
  isVisible: boolean;
  animationData?: any;
}

interface TimelineProps {
  data?: TimelineViewBlade;
  theme?: "light" | "dark";
}

// Default fallback data
const defaultTimelineItems: TimelineItem[] = [
  {
    item: "We believe dev should calm a room, not stress it. You feel it as clear communication, early warnings, and no disappearing acts when things get hard.",
  },
  {
    item: "We believe shipping fast shouldn't mean breaking things. You feel it as momentum without mess - features that land clean and stay stable.",
  },
  {
    item: "We believe your codebase should outlive the project. You feel it as confidence in handoffs, easy onboarding, and no tech debt surprises.",
  },
];

const Timeline: FC<TimelineProps> = ({ data: bladeData, theme = "dark" }) => {
  console.log(bladeData);

  // Use theme from bladeData prop if available, otherwise fall back to the theme prop
  const activeTheme = bladeData?.theme || theme;

  // Use timelineItems from bladeData or fall back to default
  const timelineItems = bladeData?.timelineItems || defaultTimelineItems;
  // console.log(timelineItems);

  // Get link data from bladeData
  const linkData = bladeData?.link;

  const [leftPosition, setLeftPosition] = useState<number>(0);
  const [animationsState, setAnimationsState] = useState<AnimationState[]>(
    timelineItems.map(() => ({ isVisible: false }))
  );
  const animationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loadedRef = useRef<Record<number, boolean>>({});

  useEffect(() => {
    const pinkLine = document.querySelector<HTMLDivElement>(`.pinkline`);
    const circles = document.querySelectorAll<HTMLDivElement>(".circle");

    if (!pinkLine) return;

    const middleOfViewport = window.innerHeight / 2 + 100;

    gsap.to(pinkLine, {
      height: () => `${ScrollTrigger.maxScroll(window)}px`,
      ease: "none",
      scrollTrigger: {
        trigger: pinkLine,
        start: `top ${middleOfViewport}`,
        end: () => `+=${ScrollTrigger.maxScroll(window)}`,
        onUpdate: (self) => {
          const scrollDistance = self.scroll() - self.start;
          pinkLine.style.height = `${scrollDistance}px`;

          // Check each circle's position relative to the viewport's middle
          circles.forEach((circle) => {
            const rect = circle.getBoundingClientRect();
            const row = circle.closest<HTMLDivElement>(".row");
            if (rect.top < middleOfViewport) {
              circle.classList.add("!bg-[#0044FF]");
              row?.classList.add("inview");
            } else {
              circle.classList.remove("!bg-[#0044FF]");
              row?.classList.remove("inview");
            }
          });
        },
        scrub: true,
      },
    });
  }, []);

  const getKeyForIndex = (index: number): string | null => {
    const item = timelineItems[index];
    if (!item) return null;
    // Type assertion for potential animation properties
    return (item as any).animationLottie || (item as any).lottieAnimation || null;
  };

  const loadAnimationData = async (name: string, index: number): Promise<void> => {
    if (!name) return;
    if (loadedRef.current[index]) return; // already fetched

    // Placeholder for getLottieUrl - uncomment when service is available
    // const url = getLottieUrl(name);
    const url: string | undefined = undefined;

    if (!url) {
      console.warn("No Lottie URL for key:", name);
      return;
    }

    loadedRef.current[index] = true;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error("Failed to fetch lottie", name, url);
        return;
      }
      const json = await res.json();
      console.log("Lottie JSON: ", json);

      setAnimationsState((prev) => {
        const newState = [...prev];
        newState[index] = {
          ...(newState[index] || { isVisible: false, animationData: null }),
          animationData: json,
        };
        return newState;
      });
    } catch (err) {
      console.error("Error fetching lottie", name, err);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '', 10);
          if (Number.isNaN(index)) return;

          if (entry.isIntersecting) {
            const key = getKeyForIndex(index);
            if (key) {
              loadAnimationData(key, index);
            }
            setAnimationsState((prev) => {
              const newState = [...prev];
              const current = newState[index] || {
                isVisible: false,
                animationData: null,
              };
              newState[index] = { ...current, isVisible: true };
              return newState;
            });
          } else {
            setAnimationsState((prev) => {
              const newState = [...prev];
              const current = newState[index] || {
                isVisible: false,
                animationData: null,
              };
              newState[index] = { ...current, isVisible: false };
              return newState;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    animationRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [timelineItems]);

  // Parse timeline items to extract left and right text
  const parseTimelineItem = (item: TimelineItem) => {
    // Split by period followed by space to separate sentences
    const parts = item.item.split('. ');
    if (parts.length >= 2) {
      return {
        leftText: parts[0] + '.',
        rightText: parts.slice(1).join('. '),
      };
    }
    // Fallback if no clear split
    return {
      leftText: item.item,
      rightText: '',
    };
  };

  return (
    <section
      className={`timeline grid__parallax padding-medium ${activeTheme === "dark" ? "darkMode" : ""
        }`}
    >
      <div className={`container !max-w-[1340px]`}>
        <div
          className={`relative w-full z-10 desktop-mid-down:flex desktop-mid-down:flex-col`}
        >
          <div
            className={`absolute top-0 left-[50%] w-[10rem] h-full lg:left-[0] lg-up:translate-x-[-50%] desktop-mid-down:hidden desktop-mid-down:w-[1rem] desktop-mid-down:top-1/2 desktop-mid-down:left-[0.4rem] desktop-mid-down:-translate-y-1/2`}
          >
            <div className="relative w-full h-full">
              <div className="scroll_line_one absolute top-0 left-[50%] translate-x-[-50%] w-[10px] rounded-[10px] h-[calc(100%+50px)] bg-gray-300 desktop-mid-down:-top-[25px]"></div>
              <div
                className={`${style.line} ${style.lineOne} absolute top-0 left-[50%] translate-x-[-50%] w-[8px] h-[calc(100%+50px)] overflow-hidden lg:w-[6px]`}
              >
                <div className={`pinkline`}></div>
              </div>
            </div>
          </div>
          {timelineItems.reduce<React.ReactElement[]>((rows, item, index) => {
            // Group items in pairs: every 2 items form one row
            if (index % 2 === 0) {
              const leftItem = timelineItems[index];
              const rightItem = timelineItems[index + 1];

              rows.push(
                <div
                  className={`row relative w-full flex flex-wrap items-center mb-[50px] last:mb-0 border-spacing-0 desktop-mid-down:pb-[50px] desktop-mid-down:border-b-[2px] last:pb-0 last:border-none`}
                  key={index}
                >
                  <div
                    className={`${style.circle} desktop-mid-down:hidden circle circleOne absolute left-1/2 top-1/2 desktop-mid-down:left-0 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-[50%] lg:right-auto lg:translate-x-0`}
                  >
                    <span className="circleTopline2 hidden relative desktop-mid-down:inline-block text-[0] w-[90px] h-[2px] top-[-51px] transition-all duration-300 rounded-tl-xl left-[15px]">
                      line
                    </span>
                    <span className="circleTopline hidden relative desktop-mid-down:inline-block text-[0] w-[2px] h-[50px] top-[-76px] transition-all duration-300 rounded-tl-xl left-[14px]">
                      line
                    </span>
                    <span className="circleBottomline hidden relative desktop-mid-down:inline-block text-[0] w-[2px] h-[50px] bottom-[33px] transition-all duration-300 rounded-bl-xl left-[13px]">
                      line
                    </span>
                    <span className="circleBottomline2 hidden relative desktop-mid-down:inline-block text-[0] w-[90px] h-[2px] bottom-[53px] transition-all duration-300 rounded-bl-xl left-[15px]">
                      line
                    </span>
                  </div>
                  {/* Left side - 1st, 3rd, 5th items */}
                  <div
                    className={`w-1/2 lg:w-[75%] relative pr-[100px] desktop-mid-down:pr-[0] desktop-mid-down:mb-[20px] desktop-mid-down:w-[100%]`}
                  >
                    {leftItem && (
                      <div
                        className={`left_content_wrap relative w-full p-[24px] desktop-mid-down:p-[18px] border-[1px] border-[#D1D1D6] rounded-[8px]`}
                      >
                        <p
                          className={`text-[16px] text-black font-[500] desktop-mid-down:text-[14px]`}
                        >
                          {leftItem.item}
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Right side - 2nd, 4th, 6th items */}
                  <div className="w-1/2 lg:w-[75%] relative pl-[100px] desktop-mid-down:pl-[0] desktop-mid-down:w-[100%]">
                    {rightItem && (
                      <div
                        className={`right_content_wrap relative w-full p-[24px] desktop-mid-down:p-[18px] border-[1px] border-[#D1D1D6] rounded-[8px]`}
                      >
                        <p className="text-[16px] text-black font-[500] desktop-mid-down:text-[14px]">
                          {rightItem.item}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            return rows;
          }, [])}
        </div>
        <div className="btn-wrap w-full text-center mt-[70px] desktop-mid-down:mt-[40px]">
          <Button
            href={linkData?.linkUrl || "/"}
            className={linkData?.classname || ""}
            target={linkData?.target ? "_blank" : "_self"}
            variant={linkData?.classname as ButtonVariant}
          >
            {linkData?.linkText || "Learn more"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
