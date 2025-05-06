import React from 'react';
import Image from "next/image";
import Navigation from "./Navigation";


export default function Hero() {
  return (
    <div id="hero" className="min-h-[100vh] flex flex-col bg-[#0A3B2E] relative">
      <Navigation />
      
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 md:gap-y-0 px-4 sm:px-8 md:px-12 lg:px-16 md:items-center pb-16 md:pb-0 pt-8 md:pt-0">
        <div className="md:col-span-4 text-center md:text-left pt-8 md:pt-0">
          <div className="font-chamelton-blk">
            <div className="flex flex-row items-baseline gap-2 sm:gap-4 justify-center md:justify-start">
              <span className="text-white text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">RAGE</span>
              <span className="text-[#23F972] text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#23F972] text-3xl sm:text-4xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">THE FEES!</span>
            </div>
          </div>

          <div className="mt-8 md:mt-10 lg:mt-12 font-charter space-y-3 md:space-y-4">
            <p className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl leading-relaxed text-center md:text-left md:ml-3">
              U.S. Merchants paid <span className="text-[#23F972] font-charter-bold">$224 billion</span>{" "}
              dollars in swipe fees in 2023. Many{" "}
              merchants rank them as their second{" "}
              highest operating cost.
            </p>
            <p className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl text-center md:text-left md:ml-3">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        <div className="md:col-span-6 flex justify-center items-center md:order-none py-0">
          <div className="logo-container w-full h-full flex items-center justify-center relative">
            <Image
              src="/logo.svg"
              alt="Merchant Rebellion Logo"
              width={1200}
              height={1200}
              className="logo-image absolute"
              style={{ width: '90%', height: 'auto', maxHeight: '70vh', objectFit: 'contain', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col items-center justify-center pt-0 pb-12 md:py-0 md:-ml-12">
          <div className="text-center flex flex-col items-center gap-8">
            <p className="text-[#23F972] text-[1.2rem] leading-relaxed font-arial text-center max-w-[320px]">
              Call now for U.S.-based
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#23F972] text-[#23F972] rounded-[100px] px-10 py-3 text-[1rem] font-arial hover:bg-[#23F972] hover:text-[#0A3B2E] transition-colors whitespace-nowrap"
            >
              Call +1(800)941-1544
            </a>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .logo-container {
          min-height: 240px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        @media (min-width: 640px) {
          .logo-container {
            min-height: 300px;
          }
        }
        
        @media (min-width: 768px) {
          .logo-container {
            min-height: 450px;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-container {
            min-height: 550px;
          }
          .logo-image {
            transform: translate(-50%, -50%) scale(1.2) !important;
          }
        }
        
        @media (min-width: 1280px) {
          .logo-container {
            min-height: 650px;
          }
          .logo-image {
            transform: translate(-50%, -50%) scale(1.3) !important;
          }
        }
        
        @media (max-width: 767px) {
          #hero p {
            word-spacing: 2px;
            line-height: 1.6;
          }
        }
      `}</style>
    
    </div>
  );
}
