import React from "react";
import WeCanCard from "./WeCanCard";

const WhatWeCan = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-5">



      <div className=" mb-5 flex justify-center flex-col items-center">
        <h3 className="text-gradient base-bold underline ">Our Services</h3>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>


        <div className="flex justify-between items-center gap-[6rem]">
            <WeCanCard/>
            <WeCanCard/>
            <WeCanCard/>
            <WeCanCard/>
        </div>
    </div>
  );
};

export default WhatWeCan;
