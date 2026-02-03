import Image from "next/image";
import styles from "../styles/contactSection.module.css";
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

    const ContactForm = () => {
        return (
            <form className="contactForm" autoComplete="on">
                <div className="row">
                    <div className="field">
                        <label htmlFor="firstName">First name</label>
                        <input
                            id="firstName"
                            type="text"
                            autoComplete="given-name"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            id="lastName"
                            type="text"
                            autoComplete="family-name"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="field">
                        <label htmlFor="email">Your mail</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="country">Country</label>
                        <input
                            id="country"
                            type="text"
                            autoComplete="country-name"
                        />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        autoComplete="off"
                    />
                </div>

                <button className="gradient-btn no-arrow rounded-btn w-fit ml-auto mt-[15px] " type="submit">Contact us</button>
            </form>

        );
    };

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
                        {/* {rightSlot} */}
                        {formcalender == "contact_form" ? <ContactForm /> : <CalendlyCalendar theme={activeTheme} />}

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
