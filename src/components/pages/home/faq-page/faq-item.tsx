'use client'

import { motion } from 'framer-motion'
import { FC, useRef } from 'react'

type FaqPageItemProps = {
  isOpen: boolean
  answer: string
}

const FaqPageItem: FC<FaqPageItemProps> = ({ isOpen, answer }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      initial={false}
      animate={{
        maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      style={{ overflow: 'hidden' }}
    >
      <div ref={contentRef} className="px-4 pt-2 pb-4 text-sm text-gray-600">
        <p>{answer}</p>
      </div>
    </motion.div>
  )
}

export default FaqPageItem
