import Hero from "./components/Hero";
import Rebellion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Rebellion />
      <Testimonials />
      {/* Other components can go here */}
    </div>
  );
} 