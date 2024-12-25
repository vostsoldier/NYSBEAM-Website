import React, { useEffect } from 'react';
import '../index.css'; 
import VivianImg from '../assets/team_members/vivian.webp';
import SidratImg from '../assets/team_members/sidrat.webp';
import ArianImg from '../assets/team_members/arian.webp';
import AbdullahImg from '../assets/team_members/abdullah.webp';
import AaronImg from '../assets/team_members/aaron.webp';
import RyanImg from '../assets/team_members/ryan.webp';
import FionaImg from '../assets/team_members/fiona.webp';
//import BrianaImg from '../assets/team_members/briana.webp';
import PeterImg from '../assets/team_members/peter.webp';
import MasonImg from '../assets/team_members/mason.webp';

const About = () => {
  useEffect(() => {
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

    if (headerTitle) {
      observer.observe(headerTitle);
    }

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      if (headerTitle) {
        observer.unobserve(headerTitle);
      }
    };
  }, []);

  return (
    <main>
      <section id="mission">
        <h2>Our Mission</h2>
        <p>Below is rough draft - will replace</p>
        <p>We aim to help spread awareness about mental health, and how it is so important for everyday body functions</p>
        <p>As teenagers ourselves, we realized that many people don't know how to alleviate stress effectively,</p>
        <p>which is why we took this issue to heart, and created this organization to help struggling teens like us.</p>
      </section>
      <section id="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img loading="lazy" src={VivianImg} alt="Vivian" />
            <h3>Vivian</h3>
            <p className="role">Co-President</p>
            <div className="description">
              <p>Vivian is responsible for overseeing all organizational activities and ensuring smooth operations.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy"src={SidratImg} alt="Sidrat" />
            <h3>Sidrat</h3>
            <p className="role">Co-President</p>
            <div className="description">
              <p>Sidrat manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src={ArianImg} alt="Arian" />
            <h3>Arian</h3>
            <p className="role">Vice-President</p>
            <div className="description">
              <p>Arian supports the presidents in managing the organization and overseeing projects.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy"src={AbdullahImg} alt="Abdullah" />
            <h3>Abdullah</h3>
            <p className="role">Co-Secretary</p>
            <div className="description">
              <p>Abdullah manages the strategic planning and development initiatives for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src={AaronImg} alt="Aaron" />
            <h3>Aaron</h3>
            <p className="role">Co-Secretary</p>
            <div className="description">
              <p>Aaron works with Abdullah to reach out, and collaborate with other organizations.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src={RyanImg} alt="Ryan" />
            <h3>Ryan</h3>
            <p className="role">Financial Manager</p>
            <div className="description">
              <p>Ryan manages the financial planning and budgeting for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src={FionaImg} alt="Fiona" />
            <h3>Fiona</h3>
            <p className="role">Designer</p>
            <div className="description">
              <p>Fiona manages the visual branding strategies for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src="https://via.placeholder.com/100" alt="Briana" />
            <h3>Briana</h3>
            <p className="role">Designer</p>
            <div className="description">
              <p>Briana manages the user experience and interface designs for NYSBEAM.</p>
            </div>
          </div>
          <div className="team-member">
            <img loading="lazy" src={PeterImg} alt="Peter" />
            <h3>Peter</h3>
            <p className="role">Webmaster</p>
            <div className="description">
              <p>Peter oversees the website maintenance and development for NYSBEAM.</p>
            </div>
          </div>
          <div className="center-content">
            <div className="team-member">
                <img loading="lazy" src={MasonImg} alt="Mason" />
                <h3>Mason</h3>
                <p className="role">Social Media Manager</p>
                <div className="description">
                  <p>Mason manages the social media platforms and online presence for NYSBEAM.</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section id="history">
        <h2>Our History</h2>
        <p>Background and history of NYSBEAM.</p>
      </section>
    </main>
  );
};

export default About;