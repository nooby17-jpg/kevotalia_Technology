import { useEffect } from "react";

export default function usePageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = "website",
}) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, property = false) => {
      let meta = document.querySelector(
        property
          ? `meta[property="${name}"]`
          : `meta[name="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        property ? (meta.property = name) : (meta.name = name);
        document.head.appendChild(meta);
      }

      meta.content = content;
    };

    if (description) setMeta("description", description);
    if (ogTitle) setMeta("og:title", ogTitle, true);
    if (ogDescription) setMeta("og:description", ogDescription, true);
    setMeta("og:type", ogType, true);
  }, [title, description, ogTitle, ogDescription, ogType]);
}
