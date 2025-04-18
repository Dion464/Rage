import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="min-h-[100vh] flex flex-col bg-[#004D40]">
      {/* Navigation */}
      <nav className={`flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 font-bold overflow-x-auto gap-4 sm:gap-8`} style={{fontFamily: 'Chamelton10-bd'}}>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 px-4 sm:px-8 md:px-12 lg:px-16 mt-4 md:mt-8 lg:mt-16">
        {/* Left Content */}
        <div className="md:col-span-4 lg:col-span-5 text-center md:text-left mt-12 md:mt-24 lg:mt-32">
          {/* Title */}
          <div className="flex flex-col font-chameleon font-bold" style={{fontFamily: 'Chamelton10-bd'}}>
            <span className="text-white text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none flex whitespace-nowrap">
              <span>RAGE</span>
              <span className="text-[#1EEB7A] ml-2 sm:ml-3 md:ml-4 lg:ml-5">AGAINST</span>
            </span>
            <span className="text-[#1EEB7A] text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none mt-2 sm:mt-3 md:mt-4">THE FEES!</span>
          </div>

          {/* Subtitle */}
          <div className="mt-8 md:mt-12 lg:mt-16 space-y-4 md:pl-12 lg:pl-24" style={{fontFamily: 'Charter'}}>
            <p className="text-white text-lg md:text-base lg:text-2xl leading-relaxed " style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span><br className="hidden md:block"/>
              dollars in swipe fees in 2023. Many<br className="hidden md:block"/>
              merchants rank them as their second<br className="hidden md:block"/>
              highest operating cost.
            </p>
            <p className="text-white text-lg mt-6 md:text-base lg:text-2xl">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo - Adjusted position higher */}
        <div className="md:col-span-3 lg:col-span-4 flex justify-center items-start -mt-24">
          <div className="relative">
            <Image
              src="/hero1.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] transform scale-110 md:scale-125"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-end mt-12 md:mt-24 lg:mt-32">
          <p className="text-[#1EEB7A] text-lg md:text-xl text-center md:text-right mb-4">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a
            href="tel:18009411544"
            className="inline-block border-2 border-[#1EEB7A] text-[#1EEB7A] rounded-full px-4 md:px-6 py-2 text-sm md:text-base lg:text-xl font-chameleon hover:bg-[#1EEB7A] hover:text-black transition-colors whitespace-nowrap"
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

     
      
    </div>
  );
}
