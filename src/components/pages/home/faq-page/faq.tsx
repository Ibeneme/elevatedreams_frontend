'use client'

import { Header } from '@/components/shared/header'
import { motion } from 'framer-motion'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { FC, useRef, useState } from 'react'
import { dataInfo } from '.'
import FaqPageItem from './faq-item'

type Props = {}
const FaqPage: FC<Props> = ({}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="padding bg-base mb-5">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex flex-col def-contain lg:items-center gap-10"
      >
        <Header text={'Frequently Asked Questions'} />
        <div className="lg:w-[80%] 2xl:w-[70%]">
          {dataInfo.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 w-full py-4">
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="font-medium text-sm">{faq.question}</span>
                {openIndex === index ? (
                  <MinusIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <FaqPageItem isOpen={openIndex === index} answer={faq.answer} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
export default FaqPage
