import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const BoxBreathing = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [phase, setPhase] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let countdownInterval;
    if (isStarted && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (isStarted && countdown === 0) {
      startBreathingCycle();
    }

    return () => clearInterval(countdownInterval);
  }, [isStarted, countdown]);

  const startBreathingCycle = () => {
    const phases = ['Inhale', 'Hold1', 'Exhale', 'Hold2'];
    let currentPhase = 0;

    setPhase(phases[currentPhase]);

    const phaseInterval = setInterval(() => {
      currentPhase++;
      if (currentPhase < phases.length) {
        setPhase(phases[currentPhase]);
      } else {
        clearInterval(phaseInterval);
        setIsStarted(false);
        setIsCompleted(true);
      }
    }, 4000); // 4 seconds per phase
  };

  const handleStart = () => {
    setIsStarted(true);
    setCountdown(3);
    setPhase('');
    setIsCompleted(false);
  };

  const handleRestart = () => {
    handleStart();
  };

  useEffect(() => {
    const section = sectionRef.current;

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
    <section id="box-breathing-section" ref={sectionRef}>
      <div className="box-breathing-container">
        <h2>Box Breathing Activity</h2>
        <p>
          Box Breathing is a simple and effective deep breathing exercise that can help reduce stress and improve concentration.
        </p>
        <p>Follow the cycle: Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds.</p>
        {!isStarted && !isCompleted && countdown === 3 && (
          <button className="start-button" onClick={handleStart}>Let's Begin</button>
        )}
        {isStarted && countdown > 0 && (
          <div className="countdown">{countdown}</div>
        )}
        {isStarted && countdown === 0 && (
          <div className="animation-container">
            <div className={`breathing-box ${phase.toLowerCase()}`}>
              <div className="moving-circle"></div>
              <div className="stage-indicators">
                <div className={`stage ${phase === 'Inhale' ? 'active' : ''}`}></div>
                <div className={`stage ${phase === 'Hold1' || phase === 'Hold2' ? 'active' : ''}`}></div>
                <div className={`stage ${phase === 'Exhale' ? 'active' : ''}`}></div>
                <div className={`stage ${phase === 'Hold1' || phase === 'Hold2' ? 'active' : ''}`}></div>
              </div>
              <div className={`phase-label ${phase ? 'visible' : ''}`}>{phase.replace('1', '').replace('2', '')}</div>
            </div>
          </div>
        )}
        {isCompleted && (
          <button className="restart-button" onClick={handleRestart}>Do It Again</button>
        )}
      </div>
    </section>
  );
};

export default BoxBreathing;