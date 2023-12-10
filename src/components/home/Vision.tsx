import Image from 'next/image';

const visionDetails = [
  {
    title: 'Ethical Fairness',
    desc: "QuantumBrain is founded on ethical principles, emphasizing safety, fairness, and transparency in AI development. We're aware of the risks linked to AGI and are dedicated to rigorous safety measures for its responsible development and deployment.",
  },
  {
    title: 'Collaborative Innovation',
    desc: 'Our strong conviction is that the journey towards AGI demands collaboration. QuantumBrain actively encourages cooperation with researchers, experts, and organizations worldwide, uniting knowledge, resources, and ideas to create AGI for the betterment of all humanity.',
  },
  {
    title: 'Empowering Humanity',
    desc: "AGI's potential is vast, and we envision it as a tool to empower humanity by tackling global challenges, assisting in scientific discoveries, improving healthcare, and optimizing various industries for the betterment of society as a whole.",
  },
];

const Vision = () => {
  return (
    <section className="max-container pb-[6.5rem]">
      <div className="padding-container py-5 lg:py-[3.38rem] bg-primary-50">
        <h3 className="text-white text-xl lg:text-5xl font-semibold leading-8 lg:leading-[3.25rem]">
          Our Vision for AGI
        </h3>
        <div className="w-full max-w-xs h-[0.375rem] mt-3 bg-secondary-60"></div>
      </div>

      <div className="padding-container mt-14 lg:mt-16 flex flex-col lg:flex-row-reverse gap-[1.625rem] text-[#0E0F11]">
        <div className="self-center flex-1 w-full">
          <Image
            src="/assets/images/ai_bulb.png"
            alt="ai"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 w-full flex flex-col gap-5 font-ibm">
          {visionDetails.map((vision, index) => (
            <div key={vision.title} className={`py-4 px-6 ${index === 0 ? "bg-[#809C9B]" : "bg-transparent"}`}>
              <h4 className="text-2xl lg:text-4xl font-medium leading-[3.25rem]">
                {vision.title}
              </h4>
              <p className="text-base lg:text-xl leading-9 font-normal mt-2">{vision.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
