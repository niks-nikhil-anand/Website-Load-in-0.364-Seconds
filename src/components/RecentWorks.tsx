import React from 'react';
import { Card } from './Card'; 
import {Projects} from '../constant/index'; 

const RecentWorks = () => {
  return (
    <div className='flex  justify-center items-center flex-col p-10'>
      <div className=' mb-5 flex justify-center items-center flex-col text-center'>
        <h3 className='text-gradient base-bold '>Our recent Projects</h3>
        <p className="text-white">
        We have undertaken diverse projects, and a few notable ones are listed below
        </p>
      </div>
      <div className='flex gap-8 lg:gap-[4rem] flex-col md:flex-row '>
        {Projects.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            tag4={item.tag3}
            tag5={item.tag3}
            imgURL={item.imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
