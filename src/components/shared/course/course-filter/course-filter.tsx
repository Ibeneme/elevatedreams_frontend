'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tab'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'
import CoursesList from './courses-list'

type Props = { courses: CourseProps[]; row?: number; showPagination?: boolean }

const CourseFilter: FC<Props> = ({ courses, row, showPagination }) => {
  const [selected, setSelected] = useState<string>('featured')
  const searchParams = useSearchParams()

  const classVariable = searchParams.get('mode')

  const defaultFilters = [
    'Featured',
    'Business Formation',
    'Immigration Consulting',
    'Investment Opportunities',
    'EB1 Visa Applications',
    'EB2 Visa Applications',
    'EB5 Visa Applications',
  ]

  // Extract and sort unique categories
  const uniqueCategories = courses
    .map((e) => e.category)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a.localeCompare(b))

  // Combine default filters with unique categories if courses exist
  const filters =
    courses.length > 0 ? ['Featured', ...uniqueCategories] : defaultFilters

  // Filter courses based on selected tab and mode
  const selectedCourses = (() => {
    const filteredCourses = courses.filter(
      (el) =>
        (classVariable === null || el.mode === classVariable) &&
        (selected === 'featured'
          ? el.featured === true
          : el.category.toLowerCase() === selected.toLowerCase()),
    )

    const noModeCourses = courses.every(
      (el) => classVariable !== null && el.mode !== classVariable,
    )

    return courses.length <= 0
      ? []
      : noModeCourses
        ? undefined
        : filteredCourses
  })()

  return (
    <div className="w-full bg-base pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
        animate={{ opacity: [0, 1], translateY: [100, 0] }}
        transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="def-contain"
      >
        <Tabs
          onValueChange={(value: string) => setSelected(value)}
          defaultValue="featured"
          className="w-full grid grid-cols-1 gap-5"
        >
          <TabsList
            className="overflow-x-scroll scrollbar-hide gap-5"
            aria-label="Course categories"
          >
            {filters.map((el: string, index: number) => (
              <TabsTrigger
                key={index}
                value={el.toLowerCase()}
                className="whitespace-nowrap"
                aria-selected={selected.toLowerCase() === el.toLowerCase()}
              >
                {el}
              </TabsTrigger>
            ))}
          </TabsList>
          {filters.map((el, index) => (
            <TabsContent key={index} value={el.toLowerCase()}>
              {selectedCourses && selectedCourses.length > 0 ? (
                <CoursesList
                  courses={selectedCourses}
                  rowsPerPage={row}
                  showPagination={showPagination}
                />
              ) : (
                <div className="text-center text-gray-500">
                  No courses available for the selected category.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  )
}

export default CourseFilter
