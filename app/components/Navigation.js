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
   
     
      <div className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
      <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</Link>
      <Link href="#testimonials" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
      <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>
 
  );
} 