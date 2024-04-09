import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import RecentWorks from '@/components/RecentWorks'
import RequestCallback from '@/components/RequestCallback'
import WhatWeCan from '@/components/WhatWeCan'
import WhyChooseUs from '@/components/WhyChooseUs'
import IconSection from '@/components/iconSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <RecentWorks/>
      <WhyChooseUs/>
      <WhatWeCan/>
      <IconSection/>
      <RequestCallback/>
    </div>
  )
}

export default page