'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A3B2E] flex flex-col items-center justify-center px-4 font-arial-bold">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <Image
          src="/MR_Badge.svg"
          alt="Merchant Rebellion Logo"
          width={120}
          height={120}
          className="hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* Error Message */}
      <h1 className="text-[#1EEB7A] text-6xl sm:text-7xl md:text-8xl font-chamelton-blk text-center mb-6">
        404
      </h1>
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-chamelton-blk text-center mb-8">
        PAGE NOT FOUND
      </h2>
      
      {/* Custom Message */}
      <p className="text-[#1EEB7A] text-lg sm:text-xl text-center max-w-[540px] mb-12 font-arial">
        Even rebels need directions sometimes.<br />
        Let's get you back on track.
      </p>

      {/* Return Home Button */}
      <Link 
        href="/"
        className="inline-block border-2 border-[#1EEB7A] text-[#1EEB7A] rounded-full px-8 py-3 text-lg font-arial-bold hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-all duration-300 ease-in-out"
      >
        Return to Base
      </Link>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#1EEB7A] opacity-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#1EEB7A] opacity-20" />
    </div>
  );
} 