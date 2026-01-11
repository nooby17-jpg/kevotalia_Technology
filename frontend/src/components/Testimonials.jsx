import { useEffect, useRef, useState } from "react";
import "./../styles/testimonial.css";

const testimonials = [
  {
    text: "Kevotalia Technology delivers unmatched reliability and innovation. Their security systems have completely transformed our operations.",
    name: "Sapan Kamilla",
    company: "Compugraphs Softech Solutions Pvt. Ltd",
  },
  {
    text: "Exceptional service and industry-grade solutions. Their team understands compliance and safety like no one else.",
    name: "Amit Verma",
    company: "Logistics Operations Head",
  },
  {
    text: "We trust Kevotalia for all our safety and surveillance needs. Professional, fast, and dependable.",
    name: "Neha Sharma",
    company: "Facility Manager",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  /* Swipe handlers */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section
      className="testimonial-ultra"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div className="testimonial-header">
        <span>Testimonials</span>
        <h2>Our Happy Customers</h2>
        <p>Trusted by professionals nationwide</p>
      </div>

      <div
        className="testimonial-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* LEFT BUTTON */}
        <button className="nav-btn left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div key={index} className="testimonial-card animate">
          <div className="quote-bg">“</div>

          <p className="testimonial-text">
            {testimonials[index].text}
          </p>

          <div className="testimonial-user">
            <div className="avatar">
              {testimonials[index].name.charAt(0)}
            </div>
            <div>
              <strong>{testimonials[index].name}</strong>
              <span>{testimonials[index].company}</span>
            </div>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
