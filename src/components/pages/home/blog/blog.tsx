'use client'

import BlogFilter from '@/components/shared/blog/blog'
import { Header } from '@/components/shared/header'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'

type Props = {}
const Blog: FC<Props> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="def-contain flex flex-col gap-5 md:gap-10 margining xl:pb-10"
    >
      <Header text={' Latest from our Blogs'} />
      <BlogFilter />
    </motion.div>
  )
}
export default Blog
