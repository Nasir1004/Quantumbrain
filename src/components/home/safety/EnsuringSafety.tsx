import Image from 'next/image';

const EnsuringSafety = () => {
  return (
    <section className="max-container pt-24 lg:pt-36">
      <div className="flex flex-col-reverse lg:flex-row-reverse">
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
        <h3 className="text-2xl lg:text-4xl font-ibm font-medium  leading-normal">
            Ensuring the safety of AI
          </h3>
          <div className="mt-3 h-[0.375rem] max-w-[13.8125rem] lg:max-w-[18.9375rem] bg-[#01D37F]" />
          <p className="text-lg font-ibm font-normal leading-9 mt-6">
            AI safety refers to the design and implementation of AI systems to
            minimize the probability of unintended and harmful consequences.
            These consequences may arise due to AI&apos;s ability to learn and
            make decisions autonomously, leading to unpredictable behavior.
            <br />
            <br />
            As AI applications become more complex and influential, the
            consequences of AI errors or misjudgments can have significant
            real-world impacts. Ensuring AI safety is vital to building trust in
            AI systems and promoting their widespread adoption while minimizing
            potential risks to human well-being, privacy, and security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnsuringSafety;
