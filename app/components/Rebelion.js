import React from 'react';
import Image from "next/image";

const Rebellion = () => {
  return (
    <div className="min-h-screen bg-[#004D40] p-8 text-white relative">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <div className="text-[#00FF7F] text-2xl font-bold">THE REBELLION</div>
        <div className="text-white text-2xl">TESTIMONIALS</div>
        <div className="text-white text-2xl font-bold">JOIN US</div>
      </nav>

      {/* Main Content */}
      <div className="flex justify-between items-center">
        {/* Left Content */}
        <div className="w-[45%]">
          <div className="flex flex-col font-chameleon ml-{-5} mt-20">
            <h1 className="text-[100px] font-bold leading-none" style={{fontFamily: 'Chamelton10-bd'}}>
              <span className="text-white">STOP </span>
              <span className="text-[#00FF7F]">SWIPING</span><br />
              <span className="text-[#00FF7F]">AWAY YOUR</span><br />
              <span className="text-[#00FF7F]">PROFITS.</span>
            </h1>
          </div>
          
          <div className="ml-55 mt-12 space-y-6">
            <p className="text-2xl leading-relaxed" style={{fontFamily: 'Charter-Regular'}}>
              Swipe fees have increased <span className="text-[#00FF7F]">700%</span><br />
              since 2001. Call the Merchant<br />
              Rebellion and talk to a real person<br />
              with real solutions.
            </p>
            
            <p className="text-2xl" style={{fontFamily: 'Charter-Regular'}}>
              Stop swiping away your profits.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center items-center translate-x-[-60px]">
          <Image 
            src="/Rebelion.svg" 
            alt="Rebellion Card" 
            width={700}
            height={700}
            className="w-[700px]"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-right">
          <p className="text-[#00FF7F] text-xl mb-4">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:1-800-941-1544" 
            className="inline-block border border-[#00FF7F] text-[#00FF7F] rounded-full px-8 py-3 hover:bg-[#00FF7F] hover:text-[#004D40] transition-colors"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      <div className="mt-auto px-16 pb-4">
        <div className="flex justify-end gap-6 mb-4">
          <div >
            <Image src="/instagramicon.svg" alt="Instagram" width={35} height={35} />
          </div>
          <div >
            <Image src="/facbook.svg" alt="Facebook" width={35} height={35} />
          </div>
          <div >
            <Image src="/socialcon.png" alt="X" width={35} height={35} />
          </div>
          <div >
            <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
          </div>
        </div>
        <p className="text-right text-[#1EEB7A] text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
};

export default Rebellion;
