import { Skeleton } from '@nextui-org/react'
import { FC } from 'react'
import SvgEffect from './hero-svg-background-effect'

type Props = {}
const Loader: FC<Props> = ({}) => {
  return (
    <>
      {/* Hero */}
      <div className="w-full relative bg-darkIndigo text-white md:pt-40 pt-32 lg:pb-[100px] pb-[300px] sm:pb-[400px] ">
        <SvgEffect />
        <div className="relative flex flex-col gap-3 z-10 def-contain">
          <Skeleton className="h-10 w-full lg:w-[700px] rounded" />
          <Skeleton className="h-5 w-72" />
        </div>
      </div>
      {/* About Course */}
      <div className=" def-contain mt-[575px] md:mt-[400px] lg:mt-20 lg:margining mb-10">
        <div className=" flex flex-col gap-3 lg:w-[70%]">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-[100px] w-full lg:w-[70%]" />
        </div>
        {/* Video Section */}
        <div
          className={`absolute border-1 border-gray-300 h-fit bg-white w-full  md:w-[90%] lg:w-[350px] z-10 top-[280px] md:top-[300px] lg:top-[150px] lg:-bottom-10 lg:right-0 right-0 md:absolute-contain`}
        >
          <Skeleton className="w-full lg:w-[350px] h-[280px] rounded-t-xl" />
          {/* Other Details */}
          <div className="p-4 text-gray-600 flex flex-col gap-6">
            <div className="flex flex-col gap-3 border-b-1 pb-2">
              <div className="flex items-center gap-3 justify-center">
                <Skeleton className="h-2 w-28" /> <p>|</p>
                <Skeleton className="h-2 w-28" />
              </div>
              <Skeleton className="h-2 w-full" />
            </div>
            <Skeleton className="h-10 rounded-xl w-full" />
            {/* other Details */}
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
            <div className="flex-center gap-5 text-sm ">
              <Skeleton className="h-5 w-5 rounded-full" />
              <div>
                <Skeleton className="h-2 w-28" />
                <Skeleton className="h-2 w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Journey */}
      <div className="bg-base padding margining">
        <div className="def-contain">
          <div className="flex flex-col gap-3 lg:w-[60%]">
            <Skeleton className="h-4 w-full lg:w-[500px]" />
            <Skeleton className="h-2 w-56" />
            <ul className="list-disc gap-5 flex flex-col">
              {Array.from({ length: 10 }, (_, index) => (
                <li
                  key={index}
                  className="text-sm font-light text-slate-500 leading-relaxed flex items-center gap-3"
                >
                  <Skeleton className="h-2 lg:w-[900px] w-full" />
                </li>
              ))}
            </ul>
            <Skeleton className="h-6 w-full lg:w-[500px]" />
          </div>
        </div>
      </div>
    </>
  )
}
export default Loader
