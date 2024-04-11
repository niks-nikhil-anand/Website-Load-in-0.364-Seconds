import React from 'react';
import StackIcon from 'tech-stack-icons';

const IconSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-10 bg-[#1E293B] overflow-hidden rounded-[2rem] p-10'>
      <div className='mb-5 flex justify-center flex-col items-center text-center'>
        <h3 className='text-gradient base-bold'>Tech-Driven Scalability & Speed</h3>
        <p className="text-white">
          Utilizing the latest tech stack for projects that scale effortlessly and perform with lightning speed.
        </p>
      </div>
      <div className='flex flex-wrap gap-4 md:gap-10 mt-7 justify-center items-center text-center'>
        <StackIcon name="js" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="typescript" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="reactjs" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="nextjs2" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="mongodb" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="nodejs" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="vitejs" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="tailwindcss" className='w-12 h-12 md:w-16 md:h-16' />
        <StackIcon name="css3" className='w-12 h-12 md:w-16 md:h-16' />
      </div>
    </div>
  );
};

export default IconSection;
