'use client';
import Image from 'next/image';

export default function Stop() {
  return (
    <div className="min-h-screen bg-[#0A3B2E] flex flex-col">
      <nav className="flex justify-between px-4 sm:px-16 py-6">
        <div className="text-[#1EEB7A] text-xl sm:text-2xl">THE REBELLION</div>
        <div className="hidden sm:block text-white text-2xl">TESTIMONIALS</div>
        <div className="text-[#1EEB7A] text-xl sm:text-2xl">JOIN US</div>
      </nav>

      <div className="flex-1 flex flex-col sm:flex-row px-4 sm:px-16 relative">
        <div className="w-full sm:w-[70%] pt-8 sm:pt-16">
          <h1 className="text-[50px] sm:text-[90px] leading-[0.9] font-bold text-center sm:text-left">
            <span className="text-[#1EEB7A]">STOP SWIPING AWAY<br />
            YOUR PROFITS.<br />
            SWIPE FEES<br />
            HAVE INCREASED<br />
            </span>
            <span className="text-white">700</span>
            <span className="text-[#1EEB7A]">% SINCE 2001.</span>
          </h1>

          <div className="mt-12 sm:mt-24 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white text-lg sm:text-xl text-center sm:text-left">
              Call the <span className="text-[#1EEB7A]">Merchant Rebellion</span> and talk<br />
              to a real person with real solutions.
            </p>
            <Image 
              src="/smallicon.svg"
              alt="Card Icon"
              width={150}
              height={150}
              className="w-24 sm:w-[150px]"
            />
          </div>
        </div>

        <div className="w-full sm:w-auto sm:absolute sm:right-16 sm:top-1/3 sm:-translate-y-1/2 text-center sm:text-right mt-8 sm:mt-0">
          <p className="text-[#1EEB7A] text-lg sm:text-xl mb-4 sm:mb-6">
            Call now for U.S.-based<br />
            single-ring concierge service
          </p>
          <a 
            href="tel:18009411544"
            className="inline-block px-8 sm:px-12 py-3 sm:py-4 border-2 border-[#1EEB7A] rounded-full text-[#1EEB7A] hover:bg-[#1EEB7A] hover:text-[#0A3B2E] transition-colors text-lg sm:text-xl"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      <div className="px-4 sm:px-16 py-4">
        <div className="flex justify-center sm:justify-end gap-4 sm:gap-6 mb-4">
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
}