import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="h-screen flex flex-col bg-[#004D40]">
      {/* Navigation */}
      <nav className={`flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 font-bold overflow-x-auto gap-4 sm:gap-8`} style={{fontFamily: 'Chamelton10-Bd'}}>
        <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg tracking-wider whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg tracking-wider whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg tracking-wider whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-4 sm:px-8 md:px-12 lg:px-16 mt-4 md:mt-8 lg:mt-16">
        {/* Left Content - Increased top margin */}
        <div className="md:col-span-4 lg:col-span-5 text-center md:text-left md:mt-12 lg:mt-16">
          {/* Title */}
          <div className="flex flex-col font-chameleon mt-4 md:mt-6 lg:mt-19  font-chamelton-blk" >
            <div className="flex flex-row items-baseline gap-2 justify-center md:justify-start">
              <span className="text-white text-5xl sm:text-6xl md:text-[40px] lg:text-[100px] xl:text-[80px] 2xl:text-[110px] leading-none">RAGE</span>
              <span className="text-[#23F972] text-5xl sm:text-6xl md:text-[40px] lg:text-[100px] xl:text-[80px] 2xl:text-[110px] leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#23F972] text-5xl sm:text-6xl md:text-[40px] lg:text-[100px] xl:text-[85px] 2xl:text-[120px] leading-none">THE FEES!</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mt-6 md:mt-8 lg:mt-16 space-y-4 md:ml-[60px] lg:ml-[120px] xl:ml-[120px] 2xl:ml-[140px]" style={{fontFamily: 'Charter-Regular'}}>
            <p className="text-white text-lg md:text-base lg:text-2xl leading-relaxed " >
              U.S. Merchants paid <span className="text-[#23F972] font-bold">$224 billion</span><br className="hidden md:block"/>
              dollars in swipe fees in 2023. Many<br className="hidden md:block"/>
              merchants rank them as their second<br className="hidden md:block"/>
              highest operating cost.
            </p>
            <p className="text-white text-lg md:text-base lg:text-2xl">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo - Adjusted for larger desktop size */}
        <div className="md:col-span-5 lg:col-span-4 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative flex justify-center items-center">
            <Image
              src="/hero1.svg"
              alt="Merchant Rebellion Logo"
              width={700}
              height={800}
              className="w-[320px] md:w-[400px] lg:w-[600px] xl:w-[800px] 2xl:w-[800px]"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 lg:col-span-3 mt-8 md:mt-12 lg:mt-24 flex flex-col items-center md:items-end">
          <p className="text-[#23F972] text-lg md:text-base lg:text-2xl text-center md:text-right mb-4 font-arial">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a
            href="tel:18009411544"
            className="inline-block border border-[#23F972] text-[#23F972] rounded-full px-4 md:px-6 py-2 text-sm md:text-base lg:text-xl font-arial-bold hover:bg-[#23F972] hover:text-black transition-colors whitespace-nowrap"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}
