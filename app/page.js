import Hero from "./components/Hero";
import Rebellion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";
import Stop from "./components/stop";

export default function Home() {
  return (
    <div>
      <Hero />
      <Rebellion />
      <Testimonials />
      <Stop />
      <JoinForm />  
    
      {/* Other components can go here */}
    </div>
  );
} 