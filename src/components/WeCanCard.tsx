import Image from 'next/image'
import React from 'react'

export const WeCanCard = ({heading , footerText , description, imgUrl}:{
  heading:string;
  footerText:string,
  description:string,
  imgUrl:any
}) => {
  return (
    <div className=' w-[17rem] frame1 rounded-tr-[3rem] mb-10' >
        <div className='flex justify-center items-center'>
        <Image src={imgUrl} alt='icon' height={150}
        className='p-[10px]  '
        />
        </div>
        <div className='flex bg-[#1E293B] flex-col p-5 ' >
        <h3 className='text-gradient2 paragraph-semibold '>{heading}</h3>
        <p className='body-regular text-white mt-6 mb-7'>{description}</p>
        <h2 className='body-semibold  text-white'>
          {footerText}
        </h2>
        </div>
       
    </div>
  )
}

export default WeCanCard