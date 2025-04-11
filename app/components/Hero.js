import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A3B2E]">
      {/* Navigation */}
      <nav className={`flex justify-between px-16 py-4  font-chameleon`}>
        <h2 className="text-white text-2xl tracking-wider">THE REBELLION</h2>
        <h2 className="text-white text-2xl tracking-wider">TESTIMONIALS</h2>
        <h2 className="text-white text-2xl tracking-wider">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex px-16 mt-16">
        {/* Left Content */}
        <div className="w-[45%]">
          {/* Title */}
          <div className={`flex flex-col font-chameleon ml-{-5} mt-25`} style={{fontFamily: 'Chamelton10-bd'}}>
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
            <p className="text-white text-2xl" style={{fontFamily: 'Charter-Regular'}}>It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        {/* Center Logo */}
        <div className="w-[30%] flex justify-center items-left">
          <div className="relative -ml-20">
            <Image
              src="/HEROICON.svg"
              alt="Merchant Rebellion Logo"
              width={600}
              height={700}
              className="mb-4"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[25%] mt-35  flex flex-col items-end pt-50">
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
      <div className="mt-auto px-16 pb-4">
        <div className="flex justify-end gap-6 mb-4">
          <div >
            <Image src="/instagramicon.svg" alt="Instagram" width={35} height={35} />
          </div>
          <div >
            <Image src="/facbook.svg" alt="Facebook" width={35} height={35} />
          </div>
          <div >
            <Image src="/socialcon.png" alt="X" width={35} height={35} />
          </div>
          <div >
            <Image src="/linkedin.svg" alt="LinkedIn" width={35} height={35} />
          </div>
        </div>
        <p className="text-right text-[#1EEB7A] text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
