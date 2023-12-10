import Image from 'next/image';

import { CPUIcon, StackIcon } from '@/utils/icons';

const collabDetails = [
  {
    title: 'User Experience Design Team.',
    desc: 'At QuantumBrains, collaboration is not only a key driver of success but also a fundamental aspect of our culture. Our team comprises top-notch researchers and engineers who bring their diverse expertise from three tech behemoths - Microsoft, Google, and Meta. This unique amalgamation of talent fosters an environment of creativity, where ideas flow freely, and knowledge is shared generously.',
    icon: StackIcon,
  },
  {
    title: 'Simple & Clean Line of Code',
    desc: 'The spirit of collaboration enables us to tackle complex challenges with a multidisciplinary approach, combining insights from quantum computing, artificial intelligence, and various other cutting-edge technologies. By pooling our resources and expertise, we accelerate progress towards the development of Artificial General Intelligence (AGI) in a responsible and ethical manner.',
    icon: CPUIcon,
  },
];

const Collaboration = () => {
  return (
    <section className="max-container padding-container py-4 lg:py-20">
      <div className="flex flex-col lg:flex-row-reverse lg:gap-5">
        <div className="w-full lg:w-2/5">
          <Image
            src="/assets/images/vr-glass.png"
            alt="virtual reality"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
        <div className="w-full lg:w-3/5">
          <h4 className="mt-8 mb-5 lg:mt-0 text-xl text-[#1E2024] font-semibold leading-8">Our Collaborative Power</h4>
          <div className="flex flex-col gap-[1.38rem] py-8 px-5 bg-[#CCD8D7]">
            {collabDetails.map((data, index) => (
              <div key={index} className="flex gap-3">
                <div>
                  <data.icon />
                </div>
                <div>
                  <h6 className="text-xl text-[#061C3D] font-semibold leading-8">{data.title}</h6>
                  <p className="text-base lg:text-xl text-[#42526B] lg:text-[#0E0F11] font-normal lg:font-ibm leading-7 lg:leading-9 tracking-[-0.011rem]">{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
