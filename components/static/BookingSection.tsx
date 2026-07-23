import React from "react";
import styles from "../../styles/contactSection.module.css";
import BookingForm from "./BookingForm";
import { CONTACT } from "../../content/site";

interface BookingSectionProps {
  title: string;
  subtitle: string;
  id?: string;
}

// Static booking section: same layout as ContactSection, but the right side
// is a working form that saves to Firestore via /api/book.
const BookingSection: React.FC<BookingSectionProps> = ({ title, subtitle, id }) => {
  return (
    <section
      id={id}
      className={`${styles.contactSection} ${styles.light} overflow-hidden ${id ? "scroll-mt-[120px]" : ""}`}
    >
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className="mt-[20px]">{title}</h2>
            <p className="mb-[20px]">{subtitle}</p>
            <p className="text-[14px] text-[#6b7280]">
              Prefer email?{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-[#0044FF] underline underline-offset-[3px]">
                {CONTACT.email}
              </a>
            </p>
          </div>

          <div className={styles.right}>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
