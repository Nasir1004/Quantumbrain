import { unstable_getImgProps as getImgProps } from 'next/image';

const Research = () => {
  const common = { alt: 'team', width: 800, height: 400 };
  const {
    props: { srcSet: desktop },
  } = getImgProps({ ...common, src: '/assets/images/team-video.png' });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImgProps({ ...common, src: '/assets/images/team-videoSM.png' });
  const desktopMedia = `(min-width: ${640}px)`;
  const mobileMedia = `(max-width: ${640 - 1}px)`;

  return (
    <section className="max-container padding-container md:px-0 pb-7">
      <div className=" bg-[#D9D9D9] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:mx-auto lg:gap-10 lg:px-[10.94rem] lg:pt-24">
          <h6 className="text-2xl lg:text-4xl font-medium leading-[3.25rem]">
            Research
          </h6>
          <div className="lg:max-w-[35.625rem] lg:ml-auto">
            <p className="text-base font-normal font-ibm leading-9">
              we are dedicated to harnessing the potential of AI and machine
              learning to drive innovation and make a positive impact in various
              industries. Our primary focus lies in developing cutting-edge
              AI-powered solutions to address complex challenges and enhance
              efficiency and productivity.
            </p>
          </div>
        </div>
        <div className="self-center flex-1 w-full lg:mt-12">

          <picture>
            <source media={desktopMedia} srcSet={desktop} />
            <source media={mobileMedia} srcSet={mobile} />
            <img alt="team" className="w-full h-auto" {...rest} />
          </picture>
        </div>
        <div className="py-8 lg:py-[6.4rem] lg:padding-container">
          <p className="text-base lg:text-2xl font-normal font-ibm leading-9">
            “In the realm of Artificial Intelligence (AI) and machine learning,
            the pursuit of achieving Artificial General Intelligence (AGI) has
            long been an ambitious goal. QuantumBrains, led by the visionary
            Mona Diab, has emerged as a trailblazer in revolutionizing the field
            of AI, taking a quantum leap towards AGI. Backed by a formidable
            team of experts from industry giants like Microsoft, Google, and
            Meta (formerly Facebook), QuantumBrains is at the forefront of
            shaping the future of AI.
            <br />
            <br />
            Our team of experts excels in building AI and machine learning
            models that optimize processes, enable data-driven decision-making,
            and provide valuable insights. From natural language processing to
            computer vision, our diverse range of AI applications caters to the
            unique needs of businesses across different sectors.
            <br />
            <br />
            At QuantumBrain, we firmly believe that AI and machine learning have
            the potential to transform industries and society as a whole. By
            harnessing the power of AI, we aim to empower businesses to achieve
            greater success and create a more sustainable and technologically
            advanced future”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
