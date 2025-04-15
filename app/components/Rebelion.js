import React from 'react';
import Image from "next/image";

const Rebellion = () => {
  return (
    <div className="min-h-screen bg-[#004D40] p-4 sm:p-8 text-white relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-8 sm:mb-16 font-bold overflow-x-auto">
        <div className="text-[#00FF7F] text-lg sm:text-2xl font-bold whitespace-nowrap">THE REBELLION</div>
        <div className="text-white text-lg sm:text-2xl whitespace-nowrap">TESTIMONIALS</div>
        <div className="text-white text-lg sm:text-2xl font-bold whitespace-nowrap">JOIN US</div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center font-bold">
        {/* Left Content */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <div className="flex flex-col font-chameleon mt-8 md:mt-20">
            <h1 className="text-[50px] sm:text-[80px] md:text-[100px] font-bold leading-none" style={{fontFamily: 'Chamelton10-bd'}}>
              <span className="text-white">STOP </span>
              <span className="text-[#00FF7F]">SWIPING</span><br />
              <span className="text-[#00FF7F]">AWAY YOUR</span><br />
              <span className="text-[#00FF7F]">PROFITS.</span>
            </h1>
          </div>
          
          <div className="mt-6 md:mt-8 space-y-4 md:pl-48 px-4 md:px-0">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              Swipe fees have increased <span className="text-[#00FF7F]">700%</span><br />
              since 2001. Call the Merchant<br />
              Rebellion and talk to a real person<br />
              with real solutions.
            </p>
            <p className="text-lg sm:text-xl">Stop swiping away your profits.</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center items-center my-8 md:my-0 md:translate-x-[-60px]">
          <Image 
            src="/Rebelion.svg" 
            alt="Rebellion Card" 
            width={700}
            height={700}
            className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px]"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-right w-full md:w-auto" style={{ fontFamily: 'Arial-Regular' }}>
          <p className="text-[#00FF7F] text-lg sm:text-xl mb-4">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:1-800-941-1544" 
            className="inline-block border border-[#00FF7F] text-[#00FF7F] rounded-full px-6 sm:px-8 py-2 sm:py-3 hover:bg-[#00FF7F] hover:text-[#004D40] transition-colors"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-auto px-4 sm:px-16 pb-4">
        <div className="flex justify-center md:justify-end gap-4 sm:gap-6 mb-4">
          <div>
            <Image src="/instagram.svg" alt="Instagram" width={36} height={36} className="w-[36px] sm:w-[46px]" />
          </div>
          <div>
            <Image src="/facebookicon.svg" alt="Facebook" width={36} height={36} className="w-[36px] sm:w-[46px]" />
          </div>
          <div>
            <Image src="/xicon.svg" alt="X" width={36} height={36} className="w-[36px] sm:w-[46px]" />
          </div>
          <div>
            <Image src="/linkedinicon.svg" alt="LinkedIn" width={36} height={36} className="w-[36px] sm:w-[46px]" />
          </div>
        </div>
        <p className="text-center md:text-right text-[#1EEB7A] text-xs sm:text-sm" style={{ fontFamily: 'Arial-Regular' }}>
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
};

export default Rebellion;
