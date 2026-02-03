import Image from "next/image";
import styles from "../styles/contactSection.module.css";
import { ContactSectionBlade } from "./PageBuilder/section.types";

// WordPress backend schema - now imported from section.types.ts

type ContactCard = {
    icon: string;
    alt: string;
    title: string;
    subtitle: string;
};

type CardItem = {
    icon?: { node?: { sourceUrl?: string; altText?: string } };
    title?: string;
    subtitle?: string;
};

interface Props {
    data: ContactSectionBlade;
    theme?: "light" | "dark";
    rightSlot?: React.ReactNode; // form / calendly
}

const ContactSection: React.FC<Props> = ({
    data,
    theme = "light",
    rightSlot,
}) => {
    // Use theme from data prop if available, otherwise fall back to the theme prop
    const activeTheme = data?.theme || theme;

    console.log(data);

    // Extract data from WordPress format
    const title = data.contactTitle;
    const subtitle = data.subtitle;
    const ctaText = data.link?.linkText || "Learn more";
    // Use 'as any' just for this line — safe because we checked console
    const rawCards = (data.iconWithTextCards as { card?: CardItem[] } | undefined)?.card ?? [];

    const cards: ContactCard[] = rawCards.map((item) => ({
        icon: item?.icon?.node?.sourceUrl ?? '',
        alt: item?.icon?.node?.altText ?? item?.title ?? 'Icon',
        title: item?.title ?? '',
        subtitle: item?.subtitle ?? '',
    }));
    return (
        <section className={`${styles.contactSection} ${styles[activeTheme]}`}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2 className="mt-[20px]">{title}</h2>
                        <p className="mb-[20px]">{subtitle}</p>
                        {
                            activeTheme == "light" ? <button className={`rounded-btn gray no-arrow `}>
                                {ctaText}
                            </button> : <button className={`rounded-btn gray no-arrow blue-hover`}>
                                    {ctaText}
                            </button>
                        }


                    </div>

                    <div className={styles.right}>
                        {rightSlot}
                    </div>
                </div>

                <div className={styles.cards}>
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className={`
        group relative overflow-hidden
        p-6 rounded-2xl
        bg-gradient-to-br from-gray-900/80 to-gray-800/80
        backdrop-blur-md border border-gray-700/40
        hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-900/30
        transition-all duration-400 ease-out
      `}
                        >
                            {/* Tiny index glow for fun */}
                            <div className="absolute -top-3 -right-3 text-xs font-mono opacity-40 group-hover:opacity-70 transition-opacity">
                                #{idx + 1}
                            </div>

                            <Image
                                src={card.icon}
                                alt={card.alt}
                                width={56}
                                height={56}
                                className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                            />

                            <h4 className="text-xl font-bold mb-3 text-white tracking-tight">
                                {card.title}
                            </h4>

                            <p className="text-gray-300 text-base leading-relaxed">
                                {card.subtitle}
                            </p>

                            {/* Optional micro-decoration */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
