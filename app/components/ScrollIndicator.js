'use client';
import { useState, useEffect } from 'react';

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 4; // Hero, Stop, Testimonials, JoinForm

  useEffect(() => {
    // Function to handle scrolling and determine active section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Get all section elements
      const sections = document.querySelectorAll('section');
      
      // Determine which section is in view
      let newActiveSection = 0;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 50; // Add some tolerance
        const sectionHeight = section.offsetHeight;
        
        // Consider a section active if it occupies most of the viewport
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          newActiveSection = i;
          break;
        }
      }
      
      if (activeSection !== newActiveSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Initial check
    setTimeout(handleScroll, 200); // Small delay to ensure DOM is ready
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === index 
              ? 'bg-[#23F972] w-4 h-4' 
              : 'bg-white opacity-50 hover:opacity-100'
          }`}
          aria-label={`Scroll to section ${index + 1}`}
        />
      ))}
    </div>
  );
} 