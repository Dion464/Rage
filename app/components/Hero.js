import Image from "next/image";
import localFont from 'next/font/local';



export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A3B2E]">
      <nav className="flex justify-between px-4 sm:px-16 py-2">
        <h2 className="text-white text-xl sm:text-2xl">THE REBELLION</h2>
        <h2 className="hidden sm:block text-white text-2xl">TESTIMONIALS</h2>
        <h2 className="text-white text-xl sm:text-2xl">JOIN US</h2>
      </nav>

      <div className="flex px-4 sm:px-16 mt-8">
        <div className="w-[45%]">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-4">
              <span className="text-white text-[60px] sm:text-[100px] leading-none">RAGE</span>
              <span className="text-[#1EEB7A] text-[60px] sm:text-[100px] leading-none">AGAINST</span>
            </div>
            <span className="text-[#1EEB7A] text-[60px] sm:text-[100px] leading-none">THE FEES!</span>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-white text-xl sm:text-2xl leading-relaxed" style={{fontFamily: 'Charter-Regular'}}>
              U.S. Merchants paid <span className="text-[#1EEB7A] font-bold">$224 billion</span><br/>
              dollars in swipe fees in 2023. Many<br/>
              merchants rank them as their second<br/>
              highest operating cost.
            </p>
            <p className="text-white text-xl sm:text-2xl" style={{fontFamily: 'Charter-Regular'}}>It&apos;s time to stop the squeeze.</p>
          </div>
        </div>

        <div className="w-[30%] flex justify-center items-left">
          <div className="relative -ml-40">
            <Image
              src="/hero1.svg"
              alt="Merchant Rebellion Logo"
              width={600}
              height={700}
              className="mb-4"
              priority
            />
          </div>
        </div>

        <div className="w-[25%] mt-35">
          <p className="text-[#1EEB7A] text-xl sm:text-2xl mb-4">
            Call now for U.S.-based<br/>
            single-ring concierge service
          </p>
          <a href="tel:18009411544" className="inline-block border border-[#1EEB7A] text-[#1EEB7A] rounded-full px-8 py-3">
            Call 1 (800) 941-1544
          </a>
        </div>
      </div>

      <div className="mt-auto px-16 pb-4">
        <div className="flex justify-end gap-6 mb-4">
          <Image src="/instagram.svg" alt="Instagram" width={46} height={46} />
          <Image src="/facebookicon.svg" alt="Facebook" width={46} height={46} />
          <Image src="/xicon.svg" alt="X" width={46} height={46} />
          <Image src="/linkedinicon.svg" alt="LinkedIn" width={46} height={46} />
        </div>
        <p className="text-right text-[#1EEB7A] text-sm">
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
