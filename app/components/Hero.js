import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A3B2E]">
      {/* Navigation */}
      <nav className={`flex justify-between px-16 py-4  font-chameleon`}>
        <h2 className="text-white text-xl tracking-wider">THE REBELLION</h2>
        <h2 className="text-white text-xl tracking-wider">TESTIMONIALS</h2>
        <h2 className="text-white text-xl tracking-wider">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex px-16 mt-16">
        {/* Left Content */}
        <div className="w-[45%]">
          {/* Title */}
          <div className={`flex flex-col font-chameleon ml-3 mt-20`}>
            <div className="flex items-baseline gap-4">
              <span className="text-white text-[100px] leading-none">RAGE</span>
              <span className="text-[#1EEB7A] text-[100px] leading-none">AGAINST</span>
            </div>
            <div>
              <span className="text-[#1EEB7A] text-[100px] leading-none">THE FEES!</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="ml-50 mt-12 space-y-6">
            <p className="text-white text-2xl leading-relaxed" style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span><br/>
              dollars in swipe fees in 2023. Many<br/>
              merchants rank them as their second<br/>
              highest operating cost.
            </p>
            <p className="text-white text-2xl" style={{fontFamily: 'Charter-Regular'}}>It's time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="w-[30%] flex justify-start items-center">
          <div className="relative -ml-20">
            <Image
              src="/HEROICON.svg"
              alt="Merchant Rebellion Logo"
              width={550}
              height={700}
              className="mb-4"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[25%] flex flex-col items-end pt-50">
          <p className={`text-[#1EEB7A] text-2xl text-right mb-4 font-chameleon`} style={{fontFamily: 'Arial-Regular'}}>
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a
            href="tel:18009411544"
            className={`inline-block border border-[#1EEB7A] text-[#1EEB7A] rounded-full py-3 px-10 text-xl font-chameleon`}
          >
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative px-16 pb-6 mt-auto">
        <div className="absolute right-16 bottom-16 flex gap-3">
          <a href="#" className="text-[#1EEB7A]">
            <Image
              src="/socialcon.png"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="#" className="text-[#1EEB7A]">
            <Image
              src="/socialcon.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
          <a href="#" className="text-[#1EEB7A]">
            <Image
              src="/socialcon.png"
              alt="X"
              width={32}
              height={32}
            />
          </a>
          <a href="#" className="text-[#1EEB7A]">
            <Image
              src="/socialcon.png"
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
        </div>
        <p className="absolute right-16 bottom-6 text-[#1EEB7A] text-xm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
