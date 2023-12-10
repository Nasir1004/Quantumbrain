import Link from 'next/link';
import Navbar from './Navbar';

interface Iprops {
  canStick: boolean
}

const HeroSection = ({canStick}: Iprops) => {
  return (
    <header className="max-container h-[50vh] md:h-screen bg-none md:bg-[url(/assets/images/looper_bg.png)] bg-cover bg-no-repeat w-full padding-container pt-8 md:pt-[3.81rem] bg-[#011B23] transition-all duration-1000 ease-in-out">
      <Navbar canStick={canStick} />

      <div className="flex items-center flex-col mt-[2.81rem] md:mt-[4rem] lg:mt-[8.8rem]">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center text-transparent bg-clip-text font-semibold bg-[linear-gradient(271deg,_#FF1CF7_8.73%,_#7D88FB_51.22%,_#00F0FF_93.71%)] inline-block">
          Fostering AI-human collaboration across domains for a better future.
        </h1>
        <p className="w-auto md:w-[30rem] lg:w-[44.75rem] text-sm text-white text-center font-normal leading-5 mt-5">
          QuantumBrain is an innovative research institution dedicated to
          utilizing artificial intelligence and machine learning to tackle the
          world&apos;s most urgent global issues.
        </p>
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
        <Link href="/" className="text-white underline">
          Learn More
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
