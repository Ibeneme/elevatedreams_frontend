'use client'

import { BlackSubHeader, Header } from '@/components/shared/header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const Diversity: FC<Props> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      <Image
        src={'/images/about-us/img2.png'}
        alt={'about-us-card'}
        width={1200}
        height={900}
        className=" w-full lg:h-full h-[550px] object-cover -z-50 "
      />
      <div className="absolute bottom-10 rounded-lg bg-base absolute-contain md:p-10 p-4 bg-opacity-80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Header text={'Diversity of students worldwide'} />
          <BlackSubHeader
            text={
              'Join a global community of learners who have chosen Loctech for their IT training journey. Our diverse student body spans the continents, creating a rich and inclusive learning environment. Hear the success stories of our students worldwide and discover how Loctech is making a lasting impact on the careers of aspiring IT professionals.'
            }
            className="text-black"
          />
        </div>
      </div>
    </motion.div>
  )
}
export default Diversity
