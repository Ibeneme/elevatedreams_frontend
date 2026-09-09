'use client'

import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const ImageList: FC<Props> = ({}) => {
  return (
    <div className="flex relative w-[120px] ">
      <Image
        src={'/images/students/img1.png'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full border-2 border-white"
      />
      <Image
        src={'/images/students/img2.png'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover absolute left-5 rounded-full  border-2 border-white"
      />
      <Image
        src={'/images/students/img3.png'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full absolute left-10  border-2 border-white"
      />
      <Image
        src={'/images/students/img4.png'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full  border-2 absolute left-[60px] border-white"
      />
      <Image
        src={'/images/students/img5.png'}
        alt={'blog'}
        width={1200}
        height={900}
        className="h-8 w-8 object-cover rounded-full  border-2 absolute left-[80px] border-white"
      />
    </div>
  )
}
export default ImageList
