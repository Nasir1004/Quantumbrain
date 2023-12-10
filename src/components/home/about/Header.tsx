import Link from 'next/link';
import Navbar from '../Navbar';

interface Iprops {
  canStick: boolean
}

const Header = ({canStick}: Iprops) => {
  return (
    <section className="max-container h-screen md:h-screen w-full padding-container pt-8 md:pt-[3.81rem] bg-[url(/assets/images/about-bg-small.png)] lg:bg-[url(/assets/images/about-bg.png)] bg-cover bg-center bg-no-repeat">
      <Navbar canStick={canStick} />

      <div className='h-full flex flex-col justify-center items-center'>
      <div className="">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center text-transparent bg-clip-text font-semibold bg-[linear-gradient(271deg,_#FF1CF7_8.73%,_#7D88FB_51.22%,_#00F0FF_93.71%)] inline-block">
          QuantumBrain leads the way in ethical AI, uniting humans and AI for a brighter future and advancing AGI for the greater good.
        </h1>
      </div>

      <div className="flex justify-center items-center gap-8 mt-8 md:mt-11">
        <button className="flex items-center text-primary-5 text-base font-medium py-2 px-3 rounded-md bg-secondary-50">
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
      </div>
      </div>

    </section>
  );
};

export default Header;
