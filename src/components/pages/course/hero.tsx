import { FC } from 'react'
import SvgEffect from './hero-svg-background-effect'

type Props = { title: string; overview: string; metaDescription: string }
const Hero: FC<Props> = ({ title, overview, metaDescription }) => {
  return (
    <div className="w-full relative bg-darkIndigo text-white md:pt-40 pt-32 lg:pb-[100px] pb-[300px] sm:pb-[400px] ">
      <SvgEffect />
      <div className="relative flex flex-col gap-3 z-10 def-contain">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-jakarta lg:text-start lg:w-[60%] font-bold text-center">
          {title}
        </h1>
        <p className="text-base font-jakarta font-thin text-center lg:text-start">
          {overview}
        </p>
      </div>
    </div>
  )
}
export default Hero
