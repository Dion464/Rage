'use client';
import Image from 'next/image';

export default function Stop() {
  return (
    <div id="stop" className="h-screen bg-[#0A3B2E] flex flex-col">
    
      <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8">
        <h2 className="text-[#23F972] text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</h2>
      </nav>
   
      <div className="mt-24 md:mt-0 flex-1 flex flex-col md:flex-row px-4 md:px-16 relative">
        {/* Left side content */}
        <div className="pt-4 md:pt-8 w-full md:max-w-[85%] text-center md:text-left">
          <h1 className="text-[#23F972] text-3xl md:text-[90px] leading-tight font-chamelton-blk tracking-tight">
            STOP SWIPING AWAY<br />
            YOUR PROFITS.<br />
            SWIPE FEES<br />
            HAVE INCREASED<br />
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-white">700% </span>
              <span className="text-[#23F972]">SINCE 2001.</span>
            </div>
          </h1>

          <div className="mt-12 md:mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-white text-lg md:text-xl text-center md:text-left font-charter">
              Call the <span className="text-[#23F972]">Merchant Rebellion</span> and talk<br className="hidden md:block" />
              to a real person with real solutions.
            </p>
           
          </div>
        </div>

        {/* Right side content */}
        <div className="relative md:absolute md:right-16 md:top-1/4 text-center md:text-right md:mt-0">
          <p className="text-[#23F972] text-lg md:text-xl mb-4 font-arial">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:18009411544"
            className="inline-block px-8 md:px-12 py-2 md:py-3 border border-[#23F972] rounded-full text-[#23F972] hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors text-lg md:text-xl font-arial-bold"
          >
            Call + 1 (800) 941-1544
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
     
      {/* Footer Text */}
    
    </div>
  );
}
