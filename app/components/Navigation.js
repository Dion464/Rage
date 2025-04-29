'use client';
import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8 relative z-50">
      <div className="flex-1">
        <Link href="#stop">
          <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</span>
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <span 
          onClick={() => scrollToSection('testimonials')} 
          className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap"
        >
          TESTIMONIALS
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <Link href="#join">
          <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</span>
        </Link>
      </div>
    </nav>
  );
} 