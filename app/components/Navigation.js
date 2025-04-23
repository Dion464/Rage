'use client';
import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8">
      <Link href="#stop">
        <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</span>
      </Link>
      <Link href="#testimonials">
        <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</span>
      </Link>
      <Link href="#join">
        <span className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</span>
      </Link>
    </nav>
  );
} 