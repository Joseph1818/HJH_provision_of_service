import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Procurement from '../components/Procurement';
import CounterSection from '../components/CounterSection';
import WorldwidePresence from '../components/WorldwidePresence';

function Home() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div>
      <Hero />
      <Procurement />
      <CounterSection />
      <WorldwidePresence />
    </div>
  );
}

export default Home;

