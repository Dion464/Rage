'use client';
import { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from "./components/Hero";
import Rebelion from "./components/Rebelion";
import Testimonials from "./components/Testimonials";
import JoinForm from "./components/JoinForm";
import Stop from "./components/stop";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Hero />
            </div>
            <div className="section">
              <Rebelion />
            </div>
            <div className="section">
              <Testimonials />
            </div>
            <div className="section">
              <Stop />
            </div>
            <div className="section">
              <JoinForm />
            </div>
           
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
} 

