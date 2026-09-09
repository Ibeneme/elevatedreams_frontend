import React from 'react'
import SvgEffect from './hero-svg-background-effect'

const CoursesHero = () => {
  return (
    <div className=" relative flex text-white flex-col items-center md:py-32 pt-24 pb-20 bg-darkIndigo font-jakarta">
      <SvgEffect />
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-jakarta font-bold">
        Loctech Courses
      </h1>
      <p className="text-center mt-4">
        Get certified in our industry standard course and smash all your tech
        goals.
      </p>
    </div>
  )
}

export default CoursesHero
