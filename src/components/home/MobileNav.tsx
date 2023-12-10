import Link from 'next/link';

import CloseIcon, { MenuIcon } from '@/utils/icons';

interface IProps {
  menus: { title: string; src: string }[];
  onClick: () => void;
  isToggle: boolean;
}

const MobileNav = ({ menus, onClick, isToggle }: IProps) => {
  return (
    <div className="block lg:hidden">
      <button className="" onClick={onClick}>
        <MenuIcon />
      </button>
      {isToggle && (
        <div className="fixed top-0 left-0 w-full bg-white py-12 px-12 z-50 transition-all duration-1000 ease-in-out">
          <button className="absolute top-5 right-6" onClick={onClick}>
            <CloseIcon />
          </button>
          <ul className="flex flex-col items-center">
            {menus.map((menu) => (
              <li key={menu.src} className="text-black py-2">
                <Link href={menu.src}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
