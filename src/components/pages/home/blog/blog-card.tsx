'use client'

import { buttonVariants } from '@/components/shared/button/button'
import { truncateString } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const BlogCard: FC<Props> = ({}) => {
  return (
    <div className="border shadow-sm grid min-w-full max-h-[530px] rounded-xl p-4 gap-3">
      <div className="relative h-full">
        <Image
          src={'/images/oil.jpg'}
          alt={'blog'}
          width={1200}
          height={900}
          className="h-full object-cover rounded-xl"
        />
        <div className={'absolute top-3 left-3 right-0' + buttonVariants()}>
          Data Science
        </div>
      </div>
      <h2 className="font-semibold text-lg">
        Getting started with Python Programming Language
      </h2>
      <span className="text-xs font-light text-justify text-slate-600 leading-relaxed">
        {truncateString(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi aut, corporis dolorum saepe earum id nobis voluptate rem neque
        nemo distinctio odit eveniet corrupti, qui, tempore tempora ab ea?`)}
      </span>
      <div className="flex items-center gap-4 mt-2">
        <Image
          src={'/images/oil.jpg'}
          alt={'blog'}
          width={1200}
          height={900}
          className="h-10 w-10 object-cover rounded-full"
        />
        <div>
          <h3 className="font-medium text-xs">Omotola Iwawumi</h3>
          <span className="text-xs font-normal text-gray-500">20 Jan 2022</span>
        </div>
      </div>
    </div>
  )
}
export default BlogCard
