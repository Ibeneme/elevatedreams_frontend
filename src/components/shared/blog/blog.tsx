'use client'

import { useWindowSize } from '@/lib/hooks/useResize'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import BlogCard from './blog-card'
import BlogLoader from './loader'
import Pagination from './pagination'

type Props = { row?: number; showPagination?: boolean }
const BlogFilter: FC<Props> = ({ row = 1, showPagination }) => {
  const [blogs, setBlogs] = useState([
    '/images/blogs/img5.png',
    '/images/blogs/img2.png',
    '/images/blogs/img3.png',
    '/images/blogs/img4.png',
    '/images/blogs/img5.png',
    '/images/blogs/img1.png',
    '/images/blogs/img2.png',
    '/images/blogs/img3.png',
    '/images/blogs/img4.png',
  ])

  const {
    windowSize: { width },
  } = useWindowSize()

  const count =
    typeof width === 'number'
      ? width > 1024 && width < 1660
        ? 3
        : width > 300 && width < 1024
          ? 2
          : 4
      : 0

  const totalRow = row * count

  const blogList = blogs.slice(0, totalRow)

  return (
    <div className="responsive-grid">
      {blogList.length < 1
        ? Array.from({ length: totalRow }, (_, i) => <BlogLoader key={i} />)
        : blogList.map((el: any, index: number) => (
            <motion.div
              initial={{ opacity: 0, translateX: 100 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.4,
                delay: 0.2 + 0.2 * index,
              }}
              viewport={{ once: true }}
              animate={{
                opacity: [0, 1],
                translateX: [100, 0],
              }}
              whileInView={{
                opacity: [0, 1],
                translateX: [100, 0],
              }}
              key={index}
            >
              <BlogCard img={el} />
            </motion.div>
          ))}
      {/* {blogs && blogs?.length > 0 && showPagination && (
        <Pagination
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          displayedCourses={blogs!}
          courses={blogs!}
          coursesPerPage={coursesPerPage}
        />
      )} */}
    </div>
  )
}
export default BlogFilter
