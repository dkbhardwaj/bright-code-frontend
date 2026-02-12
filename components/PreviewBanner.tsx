import Link from 'next/link';
import styles from '../styles/previewBanner.module.css';

interface PreviewBannerProps {
  pageStatus?: string;
  lastModified?: string;
}

export default function PreviewBanner({ pageStatus, lastModified }: PreviewBannerProps) {
  return (
    <div className={styles.previewBanner} role="banner" aria-label="Preview mode notification">
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.icon} aria-hidden="true">⚠️</span>
          <div className={styles.textContent}>
            <p className={styles.message}>
              <strong>Preview Mode</strong> - You are viewing unpublished content
            </p>
            {pageStatus && (
              <p className={styles.status}>
                Status: <span className={styles.statusBadge}>{pageStatus}</span>
              </p>
            )}
            {lastModified && (
              <p className={styles.modified}>
                Last modified: {new Date(lastModified).toLocaleString()}
              </p>
            )}
          </div>
        </div>
        <Link
          href="/api/exit-preview"
          className={styles.exitButton}
          aria-label="Exit preview mode"
        >
          Exit Preview
        </Link>
      </div>
    </div>
  );
}
