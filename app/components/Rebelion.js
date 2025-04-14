import React from 'react';
import Image from "next/image";

const Rebellion = () => {
  return (
    <div className="min-h-screen bg-[#004D40] p-4 sm:p-8 text-white relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-8 sm:mb-16">
        <div className="text-[#00FF7F] text-xl sm:text-2xl font-bold">THE REBELLION</div>
        <div className="hidden sm:block text-white text-2xl">TESTIMONIALS</div>
        <div className="text-white text-xl sm:text-2xl font-bold">JOIN US</div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="w-full sm:w-[45%] text-center sm:text-left">
          <div className="flex flex-col font-chameleon mt-8 sm:mt-20">
            <h1 className="text-[60px] sm:text-[100px] font-bold leading-none">
              <span className="text-white">STOP </span>
              <span className="text-[#00FF7F]">SWIPING</span><br />
              <span className="text-[#00FF7F]">AWAY YOUR</span><br />
              <span className="text-[#00FF7F]">PROFITS.</span>
            </h1>
          </div>
          
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <p className="text-xl sm:text-2xl leading-relaxed">
              Swipe fees have increased <span className="text-[#00FF7F]">700%</span><br />
              since 2001. Call the Merchant<br />
              Rebellion and talk to a real person<br />
              with real solutions.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full sm:w-[45%] flex justify-center mt-8 sm:mt-0">
          <Image 
            src="/Rebelion.svg" 
            alt="Rebellion Card" 
            width={700}
            height={700}
            className="w-full max-w-[500px] sm:max-w-[700px]"
            priority
          />
        </div>
      </div>

      <div className="mt-8 sm:mt-auto px-4 sm:px-16 pb-4">
        <div className="flex justify-center sm:justify-end gap-6 mb-4">
          <Image src="/instagram.svg" alt="Instagram" width={46} height={46} />
          <Image src="/facebookicon.svg" alt="Facebook" width={46} height={46} />
          <Image src="/xicon.svg" alt="X" width={46} height={46} />
          <Image src="/linkedinicon.svg" alt="LinkedIn" width={46} height={46} />
        </div>
        <p className="text-center sm:text-right text-[#1EEB7A] text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
};

export default Rebellion;
