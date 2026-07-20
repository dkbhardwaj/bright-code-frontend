import React from "react";
import styles from "../../styles/contactSection.module.css";
import Button from "../buttons/Button";
import BookingForm from "./BookingForm";
import { CONTACT } from "../../content/site";

interface BookingSectionProps {
  title: string;
  subtitle: string;
}

// Static booking section: same layout as ContactSection, but the right side
// is a working form that saves to Firestore via /api/book.
const BookingSection: React.FC<BookingSectionProps> = ({ title, subtitle }) => {
  return (
    <section className={`${styles.contactSection} ${styles.light} overflow-hidden`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.left}>
            <h2 className="mt-[20px]">{title}</h2>
            <p className="mb-[20px]">{subtitle}</p>
            <Button
              href={`mailto:${CONTACT.email}`}
              className="btn-tertiary no-arrow"
              target="_blank"
            >
              {`Email ${CONTACT.email}`}
            </Button>
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
