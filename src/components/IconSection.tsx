import React from 'react'
import IconCard from './IconCard'

const IconSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-10 bg-[#1E293B] p-10 overflow-hidden rounded-[2rem]'>
    <div className=' mb-5 flex justify-center flex-col items-center'>
      <h3 className='text-gradient base-bold '>Tech-Driven Scalability & Speed</h3>
      <p className="text-white">
      Utilizing the latest tech stack for projects that scale effortlessly and perform with lightning speed.
        </p>
    </div>
    <div className='flex gap-10 mt-7'>
        <IconCard/>
       
    </div>
    </div>
  )
}

export default IconSection