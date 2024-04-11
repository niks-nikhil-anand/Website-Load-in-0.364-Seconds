"use client";
import Image from "next/image";
import phone from '../../public/phone.png'
import { useState, FormEvent } from "react";

const RequestCallback: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className={`request-callback-container frame ${submitted ? "h-[300px] " : "h-[700px]"}  ${submitted ? "md:h-[300px] " : "md:h-[300px]"}  bg-gradient-to-r from-red-500 to-yellow-500 mx-7 rounded-tr-[5rem]   flex justify-between items-center flex-col  mb-[2rem] md:flex-row  `}>
      <div className="lg:ml-[5rem]">
        <Image src={phone} alt="phone" height={200}/>
      </div>
      {submitted ? (
        <h1 className="font-bold text-[20px] mx-[1rem] mb-[1rem] md:text-[30px] md:mx-[1rem]">Thank you for your request. We will contact you soon!</h1>
      ) : (
        <div className="flex justify-between flex-col">
          <div className="flex flex-col p-4">
            <h1 className="tex-white font-bold text-[23px]">
              Request Callback - Free Consultation
            </h1>
            <p className="mt-3  text-black">
              Let&apos;s engage in a discussion about your vision or startup idea.
              Kindly request a callback, and I will promptly respond to your
              inquiry.
            </p>
          </div>
          <div className=" ">
            <form onSubmit={handleSubmit} className="form-container mt-10 flex justify-center items-center flex-col gap-5 mb-10  md:flex-row md:justify-start">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field py-[10px]  frame1 rounded-tr-[1rem] px-5 w-[14rem]"
              />
              <input
                type="tel"
                placeholder="+91"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input-field py-[10px]  frame1 rounded-tr-[1rem] px-5 w-[14rem]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-300 px-6 py-3 body-semibold  rounded-tr-[1rem]   "
                >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestCallback;
