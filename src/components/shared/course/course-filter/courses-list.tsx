import { useWindowSize } from '@/lib/hooks/useResize'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import CourseCard from '../course-card'
import CardLoader from '../loader'
import Pagination from './pagination'

type Props = {
  courses: any
  rowsPerPage?: number
  showPagination?: boolean
}

const CoursesList: FC<Props> = ({
  courses,
  rowsPerPage = 2,
  showPagination,
}) => {
  const [startIndex, setStartIndex] = useState(0)
  const {
    windowSize: { width },
  } = useWindowSize()

  // Determine the number of courses to show per row based on the window width
  const coursesPerRow = width && width > 1024 && width < 1660 ? 3 : 4
  const coursesPerPage = rowsPerPage * coursesPerRow
  const endIndex = startIndex + coursesPerPage

  // Get the list of courses to display on the current page
  const displayedCourses = courses && courses.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 lg:grid-cs-3 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-5 gap-10 md:gap-5">
        {courses ? (
          <>
            {displayedCourses?.length === 0
              ? Array.from({ length: coursesPerPage }, (_, i) => (
                  <CardLoader key={i} />
                ))
              : displayedCourses!.map((course: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9 }}
                    transition={{
                      ease: 'easeInOut',
                      duration: 0.4,
                      delay: 0.2 + 0.2 * index,
                    }}
                    viewport={{ once: true }}
                    exit="exit"
                    animate={{ scale: [0.9, 1] }}
                    whileInView={{ scale: [0.9, 1] }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                ))}
          </>
        ) : (
          <>Nothing found</>
        )}
      </div>

      {courses && courses?.length > 0 && showPagination && (
        <Pagination
          startIndex={startIndex}
          setStartIndex={setStartIndex}
          displayedCourses={displayedCourses!}
          courses={courses!}
          coursesPerPage={coursesPerPage}
        />
      )}
    </div>
  )
}

export default CoursesList
