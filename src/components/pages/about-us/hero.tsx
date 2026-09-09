import { BsStars } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa6'
import LinkButton from '../../shared/button/link-button'
import SvgEffect from './hero-svg-background-effect'

const HeroSection: React.FC = () => {
  return (
    <div className="w-full relative bg-secondary text-white py-32">
      <SvgEffect />
      <div className="flex flex-col relative gap-5 md:gap-10 px-4 lg:max-w-5xl 2xl:max-w-6xl container mx-auto">
        <div className="flex gap-2 px-5 justify-center">
          <BsStars size={25} />
          <p className="text-sm mb-2">
            Empowering Success in Immigration, Business, and Investments
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-jakarta font-bold ">
          The Leading Marketplace for Immigration, Business, and Intellectual
          Property Rights Protection
        </h1>

        <p className="text-base max-w-2xl mx-auto font-jakarta font-thin text-center block md:hidden">
          Get certified in our expert-led programs and achieve your business and
          immigration goals.
        </p>

        <p className="text-base text-center mx-auto font-jakarta font-thin hidden md:block lg:max-w-2xl 2xl:max-w-4xl">
          Welcome to Elevate Dreams, where we empower individuals with
          Immigration, Business, and Intellectual Property Consulting.
        </p>

        <div className="font-bold px-6 inline-flex self-center">
          <LinkButton url={'/services'} label={'Explore Our Services'} isIcon />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10">
        <div className="bg-white text-red-600 p-2 rounded-full shadow-lg">
          <FaArrowUp />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
