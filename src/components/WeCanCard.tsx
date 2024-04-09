import Image from 'next/image'
import React from 'react'
import phone from '../../public/phone.png'

const WeCanCard = () => {
  return (
    <div className='bg-[#1E293B] w-[17rem] frame1 p-5 rounded-tr-[3rem] mb-10' >
        <Image src={phone} alt='icon' height={150}
        className='p-[10px] mb-[30px]'
        />
        <h3 className='text-gradient2 font-bold sm:text-[32px] text-[28px] '>Design</h3>
        <p className='body-regular text-white mt-6 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h2 className='body-semibold  text-white'>Read More</h2>
    </div>
  )
}

export default WeCanCard