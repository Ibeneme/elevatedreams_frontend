type CourseProps = {
  _id: string
  title: string
  description: string
  amount: string
  img: string
  metaTitle: string
  instructor: string
  metaDescription: string
  category: string
  duration: string
  mode: string
  level: string
  learning: { objective: string }[]
  requirement: { requirements: string }[]
  overview: string
  videoUrl: string
  curriculum: { title: string; curriculums: string }[]
  imgUrl: string
  createdAt: { $date: { numberLong: string } }
  updatedAt: { $date: { $numberLong: string } }
  __v: { $numberInt: string }
  curriculumUrl: string
  featured: boolean
  slug: string
}

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
  width?: number | string
  height?: number | string
}
