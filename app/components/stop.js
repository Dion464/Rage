'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function Stop() {
  return (
    <div id="stop" className="min-h-[100vh] bg-[#0A3B2E] flex flex-col">
    
      <div className="hidden md:flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 md:py-8">
        <Link href="#stop" className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">THE REBELLION</Link>
        <Link href="#our-mission" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">OUR MISSION</Link>
        <Link href="#testimonials" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
        <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">JOIN US</Link>
      </div>
   
      <div className="mt-8 sm:mt-12 md:mt-0 flex-1 flex flex-col md:flex-row px-4 md:px-16 relative">
        <div className="pt-6 md:pt-24 w-full md:max-w-[85%] text-center md:text-left">
          <h1 className="text-[#23F972] text-3xl sm:text-[40px] md:text-[45px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px] leading-tight font-chamelton-blk tracking-tight">
            SWIPE FEES<br />
            HAVE INCREASED<br />
            <div className="flex items-baseline justify-center md:justify-start">
              <span className="text-white">700%</span>
              <span className="text-[#23F972] ml-3">SINCE 2001.</span>
            </div>
            <div className="mt-2 md:mt-4">
              STOP SWIPING AWAY<br />
              YOUR PROFITS.
            </div>
          </h1>

          <div className="mt-4 md:mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-white text-base md:text-xl text-center md:text-left font-charter ml-4">
              Call the <span className="text-[#23F972]">Merchant Rebellion</span> and talk<br className="hidden md:block" />
              <span className="inline md:hidden">&nbsp;</span>to a real person with real solutions.
            </p>
          </div>
        </div>

        <div className="relative md:absolute md:right-16 md:top-24 text-center mt-4 mb-6 md:mt-0 flex flex-col items-center">
          <div className="mb-4 md:mb-8 z-10">
            <Image
              src="/MR_Badge.svg"
              alt="Merchant Rebellion Badge"
              width={384}
              height={384}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-60 lg:w-76 lg:h-76 xl:w-80 xl:h-80 2xl:w-98 2xl:h-98"
            />
          </div>
          
          <div className="text-center flex flex-col items-center gap-3 md:gap-4">
            <p className="text-[#23F972] text-base sm:text-lg md:text-[1.2rem] leading-relaxed font-arial text-center">
              Call now for U.S.-based<br />
              single-ring concierge service
            </p>
            <a 
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-[100px] px-8 py-2 md:py-3 text-sm md:text-base font-arial hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors whitespace-nowrap"
            >
              Call +1(800) 941-1544
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 767px) {
          #stop p {
            word-spacing: 1px;
          }
          
          #stop {
            min-height: 100vh;
            height: auto;
            padding-bottom: 16px;
          }
        }
      `}</style>
    
    </div>
  );
}
