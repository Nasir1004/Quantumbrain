'use client';

import { useState, useEffect } from 'react';


import Header from '@/components/home/about/Header'
import AboutPage from '@/components/home/about/About'
import Collaboration from '@/components/home/about/Collaboration'
import EthicalFramwork from '@/components/home/about/EthicalFramwork'

const MAX_VIEWPORT: number = 100;

const About = () => {
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
    <Header canStick={triggerNav} />
    <AboutPage />
    <Collaboration />
    <EthicalFramwork />
    </>
  )
}

export default About