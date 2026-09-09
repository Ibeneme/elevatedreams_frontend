import ScrollToTop from '@/components/shared/scroll-to-top/scroll-to-top'
import { FaArrowUp } from 'react-icons/fa6'

const HeroContactUs: React.FC = () => {
  return (
    <div className="w-full bg-[url('/images/contact-us/hero.png')] bg-cover bg-center relative text-white py-72">
      {/* Overlay content */}
      <div className="flex flex-col justify-center lg:items-center relative z-10 container mx-auto">
        <div>
          <h1 className="text-6xl text-center font-jakarta font-bold p-5 mb-4">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute fixed bottom-10 right-10">
        <ScrollToTop />
      </div>
    </div>
  )
}

export default HeroContactUs
