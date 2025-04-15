import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="min-h-[100vh] flex flex-col bg-[#004D40]">
      {/* Navigation */}
      <nav className={`flex justify-between px-4 sm:px-16 py-4 font-bold overflow-x-auto gap-4 sm:gap-8`}>
        <h2 className="text-white text-sm sm:text-lg tracking-wider whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-white text-sm sm:text-lg tracking-wider whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-sm sm:text-lg tracking-wider whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row px-4 sm:px-16 mt-8 md:mt-16">
        {/* Left Content */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          {/* Title - Reduced top margin */}
          <div className="flex flex-col font-chameleon mt-4 md:mt-19 font-bold">
            <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 justify-center md:justify-start">
              <span className="text-white text-6xl md:text-[100px] leading-none">RAGE</span>
              <span className="text-[#1EEB7A] text-6xl md:text-[100px] leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#1EEB7A] text-6xl md:text-[100px] leading-none">THE FEES!</span>
            </div>
          </div>

          {/* Subtitle - Increased spacing from title */}
          <div className="mt-8 md:mt-16 space-y-4 md:ml-[120px] px-4 md:px-0">
            <p className="text-white text-xl md:text-2xl leading-relaxed font-bold" style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span><br className="hidden md:block"/>
              dollars in swipe fees in 2023. Many<br className="hidden md:block"/>
              merchants rank them as their second<br className="hidden md:block"/>
              highest operating cost.
            </p>
            <p className="text-white text-xl md:text-2xl">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="w-full md:w-[30%] flex justify-center items-center md:items-left mt-8 md:mt-0">
          <div className="relative md:-ml-40">
            <Image
              src="/hero1.svg"
              alt="Merchant Rebellion Logo"
              width={600}
              height={700}
              className="w-[80%] md:w-full mx-auto"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[25%] mt-8 md:mt-48 flex flex-col items-center md:items-end">
          <p className="text-[#1EEB7A] text-xl md:text-2xl text-center md:text-right mb-4 px-4 md:px-0">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a
            href="tel:18009411544"
            className="inline-block border-2 border-[#1EEB7A] text-[#1EEB7A] rounded-full px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl font-chameleon hover:bg-[#1EEB7A] hover:text-black transition-colors"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 px-4 sm:px-16 pb-4">
        <div className="flex justify-center md:justify-end gap-4 sm:gap-6 mb-4">
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
        <p className="text-center md:text-right text-[#1EEB7A] text-xs sm:text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
