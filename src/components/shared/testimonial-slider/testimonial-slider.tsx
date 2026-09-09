'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

interface Testimonial {
  id: number
  imageSrc: string
  text: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    imageSrc: '/images/testimonial-slide/olawumi.png',
    text: 'Very conducive learning institute. I achieved my goal as a web developer with ease. Thank you Loctech.',
    name: 'Olawumi Innocent',
    title: 'Full-stack Web Developer',
  },
  {
    id: 2,
    imageSrc: '/images/about-us/img1.png',
    text: 'Another testimonial goes here. I achieved my goal as a web developer with ease. Thank you Loctech.',
    name: 'Another Person',
    title: 'Frontend Developer',
  },
]

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="margining"
    >
      <div className="def-contain ">
        <div className="bg-black relative rounded-lg p-8 md:p-24 lg:p-8 2xl:p-24 xl:p-12 grid grid-cols-1 gap-5 2xl:gap-10 lg:grid-cols-2 text-white md:rounded-t-lg md:rounded-bl-lg md:rounded-br-[130px]">
          {/* Image container */}
          <Image
            src={testimonials[currentIndex].imageSrc}
            alt={testimonials[currentIndex].name}
            width={438}
            height={437}
            className="rounded-lg object-cover  h-full w-full min-w-sm max-h-[600px]"
          />

          {/* Text area */}
          <div className=" flex flex-col justify-between xl:py-36 lg:py-20 items-start">
            <p className="text-xl md:text-3xl  font-thin font-jakarta">
              {testimonials[currentIndex].text}
            </p>

            <div className="font-jakarta ">
              <h3 className="mt-6 text-xl md:text-2xl font-thin">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-medium md:text-lg text-gray-400 font-jakarta font-thin">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="h-[65px] hidden md:flex absolute w-7 bottom-[75px] rounded-b-full -right-[0.2px] bg-black"></div>
          <div className="hidden md:flex gap-2 px-10 justify-center md:justify-end -skew-x-[50deg]  md:w-[250px] md:absolute md:-bottom-1 md:right-[1px] bg-white h-20 rounded-tl-[17.6px]"></div>
          <div className="hidden md:flex h-[90px] absolute w-10 -bottom-[0.1px] rounded-br-[20px] -skew-x-[35deg] rounded-tr-[10px] right-[225px] bg-black"></div>
          <div className="absolute md:right-24 md:bottom-2 hidden md:flex gap-2 items-center">
            <button
              onClick={handlePrev}
              className="hover:border-red-700 text-red-500 p-5 rounded-full border-1 border-red-500"
            >
              <FaArrowLeft size={12} />
            </button>
            <button
              onClick={handleNext}
              className="hover:border-red-700 text-red-500 p-5 rounded-full border-1 border-red-500"
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialSlider
