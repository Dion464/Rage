import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="h-screen bg-[#0A0A0A] flex flex-col relative">
      {/* Navigation */}
      <nav className="flex justify-between px-4 sm:px-16 py-2 overflow-x-auto gap-4 sm:gap-8 font-chamelton-bd">
        <h2 className="text-white mt-5 text-sm sm:text-lg font-bold whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#23F972] mt-5 text-sm sm:text-lg whitespace-nowrap font-bold">TESTIMONIALS</h2>
        <h2 className="text-white mt-5 text-sm sm:text-lg font-bold whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content - Removed md:items-stretch for this approach */}
      <div className="flex flex-col md:flex-row px-4 sm:px-16 mt-8 flex-1 pb-24 md:pb-32 lg:pb-40">
        {/* Left Content */}
        <div className="w-full md:w-[55%] mb-16 md:mb-0">
          {/* Title */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] leading-none font-chamelton-blk">
              <div className="text-[#23F972]">REAL MERCHANTS.</div>
              <div>
                <span className="text-[#23F972]">REAL </span>
                <span className="text-white">ACTION.</span>
              </div>
            </h1>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 max-w-full md:max-w-[70%] relative px-4 md:px-0 font-arial">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gray-700" />
            
            <div>
              <h3 className="text-[#23F972] mb-2 uppercase text-sm sm:text-base font-arial-bold">Langes of Bronxville, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-xs sm:text-sm tracking-wide">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Priority
                Payments Cash Discount Program. I anticipated resistance from my
                customers. There truly has been none. The monthly savings are as
                advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-2 uppercase text-sm sm:text-base font-arial-bold">Tryforos and Pernice Florist, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-xs sm:text-sm tracking-wide">
                &ldquo;The Priority Payments Cash Discount Program has delivered all that
                was promised. There has been virtually no pushback on the fees and
                the savings are real.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-2 uppercase text-sm sm:text-base font-arial-bold">Park Place Meats, Inc., Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-xs sm:text-sm tracking-wide">
                &ldquo;I am extremely satisfied with our conversion to the Cash Discount
                Program. The transition was simple and Priority&apos;s customer service
                is exceptional. My clients understand the need for businesses to
                reduce costs in this unprecedented time, and my credit card fees
                have been reduced by almost 90%.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm">Paul Chietro, owner</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] mt-8 md:mt-0 flex flex-col items-center md:items-end relative overflow-visible">
          {/* Call To Action - Added mt-12 */}
          <div className="text-center md:text-right mb-4 z-10 relative w-full mt-12"> {/* Added mt-12 */}
            <p className="text-[#23F972] text-base sm:text-lg mb-2 font-arial">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-full py-2 px-6 sm:px-8 text-sm sm:text-base font-arial-bold hover:bg-[#23F972] hover:text-black transition-colors"
            >
              Call 1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>

      {/* Flag Image Container - Increased size significantly */}
     
           <div className="relative w-full md:absolute md:right-[-700px] md:bottom-[-20px] md:w-[140%] h-[400px] md:h-[800px]">
             <Image
               src="/flag.svg"
               alt="Rebellion Flag"
               fill
               className="object-contain object-bottom"
               priority
             />
           </div>
         </div>
   
  );
}
