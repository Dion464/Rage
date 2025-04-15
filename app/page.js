'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from "./components/Hero";
import Rebelion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";
import Stop from "./components/stop";
import ContactForm from "./components/contactform";

const ReactFullpage = dynamic(() => import('@fullpage/react-fullpage'), {
  ssr: false
});

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < 768);

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Mobile view with Fullpage
  if (isMobile) {
    return (
      <ReactFullpage
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
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
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }

  // Desktop view without Fullpage
  return (
    <div className="desktop-layout">
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

