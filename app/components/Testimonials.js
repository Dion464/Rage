import React from 'react';
import Image from "next/image";
import Link from 'next/link';
export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-[100vh] bg-[#1A1A1A] flex flex-col relative overflow-hidden">
      <div className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
      <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</Link>
      <Link href="#testimonials" className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
      <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 mt-2 sm:mt-4 md:mt-6 flex-1 pb-8 sm:pb-12 md:pb-16 z-10">
        <div className="w-full md:w-[55%] mb-6 sm:mb-8 md:mb-0 pr-0 md:pr-4">
          <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-10 text-left nest-hub-title">
            <div className="text-[#23F972] text-[30px] sm:text-[30px] md:text-[35px] lg:text-[70px] xl:text-[80px] leading-[0.9] font-extrabold tracking-tighter whitespace-nowrap md:leading-tight">
              REAL MERCHANTS.
            </div>
            <div className="flex leading-[0.9]">
              <div className="text-[#23F972] text-[30px] sm:text-[30px] md:text-[35px] lg:text-[70px] xl:text-[80px] font-extrabold tracking-tighter md:leading-tight">REAL</div>
              <div className="text-white text-[30px] sm:text-[30px] md:text-[35px] lg:text-[70px] xl:text-[80px] font-extrabold tracking-tighter ml-2 sm:ml-4 md:ml-2 md:leading-tight lg:ml-4">ACTION.</div>
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

        <div className="w-full md:w-[45%] mt-4 sm:mt-6 md:mt-0 flex flex-col items-center md:items-end relative overflow-visible">
          <div className="text-center md:text-right mb-4 z-10 relative w-full mt-0 sm:mt-2 md:mt-2 lg:mt-12 nest-hub-cta">
            <p className="text-[#23F972] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 md:mb-4 lg:mb-5 font-arial">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-full py-2 sm:py-2.5 md:py-3 lg:py-4 px-4 sm:px-6 md:px-8 lg:px-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 hover:bg-[#23F972] hover:text-black transition-colors duration-300"
            >
              Call + 1 (800) 941-1544
            </a>
          </div>
           <Image
            src="/flag.svg"
            alt="Rebellion Flag"
            fill
            className="hidden lg:block absolute bottom-16 right-4 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 rounded-lg shadow-lg"
            style={{ transform: 'translateY(25%)' }}
            priority
          />
        </div>
      </div>


     
  

      <style ></style>
    </div>
  );
}
