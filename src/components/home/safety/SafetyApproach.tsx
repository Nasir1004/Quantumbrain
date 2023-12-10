const safeties = [
  {
    title: 'Synergistic Collaboration between AI and Humans',
    desc: "QuantumBrains recognizes that the real potential of AI lies in its symbiotic relationship with humans. By combining the unique strengths of AI's computational power and human creativity, problem-solving, and emotional intelligence, QuantumBrains aims to create a world where humans and AI work hand-in-hand towards shared goals.",
  },
  {
    title: 'Advancing AI for Social Good',
    desc: "QuantumBrains recognizes that the real potential of AI lies in its symbiotic relationship with humans. By combining the unique strengths of AI's computational power and human creativity, problem-solving, and emotional intelligence, QuantumBrains aims to create a world where humans and AI work hand-in-hand towards shared goals.",
  },
  {
    title: 'Human-Centric AI Design',
    desc: 'QuantumBrains places human values at the core of AI development. Their AI systems are designed with transparency, fairness, and inclusivity in mind, ensuring that AI technologies align with societal norms and respect individual rights and privacy. By prioritizing human-centric AI, QuantumBrains strives to build trust and acceptance of AI technologies among people',
  },
  {
    title: 'Ethical AI Governance and Regulation',
    desc: 'As pioneers in the AI field, QuantumBrains advocates for robust and responsible AI governance. They actively collaborate with policymakers, researchers, and industry leaders to establish ethical AI guidelines and regulations that ensure AI technologies are deployed responsibly and ethically.',
  },
  {
    title: 'Empowering Education and Skill Development',
    desc: "In QuantumBrains' vision, AI plays a pivotal role in democratizing education and skill development. They are creating AI-powered learning platforms that cater to individual learning needs, making education accessible to a global audience. By fostering continuous learning and upskilling, QuantumBrains seeks to empower individuals to thrive in the rapidly evolving technological landscape.",
  },
  {
    title: 'AI Augmentation, not Replacement',
    desc: 'IContrary to the fear of AI taking over human jobs, QuantumBrains believes in AI augmentation - where AI complements and enhances human capabilities rather than replacing them. By automating repetitive tasks and providing intelligent insights, AI frees up human potential for more creative and value-driven endeavors.',
  },
];

const SafetyApproach = () => {
  return (
    <section className="max-container padding-container pt-9 pb-5">
      <div className="">
        <h3 className="text-2xl lg:text-4xl font-ibm font-medium  leading-normal">
          Approaches to AI safety
        </h3>
        <div className="mt-3 h-[0.4375rem] max-w-[13.8125rem] lg:max-w-[18.9375rem] bg-[#01D37F]" />
        <p className="text-lg text-[#0E0F11] font-ibm font-normal leading-8 mt-6">
          Addressing AI safety is a collective responsibility involving
          researchers, developers, policymakers, and the public. Collaborative
          efforts between academia, industry, and government agencies are
          crucial to set standards and best practices.
          <br />
          <br />
          QuantumBrains is spearheading a visionary mission to forge a world
          where AI and humans collaborate harmoniously, propelling humanity
          towards a brighter and more promising future. Through cutting-edge
          research, groundbreaking innovations, and a deep commitment to ethical
          AI, QuantumBrains envisions a future where AI technologies augment
          human capabilities, solve complex global challenges, and enhance the
          overall well-being of society.
          <br />
          <br />
          AI safety is an ongoing and dynamic field of research and development.
          As AI continues to evolve and impact various aspects of our lives,
          prioritizing safety measures becomes imperative. By fostering a
          culture of responsible AI development and adopting robust safety
          practices, we can harness the full potential of AI while safeguarding
          humanity&apos;s interests and well-being.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-x-10 lg:gap-y-16  mt-8">
          {safeties.map((safety, index) => (
            <div
              key={index}
              className="py-6 lg:py-8 px-5 text-white bg-primary-50 rounded">
              <div>
                <h6 className="text-xl font-ibm font-semibold leading-8">{safety.title}</h6>
              </div>
              <div className="mt-2 mb-3 h-[0.375rem] max-w-[16.0625rem] lg:max-w-[20rem] bg-[#01D37F]" />
              <p className="text-base font-normal leading-7 font-ibm">{safety.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyApproach;
