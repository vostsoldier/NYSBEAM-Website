import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const testimonials = [
  {
    quote: "NYSBEAM has transformed the way I handle stress. Highly recommended!",
    author: "John Doe",
  },
  {
    quote: "The support and resources provided are outstanding.",
    author: "Jane Smith",
  },
  {
    quote: "A fantastic community for personal growth and mental health.",
    author: "Emily Johnson",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoSlide();
        } else {
          stopAutoSlide();
        }
      });
    }, { threshold: 0.5 });

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      stopAutoSlide();
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePrev = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  return (
    <div className="carousel" ref={carouselRef}>
      {testimonials.map((testimonial, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <div className="testimonial-content">
            <p>"{testimonial.quote}"</p>
            <h4>- {testimonial.author}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;