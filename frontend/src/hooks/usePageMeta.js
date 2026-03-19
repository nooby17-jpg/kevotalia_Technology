import { useEffect } from "react";

const BASE_URL = "https://kevotaliatechnology.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * usePageMeta — sets <title>, meta description, and Open Graph tags per page.
 *
 * @param {object} params
 * @param {string} params.title        - <title> and og:title
 * @param {string} params.description  - meta description and og:description
 * @param {string} [params.ogImage]    - og:image URL (defaults to site-wide OG image)
 * @param {string} [params.ogType]     - og:type (default: "website")
 * @param {string} [params.canonical]  - canonical URL (defaults to current href)
 */
export default function usePageMeta({
  title,
  description,
  ogImage  = DEFAULT_IMAGE,
  ogType   = "website",
  canonical,
}) {
  useEffect(() => {
    // <title>
    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = attr.split("=");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const url = canonical || window.location.href;

    // Standard
    if (description) setMeta('meta[name="description"]',           'name=description',         description);

    // Open Graph
    setMeta('meta[property="og:type"]',        'property=og:type',        ogType);
    setMeta('meta[property="og:title"]',       'property=og:title',       title || "Kevotalia Technology");
    setMeta('meta[property="og:description"]', 'property=og:description', description || "");
    setMeta('meta[property="og:url"]',         'property=og:url',         url);
    setMeta('meta[property="og:image"]',       'property=og:image',       ogImage);

    // Twitter
    setMeta('meta[name="twitter:title"]',       'name=twitter:title',       title || "Kevotalia Technology");
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description || "");
    setMeta('meta[name="twitter:image"]',       'name=twitter:image',       ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

  }, [title, description, ogImage, ogType, canonical]);
}