import Image from "next/image";
import localFont from 'next/font/local';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-[#004D40]">
      {/* Navigation */}
      <nav className={`flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 font-bold overflow-x-auto gap-4 sm:gap-8 sticky top-0 z-50`} style={{fontFamily: 'Chamelton10-bd'}}>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">THE REBELLION</h2>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">TESTIMONIALS</h2>
        <h2 className="text-white text-base sm:text-xl tracking-wider whitespace-nowrap">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 pt-8 md:mt-8 lg:mt-16 relative">
        {/* Left Content */}
        <div className="md:col-span-4 lg:col-span-5 text-center md:text-left z-10 md:mt-24 lg:mt-32">
          {/* Title */}
          <div className="flex flex-col font-chameleon font-bold" style={{fontFamily: 'Chamelton10-bd'}}>
            <span className="text-white text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none flex flex-wrap md:flex-nowrap justify-center md:justify-start">
              <span>RAGE</span>
              <span className="text-[#1EEB7A] ml-2 sm:ml-3 md:ml-4 lg:ml-5">AGAINST</span>
            </span>
            <span className="text-[#1EEB7A] text-4xl sm:text-5xl md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none mt-2 sm:mt-3 md:mt-4">THE FEES!</span>
          </div>

          {/* Subtitle */}
          <div className="mt-6 md:mt-12 lg:mt-16 space-y-4 md:pl-12 lg:pl-24" style={{fontFamily: 'Charter'}}>
            <p className="text-white text-base sm:text-lg md:text-base lg:text-2xl leading-relaxed" style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span><br className="hidden md:block"/>
              dollars in swipe fees in 2023. Many<br className="hidden md:block"/>
              merchants rank them as their second<br className="hidden md:block"/>
              highest operating cost.
            </p>
            <p className="text-white text-base sm:text-lg md:text-base lg:text-2xl">It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="md:col-span-4 lg:col-span-4 flex justify-center items-center md:items-start order-first md:order-none mb-8 md:-mt-24">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-auto md:h-auto">
            <Image
              src="/hero1.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-full h-full md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] transform scale-110 md:scale-125 object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-end justify-start z-10 md:mt-0" style={{ marginTop: "" }}>
          <div className="md:mt-[4.5rem]">
            <p className="text-[#1EEB7A] text-base sm:text-lg md:text-xl text-center md:text-right mb-4">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border-2 border-[#1EEB7A] text-[#1EEB7A] rounded-full px-6 py-2.5 text-base md:text-base lg:text-xl font-medium hover:bg-[#1EEB7A] hover:text-black transition-colors whitespace-nowrap"
            >
              Call 1 (800) 941-1544
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
