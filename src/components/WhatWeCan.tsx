import React from "react";
import {WeCanCard} from "./WeCanCard";
import flash from '../../public/flash.png'
import wifi from '../../public/wifi.png'
import target from '../../public/target.png'
import trophy from '../../public/trophy.png'


const WhatWeCan = () => {
  const data  = [
    {
      index: 0,
      heading : "Lightning-Fast Loading Times",
      description : "We prioritize performance, ensuring that all websites we develop load in less than 500ms. This commitment to speed translates into a seamless and enjoyable user experience.",
      footerText: "Seamless User Experience",
      imgUrl:flash

    },
    {
      index: 1,
      heading : "Diverse Portfolio",
      description : " Our extensive portfolio encompasses a wide range of projects. This breadth of experience allows us to provide comprehensive solutions tailored to diverse industry needs.",
      footerText: "Comprehensive Solutions Across Industries",
      imgUrl:wifi
    },
    {
      index: 2,
      heading : "Client-Centric Approach",
      description : "We believe in building strong relationships with our clients, offering personalized service and ongoing support to ensure their satisfaction and success.",
      footerText: "Personalized Service and Support",
      imgUrl:target
    },
    {
      index: 3,
      heading : "Expertise in Industry-Leading Projects",
      description : "Our team's deep understanding and mastery of cutting-edge technologies set us apart, enabling us to deliver industry-leading projects with precision and efficiency.",
      footerText: "Unmatched Technical Proficiency",
      imgUrl:trophy
    },
  ]

  return (
    <div className="flex justify-center items-center flex-col mb-5 p-10 ">
      <div className="mb-5 flex justify-center flex-col items-center ">
        <h3 className="text-gradient base-bold underline">What Makes Us Different?</h3>
        <p className="text-white">
          We possess numerous differentiating factors that set us apart from other website developers. Some of these are listed below
        </p>
      </div>
      <div className="flex justify-between items-center gap-[10px] flex-col md:flex-row">
        {data.map((item, index) => (
          <WeCanCard 
            key={index}
            heading={item.heading}
            footerText={item.footerText}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeCan;
