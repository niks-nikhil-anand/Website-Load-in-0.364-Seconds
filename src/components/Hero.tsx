import Image from "next/image";
import React from "react";
import heroImage from "../../public/hero.jpg";
import Link from "next/link";
import whatsapp from "../../public/chat.png";
import Button from "./ChatNow";

const Hero = () => {
  return (
    <div className="flex justify-between px-9 xs:px-8 sm:px-16  mt-[20vh] ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-white heading1 text-gradient2 !font-bold ">
            Nikhil Anand
          </h3>
          <h3 className="text-white base-bold">
            eCommerce Website + Admin Panel
          </h3>
          <h2 className="text-white base-bold">
            Custom Website - Business Website
          </h2>
          <h2 className="text-white base-bold text-gradient_blue-purple !font-bold">
            Unlimited Revision + Scalable
          </h2>
          <h2 class="text-gradient2 base-bold text-white ">
            More optimized & (&gt;500ms Loading Time)
          </h2>
        </div>
        <div className="flex gap-[60px]">
          <div>
            <Link
              href={"https://wa.link/8izq0g"}
              target="_blank"
              className="flex"
            >
              <Image src={whatsapp} alt="whatsapp" width={280} />
              Chat Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image src={heroImage} alt="HeroImage" height={400} />
      </div>
    </div>
  );
};

export default Hero;
