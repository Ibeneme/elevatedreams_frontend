'use client'

import { Header } from '@/components/shared/header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { dataInfo } from './data'

type Props = {}
const ReliedUpon: FC<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="hidden md:flex margining"
    >
      <div className="flex flex-col justify-center items-center def-contain gap-10">
        <Header
          text={'Trusted by a growing community of Stakeholders and Investors.'}
        />
        <div className="grid md:grid-cols-4 gap-5 ">
          {dataInfo.map((el, index) => (
            <motion.div
              className="relative w-fit"
              key={index}
              initial={{ opacity: 0, translateX: -100 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
                delay: 0.2 + 0.2 * index,
              }}
              viewport={{ once: true }}
              exit="exit"
              animate={{
                opacity: [0, 1],
                translateX: [-100, 0],
              }}
              whileInView={{
                opacity: [0, 1],
                translateX: [-100, 0],
              }}
            >
              <Image
                src={el.img}
                alt={'blog'}
                width={1200}
                height={900}
                className="h-full object-cover rounded-xl"
              />
              <p className="absolute mt-10 top-0 2xl:ml-10 mx-3 text-xs left-0 lg:text-sm 2xl:text-lg font-bold lg:w-[70%] w-full">
                {el.text}
              </p>
              <div className="flex justify-center absolute bottom-0 right-0 left-0">
                <p className=" flex gap-3 w-fit left-0 lg:text-7xl text-2xl lg:my-10 my-5 font-black text-center ">
                  {el.count}
                  {el.rate && <p className="text-lg font-thin">{el.rate}</p>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
export default ReliedUpon
