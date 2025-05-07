import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-screen bg-[#1A1A1A] flex flex-col relative pt-16 md:pt-0">
      <div className="hidden md:flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
        <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">THE REBELLION</Link>
        <Link href="#testimonials" className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
        <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>

      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-16 mt-2 md:mt-6 flex-1 pb-4 md:pb-16 z-10">
        {/* Left section */}
        <div className="w-full md:w-[55%] mb-4 md:mb-0 pr-0 md:pr-4 order-1 md:order-none">
          <div className="mb-3 md:mb-6 lg:mb-10 text-left nest-hub-title">
            <div className="tracking-tighter text-[#23F972] font-chamelton-blk text-3xl sm:text-[22px] md:text-[60px] lg:text-[80px] xl:text-[90px] leading-tight tracking-tight whitespace-nowrap md:leading-tight">
              REAL MERCHANTS.<br/>REAL<span className="text-white"> ACTION.</span>
            </div>
          </div>

          <div className="border-l border-gray-700 pl-3 sm:pl-4 md:pl-6 lg:pl-8 mt-3 md:mt-3 lg:mt-8 space-y-3 md:space-y-6 lg:space-y-6 nest-hub-testimonials">
            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-sm md:text-base lg:text-lg xl:text-lg font-bold">Langes Deli:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Cash Discount Program.
                I anticipated resistance from my customers. There truly has been none.
                 
                 The monthly savings are as advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="mt-2 md:mt-6 text-white text-sm md:text-sm lg:text-sm xl:text-base font-bold">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-sm md:text-base lg:text-lg xl:text-lg font-bold">Tryforos and Pernice Florist:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed">
              "The Cash Discount Program has delivered all that was promised.
               There has been virtually no pushback on the fees and the savings are real."
              </p>
              <p className="mt-2 md:mt-6 text-white text-sm md:text-sm lg:text-sm xl:text-base font-bold">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-2 lg:mb-2 text-sm md:text-base lg:text-lg xl:text-lg font-bold">Park Place Meats, Inc.:</h3>
              <p className="text-white w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-1 sm:mb-2 md:mb-2 lg:mb-3 text-sm md:text-sm lg:text-sm xl:text-base leading-relaxed">
              "I am extremely satisfied with our conversion to the Cash Discount Program.
               The transition was simple and the customer service is exceptional. 
               My clients understand the need for businesses to reduce costs in this unprecedented time, 
               and my credit card fees have been reduced by almost 90%."
              </p>
              <p className="mt-2 md:mt-6 text-white text-sm md:text-sm lg:text-sm xl:text-base font-bold">Paul Chietro, Owner</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="w-full md:w-full lg:w-[45%] mt-2 md:mt-0 flex flex-col items-center justify-center md:justify-end lg:justify-start relative order-2 md:order-none lg:pl-8 lg:ml-auto">
          <div className="text-center flex flex-col items-center gap-2 w-full md:items-center lg:items-end lg:text-center">
            <p className="text-[#23F972] text-base sm:text-[1.4rem] md:text-[1rem] lg:text-[1rem] xl:text-[1.2rem] leading-relaxed font-arial text-center lg:text-centermb-2 lg:text-[1.5rem]">
              Call now for U.S.-based <br />
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-[100px] px-4 sm:px-8 md:px-9 lg:px-12 py-2 md:py-2.5 lg:py-4 text-[0.9rem] md:text-[1.1rem] lg:text-[1rem] font-arial hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors whitespace-nowrap w-[200px] sm:w-auto"
            >
              Call +1(800) 941-1544
            </a>
          </div>
        </div>
      </div>

      {/* Flag image on desktop */}
      <div className="absolute right-0 bottom-0 overflow-visible pointer-events-none hidden md:block z-[5]">
        <Image
          src="/flag.svg"
          alt="Rebellion Flag"
          width={1000}
          height={1000}
          className="w-[500px] md:w-[550px] lg:w-[700px] xl:w-[900px] 2xl:w-[1000px] h-auto object-contain"
          style={{
            marginBottom: "-10px",
            marginRight: "-80px",
          }}
          priority
        />
      </div>
    </div>
  );
}
