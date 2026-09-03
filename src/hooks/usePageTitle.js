import { useEffect } from 'react';

const SITE_NAME = 'VED Finance Group';

/**
 * Sets the browser/SEO title for a route. Titles are set client-side, so they
 * update on navigation; the static title in public/index.html remains the
 * fallback that crawlers see before JS runs.
 */
function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Mortgage & Finance Brokers`;
  }, [title]);
}

export default usePageTitle;
