import Image from "next/image";
import Navigation from "./Navigation";


export default function Hero() {
  return (
    <div id="hero" className="min-h-screen flex flex-col bg-[#0A3B2E] relative">
      <Navigation />
      

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 md:gap-y-0 px-4 sm:px-8 md:px-12 lg:px-16 md:items-center pb-16 md:pb-0 pt-16 md:pt-0">
        {/* Left Content */}
        <div className="md:col-span-5 text-center md:text-left pt-16 md:pt-0">
          {/* Title */}
          <div className="font-chamelton-blk">
            <div className="flex flex-row items-baseline gap-4 justify-center md:justify-start">
              <span className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">RAGE</span>
              <span className="text-[#23F972] text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#23F972] text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl leading-none">THE FEES!</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-12 md:mt-10 lg:mt-12 font-charter space-y-4">
            <p className="text-white text-base lg:text-xl xl:text-2xl leading-relaxed">
              U.S. Merchants paid <span className="text-[#23F972] font-charter-bold">$224 billion</span><br className="hidden md:block"/>
              dollars in swipe fees in 2023. Many<br className="hidden md:block"/>
              merchants rank them as their second<br className="hidden md:block"/>
              highest operating cost.
            </p>
            <p className="text-white text-base lg:text-xl xl:text-2xl">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="md:col-span-4 flex justify-center items-center md:order-none py-0">
          <div className="relative">
            <Image
              src="/hero1.svg"
              alt="Merchant Rebellion Logo"
              width={500}
              height={600}
              className="w-[240px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[450px] 2xl:w-[500px] h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center pt-0 pb-16 md:py-0">
          <p className="text-[#23F972] text-sm lg:text-lg xl:text-xl text-center md:text-right mb-4 font-charter">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a
            href="tel:18009411544"
            className="inline-block border-2 border-[#23F972] text-[#23F972] rounded-full px-4 py-2 text-sm lg:text-base xl:text-lg font-charter-bold hover:bg-[#23F972] hover:text-black transition-colors whitespace-nowrap"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
    
    </div>
  );
}
