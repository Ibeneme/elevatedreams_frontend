import { Header, SubHeader } from '@/components/shared/header'
import { motion } from 'framer-motion'
import { FC } from 'react'
import VideoSection from './video-section'

type Props = {
  course: CourseProps
}
const AboutCourse: FC<Props> = ({ course }) => {
  const {
    overview,
    amount,
    category,
    duration,
    mode,
    videoUrl,
    level,
    imgUrl,
  } = course || {}
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 1.5, duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className=" def-contain mt-[575px] md:mt-[730px] lg:mt-20 lg:margining mb-10"
    >
      <div className=" flex flex-col lg:w-[70%]">
        <Header text="About the Course" />
        <SubHeader text={overview} className="mt-2 lg:w-[70%]" />
      </div>
      <VideoSection
        amount={amount}
        duration={duration}
        category={category}
        mode={mode}
        level={level}
        videoUrl={videoUrl}
        imgUrl={imgUrl}
      />
    </motion.div>
  )
}
export default AboutCourse
