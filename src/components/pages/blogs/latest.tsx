'use client'

import { Header, SubHeader } from '@/components/shared/header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const Latest: FC<Props> = ({}) => {
  return (
    <div className="def-contain margining">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className=" bg-gray-200/40 md:rounded-[40px]w-full grid lg:grid-cols-2 rounded-xl gap-5 lg:rounded-tl-xl lg:rounded-bl-xl xl:gap-10 h-fit"
      >
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: [0, 1], translateX: [100, 0] }}
          animate={{ opacity: [0, 1], translateX: [100, 0] }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col h-full justify-center "
        >
          <Image
            src={'/images/blogs/img1.png'}
            alt={'blog-card'}
            width={1200}
            height={900}
            className="h-[450px] object-cover rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-none lg:rounded-bl-xl object-top"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: [0, 1], translateX: [-100, 0] }}
          animate={{ opacity: [0, 1], translateX: [-100, 0] }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-7 p-4 lg:p-0 justify-center 2xl:w-[75%] lg:w-[90%] mt-5 2xl:mt-10"
        >
          <div className="text-blue-600 gap-2 flex-center font-thin text-xs border-1 py-1 border-blue-500 w-fit px-2 rounded-full">
            <span className="h-1 w-1 bg-blue-500 rounded-full"></span>{' '}
            <span>LATEST ARTICLE</span>
          </div>
          <Header
            text={`Latest Trends and News in Social Media, Tech and Digital Marketing`}
          />
          <SubHeader
            text={`Meggafy Ventures is your go-to platform for comprehensive digital growth and promotion solutions. Our mission is to help businesses and individuals elevate their online presence through a variety of tailored services. Here's a closer look at what we offer`}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Latest
