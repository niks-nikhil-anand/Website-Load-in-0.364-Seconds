import Image from 'next/image'
import React from 'react'
import icon1 from '../../public/icon01.png'

const IconCard = () => {
  return (
    <div>
        <div className=''>
            <Image src={icon1} alt='icon1' height={80} />
        </div>
    </div>
  )
}

export default IconCard