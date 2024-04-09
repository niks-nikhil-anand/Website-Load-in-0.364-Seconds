import React from 'react'
import IconCard from './IconCard'

const IconSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-10 bg-[#1E293B] p-10 overflow-hidden rounded-[2rem]'>
    <div className=' mb-5 flex justify-center flex-col items-center'>
      <h3 className='text-gradient base-bold '>Our recent Projects</h3>
      <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
    </div>
    <div className='flex gap-10'>
        <IconCard/>
        <IconCard/>
        <IconCard/>
        <IconCard/>
        <IconCard/>
    </div>
    </div>
  )
}

export default IconSection