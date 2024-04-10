import React from 'react'
import IconCard from './Icons'

const IconSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-10 bg-[#1E293B]  overflow-hidden rounded-[2rem]  p-10'>
    <div className=' mb-5 flex justify-center flex-col items-center text-center'>
      <h3 className='text-gradient base-bold '>Tech-Driven Scalability & Speed</h3>
      <p className="text-white">
      Utilizing the latest tech stack for projects that scale effortlessly and perform with lightning speed.
        </p>
    </div>
    <div className='flex flex-col md:flex-row gap-10 mt-7  justify-center items-center text-center '>
        <IconCard/>
       
    </div>
    </div>
  )
}

export default IconSection