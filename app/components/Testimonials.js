import React from 'react';
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="flex justify-between px-16 py-2">
        <h2 className="text-white mt-5 text-2xl font-bold">THE REBELLION</h2>
        <h2 className="text-[#1EEB7A] mt-5 text-2xl">TESTIMONIALS</h2>
        <h2 className="text-white mt-5 text-2xl font-bold">JOIN US</h2>
      </nav>

      {/* Main Content */}
      <div className="flex px-16 mt-8">
        {/* Left Content */}
        <div className="w-[55%]">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-[80px] leading-none font-bold">
              <div className="text-[#1EEB7A]">REAL MERCHANTS.</div>
              <div>
                <span className="text-[#1EEB7A]">REAL </span>
                <span className="text-white">ACTION.</span>
              </div>
            </h1>
          </div>

          {/* Testimonials */}
          <div className="space-y-6 max-w-[70%] relative" style={{ fontFamily: 'Arial-Regular' }}>
            {/* Vertical Line */}
            <div className="absolute left-[-20px] top-0 bottom-0 w-[2px] bg-gray-700" />
            
            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase">Langes of Bronxville, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-sm tracking-wide">
                &ldquo;Five months ago I reluctantly switched Langes Deli to the Priority
                Payments Cash Discount Program. I anticipated resistance from my
                customers. There truly has been none. The monthly savings are as
                advertised and it goes right to the bottom line.&rdquo;
              </p>
              <p className="text-white uppercase text-sm">Thomas Bass, Owner</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase">Tryforos and Pernice Florist, Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-sm tracking-wide">
                &ldquo;The Priority Payments Cash Discount Program has delivered all that
                was promised. There has been virtually no pushback on the fees and
                the savings are real.&rdquo;
              </p>
              <p className="text-white uppercase text-sm">Gary Tryforos, Owner</p>
            </div>

            <div>
              <h3 className="text-[#1EEB7A] mb-2 uppercase">Park Place Meats, Inc., Bronxville, NY:</h3>
              <p className="text-white mb-2 uppercase text-sm tracking-wide">
                &ldquo;I am extremely satisfied with our conversion to the Cash Discount
                Program. The transition was simple and Priority&apos;s customer service
                is exceptional. My clients understand the need for businesses to
                reduce costs in this unprecedented time, and my credit card fees
                have been reduced by almost 90%.&rdquo;
              </p>
              <p className="text-white uppercase text-sm">Paul Chietro, owner</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-[45%]  mt-45 flex flex-col items-end relative" style={{ fontFamily: 'Arial-Regular' }}>
          <div className="text-right mb-4">
            <p className="text-[#1EEB7A] text-lg mb-2">
              Call now for U.S.-based<br/>
              single-ring concierge service
            </p>
            <a
              href="tel:18009411544"
              className="inline-block border border-[#1EEB7A] text-[#1EEB7A] rounded-full py-2 px-8 hover:bg-[#1EEB7A] hover:text-black transition-colors"
            >
              Call 1 (800) 941-1544
            </a>
          </div>

          {/* Flag Image */}
          <div className="absolute right-0 bottom-[-180px] w-[140%] h-[800px]">
            <Image
              src="/flag.svg"
              alt="Rebellion Flag"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto px-16 pb-4">
        <div className="flex justify-end gap-6 mb-4">
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
        <p className="text-right text-[#1EEB7A] text-sm" style={{ fontFamily: 'Arial-Regular' }}>
          Supported by Transaction Acceptance Corp. Copyright 2025
        </p>
      </div>
    </div>
  );
}
