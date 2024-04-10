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
    <div className="request-callback-container frame h-[800px] bg-gradient-to-r from-red-500 to-yellow-500 mx-10 rounded-tr-[5rem]   flex justify-between items-center flex-col md:flex-row ">

      <div className="">
        <Image src={phone} alt="phone" height={200}/>
      </div>
      {submitted ? (
        <h1 className="heading3">Thank you for your request. We will contact you soon!</h1>
      ) : (
        <div className="flex justify-between flex-col">
          <div className="flex flex-col p-7">
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
            <form onSubmit={handleSubmit} className="form-container mt-10 flex justify-center items-center flex-col gap-5 mb-10 ">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5"
              />
              <input
                type="tel"
                placeholder="+91"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="input-field py-[10px]  frame1 rounded-tr-[1rem] px-5 w-[18rem]"
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
