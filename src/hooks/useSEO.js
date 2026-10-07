import { useEffect } from 'react';

export function useSEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = title.includes('AIOIN') ? title : `${title} | AIOIN`;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    window.scrollTo(0, 0);
  }, [title, description, keywords]);
}
