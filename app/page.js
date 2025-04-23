'use client';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import JoinForm from './components/JoinForm';
import Stop from "./components/stop";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle keyboard navigation and wheel events
  useEffect(() => {
    let scrollTimeout;
    
    const handleWheel = (e) => {
      // Prevent default only if we're not already scrolling
      if (!isScrolling) {
        e.preventDefault();
        
        setIsScrolling(true);
        
        const delta = e.deltaY;
        const sections = document.querySelectorAll('.fullpage-section');
        
        // Find current section
        let currentSectionIndex = 0;
        const scrollPosition = window.scrollY;
        
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (scrollPosition >= section.offsetTop - 100 && 
              scrollPosition < section.offsetTop + section.offsetHeight - 100) {
            currentSectionIndex = i;
            break;
          }
        }
        
        // Determine target section
        let targetSectionIndex;
        if (delta > 0 && currentSectionIndex < sections.length - 1) {
          targetSectionIndex = currentSectionIndex + 1;
        } else if (delta < 0 && currentSectionIndex > 0) {
          targetSectionIndex = currentSectionIndex - 1;
        } else {
          targetSectionIndex = currentSectionIndex;
        }
        
        // Scroll to target section
        if (sections[targetSectionIndex]) {
          sections[targetSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
        
        // Reset scrolling state after animation completes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };
    
    const handleKeyDown = (e) => {
      if (!isScrolling && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        
        setIsScrolling(true);
        
        const sections = document.querySelectorAll('.fullpage-section');
        
        // Find current section
        let currentSectionIndex = 0;
        const scrollPosition = window.scrollY;
        
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (scrollPosition >= section.offsetTop - 100 && 
              scrollPosition < section.offsetTop + section.offsetHeight - 100) {
            currentSectionIndex = i;
            break;
          }
        }
        
        // Determine target section
        let targetSectionIndex;
        if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
          targetSectionIndex = currentSectionIndex + 1;
        } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
          targetSectionIndex = currentSectionIndex - 1;
        } else {
          targetSectionIndex = currentSectionIndex;
        }
        
        // Scroll to target section
        if (sections[targetSectionIndex]) {
          sections[targetSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
        
        // Reset scrolling state after animation completes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling]);

  return (
    <main className="fullpage-container">
      <section className="fullpage-section">
        <Hero />
      </section>
      <section className="fullpage-section">
        <Stop />
      </section>
      <section className="fullpage-section">
        <Testimonials />
      </section>
      <section className="fullpage-section">
        <JoinForm />
      </section>
    </main>
  );
} 

