const details = [
    {title: 'Research', desc: "we research and impact diverse sectors like security, agriculture, healthcare, and more, pushing progress and bettering society's future."},
    {title: 'Global Challenges', desc: "AI can transform various fields by enhancing security, optimizing agriculture, economics,  healthcare, and speeding up drug discovery. It empowers us to solve global issues, creating a safer, sustainable world."},
    {title: 'Impact', desc: "QuantumBrain pioneers AI and ML to redefine industries and solve global challenges in healthcare, climate, finance, and more. Their innovative approach shapes a brighter, sustainable future."},
]

const Impact = () => {
  return (
    <section className="max-container padding-container pt-[2.19rem] pb-[5.06rem] md:pt-[3.8rem] md:pb-[7.5rem]">
        <div className="lg:text-center">
            <h2 className="text-xl md:text-[2.5rem] text-[#1E2024] font-semibold leading-8 md:leading-[3.25rem]">Harnessing AI to Tackle Humanity&apos;s Grand Challenges</h2>
            <p className="text-sm md:text-xl">At QuantumBrain, we focus on using AI to address urgent global challenges and alleviate human Problems.</p>
        </div>
        <div className="mt-3 md:mt-[3.88rem]">
            <div className="flex justify-center items-center flex-wrap gap-6 lg:gap-9">
                {details.map(detail => (
                    <div key={detail.title} className="flex-initial min-[1210px]:flex-1 h-[17.9375rem] md:h-[20.625rem] w-full min-[1160px]:w-1/3 text-white py-5 px-6 lg:p-5 bg-primary-50">
                       <h4 className="text-xl font-semibold lg:mt-8">{detail.title}</h4>
                        <div className="w-[8.75rem] h-[0.375rem] mt-2 bg-secondary-60"></div>
                        <p className="mt-5 text-base font-normal leading-7">{detail.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Impact