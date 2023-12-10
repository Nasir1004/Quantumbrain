'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';
import { AppLogoSm, MenuIcon } from '@/utils/icons';
import MobileNav from './MobileNav';


interface Iprops {
  canStick: boolean;
}

const navMenus = [
  { title: 'Home', src: '/' },
  { title: 'Research', src: '#research' },
  { title: 'Safety', src: '/safety' },
  { title: 'About', src: '/about' },
];

const Navbar = ({ canStick }: Iprops) => {
  const [isToggle, setIsToggle] = useState(false);

  const navbarRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as HTMLElement)) {
        setIsToggle(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <div ref={navbarRef}
    className={`${
      canStick
        ? 'relative bg-transparent'
        : 'fixed bg-primary-50 shadow-lg top-0 left-0 padding-container py-9 lg:pt-[3.75rem] lg:pb-11 w-full'
    } w-full z-30
    flex justify-between items-center text-white`}>
      <div className="flex items-center gap-2">
        <AppLogoSm />
        <span className="text-base font-semibold leading-7">
          {AppConfig.site_name}
        </span>
      </div>

      <nav>
        <MobileNav menus={navMenus} isToggle={isToggle} onClick={handleNavToggle} />
        <ul className="hidden lg:flex items-center gap-14">
          {navMenus.map((menu) => (
            <li key={menu.src}>
              <Link href={menu.src}>{menu.title}</Link>
            </li>
          ))}
          <li>
            <button className="flex items-center text-primary-50 text-base font-medium py-2 px-3 rounded-md bg-secondary-50">
              Get Started{' '}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M7.91667 3.75V5.41667H13.4083L3.75 15.075L4.925 16.25L14.5833 6.59167V12.0833H16.25V3.75H7.91667Z"
                    fill="#011B23"
                  />
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
