'use client';
import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from "./components/Hero";
import Rebelion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";
import Stop from "./components/stop";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if width is >= 768px for desktop
      setIsDesktop(window.innerWidth >= 768);

      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Desktop view WITH Fullpage
  if (isDesktop) {
    return (
      <ReactFullpage
       
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <Rebelion />
              </div>
              <div className="section">
                <Testimonials />
              </div>
              <div className="section">
                <Stop />
              </div>
              <div className="section">
                <JoinForm />
              </div>
            </div>
          );
        }}
      />
    );
  }

  // Mobile view WITHOUT Fullpage
  return (
    <div className="mobile-layout">
      <div className="section">
        <Hero />
      </div>
      <div className="section">
        <Rebelion />
      </div>
      <div className="section">
        <Testimonials />
      </div>
      <div className="section">
        <Stop />
      </div>
      <div className="section">
        <JoinForm />
      </div>
    </div>
  );
} 

