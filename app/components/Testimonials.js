import React from 'react';
import Image from "next/image";
import Link from 'next/link';
export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-[100vh] bg-[#1A1A1A] flex flex-col relative overflow-hidden">
      <div className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
      <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">THE REBELLION</Link>
      <Link href="#testimonials" className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
      <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 mt-2 sm:mt-4 md:mt-6 flex-1 pb-8 sm:pb-12 md:pb-16 z-10">
        <div className="w-full md:w-[55%] mb-6 sm:mb-8 md:mb-0 pr-0 md:pr-4">
          <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-10 text-left nest-hub-title">
            <div className="text-[#23F972] font-chamelton-blk text-4xl md:text-[60px] lg:text-[80px] xl:text-[90px] leading-tight tracking-tight whitespace-nowrap md:leading-tight">
              REAL MERCHANTS.<br />REAL <span className="text-white">ACTION.</span>
            </div>
          </div>

          <div className="border-l border-gray-700 pl-3 sm:pl-4 md:pl-8 mt-4 sm:mt-6 md:mt-3 lg:mt-8 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 nest-hub-testimonials">
            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-bold">Langes Deli:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Cash Discount Program.
                I anticipated resistance from my customers. There truly has been none.
                 
                 The monthly savings are as advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="text-white text-xs md:text-sm lg:text-sm xl:text-base">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-bold">Tryforos and Pernice Florist:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed">
              "The Cash Discount Program has delivered all that was promised.
               There has been virtually no pushback on the fees and the savings are real."
              </p>
              <p className="text-white text-xs md:text-sm lg:text-sm xl:text-base">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-bold">Park Place Meats, Inc.:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed">
              "I am extremely satisfied with our conversion to the Cash Discount Program.
               The transition was simple and the customer service is exceptional. 
               My clients understand the need for businesses to reduce costs in this unprecedented time, 
               and my credit card fees have been reduced by almost 90%."
              </p>
              <p className="text-white text-xs md:text-sm lg:text-sm xl:text-base">Paul Chietro, Owner</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] mt-4 sm:mt-6 md:mt-0 flex flex-col items-end justify-start relative">
          <div className="text-center flex flex-col items-center gap-3">
            <p className="text-[#23F972] text-[1.5rem] leading-relaxed font-arial text-center">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-[100px] px-10 py-3 text-[1.2rem] font-arial hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors whitespace-nowrap"
            >
              Call +1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 w-full h-[75%] overflow-hidden pointer-events-none">
        <Image
          src="/flag.svg"
          alt="Rebellion Flag"
          fill
          className="object-contain object-right-bottom"
          style={{ 
            transform: 'scale(1.1)', 
            transformOrigin: 'bottom right',
            opacity: 0.9
          }}
          priority
        />
      </div>

      <style ></style>
    </div>
  );
}
