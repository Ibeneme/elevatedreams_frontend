import { ArrowLeft } from 'lucide-react'
import { FC } from 'react'

type Props = {}
const HeroComp: FC<Props> = ({}) => {
  return (
    <div className="w-full h-[355px] flex bg-base lg:h-[350px] pt-32 my-auto">
      <div className="def-contain w-full">
        <p className="self-start flex gap-2 items-center">
          <ArrowLeft className="size-5" />
          Go back to
          <span className="text-primary cursor-pointer">loctechng.com</span>
        </p>
        <div className="flex flex-col space-y-4 items-center">
          <h1 className="font-sans text-4xl font-bold">Blog</h1>
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* Search Icon */}
              <svg
                className="h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                />
              </svg>
            </div>
            <input
              className="w-full pl-10 pr-4 py-2 min-w-80 rounded-full border-[0.5px] sm:text-xs placeholder:italic placeholder:text-slate-400 border-gray-300 focus:outline-none focus:border-primary/50"
              type="text"
              placeholder="Search anything..."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeroComp
