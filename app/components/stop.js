'use client';
import Image from 'next/image';

export default function Stop() {
  return (
    <div className="min-h-[80vh] bg-[#004D40] flex flex-col">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 md:py-5 gap-4 md:gap-0 font-bold">
        <div className="text-[#1EEB7A] text-xl md:text-2xl font-bold">THE REBELLION</div>
        <div className="text-white text-xl md:text-2xl">TESTIMONIALS</div>
        <div className="text-[#1EEB7A] text-xl md:text-2xl font-bold">JOIN US</div>
      </nav>

      <div className="flex-1 flex flex-col md:flex-row px-4 md:px-16 relative">
        {/* Left side content */}
        <div className="pt-4 md:pt-8 w-full md:max-w-[85%] text-center md:text-left">
          <h1 className="text-[#1EEB7A] text-4xl md:text-[90px] leading-tight font-black tracking-tight" style={{ fontFamily: 'Chameleon-Bold, sans-serif' }}>
            STOP SWIPING AWAY<br />
            YOUR PROFITS.<br />
            SWIPE FEES<br />
            HAVE INCREASED<br />
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-white">700</span>
              <span className="text-[#1EEB7A]">% SINCE 2001.</span>
            </div>
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <p className="text-white text-lg md:text-xl text-center md:text-left" style={{ fontFamily: 'Charter-Regular, serif' }}>
              Call the <span className="text-[#1EEB7A]">Merchant Rebellion</span> and talk<br className="hidden md:block" />
              to a real person with real solutions.
            </p>
            <Image 
              src="/smallicon.svg"
              alt="Card Icon"
              width={100}
              height={100}
              className="md:w-[120px] md:h-[120px]"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="relative md:absolute md:right-16 md:top-1/4 text-center md:text-right mt-8 md:mt-0">
          <p className="text-[#1EEB7A] text-lg md:text-xl mb-4">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:18009411544"
            className="inline-block px-8 md:px-12 py-2 md:py-3 border border-[#1EEB7A] rounded-full text-[#1EEB7A] hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors text-lg md:text-xl"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-end gap-6 px-4 md:px-16 py-4">
        <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
        <Image src="/facebookicon.svg" alt="Facebook" width={40} height={40} />
        <Image src="/xicon.svg" alt="X" width={40} height={40} />
        <Image src="/linkedinicon.svg" alt="LinkedIn" width={40} height={40} />
      </div>

      {/* Footer Text */}
      <div className="text-right px-4 md:px-16 pb-2">
        <p className="text-[#1EEB7A] text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
