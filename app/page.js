'use client';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import JoinForm from './components/JoinForm';
import Stop from "./components/stop";
import { useEffect, useState } from 'react';

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
      <section>
        <Testimonials />
      </section>
      <section>
        <JoinForm />
      </section>
    </main>
  );
} 

