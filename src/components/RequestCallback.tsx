import Image from 'next/image';
import React from 'react'
import phone from '../../public/phone.png'
import whatsapp from "../../public/chat.png";
import Link from 'next/link';


const RequestCallback = () => {
  return (
    <div className={`request-callback-container frame h-[400px] md:h-[250px] bg-gradient-to-r from-red-500 to-yellow-500 mx-7 rounded-tr-[5rem]   flex justify-between items-center flex-col  mb-[2rem] md:flex-row `}>
      <div className="lg:ml-[5rem]">
        <Image src={phone} alt="phone" height={200}/>
      </div>
        <div className="flex justify-between flex-col">
          <div className="flex flex-col p-4">
            <h1 className="tex-white font-bold text-[23px]">
              Request  Free Consultation
            </h1>
            <p className="mt-3  text-black">
              Let&apos;s engage in a discussion about your vision or startup idea.
              Kindly request a callback, and I will promptly respond to your
              inquiry.
            </p>
          </div>
          
        </div>
      
    </div>
  );
}

export default RequestCallback