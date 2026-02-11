import Link from 'next/link';
import styles from '../styles/previewBanner.module.css';

export default function PreviewBanner() {
  return (
    <div className={styles.previewBanner}>
      <div className={styles.container}>
        <p className={styles.message}>
          <span className={styles.icon}>⚠️</span>
          <strong>Preview Mode</strong> - You are viewing unpublished content
        </p>
        <Link href="/api/exit-preview" className={styles.exitButton}>
          Exit Preview
        </Link>
      </div>
    </div>
  );
}
