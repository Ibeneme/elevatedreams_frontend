'use client'
import { Card, CardHeader } from '@nextui-org/react'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../button/button'
import { SubHeader } from '../header'

type Props = { course: CourseProps }
const CourseCard: FC<Props> = ({ course }) => {
  const {
    _id,
    imgUrl,
    metaTitle,
    metaDescription,
    duration,
    amount,
    category,
    slug,
  } = course
  return (
    <Card className="shadow-sm flex flex-col group h-[500px] lg:max-w-full w-fit rounded-xl gap-3 pb-5 bg-white">
      <div className="relative h-[40%]">
        <div className="h-full w-full group-hover:bg-black/30 rounded-t-xl bg-transparent absolute top-0 left-0"></div>
        <Image
          src={imgUrl}
          alt={'blog'}
          width={1200}
          height={900}
          className="h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col justify-between mt-2 px-4 h-full">
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-start h-[75px]">
            <span className="text-xs font-medium text-primary mt-1">
              {category}
            </span>
            <Link
              href={`/courses/${slug}`}
              onClick={() => {
                localStorage.setItem('courseId', _id)
              }}
            >
              <h2 className="font-medium text-lg line-clamp-2 cursor-pointer hover:text-gray-600 hover:underline">
                {metaTitle}
              </h2>
            </Link>
          </div>
          <SubHeader text={metaDescription} className="mt-2 line-clamp-4" />
        </div>
        <div className="flex items-center justify-between mt-10 w-full gap-2">
          <div className=" flex-center gap-[2px] bg-base rounded-lg px-4 lg:px-3 xl:px-4 py-2 w-full  justify-center ">
            <Image
              src={'/icons/timer.svg'}
              alt="timer"
              width={48}
              height={48}
              className="w-4 h-4"
            />
            <span className="font-light text-xs leading-tight">
              {duration}weeks
            </span>
          </div>
          <span className="font-semibold text-center w-full text-xs px-2 lg:px-3 xl:px-4 xl:w-full py-2 bg-base rounded-lg p-2 leading-tight">
            ₦{Number(amount).toLocaleString()}
          </span>
          <Button
            size={'sm'}
            className="flex-center gap-1 font-thin w-fit md:w-full p-3"
          >
            Buy Now
            <ShoppingCartIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
export default CourseCard
