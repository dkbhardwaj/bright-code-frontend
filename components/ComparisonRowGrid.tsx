import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/comparisonRowGrid.module.css";

export interface ComparisonRow {
    leftText: string;
    rightText: string;
}

export interface ComparisonRowGridProps {
    data: {
        fieldGroupName?: string;
        sectionId?: string;
        sectionPadding?: string[];
        leftColumnLabel?: string;
        rightColumnLabel?: string;
        comparisonRows?: ComparisonRow[];
        footerText?: string;
        link?: {
            linkText: string;
            linkUrl: string;
            target?: string;
            classname?: string;
        };
    };
}

const ComparisonRowGrid: React.FC<ComparisonRowGridProps> = ({ data }) => {
    const {
        sectionId,
        sectionPadding,
        leftColumnLabel = "GOOD FIT IF",
        rightColumnLabel = "NOT A FIT IF",
        comparisonRows,
        footerText,
        link,
    } = data;

    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const safePadding = Array.isArray(sectionPadding)
        ? sectionPadding.join(" ")
        : "padding-medium";

    return (
        <section id={sectionId} className={`comparison-row-grid ${styles.section} ${safePadding}`}>
            <div className="container">
                <div className={styles.table}>

                    {(!mounted || !isMobile) ? (
                        <div className={styles.desktopView}>
                            <div className={styles.row}>
                                <div className={styles.headerCell}>
                                    <span className={styles.colLabel}>{leftColumnLabel}</span>
                                </div>
                                <div className={`${styles.headerCell} ${styles.rightCol}`}>
                                    <span className={styles.colLabel}>{rightColumnLabel}</span>
                                </div>
                            </div>

                            {comparisonRows?.map((row, i) => (
                                <div key={i} className={styles.row}>
                                    <div className={styles.cell}>
                                        <p>{row.leftText}</p>
                                    </div>
                                    <div className={`${styles.cell} ${styles.rightCol}`}>
                                        <p>{row.rightText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.mobileView}>
                            <div className={styles.mobileColumn}>
                                <div className={styles.headerCell}>
                                    <span className={styles.colLabel}>{leftColumnLabel}</span>
                                </div>
                                {comparisonRows?.map((row, i) => (
                                    <div key={`left-${i}`} className={styles.cell}>
                                        <p>{row.leftText}</p>
                                    </div>
                                ))}
                            </div>

                            <div className={`${styles.mobileColumn}`}>
                                <div className={`${styles.headerCell} ${styles.rightCol}`}>
                                    <span className={styles.colLabel}>{rightColumnLabel}</span>
                                </div>
                                {comparisonRows?.map((row, i) => (
                                    <div key={`right-${i}`} className={`${styles.cell} ${styles.rightCol}`}>
                                        <p>{row.rightText}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    {(footerText || link?.linkText) && (
                        <div className={styles.footer}>
                            {footerText && (
                                <p className={styles.footerText}>{footerText}</p>
                            )}
                            {link?.linkText && link?.linkUrl && (
                                <Link
                                    href={link.linkUrl}
                                    target={link.target || "_self"}
                                    className={`btn-primary no-arrow ${styles.footerBtn}`}
                                >
                                    {link.linkText}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ComparisonRowGrid;
