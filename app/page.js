'use client';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import JoinForm from './components/JoinForm';
import Stop from "./components/stop";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // We're removing all full page scrolling functionality
  // No need for state or event handlers anymore

  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Stop />
      </section>
      {/* Our Mission Section */}
      <section id="our-mission" className="min-h-screen bg-[#0A3B2E] flex flex-col relative pt-16 md:pt-0">
        {/* Decorative MR Badge */}
        <div className="absolute right-[calc(16.7%+50px)] translate-x-1/2 top-[calc(25%-75px+200px)] hidden lg:block">
          <Image
            src="/Asset 17@4x.png"
            alt="Merchant Rebellion Fist Icon"
            width={469}
            height={563}
            className="opacity-80"
          />
        </div>
        
        <div className="hidden md:flex justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-8">
          <Link href="#stop" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">THE REBELLION</Link>
          <Link href="#our-mission" className="text-[#23F972] text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">OUR MISSION</Link>
          <Link href="#testimonials" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">TESTIMONIALS</Link>
          <Link href="#join" className="text-white text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-chamelton-blk cursor-pointer whitespace-nowrap">JOIN US</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 px-4 sm:px-8 md:px-8 lg:px-12 flex-1 pb-4 md:pb-16 z-10">
          {/* Left Content */}
          <div className="pt-6 md:pt-24">
            <h2 className="text-[#23F972] text-3xl sm:text-[40px] md:text-[45px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px] leading-tight font-chamelton-blk tracking-tight mb-12">
              OUR PURPOSE.<br /><span className="text-white">YOUR PROFIT.</span>
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-[#23F972] text-2xl md:text-3xl font-chamelton-blk mb-4">WHO WE ARE</h3>
                <p className="text-white text-base md:text-xl font-charter mb-4 max-w-[540px]">
                  We are a merchant advocacy group that helps businesses keep more of their money by reducing or eliminating credit card processing fees.
                </p>
                <p className="text-white text-base md:text-xl font-charter max-w-[540px]">Our reputation is built on results and respect. We don't just lower fees. We raise expectations.</p>
              </div>
              
              <div>
                <h3 className="text-[#23F972] text-2xl md:text-3xl font-chamelton-blk mb-4">SERVICE THAT ACTUALLY SERVES</h3>
                <p className="text-white text-base md:text-xl font-charter mb-4 max-w-[540px]">When you call us, you get a real human. Every time. We offer 100% U.S. based, one-on-one support with no call centers, no AI agents, no outsourcing.</p>
                <p className="text-white text-base md:text-xl font-charter max-w-[540px]">That's not a tagline. That's how we operate.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="pt-6 md:pt-[calc(23rem+2rem)]">
            <div className="flex flex-col gap-12 md:-ml-36">
              <div>
                <h3 className="text-[#23F972] text-2xl md:text-3xl font-chamelton-blk mb-4">SECURITY YOU CAN TRUST</h3>
                <p className="text-white text-base md:text-xl font-charter max-w-[540px]">We are fully PCI DSS compliant, with a flawless 25-year record of secure, fraud-free client processing. None of our clients have ever had compliance issues.</p>
              </div>

              <div>
                <h3 className="text-[#23F972] text-2xl md:text-3xl font-chamelton-blk mb-4">TRY US RISK-FREE</h3>
                <p className="text-white text-base md:text-xl font-charter mb-4 max-w-[540px]">You're already losing money to swipe fees. That's why we offer a zero-obligation, no-contract, 3-month trial to let you see the savings before you commit.</p>
                <p className="text-white text-base md:text-xl font-charter max-w-[540px]">Our trial period gives you time to experience our service, verify the savings, and make an informed decision. No pressure, no hidden fees, just results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <JoinForm />
      </section>
    </main>
  );
} 

