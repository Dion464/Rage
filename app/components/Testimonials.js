import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div id="testimonials" className="min-h-[100vh] bg-[#0A0A0A] flex flex-col relative overflow-hidden">
      <nav className="flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
        <h2 className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer whitespace-nowrap">JOIN US</h2>
      </nav>

      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 mt-2 sm:mt-4 md:mt-6 flex-1 pb-8 sm:pb-12 md:pb-16 z-10">
        <div className="w-full md:w-[55%] mb-6 sm:mb-8 md:mb-0 pr-0 md:pr-4">
          <div className="mb-4 sm:mb-6 md:mb-6 lg:mb-10 text-left nest-hub-title">
            <div className="text-[#23F972] text-[30px] sm:text-[38px] md:text-[45px] lg:text-[80px] xl:text-[100px] leading-[0.9] font-extrabold tracking-tighter whitespace-nowrap md:leading-tight">
              REAL MERCHANTS.
            </div>
            <div className="flex leading-[0.9]">
              <div className="text-[#23F972] text-[30px] sm:text-[38px] md:text-[45px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter md:leading-tight">REAL</div>
              <div className="text-white text-[30px] sm:text-[38px] md:text-[45px] lg:text-[80px] xl:text-[100px] font-extrabold tracking-tighter ml-2 sm:ml-4 md:ml-2 md:leading-tight lg:ml-4">ACTION.</div>
            </div>
          </div>

          <div className="border-l border-gray-700 pl-3 sm:pl-4 md:pl-8 mt-4 sm:mt-6 md:mt-3 md:max-h-[200px] md:overflow-y-auto lg:max-h-none lg:overflow-visible lg:mt-8 space-y-4 sm:space-y-5 md:space-y-1 lg:space-y-6 nest-hub-testimonials">
            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-0.5 lg:mb-1 text-xs sm:text-sm md:text-xs lg:text-base font-bold">Langes Deli:
              :</h3>
              <p className="text-white mb-1 sm:mb-2 md:mb-0.5 lg:mb-2 text-xs md:text-xs lg:text-sm leading-relaxed md:leading-tight lg:leading-relaxed max-w-[85%] md:max-w-[80%]">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Cash Discount Program.
                I anticipated resistance from my customers. There truly has been none.
                 
                 The monthly savings are as advertised and it goes right to the bottom line..&rdquo;
              </p>
              <p className="text-white text-xs md:text-xs lg:text-sm">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#23F972] mb-1 md:mb-0.5 lg:mb-1 text-xs sm:text-sm md:text-xs lg:text-base font-bold">Tryforos and Pernice Florist:
              </h3>
              <p className="text-white mb-1 sm:mb-2 md:mb-0.5 lg:mb-2 text-xs md:text-xs lg:text-sm leading-relaxed md:leading-tight lg:leading-relaxed max-w-[85%] md:max-w-[80%]">
              "The Cash Discount Program has delivered all that was promised.
               There has been virtually no pushback on the fees and the savings are real."
              </p>
              <p className="text-white text-xs md:text-xs lg:text-sm">Gary Tryforos, Owner</p>
            </div>

            <div className="md:hidden lg:block">
              <h3 className="text-[#23F972] mb-1 text-xs sm:text-sm md:text-base font-bold">Park Place Meats, Inc.:
              </h3>
              <p className="text-white mb-1 sm:mb-2 text-xs md:text-sm leading-relaxed max-w-[85%] md:max-w-[70%]">
              "I am extremely satisfied with our conversion to the Cash Discount Program.
               The transition was simple and the customer service is exceptional. 
               My clients understand the need for businesses to reduce costs in this unprecedented time, 
               and my credit card fees have been reduced by almost 90%."

              </p>
              <p className="text-white text-xs md:text-sm">Paul Chietro, Owner</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[45%] mt-4 sm:mt-6 md:mt-0 flex flex-col items-center md:items-end relative overflow-visible">
          <div className="text-center md:text-right mb-4 z-10 relative w-full mt-0 sm:mt-2 md:mt-2 lg:mt-12 nest-hub-cta">
            <p className="text-[#23F972] text-sm sm:text-base md:text-xs lg:text-lg mb-3 md:mb-0.5 lg:mb-2 font-arial">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-full py-2 sm:py-2 md:py-0.5 lg:py-2 px-4 sm:px-6 md:px-2 lg:px-6 text-xs sm:text-sm md:text-xs lg:text-base mt-2"
            >
              Call 1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>

      <div className="standard-flag hidden sm:block absolute bottom-0 right-0 pointer-events-none z-0">
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
      
      <div className="nest-hub-flag">
        <Image
          src="/flag.svg"
          alt="Rebellion Flag"
          width={500}
          height={500}
          className="flag-image"
          priority
        />
      </div>

      <style jsx>{`
        @media not all and (width: 1280px) {
          .nest-hub-flag {
            display: none;
          }
        }
        
        @media screen and (width: 1280px) {
          .standard-flag {
            display: block !important;
          }
           
          #testimonials {
            min-height: 85vh !important;
            padding-bottom: 0 !important;
            border-bottom: none !important;
            margin-bottom: 0 !important;
          }
          
          .nest-hub-title div {
            font-size: 35px !important;
            margin-bottom: 5px !important;
          }
          
          .nest-hub-testimonials {
            margin-top: 10px !important;
            space-y: 3px !important;
          }
          
          .nest-hub-cta {
            margin-top: -20px !important;
          }
          
          .nest-hub-flag {
            display: none;
          }
          
          .standard-flag {
            bottom: 30px !important;
            right: -50px !important;
          }
          
          .standard-flag div {
            width: 600px !important;
            height: 600px !important;
          }
        }
        
        @media screen and (max-width: 640px) {
          #testimonials {
            min-height: calc(100vh - 20px);
            padding-bottom: 40px;
          }
          
          #testimonials p {
            word-spacing: 2px;
            line-height: 1.7;
          }
        }
      `}</style>
    </div>
  );
}
