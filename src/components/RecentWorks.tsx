import React from 'react';
import { Card } from './Card'; 
import {Projects} from '../constant/index'; 

const RecentWorks = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='base-bold mb-5'>
        <h3 className='text-gradient underline'>Our recent Projects</h3>
      </div>
      <div className='flex gap-8'>
        {Projects.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            tag1={item.tag1}
            tag2={item.tag2}
            tag3={item.tag3}
            imgURL={item.imgURL}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
