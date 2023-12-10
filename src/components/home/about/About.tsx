import Image from 'next/image';

const About = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:max-w-[37rem] lg:w-full">
          <Image
            src="/assets/images/robot-human.png"
            alt="robot hand"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full"
          />
        </div>
        <div className="lg:flex-1 padding-container pt-9 pb-5 bg-[#AABDBC]">
          <h3 className="text-xl font-semibold leading-8">
            We make AI breakthroughs accessible, delivering innovative
            applications to top global enterprises.
          </h3>
          <div className="mt-3 h-[0.4375rem] max-w-[18.9375rem] bg-[#01D37F]" />
          <p className='text-base font-normal leading-7 mt-6'>
            Through groundbreaking applications, QuantumBrains is breaking
            barriers in the AI landscape, democratizing access to artificial
            intelligence for major enterprises. This inclusivity empowers
            diverse industries to harness the transformative potential of AI,
            driving unparalleled advancements and innovative solutions. By
            bridging the gap between cutting-edge research and practical
            implementations, we strive to create a future where AI becomes a
            driving force for positive change across various sectors, making the
            world a better place for all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
