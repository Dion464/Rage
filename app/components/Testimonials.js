import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-screen bg-[#141212] flex flex-col relative">
      {/* Component-specific navigation */}
      <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8">
        <h2 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#23F972] text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</h2>
      </nav>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-4 sm:px-16 mt-4 md:mt-8 flex-1 pb-8 md:pb-16 z-10">
        {/* Left Content */}
        <div className="w-full md:w-[55%] mb-8 md:mb-0 pr-0 md:pr-4">
          {/* Title */}
          <div className="mb-6 md:mb-8 lg:mb-10 text-left">
            <div className="text-[#23F972] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] leading-[0.9] font-extrabold tracking-tighter whitespace-nowrap">
              REAL MERCHANTS.
            </div>
            <div className="flex leading-[0.9]">
              <div className="text-[#23F972] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter">REAL</div>
              <div className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter ml-4">ACTION.</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="border-l border-gray-700 pl-4 md:pl-8 mt-8 md:mt-12">
            <div className="mb-6 md:mb-8">
              <h3 className="text-[#23F972] mb-1 md:mb-2 text-sm md:text-base font-bold">Langes of Bronxville, Bronxville, NY:</h3>
              <p className="text-white mb-2 md:mb-3 text-xs md:text-sm leading-relaxed">
                "Five months ago I reluctantly switched Langes Deli to the Priority Payments Cash The monthly savings are as advertised and it goes right to the bottom line."
             
              </p>
              <p className="text-white text-xs md:text-sm">Thomas Bass, Owner</p>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-[#23F972] mb-1 md:mb-2 text-sm md:text-base font-bold">Tryforos and Pernice Florist, Bronxville, NY:</h3>
              <p className="text-white mb-2 md:mb-3 text-xs md:text-sm leading-relaxed">
                "The Priority Payments Cash Discount Program has delivered all that was promised. There has been virtually no pushback on the fees and the savings are real."
              </p>
              <p className="text-white text-xs md:text-sm">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 text-sm md:text-base font-bold">Park Place Meats, Inc., Bronxville, NY:</h3>
              <p className="text-white mb-2 md:mb-3 text-xs md:text-sm leading-relaxed">
                "I am extremely satisfied with our conversion to the Cash Discount Program. The transition was simple and Priority's customer service is exceptional. My clients understand the need for businesses to reduce costs in this unprecedented time, and my credit card fees have been reduced by almost 90%."
              </p>
              <p className="text-white text-xs md:text-sm">Paul Chietro, owner</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] mt-4 md:mt-0 flex flex-col items-center md:items-end relative overflow-visible">
          {/* Call To Action */}
          <div className="text-center md:text-right mb-4 z-10 relative w-full mt-4 md:mt-12">
            <p className="text-[#23F972] text-sm md:text-base lg:text-lg mb-2 font-arial">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-full py-2 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-arial-bold hover:bg-[#23F972] hover:text-black transition-colors"
            >
              Call  + 1 (800) 941-1544
            </a>
          </div>

          {/* Flag Image Container - Hidden on mobile, block + absolute on md+ */}
          <div className="hidden md:block relative w-full h-[400px]
                        md:absolute md:bottom-0 md:right-[-50px] md:w-[120%] md:h-[600px] 
                        lg:bottom-[-50px] lg:right-[-75px] lg:w-[130%] lg:h-[750px] 
                        xl:bottom-[-80px] xl:right-[-90px] xl:w-[125%] xl:h-[1200px] 
                        pointer-events-none z-0">
            <Image
              src="/flag.svg"
              alt="Rebellion Flag"
              fill
              className="object-contain object-bottom"
              sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 54vw, (min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
