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
                <div className={styles.table}>

                    {/* Header row */}
                    <div className={styles.row}>
                        <div className={styles.headerCell}>
                            <span className={styles.colLabel}>{leftColumnLabel}</span>
                        </div>
                        <div className={`${styles.headerCell} ${styles.rightCol}`}>
                            <span className={styles.colLabel}>{rightColumnLabel}</span>
                        </div>
                    </div>

                    {/* Data rows — both cells in same row wrapper = equal height */}
                    {rows?.map((row, i) => (
                        <div key={i} className={styles.row}>
                            <div className={styles.cell}>
                                <p>{row.goodFit}</p>
                            </div>
                            <div className={`${styles.cell} ${styles.rightCol}`}>
                                <p>{row.notFit}</p>
                            </div>
                        </div>
                    ))}

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
