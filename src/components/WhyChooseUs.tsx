import Image from "next/image";
import React from "react";
import banner1 from '../../public/pro.png'

const WhyChooseUs = () => {
  return (
    <div className="flex px-[3rem] xs:px-8 sm:px-16 mt-[3rem] items-center mb-10 justify-between bg-[#1E293B] p-10 overflow-hidden rounded-[2rem] ">
      <div className="w-[30rem] pl-[3rem]">
        <h3 className=" heading2 text-gradient2 ">Why Choose Us?</h3>
        <h2 className="text-white mt-3 paragraph-regular text-gradient_blue-purple !font-bold"> Lightning-Fast Loading Times </h2>
        <p className="body-regular text-white  mt-2"  >Our dedication to performance means that all websites we develop load in less than 500ms, ensuring a seamless user experience.</p>
        <h2 className="text-white mt-[3rem] paragraph-regular text-gradient_blue-purple !font-bold "> Expertise in Industry-Leading Projects </h2>
        <p className="body-regular text-white  mt-2"  >We have a proven track record of delivering industry-level projects using the latest technologies, resulting in scalable solutions.</p>
        <h2 className="text-white mt-[3rem] paragraph-regular text-gradient_blue-purple !font-bold"> Diverse Portfolio</h2>  
        <p className="body-regular text-white  mt-2"  >From chat applications to eCommerce platforms, real estate portals, and food delivery websites, we have successfully executed projects across various domains.</p>
      </div>
      <div>
        <Image src={banner1} alt="Macbook" height={400}/>
      </div>
    </div>
  );
};

export default WhyChooseUs;
