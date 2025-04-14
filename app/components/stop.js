'use client';
import Image from 'next/image';

export default function Stop() {
  return (
    <div className="h-screen bg-[#0A3B2E] flex flex-col">
      <nav className="flex justify-between items-center px-16 py-6">
        <div className="text-[#1EEB7A] text-2xl">THE REBELLION</div>
        <div className="text-white text-2xl">TESTIMONIALS</div>
        <div className="text-[#1EEB7A] text-2xl">JOIN US</div>
      </nav>

      <div className="flex-1 flex px-16 relative">
        {/* Left side content */}
        <div className="pt-16 max-w-[70%]">
          <h1 className="text-[#1EEB7A] text-[90px] leading-[0.9] font-bold">
            STOP SWIPING AWAY<br />
            YOUR PROFITS.<br />
            SWIPE FEES<br />
            HAVE INCREASED<br />
            <span className="text-white">700</span>
            <span className="text-[#1EEB7A]">% SINCE 2001.</span>
          </h1>

          <div className="mt-24 flex items-center gap-4">
            <p className="text-white text-xl">
              Call the <span className="text-[#1EEB7A]">Merchant Rebellion</span> and talk<br />
              to a real person with real solutions.
            </p>
            <Image 
              src="/smallicon.svg"
              alt="Card Icon"
              width={150}
              height={150}
              className="text-[#1EEB7A]"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="absolute right-16 top-1/3 -translate-y-1/2 text-right">
          <p className="text-[#1EEB7A] text-lg mb-6">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:18009411544"
            className="inline-block px-12 py-4 border-2 border-[#1EEB7A] rounded-full text-[#1EEB7A] hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors text-xl"
          >
            Call 1 (800) 941-1544
          </a>
        </div>

        {/* Bottom right content with custom social icons */}
        <div className="absolute bottom-4 right-16 text-right">
          <div className="flex gap-4 justify-end mb-2">
          <div>
            <Image src="/instagram.svg" alt="Instagram" width={46} height={46} />
          </div>
          <div>
            <Image src="/facebookicon.svg" alt="Facebook" width={46} height={46} />
          </div>
          <div>
            <Image src="/xicon.svg" alt="X" width={46} height={46} />
          </div>
          <div>
            <Image src="/linkedinicon.svg" alt="LinkedIn" width={46} height={46} />
          </div>
        </div>
         
          <div className="text-[#1EEB7A] text-sm mt-4">
            Supported by Transaction Acceptance Corp. Copyright 2025
          </div>
        </div>
      </div>
    </div>
  );
}
