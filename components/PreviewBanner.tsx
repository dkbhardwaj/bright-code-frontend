import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/previewBanner.module.css';

interface PreviewBannerProps {
  pageStatus?: string;
  lastModified?: string;
}

export default function PreviewBanner({ pageStatus, lastModified }: PreviewBannerProps) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    if (lastModified) {
      setFormattedDate(new Date(lastModified).toLocaleString());
    }
  }, [lastModified]);

  return (
    <div className={styles.previewBanner} role="complementary" aria-label="Preview mode widget">
      <div className={styles.container}>
        <span className={styles.icon} aria-hidden="true">⚠️</span>

        <div className={styles.textContent}>
          <p className={styles.message}>Preview Mode</p>

          <div className={styles.details}>
            <p style={{ fontSize: '0.75rem', opacity: 0.9, margin: 0 }}>
              Viewing unpublished content
            </p>

            {pageStatus && (
              <p className={styles.status}>
                Status: <span className={styles.statusBadge}>{pageStatus}</span>
              </p>
            )}

            {formattedDate && (
              <p className={styles.modified}>
                Last modified: {formattedDate}
              </p>
            )}

            <Link
              href="/api/exit-preview"
              className={styles.exitButton}
            >
              Exit Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
