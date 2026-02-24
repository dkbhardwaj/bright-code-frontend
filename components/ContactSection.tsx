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
    const sectionId = data.sectionId; // Destructure sectionId
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
                        <input
                            id="firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder=" "
                        />
                        <label htmlFor="firstName">First name</label>
                    </div>

                    <div className="field">
                        <input
                            id="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder=" "
                        />
                        <label htmlFor="lastName">Last name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="field">
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder=" "
                        />
                        <label htmlFor="email">Your mail</label>
                    </div>

                    <div className="field">
                        <input
                            id="country"
                            type="text"
                            autoComplete="country-name"
                            placeholder=" "
                        />
                        <label htmlFor="country">Country</label>
                    </div>
                </div>

                <div className="field">
                    <textarea
                        id="message"
                        autoComplete="off"
                        placeholder=" "
                    />
                    <label htmlFor="message">Message</label>
                </div>

                <button className="gradient-btn no-arrow rounded-btn w-fit ml-auto mt-[15px] " type="submit">Contact us</button>
            </form>

        );
    };

    return (
        <section id={sectionId} className={`${styles.contactSection} ${styles[activeTheme]} overflow-hidden`}>
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
                        {formcalender === "contact_form" ? (
                            <ContactForm />
                        ) : (
                            <CalendlyCalendar theme={activeTheme} />
                        )}


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
