import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Navigation from "./Navigation";
import Link from 'next/link';

export default function Hero() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['stop', 'testimonials', 'join'];
      const heroElement = document.getElementById('hero');
      const heroRect = heroElement?.getBoundingClientRect();
      
      // If we're in the hero section, keep all nav items white
      if (heroRect && heroRect.top <= 100 && heroRect.bottom >= 100) {
        setActiveSection('');
        return;
      }

      // Check other sections
      let foundActive = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      
      // If no section is active, reset to white
      if (!foundActive) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero" className="h-screen md:min-h-[100vh] bg-[#0A3B2E] flex flex-col relative overflow-hidden pt-16 md:pt-0">
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 md:hidden bg-[#0A3B2E] z-50 border-b border-[#23F972]/20">
        <div className="flex justify-between px-4 py-4">
          <Link 
            href="#stop" 
            className={`text-sm font-chamelton-blk cursor-pointer whitespace-nowrap transition-colors ${activeSection === 'stop' ? 'text-[#23F972]' : 'text-white'}`}
          >
            THE REBELLION
          </Link>
          <Link 
            href="#testimonials" 
            className={`text-sm font-chamelton-blk cursor-pointer whitespace-nowrap transition-colors ${activeSection === 'testimonials' ? 'text-[#23F972]' : 'text-white'}`}
          >
            TESTIMONIALS
          </Link>
          <Link 
            href="#join" 
            className={`text-sm font-chamelton-blk cursor-pointer whitespace-nowrap transition-colors ${activeSection === 'join' ? 'text-[#23F972]' : 'text-white'}`}
          >
            JOIN US
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
        <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">THE REBELLION</Link>
        <Link href="#testimonials" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
        <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 md:gap-y-0 px-4 sm:px-8 md:px-12 lg:px-16 md:items-center h-[calc(100vh-4rem)] md:h-auto pb-16 md:pb-0 pt-8 md:pt-0">
        <div className="md:col-span-4 text-center md:text-left pt-8 md:pt-0">
          <div className="font-chamelton-blk">
            <div className="flex flex-row items-baseline gap-2 sm:gap-4 justify-center md:justify-start">
              <span className="text-white text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">RAGE</span>
              <span className="text-[#23F972] text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#23F972] text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">THE FEES!</span>
            </div>
          </div>

          <div className="mt-8 md:mt-10 lg:mt-12 font-charter space-y-3 md:space-y-4">
            <p className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl leading-relaxed text-center md:text-left md:ml-3">
              U.S. Merchants paid <span className="text-[#23F972] font-charter-bold">$224 billion</span>{" "}
              dollars in swipe fees in 2023. Many{" "}
              merchants rank them as their second{" "}
              highest operating cost.
            </p>
            <p className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl text-center md:text-left md:ml-3">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        <div className="md:col-span-6 flex justify-center items-center md:order-none py-0">
          <div className="logo-container w-full h-full flex items-center justify-center relative">
            <Image
              src="/logo.svg"
              alt="Merchant Rebellion Logo"
              width={1200}
              height={1200}
              className="logo-image absolute"
              style={{ width: '90%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col items-center justify-center mt-16 md:-mt-32 pb-12 md:py-0 md:-ml-12">
          <div className="text-center flex flex-col items-center gap-2 ">
          <p className="text-[#23F972] text-[1.2rem] sm:text-[1.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.2rem] leading-relaxed font-arial text-center mb-2 lg:text-[1.5rem]">
      Call now for U.S.-based<br />
      single-ring concierge service
    </p>
    <a
      href="tel:18009411544"
      className="inline-block border border-[#23F972] text-[#23F972] rounded-[100px] px-8 md:px-9 lg:px-12 py-2 md:py-2.5 lg:py-4 text-[1rem] md:text-[1.1rem] lg:text-[1rem] font-arial hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors whitespace-nowrap"
    >
      Call +1(800) 941-1544
    </a>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .logo-container {
          min-height: 240px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        @media (min-width: 640px) {
          .logo-container {
            min-height: 300px;
          }
        }
        
        @media (min-width: 768px) {
          .logo-container {
            min-height: 450px;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-container {
            min-height: 550px;
          }
          .logo-image {
            transform: translate(-50%, -50%) scale(1.2) !important;
          }
        }
        
        @media (min-width: 1280px) {
          .logo-container {
            min-height: 650px;
          }
          .logo-image {
            transform: translate(-50%, -50%) scale(1.3) !important;
          }
        }
        
        @media (max-width: 767px) {
          #hero p {
            word-spacing: 2px;
            line-height: 1.6;
          }
        }
      `}</style>
    
    </div>
  );
}
