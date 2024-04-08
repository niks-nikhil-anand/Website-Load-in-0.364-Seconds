"use client";
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
    <div className="request-callback-container frame h-[200px] bg-gradient-to-r from-red-500 to-yellow-500 mx-10 rounded-tr-[5rem] px-10 mb-10 ">
      {submitted ? (
        <p>Thank you for your request. We will contact you soon!</p>
      ) : (
        <div className="flex justify-between flex-col">
          <div>
            <h1 className="heading3 mt-4 ">
              Request Callback - Free Consultation
            </h1>
            <p className="mt-3 body-medium text-black">
              Let's engage in a discussion about your vision or startup idea.
              Kindly request a callback, and I will promptly respond to your
              inquiry.
            </p>
          </div>
          <div className="">
            <form onSubmit={handleSubmit} className="form-container mt-10">
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
                className="input-field py-[10px] mr-10 frame1 rounded-tr-[1rem] px-5 w-[20rem]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-300 px-6 py-3 body-semibold  rounded-tr-[1rem]  "
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
