'use client';

import { useState, useEffect } from 'react';

import HeroSection from '@/components/home/HeroSection';
import Impact from '@/components/home/Impact';
import MasterPlan from '@/components/home/MasterPlan';
import Research from '@/components/home/Research';
import Team from '@/components/home/Team';
import Vision from '@/components/home/Vision';

const MAX_VIEWPORT: number = 100;

export default function Home() {
  const [triggerNav, setTriggerNav] = useState<boolean>(true);

  const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > MAX_VIEWPORT) {
    setTriggerNav(false);
  }

  if (currentScrollY < MAX_VIEWPORT) {
    setTriggerNav(true);
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [triggerNav]);

  return (
    <>
    <HeroSection canStick={triggerNav}  />
    <Impact />
    <Vision />
    <MasterPlan />
    <Research/>
    <Team />
    </>
  );
}
