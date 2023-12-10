import { CallIcon, EmailIcon, LocationIcon, WhatsAppIcon } from '@/utils/icons';
import React from 'react';

const Quote = () => {
  return (
    <div className="max-container padding-container pt-32 lg:pt-56 pb-20">
      <div className='flex flex-col lg:gap-[3.88rem] lg:flex-row'>

     <div className="flex-1">
     <div>
        <h6 className="text-2xl text-[#1E2024] font-ibm font-medium">Get Quote</h6>
        <div className="mt-3 mb-3 h-[0.4375rem] max-w-[13.8125rem] lg:max-w-[18.9375rem] bg-[#01D37F]" />
        <p className="text-base font-normal leading-8">
          For any questions or remarks, kindly Fill up form and our team will
          get back to you within 24 hours
        </p>
      </div>

      <div className='mt-8'>
        <div className="flex items-center gap-3 mb-6">
          <CallIcon />
            <a href='tel:+23401002020' className="text-base text-[#1E2024] font-semibold leading-8">+23401002020</a>
        </div>
        <div className='flex items-center gap-3 px-4 mb-6 w-full h-[3.625rem] bg-[#018D55] rounded-lg'>
          <EmailIcon />
          <a href="mailto:quantumbrain@gmail.com" className="text-base text-white font-semibold leading-8">Quantumbrain@gmail.com</a>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <LocationIcon />
          <span className="text-base text-[#1E2024] font-semibold leading-8">25, Agadez crecent off Aminokano wuse 2 Abuja</span>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <WhatsAppIcon />
          <a href="https://www.walinkfregyhjyuikm" className="text-base text-[#1E2024] font-semibold leading-8">WhatsApp</a>
        </div>
      </div>
     </div>
      
      <div className="flex-1 flex flex-col gap-5 lg:py-16 lg:px-9 mt-[3.62rem] lg:mt-0 lg:bg-[#AABDBC]">
        <div>
          <input className="py-5 px-4 w-full bg-[#567C7A] border border-[rgba(190,190,190,0.00)] outline-none placeholder:text-white placeholder:text-base placeholder:font-bold rounded-sm" placeholder='Name' />
        </div>
        <div>
          <input className="py-5 px-4 w-full bg-[#567C7A] border border-[rgba(190,190,190,0.00)] outline-none placeholder:text-white placeholder:text-base placeholder:font-bold rounded-sm" placeholder='Phone Number' />
        </div>
        <div>
          <input className="py-5 px-4 w-full bg-[#567C7A] border border-[rgba(190,190,190,0.00)] outline-none placeholder:text-white placeholder:text-base placeholder:font-bold rounded-sm" placeholder='Email Address' />
        </div>
        <div>
          <textarea rows={4} className="py-5 px-4 w-full bg-[#567C7A] border border-[rgba(190,190,190,0.00)] outline-none placeholder:text-white placeholder:text-base placeholder:font-bold rounded-sm" placeholder='Message'></textarea>
        </div>
<div className='block'>
        <button className="text-xl text-white font-bold py-5 px-3 w-full bg-[#011B23] rounded-sm">Submit Message</button>
</div>
      </div>
      </div>
    </div>
  );
};

export default Quote;
