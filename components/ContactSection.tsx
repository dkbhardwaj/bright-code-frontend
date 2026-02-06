import Image from "next/image";
import styles from "../styles/contactSection.module.css";
import Button, { ButtonVariant } from "./buttons/Button";
import { ContactSectionBlade } from "./PageBuilder/section.types";
import CalendlyCalendar from "./CalendlyCalendar";

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

    // console.log(data);

    // Extract data from WordPress format
    const title = data.contactTitle;
    const formcalender = data.formcalender;
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
                        <Button
                            href={data.link?.linkUrl || "#"}
                            className={
                                activeTheme === "light"
                                    ? "rounded-btn gray no-arrow"
                                    : "rounded-btn gray no-arrow blue-hover"
                            }
                            target={data.link?.target ? "_self" : "_blank"}
                        >
                            {ctaText}
                        </Button>
                    </div>


                    <div className={styles.right}>
                        {/* {rightSlot} */}
                        {formcalender == "contact_form" ? "" : <CalendlyCalendar theme={activeTheme} />}

                    </div>
                </div>

                <div className={styles.cards}>
                    {cards.map((card, idx) => (
                        <div key={idx} className={styles.card}>
                            <Image src={card.icon}
                                alt={card.alt} width={24} height={24} />
                            <h4 className="mt-[10px]">{card.title}</h4>
                            <p>{card.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
