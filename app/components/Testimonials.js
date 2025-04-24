import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-screen bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8">
        <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#23F972] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-4 sm:px-16 mt-4 md:mt-8 flex-1 pb-8 md:pb-16 z-10">
        {/* Left Content */}
        <div className="w-full md:w-[55%] mb-8 md:mb-0 pr-0 md:pr-4">
          {/* Title */}
          <div className="mb-6 md:mb-8 lg:mb-10 text-left">
            <div className="text-[#23F972] text-[40px] sm:text-[50px] lg:text-[80px] xl:text-[100px] leading-[0.9] font-extrabold tracking-tighter whitespace-nowrap md:text-[12px] md:leading-tight lg:text-[80px]">
              REAL MERCHANTS.
            </div>
            <div className="flex leading-[0.9]">
              <div className="text-[#23F972] text-[40px] sm:text-[50px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter md:text-[12px] md:leading-tight lg:text-[80px]">REAL</div>
              <div className="text-white text-[40px] sm:text-[50px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter ml-4 md:text-[12px] md:ml-2 md:leading-tight lg:text-[80px] lg:ml-4">ACTION.</div>
            </div>
          </div>

          {/* All Testimonials */}
          <div className="border-l border-gray-700 pl-4 md:pl-8 mt-8 md:mt-4 md:max-h-[200px] md:overflow-y-auto lg:max-h-none lg:overflow-visible lg:mt-8">
            {/* First testimonial */}
            <div className="mb-6 md:mb-1 lg:mb-6">
              <h3 className="text-[#23F972] mb-1 md:mb-0.5 lg:mb-1 text-sm md:text-[10px] lg:text-base font-bold">Langes of Bronxville, Bronxville, NY:</h3>
              <p className="text-white mb-2 md:mb-0.5 lg:mb-2 text-xs md:text-[10px] lg:text-sm leading-relaxed md:leading-tight lg:leading-relaxed max-w-[90%] md:max-w-[95%]">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Priority
                Payments Cash Discount Program. I anticipated resistance from my
                customers. There truly has been none. The monthly savings are as
                advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="text-white text-xs md:text-[10px] lg:text-sm">Thomas Bass, Owner</p>
            </div>

            {/* Second testimonial */}
            <div className="mb-6 md:mb-1 lg:mb-6">
              <h3 className="text-[#23F972] mb-1 md:mb-0.5 lg:mb-1 text-sm md:text-[10px] lg:text-base font-bold">Tryforos and Pernice Florist, Bronxville, NY:</h3>
              <p className="text-white mb-2 md:mb-0.5 lg:mb-2 text-xs md:text-[10px] lg:text-sm leading-relaxed md:leading-tight lg:leading-relaxed max-w-[90%] md:max-w-[95%]">
                &ldquo;The Priority Payments Cash Discount Program has delivered all that
                was promised. There has been virtually no pushback on the fees and
                the savings are real.&rdquo;
              </p>
              <p className="text-white text-xs md:text-[10px] lg:text-sm">Gary Tryforos, Owner</p>
            </div>

            {/* Hide third testimonial on medium screens */}
            <div className="md:hidden lg:block">
              <h3 className="text-[#23F972] mb-1 text-sm md:text-base font-bold">Park Place Meats, Inc., Bronxville, NY:</h3>
              <p className="text-white mb-2 text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-[80%]">
                &ldquo;I am extremely satisfied with our conversion to the Cash Discount
                Program. The transition was simple and Priority&apos;s customer service
                is exceptional. My clients understand the need for businesses to
                reduce costs in this unprecedented time, and my credit card fees
                have been reduced by almost 90%.&rdquo;
              </p>
              <p className="text-white text-xs md:text-sm">Paul Chietro, Owner</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] mt-4 md:mt-0 flex flex-col items-center md:items-end relative overflow-visible">
          {/* Call To Action */}
          <div className="text-center md:text-right mb-4 z-10 relative w-full mt-4 md:mt-4 lg:mt-12">
            <p className="text-[#23F972] text-sm md:text-[10px] lg:text-lg mb-2 md:mb-0.5 lg:mb-2 font-arial">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-full py-2 md:py-0.5 lg:py-2 px-6 md:px-2 lg:px-6 text-xs md:text-[10px] lg:text-base"
            >
              Call 1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>

      {/* Flag specifically for Nest Hub Max - embedded directly with inline styles */}
      <div className="nesth-flag">
        <Image
          src="/flag.svg"
          alt="Rebellion Flag" 
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Flag for desktop */}
      <div className="hidden lg:block absolute bottom-0 right-0 pointer-events-none z-0">
        <div className="relative lg:w-[700px] lg:h-[800px] xl:w-[900px] xl:h-[1000px]">
          <Image
            src="/flag.svg"
            alt="Rebellion Flag"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        @media screen and (width: 1280px) {
          h1, h2, h3 {
            font-size: 12px !important;
          }
          
          p, a {
            font-size: 10px !important;
          }
          
          .mb-8 {
            margin-bottom: 4px !important;
          }
          
          .mt-8 {
            margin-top: 4px !important;
          }
          
          .nesth-flag {
            display: block;
            position: absolute;
            top: 180px;
            right: -20px;
            width: 200px;
            height: 200px;
            z-index: 0;
            pointer-events: none;
          }
        }
        
        @media screen and (min-width: 1281px) {
          .nesth-flag {
            display: none;
          }
        }
        
        @media screen and (max-width: 767px) {
          .nesth-flag {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
