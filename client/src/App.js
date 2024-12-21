import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('NYSBEAM website loaded.');

  const sections = document.querySelectorAll('section');
  const headerTitle = document.querySelector('header h1');

  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });

  observer.observe(headerTitle);
});
export default App;