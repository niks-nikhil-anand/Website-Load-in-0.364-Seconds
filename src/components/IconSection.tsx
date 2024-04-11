import React from 'react'
import StackIcon from 'tech-stack-icons'

const IconSection = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-10 bg-[#1E293B]  overflow-hidden rounded-[2rem]  p-10'>
    <div className=' mb-5 flex justify-center flex-col items-center text-center'>
      <h3 className='text-gradient base-bold '>Tech-Driven Scalability & Speed</h3>
      <p className="text-white">
      Utilizing the latest tech stack for projects that scale effortlessly and perform with lightning speed.
        </p>
    </div>
    <div className='flex flex-col md:flex-row   gap-10 mt-7 lg:gap-[4rem]  justify-center items-center text-center '>
         
    <StackIcon name="js" className=''/>
            <StackIcon name="typescript" />
            <StackIcon name="reactjs" />
            <StackIcon name="nextjs2" />
            <StackIcon name="mongodb" />
            <StackIcon name="nodejs" />
            <StackIcon name="vitejs" />
            <StackIcon name="tailwindcss" />
            <StackIcon name="css3" />
       
    </div>
    </div>
  )
}

export default IconSection