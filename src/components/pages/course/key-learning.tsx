'use client'

import { Header, SubHeader } from '@/components/shared/header'
import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = { learning: { objective: string }[] }
const KeyLearning: FC<Props> = ({ learning }) => {
  return (
    <div className="bg-base padding">
      <div className="def-contain">
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: [0, 1], translateY: [-100, 0] }}
          animate={{ opacity: [0, 1], translateY: [-100, 0] }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 lg:w-[60%]"
        >
          <Header text={'Key Learning Outcomes'} />
          <SubHeader text={'In this course, you will learn:'} />
          <ul className="list-disc gap-5 flex flex-col">
            {learning.map((el, index) => (
              <li
                key={index}
                className="text-sm font-light text-slate-500 leading-relaxed flex items-center gap-3"
              >
                <div className="ring-4 ring-primary md:h-[6px] md:w-[6px] w-1 h-1 rounded-full bg-white"></div>
                {el.objective}
              </li>
            ))}
          </ul>
          <SubHeader
            text={`Buckle your seat belt and get ready to be immersed in the Harde world of interactive learning that will intrigue your mind, challenge your thinking, and transform your results. We call it the WOW Factor`}
          />
        </motion.div>
      </div>
    </div>
  )
}
export default KeyLearning
