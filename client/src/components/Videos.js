import React, { useEffect } from 'react';
import '../index.css';

const Videos = () => {
  useEffect(() => {
    const section = document.getElementById('videos-section');

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observerRef.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="videos-container">
      <section id="videos-section">
        <h2>Our Videos</h2>
        <div className="video-grid">
          <div className="video-placeholder">
            <p>Coming Soon</p>
          </div>
          <div className="video-placeholder">
            <p>Coming Soon</p>
          </div>
          <div className="video-placeholder">
            <p>Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;