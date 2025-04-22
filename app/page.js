'use client';
import Hero from "./components/Hero";
import Rebelion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";
import Stop from "./components/stop";

export default function Home() {
  return (
    <div >
      <Hero />
      <Stop />
      <Testimonials />
      <JoinForm />
    </div>
  );
} 

