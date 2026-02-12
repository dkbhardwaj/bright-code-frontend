import Link from 'next/link';
import styles from '../styles/notFoundContent.module.css';

interface NotFoundContentProps {
  pagePath?: string;
  isPreview?: boolean;
}

export default function NotFoundContent({ pagePath, isPreview = false }: NotFoundContentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg 
            className={styles.icon} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>
        
        <h1 className={styles.title}>
          {isPreview ? 'Draft Content Not Available' : 'Page Not Found'}
        </h1>
        
        <p className={styles.description}>
          {isPreview 
            ? 'This page is in draft mode but content could not be loaded. Please check the WordPress admin panel.'
            : pagePath 
              ? `The page "${pagePath}" doesn't exist or hasn't been published yet.`
              : "We couldn't find the page you're looking for."
          }
        </p>
        
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Go to Homepage
          </Link>
          {isPreview && (
            <Link href="/api/exit-preview" className={styles.secondaryButton}>
              Exit Preview Mode
            </Link>
          )}
        </div>
        
        {!isPreview && (
          <div className={styles.suggestions}>
            <p className={styles.suggestionsTitle}>You might want to:</p>
            <ul className={styles.suggestionsList}>
              <li>Check the URL for typos</li>
              <li>Go back to the <Link href="/">homepage</Link></li>
              <li>Browse our <Link href="/services">services</Link></li>
              <li>Get in touch via our <Link href="/contact">contact page</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
