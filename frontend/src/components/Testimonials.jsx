import { useEffect, useRef, useState } from "react";
import "./../styles/testimonial.css";

const testimonials = [
  {
    text: "Kevotalia Technology delivers unmatched reliability and innovation. Their security systems have completely transformed our operations.",
    name: "Sapan Kamilla",
    company: "Compugraphs Softech Solutions Pvt. Ltd",
    rating: 5,
  },
  {
    text: "Exceptional service and industry-grade solutions. Their team understands compliance and safety like no one else.",
    name: "Amit Verma",
    company: "Logistics Operations Head",
    rating: 4,
  },
  {
    text: "We trust Kevotalia for all our safety and surveillance needs. Professional, fast, and dependable every single time.",
    name: "Neha Sharma",
    company: "Facility Manager",
    rating: 4,
  },
  {
    text: "The fire safety audit and AMC support from Kevotalia has given us complete peace of mind. Highly recommend for any enterprise.",
    name: "Rajesh Nair",
    company: "Operations Director, Manufacturing Unit",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "star filled" : "star"}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex]     = useState(0);
  const intervalRef           = useRef(null);
  const touchStartX           = useRef(0);
  const touchEndX             = useRef(0);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEndX.current   = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50)  next();
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
        <h2>What Our Clients Say</h2>
        <p>Trusted by professionals and organisations across India</p>

        {/* Overall rating summary 
        <div className="testimonial-overall">
          <Stars count={5} />
          <span className="overall-label">5.0 / 5 — based on client feedback</span>
        </div>
           */}
      </div>
   
      <div
        className="testimonial-slider"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <button className="nav-btn left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div key={index} className="testimonial-card animate">
          <div className="quote-bg">"</div>

          {/* Star rating per testimonial */}
          <Stars count={testimonials[index].rating} />

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

        <button className="nav-btn right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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