import React from "react";
import Image from "next/image";
import styles from "../styles/contactSection.module.css";
import { IconWithTextCardBlade } from "./PageBuilder/section.types";

interface Props {
  data: IconWithTextCardBlade;
}

const IconWithTextCard: React.FC<Props> = ({ data }) => {
  const activeTheme = data.theme || "light";
  const sectionId = data.sectionId;
  const topDivider = data.topDivider;

  // Extract cards
  const rawCards = data.cards || [];
  const cards = rawCards.map((item) => ({
    icon: item?.cardImage?.node?.sourceUrl || '',
    alt: item?.cardImage?.node?.altText || item?.cardTitle || 'Icon',
    title: item?.cardTitle || '',
    subtitle: item?.subtitle || '',
  }));

  // Render nothing if no cards
  if (cards.length === 0) {
    return null;
  }

  return (
    <section id={sectionId} className={`${styles.contactSection} ${styles[activeTheme]} overflow-hidden`}>
      {topDivider && <div className="section-divider" />}
      <div className="container">
        <div className={styles.cards}>
          {cards.map((card, idx) => (
            <div key={idx} className={styles.card}>
              {card.icon && (
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={24}
                  height={24}
                />
              )}
              <h4 className="mt-[10px]">{card.title}</h4>
              <p>{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconWithTextCard;
