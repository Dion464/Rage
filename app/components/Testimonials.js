import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 font-bold overflow-x-auto gap-4 sm:gap-8 sticky top-0 z-50" style={{fontFamily: 'Chamelton10-bd'}}>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#1EEB7A] text-base sm:text-xl tracking-wider whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-16 pt-8 md:pt-16 relative">
        {/* Left Content */}
        <div className="w-full md:w-[55%] z-10">
          {/* Title */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none font-bold" style={{fontFamily: 'Chamelton10-bd'}}>
              <div className="text-[#1EEB7A]">MERCHANTS.</div>
              <div className="mt-2 sm:mt-3 md:mt-4">
                <span className="text-[#1EEB7A]">REAL </span>
                <span className="text-white">ACTION.</span>
              </div>
            </h1>
          </div>

          {/* Testimonials */}
          <div className="space-y-8 md:space-y-12 max-w-full md:max-w-[85%] lg:max-w-[80%] relative px-4 md:px-0" style={{ fontFamily: 'Arial-Regular' }}>
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gray-700" />
            
            <div>
              <h3 className="text-[#1EEB7A] mb-3 uppercase text-sm sm:text-base md:text-lg" style={{fontFamily: 'Arial-Regular'}}>LANGES OF BRONXVILLE, BRONXVILLE, NY:</h3>
              <p className="text-white mb-3 uppercase text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                &ldquo;FIVE MONTHS AGO I RELUCTANTLY SWITCHED LANGES DELI TO THE PRIORITY
                PAYMENTS CASH DISCOUNT PROGRAM. I ANTICIPATED RESISTANCE FROM MY
                CUSTOMERS. THERE TRULY HAS BEEN NONE. THE MONTHLY SAVINGS ARE AS
                ADVERTISED AND IT GOES RIGHT TO THE BOTTOM LINE.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm md:text-base">THOMAS BASS, OWNER</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-3 uppercase text-sm sm:text-base md:text-lg" style={{fontFamily: 'Arial-Regular'}}>TRYFOROS AND PERNICE FLORIST, BRONXVILLE, NY:</h3>
              <p className="text-white mb-3 uppercase text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                &ldquo;THE PRIORITY PAYMENTS CASH DISCOUNT PROGRAM HAS DELIVERED ALL THAT
                WAS PROMISED. THERE HAS BEEN VIRTUALLY NO PUSHBACK ON THE FEES AND
                THE SAVINGS ARE REAL.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm md:text-base">GARY TRYFOROS, OWNER</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-3 uppercase text-sm sm:text-base md:text-lg" style={{fontFamily: 'Arial-Regular'}}>PARK PLACE MEATS, INC., BRONXVILLE, NY:</h3>
              <p className="text-white mb-3 uppercase text-xs sm:text-sm md:text-base tracking-wide leading-relaxed">
                &ldquo;I AM EXTREMELY SATISFIED WITH OUR CONVERSION TO THE CASH DISCOUNT
                PROGRAM. THE TRANSITION WAS SIMPLE AND PRIORITY'S CUSTOMER SERVICE
                IS EXCEPTIONAL. MY CLIENTS UNDERSTAND THE NEED FOR BUSINESSES TO
                REDUCE COSTS IN THIS UNPRECEDENTED TIME, AND MY CREDIT CARD FEES
                HAVE BEEN REDUCED BY ALMOST 90%.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm md:text-base">PAUL CHIETRO, OWNER</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-end justify-start z-10">
          <div className="mt-12 md:mt-[4.5rem] text-center md:text-right">
            <p className="text-[#1EEB7A] text-base sm:text-lg md:text-xl mb-4">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border-2 border-[#1EEB7A] text-[#1EEB7A] rounded-full px-6 py-2.5 text-base md:text-base lg:text-xl font-medium hover:bg-[#1EEB7A] hover:text-black transition-colors whitespace-nowrap"
            >
              Call 1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>

      {/* Flag Image - Positioned at bottom of section and smaller */}
      <div className="absolute bottom-0 right-0 w-full md:w-[45%] h-[50vh] md:h-[65vh] lg:h-[70vh] xl:h-[75vh] z-0">
        <Image
          src="/flag.png"
          alt="Rebellion Flag"
          fill
          className="object-contain object-bottom scale-100 md:scale-85 lg:scale-90 xl:scale-100"
          priority
        />
      </div>
    </div>
  );
}
