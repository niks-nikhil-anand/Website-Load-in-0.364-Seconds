import Image from "next/image";
import React from "react";
import heroImage from '../../public/hero.jpg'

const Hero = () => {
  return (
    <div className="flex justify-between px-9 xs:px-8 sm:px-16 mb-[30vh] mt-[20vh] hero-height">
      <div className="flex flex-col gap-4">
        <h3 className="text-white heading1 text-gradient_blue-purple !font-bold "> 
        Nikhil Anand </h3>



       <h3 className="text-white heading3">
            eCommerce Website + Admin Panel
       </h3>
       <h2 className="text-white heading3">
           Custom Website - Business Website
       </h2>
       <h2 className="text-white heading3 text-gradient_blue-purple !font-bold">
       Unlimited Revision + Scalable 
       </h2>
       <h2 className="text-white heading3 text-gradient_blue-purple !font-bold">
       More optimized
       </h2>
      </div>
      <div>
        <Image src={heroImage} alt="HeroImage" height={400} />
      </div>
    </div>
  );
};

export default Hero;
