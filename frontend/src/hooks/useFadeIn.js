import { useEffect, useRef } from "react";

/**
 * useFadeIn — attaches an IntersectionObserver to a container ref.
 * All direct children with class "fade-in-up" get class "visible"
 * when they scroll into view.
 *
 * Usage:
 *   const ref = useFadeIn();
 *   <section ref={ref}>
 *     <div className="fade-in-up">...</div>
 *   </section>
 */
export default function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}