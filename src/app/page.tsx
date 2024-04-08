import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import RecentWorks from '@/components/RecentWorks'
import RequestCallback from '@/components/RequestCallback'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <RecentWorks/>
      <WhyChooseUs/>

      <RequestCallback/>
    </div>
  )
}

export default page