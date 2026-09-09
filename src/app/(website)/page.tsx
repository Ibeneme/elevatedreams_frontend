'use client'
import Faq from '@/components/pages/home/faq/faq'
import HomeHero from '@/components/pages/home/hero/home'
import ReliedUpon from '@/components/pages/home/relied-upon/relied-upon'
import ElevateYourDream from '@/components/shared/elevate-ur-dreams/elevate-ur-dreams'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import OurTeam from '@/components/shared/our-team/our-team'
import WhatWeDo from '@/components/shared/what-we-do/what-we-do'
import InternationBusiness from '@/components/shared/what-we-do2/what-we-do2'
import { Suspense, useEffect, useState } from 'react'
import { get } from '../../../backend_services/api_services'

export default function Home() {
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    async function fetchApiData() {
      try {
        const apiData: any = await get('/course')
        if (apiData && apiData.data) setCourses(apiData.data)
      } catch (error) {
        //    toast.error("Please check your internet connectivity");
      }
    }

    fetchApiData()
  }, [])
  return (
    <Suspense>
      <div className="bg-white overflow-y-scroll">
        <HomeHero />
        <WhatWeDo />
        <InternationBusiness />
        <ElevateYourDream />
        <OurTeam />
        <ReliedUpon />
        <Faq />
        <LearningJourney />
      </div>
    </Suspense>
  )
}
