'use client'

import CoursesHero from '@/components/pages/courses/courses-hero'
import CourseFilter from '@/components/shared/course/course-filter/course-filter'
import TopCourses from '@/components/shared/elevate-ur-dreams/elevate-ur-dreams'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import { FC, Suspense, useEffect, useState } from 'react'
// import { get } from '../../../../backend_services/api_services'

type Props = {}
const CoursesPage: FC<Props> = ({}) => {
  const [courses, setCourses] = useState<any[]>([])

  // useEffect(() => {
  //   async function fetchApiData() {
  //     try {
  //       const apiData: any = await get('/course')
  //       if (apiData && apiData.data) setCourses(apiData.data)
  //     } catch (error) {
  //       //    toast.error("Please check your internet connectivity");
  //     }
  //   }

  //   fetchApiData()
  // }, [])
  return (
    <Suspense>
      <CoursesHero />
      <TopCourses />
      <CourseFilter courses={courses} row={3} showPagination />
      <LearningJourney />
    </Suspense>
  )
}
export default CoursesPage
