import { buttonVariants } from '@/components/shared/button/button'
import { ArrowLeft, Clock } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

type Props = {}
const HeroComp: FC<Props> = ({}) => {
  return (
    <div className="w-full h-[550px] md:h-[450px] pt-32 bg-base my-auto">
      <div className="def-contain w-full">
        <p className="self-start hidden md:flex gap-2 items-center mb-2">
          <ArrowLeft className="size-5" />
          Go back to <span className="text-primary cursor-pointer">Blog</span>
        </p>
        <div className="flex flex-col space-y-4 items-center">
          <div className={buttonVariants()}>Web Debelopment</div>
          <h1 className="font-sans text-5xl font-bold xl:w-[70%] text-center">
            The importance of good leadership in a growing business
          </h1>
          <div className="flex-center gap-4 mt-2">
            <div className="flex-center space-x-2">
              <Clock className="size-4" />
              <p className="text-xs text-gray-400">Mar 15, 2022</p>
            </div>

            <div className="flex-center space-x-2">
              <Image
                src={'/images/oil.jpg'}
                alt={'blog'}
                width={1200}
                height={900}
                className="size-5 object-cover rounded-full"
              />
              <h3 className="font-medium text-xs">Omotola Iwawumi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroComp
