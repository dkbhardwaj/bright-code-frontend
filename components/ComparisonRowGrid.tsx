import React from "react";
import Link from "next/link";
import styles from "../styles/comparisonRowGrid.module.css";

export interface ComparisonRow {
    goodFit: string;
    notFit: string;
}

export interface ComparisonRowGridProps {
    data: {
        sectionId?: string;
        sectionPadding?: string[];
        leftColumnLabel?: string;
        rightColumnLabel?: string;
        rows: ComparisonRow[];
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
        rows,
        footerText,
        link,
    } = data;

    const safePadding = Array.isArray(sectionPadding)
        ? sectionPadding.join(" ")
        : "padding-medium";

    return (
        <section id={sectionId} className={`${styles.section} ${safePadding}`}>
            <div className="container">
                <div className={styles.grid}>

                    {/* Column Headers */}
                    <div className={styles.header}>
                        <span className={styles.colLabel}>{leftColumnLabel}</span>
                    </div>
                    <div className={`${styles.header} ${styles.headerRight}`}>
                        <span className={styles.colLabel}>{rightColumnLabel}</span>
                    </div>

                    {/* Comparison Rows */}
                    {rows?.map((row, i) => (
                        <React.Fragment key={i}>
                            <div className={styles.cell}>
                                <div className={styles.cellInnerLeft}>
                                    <p>{row.goodFit}</p>
                                </div>
                            </div>
                            <div className={`${styles.cell} ${styles.cellRight}`}>
                                <div className={styles.cellInnerRight}>
                                    <p>{row.notFit}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}

                    {/* Footer Row */}
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
