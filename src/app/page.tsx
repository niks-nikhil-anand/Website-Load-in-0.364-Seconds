import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import RecentWorks from '@/components/RecentWorks'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <RecentWorks/>
    </div>
  )
}

export default page