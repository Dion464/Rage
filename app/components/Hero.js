import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A3B2E]">
      <nav className="flex justify-between px-4 sm:px-16 py-4">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl">THE REBELLION</h2>
        <h2 className="hidden sm:block text-white text-lg sm:text-xl md:text-2xl">TESTIMONIALS</h2>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl">JOIN US</h2>
      </nav>

      <div className="flex flex-col lg:flex-row px-4 sm:px-16 mt-4 sm:mt-8">
        <div className="w-full lg:w-[45%] mb-8 lg:mb-0">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
              <span className="text-white text-[40px] sm:text-[60px] lg:text-[100px] leading-none">RAGE</span>
              <span className="text-[#1EEB7A] text-[40px] sm:text-[60px] lg:text-[100px] leading-none">AGAINST</span>
            </div>
            <span className="text-[#1EEB7A] text-[40px] sm:text-[60px] lg:text-[100px] leading-none">THE FEES!</span>
          </div>

          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span>
              {' '}dollars in swipe fees in 2023. Many
              merchants rank them as their second
              highest operating cost.
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl" style={{fontFamily: 'Charter-Regular'}}>It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        <div className="w-full lg:w-[30%] flex justify-center items-center lg:items-left order-first lg:order-none mb-8 lg:mb-0">
          <div className="relative lg:-ml-40">
            <Image
              src="/hero1.svg"
              alt="Merchant Rebellion Logo"
              width={600}
              height={700}
              className="w-[80%] lg:w-full mx-auto"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-[25%] text-center lg:text-left">
          <p className="text-[#1EEB7A] text-lg sm:text-xl md:text-2xl mb-4">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a href="tel:18009411544" className="inline-block border border-[#1EEB7A] text-[#1EEB7A] rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      <div className="mt-auto px-4 sm:px-16 pb-4">
        <div className="flex justify-center lg:justify-end gap-4 sm:gap-6 mb-4">
          <Image src="/instagram.svg" alt="Instagram" width={36} height={36} className="w-8 sm:w-12" />
          <Image src="/facebookicon.svg" alt="Facebook" width={36} height={36} className="w-8 sm:w-12" />
          <Image src="/xicon.svg" alt="X" width={36} height={36} className="w-8 sm:w-12" />
          <Image src="/linkedinicon.svg" alt="LinkedIn" width={36} height={36} className="w-8 sm:w-12" />
        </div>
        <p className="text-center lg:text-right text-[#1EEB7A] text-xs sm:text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
