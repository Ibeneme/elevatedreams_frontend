import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC, useState } from 'react'

type Props = {
  startIndex: number
  setStartIndex: (val: number) => void
  displayedCourses: CourseProps[]
  courses: CourseProps[]
  coursesPerPage: number
}
const Pagination: FC<Props> = ({
  startIndex,
  setStartIndex,
  displayedCourses,
  courses,
  coursesPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalCoursesViewed = startIndex + displayedCourses?.length

  const handlePrevPage = () => {
    if (startIndex > 0) {
      const newStartIndex = startIndex - coursesPerPage
      setStartIndex(newStartIndex >= 0 ? newStartIndex : 0)
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (startIndex + coursesPerPage < courses.length) {
      const newStartIndex = startIndex + coursesPerPage
      setStartIndex(newStartIndex)
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }
  return (
    <div className="flex justify-between mt-7 w-full items-center">
      <p>
        Showing {currentPage} to {totalCoursesViewed} of {courses?.length}{' '}
        entries
      </p>
      <div className="h-12 font-thin flex items-center gap-1 p-2 rounded-lg">
        <div
          className={`bg-white p-1 rounded cursor-pointer ${
            startIndex === 0 ? 'opacity-50' : ''
          }`}
          onClick={handlePrevPage}
        >
          <ChevronLeft />
        </div>
        <div></div>
        <div
          className={`bg-white p-1 rounded cursor-pointer ${
            startIndex + coursesPerPage >= courses?.length ? 'opacity-50' : ''
          }`}
          onClick={handleNextPage}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  )
}
export default Pagination
