import Image from "next/image"

const plans = [
    {title: "Ethical Fairness", desc: "QuantumBrain is founded on ethical principles, emphasizing safety, fairness, and transparency in AI development. We're aware of the risks linked to AGI and are dedicated to rigorous safety measures for its responsible development and deployment."},
    {title: "Data Infrastructure", desc: "AGI development requires vast amounts of data. We are dedicated to establishing robust data infrastructure, ensuring data privacy, and fostering data sharing partnerships to fuel AGI's learning process."},
    {title: "Cognitive Architecture ", desc: "Developing AGI demands sophisticated cognitive architectures capable of handling complex reasoning, learning, and understanding. QuantumBrain works tirelessly to craft the most advanced cognitive architecture for AGI to achieve human-level intelligence."},
]

const MasterPlan = () => {
  return (
    <section className="max-container pb-[6.5rem]">
      <div className="padding-container py-5 lg:py-[3.38rem] bg-primary-50">
        <h3 className="text-white text-xl lg:text-5xl font-semibold lgLfo leading-8 lg:leading-[3.25rem]">
        The Master Plan for AGI
        </h3>
        <div className="w-full max-w-xs h-[0.375rem] mt-3 bg-secondary-60"></div>
      </div>

      <div className="padding-container mt-14 lg:mt-16 flex flex-col lg:flex-row gap-[1.625rem] text-[#0E0F11]">
        <div className="self-center flex-1 w-full">
          <Image
            src="/assets/images/team-plan.png"
            alt="team"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 w-full flex flex-col gap-5 font-ibm">
          {plans.map((plan, index) => (
            <div key={plan.title} className={`py-4 px-6 ${index === 0 ? "bg-[#809C9B]" : "bg-transparent"}`}>
              <h4 className="text-2xl lg:text-4xl font-medium leading-[3.25rem]">
                {plan.title}
              </h4>
              <p className="text-base lg:text-xl leading-9 font-normal mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MasterPlan