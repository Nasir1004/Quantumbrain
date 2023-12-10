import Image from 'next/image';
import Link from 'next/link';

const teamData = [
  {
    name: 'Ibrahim Musa Abbah',
    postion: 'CEO & Founder of Quantumbrain',
    avatar: '/assets/images/user1.png',
    fb: '#',
    ig: '#',
    tw: '#',
    ln: '#',
  },
  {
    name: 'Ibrahim Musa Abbah',
    postion: 'CEO & Founder of Quantumbrain',
    avatar: '/assets/images/user1.png',
    fb: '#',
    ig: '#',
    tw: '#',
    ln: '#',
  },
  {
    name: 'Ibrahim Musa Abbah',
    postion: 'CEO & Founder of Quantumbrain',
    avatar: '/assets/images/user1.png',
    fb: '#',
    ig: '#',
    tw: '#',
    ln: '#',
  },
  {
    name: 'Ibrahim Musa Abbah',
    postion: 'CEO & Founder of Quantumbrain',
    avatar: '/assets/images/user1.png',
    fb: '#',
    ig: '#',
    tw: '#',
    ln: '#',
  },
];

const Team = () => {
  return (
    <section className="max-contianer pt-12 pb-[8.75rem]">
      <div className="padding-container lg:text-center">
        <h6 className="text-xl lg:text-[2.5rem] font-ibm font-semibold leading-8 lg:leading-[3.25rem]">
          Meet our esteemed Team members
        </h6>
        <p className="text-base font-ibm font-normal leading-7">
          At QuantumBrain, we focus on using AI to address urgent global
          challenges and alleviate human Problems.
        </p>
      </div>
      <div className="mt-6 md:px-10">
        <div className="flex flex-col flex-wrap lg:flex-row lg:justify-center gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-primary-50 flex flex-col items-center lg:px-[0.38rem] pt-8 pb-6 rounded-lg">
              <div className="w-[16.25rem] mx-auto">
                <div className="flex justify-center">
                  <Image
                    src={member.avatar}
                    alt="team member"
                    width={124}
                    height={124}
                  />
                </div>
                <div className="mt-6 text-white text-center">
                  <h6 className="text-xl  font-semibold leading-8">
                    {member.name}
                  </h6>
                  <span className="text-base font-normal leading-7">
                    {member.postion}
                  </span>
                </div>
                <div className="w-full h-[0.0625rem] bg-white mt-5" />
                <div className="mt-6 flex justify-center">
                  <button>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.5488 32V22.8777H26.6096L27.0688 19.3216H23.5488V17.0515C23.5488 16.0222 23.8335 15.3208 25.3111 15.3208L27.1926 15.32V12.1392C26.8673 12.0969 25.7503 12 24.4503 12C21.7357 12 19.8773 13.657 19.8773 16.6993V19.3216H16.8073V22.8777H19.8773V32H23.5488Z"
                        fill="#1877F2"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3812_1336)">
                        <path
                          d="M31.9804 17.8801C31.9336 16.8174 31.7617 16.0868 31.5156 15.4537C31.2616 14.7818 30.8709 14.1801 30.359 13.68C29.8589 13.1721 29.2533 12.7774 28.5891 12.5274C27.9524 12.2813 27.2256 12.1094 26.163 12.0626C25.0923 12.0118 24.7525 12 22.0371 12C19.3217 12 18.9818 12.0118 17.9152 12.0586C16.8525 12.1055 16.1219 12.2775 15.489 12.5235C14.8169 12.7774 14.2153 13.1681 13.7152 13.68C13.2073 14.1801 12.8127 14.7857 12.5626 15.4499C12.3164 16.0868 12.1446 16.8134 12.0977 17.8761C12.0469 18.9467 12.0352 19.2866 12.0352 22.002C12.0352 24.7173 12.0469 25.0572 12.0938 26.1239C12.1406 27.1865 12.3126 27.9171 12.5588 28.5502C12.8127 29.2221 13.2073 29.8238 13.7152 30.3239C14.2153 30.8318 14.8209 31.2265 15.4851 31.4765C16.1219 31.7226 16.8486 31.8945 17.9114 31.9413C18.9779 31.9883 19.3179 31.9999 22.0333 31.9999C24.7486 31.9999 25.0885 31.9883 26.1552 31.9413C27.2178 31.8945 27.9484 31.7226 28.5813 31.4765C29.9254 30.9568 30.9881 29.8941 31.5078 28.5502C31.7538 27.9133 31.9258 27.1865 31.9726 26.1239C32.0195 25.0572 32.0312 24.7173 32.0312 22.002C32.0312 19.2866 32.0273 18.9467 31.9804 17.8801ZM30.1794 26.0457C30.1364 27.0225 29.9723 27.5499 29.8355 27.9015C29.4995 28.7728 28.808 29.4643 27.9367 29.8004C27.585 29.9372 27.0538 30.1012 26.0808 30.1441C25.026 30.1911 24.7096 30.2027 22.0411 30.2027C19.3725 30.2027 19.0522 30.1911 18.0011 30.1441C17.0244 30.1012 16.4969 29.9372 16.1453 29.8004C15.7117 29.6402 15.317 29.3862 14.9967 29.0541C14.6646 28.7298 14.4106 28.3391 14.2504 27.9055C14.1137 27.5539 13.9496 27.0225 13.9067 26.0497C13.8597 24.9948 13.8481 24.6783 13.8481 22.0097C13.8481 19.3412 13.8597 19.0209 13.9067 17.9699C13.9496 16.9932 14.1137 16.4657 14.2504 16.1141C14.4106 15.6804 14.6646 15.2859 15.0007 14.9654C15.3248 14.6333 15.7155 14.3793 16.1493 14.2192C16.5009 14.0825 17.0323 13.9184 18.0051 13.8754C19.06 13.8285 19.3765 13.8168 22.0449 13.8168C24.7174 13.8168 25.0337 13.8285 26.0848 13.8754C27.0616 13.9184 27.589 14.0825 27.9406 14.2192C28.3742 14.3793 28.7689 14.6333 29.0892 14.9654C29.4213 15.2897 29.6753 15.6804 29.8355 16.1141C29.9723 16.4657 30.1364 16.997 30.1794 17.9699C30.2262 19.0248 30.238 19.3412 30.238 22.0097C30.238 24.6783 30.2262 24.9908 30.1794 26.0457Z"
                          fill="url(#paint0_linear_3812_1336)"
                        />
                        <path
                          d="M22.0371 16.8643C19.2007 16.8643 16.8994 19.1654 16.8994 22.002C16.8994 24.8385 19.2007 27.1397 22.0371 27.1397C24.8737 27.1397 27.1749 24.8385 27.1749 22.002C27.1749 19.1654 24.8737 16.8643 22.0371 16.8643ZM22.0371 25.3347C20.197 25.3347 18.7044 23.8422 18.7044 22.002C18.7044 20.1617 20.197 18.6693 22.0371 18.6693C23.8774 18.6693 25.3698 20.1617 25.3698 22.002C25.3698 23.8422 23.8774 25.3347 22.0371 25.3347Z"
                          fill="url(#paint1_linear_3812_1336)"
                        />
                        <path
                          d="M28.5775 16.6613C28.5775 17.3237 28.0404 17.8608 27.3779 17.8608C26.7155 17.8608 26.1785 17.3237 26.1785 16.6613C26.1785 15.9988 26.7155 15.4619 27.3779 15.4619C28.0404 15.4619 28.5775 15.9988 28.5775 16.6613Z"
                          fill="url(#paint2_linear_3812_1336)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_3812_1336"
                          x1="13.7132"
                          y1="30.3216"
                          x2="30.3565"
                          y2="13.6815"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFD600" />
                          <stop offset="0.5" stopColor="#FF0100" />
                          <stop offset="1" stopColor="#D800B9" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_3812_1336"
                          x1="17.7617"
                          y1="26.2774"
                          x2="26.3126"
                          y2="17.7265"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFD600" />
                          <stop offset="0.5" stopColor="#FF0100" />
                          <stop offset="1" stopColor="#D800B9" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_3812_1336"
                          x1="26.3798"
                          y1="17.6595"
                          x2="28.376"
                          y2="15.6631"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFD600" />
                          <stop offset="0.5" stopColor="#FF0100" />
                          <stop offset="1" stopColor="#D800B9" />
                        </linearGradient>
                        <clipPath id="clip0_3812_1336">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(12 12)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3812_1342)">
                        <path
                          d="M32 15.7988C31.2563 16.125 30.4637 16.3412 29.6375 16.4462C30.4875 15.9388 31.1363 15.1412 31.4412 14.18C30.6488 14.6525 29.7738 14.9863 28.8412 15.1725C28.0887 14.3713 27.0162 13.875 25.8462 13.875C23.5763 13.875 21.7487 15.7175 21.7487 17.9763C21.7487 18.3012 21.7762 18.6137 21.8438 18.9112C18.435 18.745 15.4188 17.1113 13.3925 14.6225C13.0387 15.2363 12.8313 15.9388 12.8313 16.695C12.8313 18.115 13.5625 19.3737 14.6525 20.1025C13.9937 20.09 13.3475 19.8988 12.8 19.5975C12.8 19.61 12.8 19.6262 12.8 19.6425C12.8 21.635 14.2212 23.29 16.085 23.6712C15.7512 23.7625 15.3875 23.8062 15.01 23.8062C14.7475 23.8062 14.4825 23.7913 14.2337 23.7362C14.765 25.36 16.2725 26.5538 18.065 26.5925C16.67 27.6838 14.8988 28.3412 12.9813 28.3412C12.645 28.3412 12.3225 28.3263 12 28.285C13.8162 29.4563 15.9688 30.125 18.29 30.125C25.835 30.125 29.96 23.875 29.96 18.4575C29.96 18.2762 29.9538 18.1013 29.945 17.9275C30.7588 17.35 31.4425 16.6288 32 15.7988Z"
                          fill="#1DA1F2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3812_1342">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(12 12)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_3812_1345)">
                        <path
                          d="M31.995 31.9999V31.999H32V24.664C32 21.0757 31.2275 18.3115 27.0324 18.3115C25.0158 18.3115 23.6624 19.4182 23.1099 20.4674H23.0516V18.6465H19.0741V31.999H23.2158V25.3874C23.2158 23.6465 23.5458 21.9632 25.7016 21.9632C27.8258 21.9632 27.8574 23.9499 27.8574 25.499V31.9999H31.995Z"
                          fill="#0E76A8"
                        />
                        <path
                          d="M12.33 18.6475H16.4766V32H12.33V18.6475Z"
                          fill="#0E76A8"
                        />
                        <path
                          d="M14.4017 12C13.0758 12 12 13.0758 12 14.4017C12 15.7275 13.0758 16.8258 14.4017 16.8258C15.7275 16.8258 16.8033 15.7275 16.8033 14.4017C16.8025 13.0758 15.7267 12 14.4017 12V12Z"
                          fill="#0E76A8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3812_1345">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(12 12)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
