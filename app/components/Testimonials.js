import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className=" min-h-[100vh] bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="flex justify-between px-4 sm:px-16 py-2 font-bold overflow-x-auto gap-4 sm:gap-8" style={{fontFamily: 'Chamelton10-bd'}}>
        <h2 className="text-white mt-5 text-base sm:text-xl font-bold whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#1EEB7A] mt-5 text-base sm:text-xl whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white mt-5 text-base sm:text-xl font-bold whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-4 sm:px-16 mt-8">
        {/* Left Content */}
        <div className="w-full md:w-[55%]">
          {/* Title */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] leading-none font-bold" style={{fontFamily: 'Chamelton10-bd'}}>
              <div className="text-[#1EEB7A]">REAL MERCHANTS.</div>
              <div>
                <span className="text-[#1EEB7A]">REAL </span>
                <span className="text-white">ACTION.</span>
              </div>
            </h1>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 max-w-full md:max-w-[70%] relative px-4 md:px-0" style={{ fontFamily: 'Arial-Regular' }}>
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gray-700" />
            
            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase text-sm sm:text-base" style={{fontFamily: 'Arial-Regular'}}>Langes of Bronxville, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-xs sm:text-sm tracking-wide">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Priority
                Payments Cash Discount Program. I anticipated resistance from my
                customers. There truly has been none. The monthly savings are as
                advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase text-sm sm:text-base" style={{fontFamily: 'Arial-Regular'}}>Tryforos and Pernice Florist, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-xs sm:text-sm tracking-wide">
                &ldquo;The Priority Payments Cash Discount Program has delivered all that
                was promised. There has been virtually no pushback on the fees and
                the savings are real.&rdquo;
              </p>
              <p className="text-white uppercase text-xs sm:text-sm">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase text-sm sm:text-base" style={{fontFamily: 'Arial-Regular'}}  >Park Place Meats, Inc., Bronxville, NY:</h3>
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
        <div className="w-full relative md:w-[45%] md:mt-0 flex flex-col items-center md:items-end" style={{ marginTop: "4.5rem" }}>
          <div className="text-center md:text-right mb-4">
            <p className="text-[#1EEB7A] text-base sm:text-lg mb-2">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#1EEB7A] text-[#1EEB7A] rounded-full py-2 px-6 sm:px-8 text-sm sm:text-base hover:bg-[#1EEB7A] hover:text-black transition-colors"
            >
              Call 1 (800) 941-1544
            </a>
          </div>

          {/* Flag Image */}
          <div className="absolute bottom-[5vh] right-0 w-full h-[90vh]">
            <Image
              src="/flag.png"
              alt="Rebellion Flag"
              fill
              className="object-contain object-bottom scale-125 md:scale-150"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer */}
     
    
    </div>
  );
}
