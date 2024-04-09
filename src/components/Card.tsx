import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface CardThreeProps {
  title: string;
  description: string;
  tag1: string;
  tag2: string;
  tag3: string;
  tag4?: string;
  tag5?: string;
  imgURL: any;
}

export const Card: React.FC<CardThreeProps> = ({
  title,
  description,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  imgURL,
}) => {
  return (
    <div className="w-[300px] rounded-tr-[4rem] frame overflow-hidden  bg-[#1E293B]">
      <Image
        src={imgURL}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold text-gradient">
          {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm body-regular text-white">
          {description}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag1}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag2}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag3}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag4}
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag5}
          </span>
        </div>
      </div>
    </div>
  );
};
