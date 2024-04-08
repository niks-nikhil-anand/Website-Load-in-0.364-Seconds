import Image from "next/image";
import React from "react";
import banner1 from '../../public/pro.png'

const WhyChooseUs = () => {
  return (
    <div className="flex px-[3rem] xs:px-8 sm:px-16 mt-[3rem] items-center mb-10 justify-between ">
      <div className="w-[30rem] pl-[3rem]">
        <h3 className=" heading3 text-gradient2 ">Why Choose Us?</h3>
        <h2 className="text-white mt-3 paragraph-regular text-gradient_blue-purple !font-bold"> Choose Dream Dictation For Explore World </h2>
        <p className="body-regular text-white  mt-5"  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni culpa architecto dignissimos animi ullam sed, eum officiis consectetur a numquam est molestias consequatur deserunt.</p>
        <p className="body-regular text-white  mt-5"  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni culpa architecto dignissimos animi ullam sed, eum officiis consectetur a numquam est molestias consequatur deserunt.</p>
      </div>
      <div>
        <Image src={banner1} alt="Macbook" height={400}/>
      </div>
    </div>
  );
};

export default WhyChooseUs;
