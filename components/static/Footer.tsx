import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/footer.module.css";
import { CONTACT, FOOTER_COLUMNS, TAGLINE } from "../../content/site";

interface FooterProps {
  theme?: "light" | "dark";
}

// Hardcoded footer: same markup/styles as components/Footer.tsx but no
// WordPress menu fetch — columns come from content/site.ts.
const StaticFooter: React.FC<FooterProps> = ({ theme = "light" }) => {
  return (
    <footer className={`new-footer ${theme === "dark" ? "darkMode" : ""}`}>
      <div className="bgImg absolute w-full h-full top-0 z-[-1] ">
        <Image
          src="/bg-gradient.png"
          width={100}
          height={100}
          alt="Bright Code"
          className="w-full h-full"
        />
      </div>
      <div className="container">
        <div className="inner-wrap">
          {/* ================= TOP BAR ================= */}
          <div className="footer-top">
            <div className="footer-top-left mr-[20px] flex flex-wrap items-center ">
              <Link href="/" className="footer-logo-link mr-[20px] mb-[10px]">
                <Image
                  src="/brightcode_logo_light.svg"
                  width={180}
                  height={48}
                  alt="Bright Code"
                  className="footer-logo footer-logo--light h-auto "
                />
                <Image
                  src="/brightcode_logo.svg"
                  width={180}
                  height={48}
                  alt="Bright Code"
                  className="footer-logo footer-logo--dark h-auto"
                />
              </Link>

              <span className="footer-address-inline mb-[10px]">
                {CONTACT.address}
              </span>
            </div>

            <div className="footer-top-right">
              <span className="">{TAGLINE}</span>
            </div>
          </div>

          <div className="footer-divider" />

          {/* ================= GRID ================= */}
          <div className="footer-grid">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="footer-col">
                <Link href={column.path}>
                  <h4>{column.title}</h4>
                </Link>
                <ul className={styles.footerList}>
                  {column.links.map((link) => (
                    <li key={link.label} className={styles.footerListItem}>
                      <Link href={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="footer-contact">
              <Link href={`mailto:${CONTACT.email}`} className="mb-[40px] inline-block">
                <Image
                  src="/footer-icon-light.svg"
                  width={37}
                  height={37}
                  alt=""
                  className="footer-icon footer-icon--light"
                />
                <Image
                  src="/footer-icon-dark.svg"
                  width={37}
                  height={37}
                  alt=""
                  className="footer-icon footer-icon--dark"
                />
              </Link>

              <div className="telAndEmailWrap mb-[40px] ">
                <Link href={`mailto:${CONTACT.email}`} className="email">
                  {CONTACT.email}
                </Link>

                <Link href={CONTACT.phoneHref} className="tel">
                  {CONTACT.phone}
                </Link>
              </div>

              <div className="footer-socials">
                <Link href="#" className="linkedin">
                  <svg className="social-light" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.58C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#000D20" />
                  </svg>
                </Link>
                <Link href="#" className="linkedin">
                  <svg className="social-dark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.58C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#F9FAFB" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StaticFooter;
