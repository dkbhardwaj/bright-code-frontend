import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FeatureHighlightsBlade } from "./PageBuilder/section.types";

interface Props {
  data: FeatureHighlightsBlade;
}

type BulletColor = "blue" | "white";

const DiamondIcon = ({ color = "blue" }: { color?: BulletColor }) => (
  <Image
    src={
      color === "white"
        ? "/icons/white_rectangle_bullet.svg"
        : "/icons/blue_rectangle_bullet.svg"
    }
    alt=""
    width={14}
    height={14}
    className="shrink-0"
    aria-hidden="true"
  />
);

const FeaturedHighlights: React.FC<Props> = ({ data }) => {
  const {
    sectionId,
    theme,
    sectionPadding,
    items = [],
    link,
  } = data;

  const isDark = theme === "dark";
  const safePadding = Array.isArray(sectionPadding)
    ? sectionPadding.join(" ")
    : "padding-medium";

  return (
    <section
      id={sectionId}
      className={`featured-highlights-section ${safePadding}`}
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-[56px] lg:grid-cols-1">
          {items.map((item, idx) => {
            // Dark theme always uses white bullet; otherwise respect per-item choice (default blue)
            const bulletColor: BulletColor = isDark ? "white" : (item.bulletColor ?? "blue");

            return (
              <div key={idx} className="featured-highlights-item">
                {/* Icon + Title Row */}
                <div className="flex items-center gap-[10px] mb-[16px]">
                  <DiamondIcon color={bulletColor} />
                  <h6 className="font-[600] uppercase tracking-[0.08em] leading-none text-[#0044FF]!">
                    {item.title}
                  </h6>
                </div>

                {/* Description */}
                <p className="text-[16px] md:text-[14px] leading-[1.6] text-[#263238]!">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {link?.linkText && link?.linkUrl && (
          <div className="text-center mt-[56px]">
            <Link href={link.linkUrl} className="btn-primary no-arrow">
              {link.linkText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedHighlights;

