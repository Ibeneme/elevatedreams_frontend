'use client'

import { Header, SubHeader } from '@/components/shared/header'
import { motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

type Props = { data: string[]; header: string; subHeader: string; img: string }
const Card: FC<Props> = ({ data, header, subHeader, img }) => {
  return (
    <div className="md:def-contain margining">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className=" bg-footer md:rounded-[40px] py-10 px-4 md:p-14 w-full grid lg:grid-cols-2 gap-5 h-fit"
      >
        <motion.div
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: [0, 1], translateX: [-100, 0] }}
          animate={{ opacity: [0, 1], translateX: [-100, 0] }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col gap-7 2xl:w-[80%] lg:w-[90%] mt-5 2xl:mt-10"
        >
          <Header text={header} />
          <SubHeader text={subHeader} />
          <ul className="flex flex-col gap-3">
            {data.map((el, index) => (
              <li
                key={index}
                className="bg-primary/5 rounded p-4 flex-center gap-2 text-footerText text-sm"
              >
                <div className="p-1 rounded-full bg-primary">
                  <CheckIcon size={16} className="text-white" />
                </div>
                {el}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{ opacity: [0, 1], translateX: [100, 0] }}
          animate={{ opacity: [0, 1], translateX: [100, 0] }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="flex flex-col h-full justify-center lg:order-last order-first"
        >
          <Image
            src={img}
            alt={'about-us-card'}
            width={1200}
            height={900}
            className="h-[450px] object-cover rounded-xl object-top"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Card
