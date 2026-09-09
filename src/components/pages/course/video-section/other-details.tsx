import LinkButton from '@/components/shared/button/link-button'
import { FC } from 'react'
import { FaClock, FaFileAlt } from 'react-icons/fa'
import { MdSubtitles } from 'react-icons/md'
import { SiGoogleclassroom, SiLevelsdotfyi } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'

type Props = {
  amount: string
  discount?: string
  duration: string
  category: string
  mode: string
  level: string
}
const OtherDetails: FC<Props> = ({
  amount,
  discount,
  duration,
  category,
  mode,
  level,
}) => {
  return (
    <div className="p-4 text-gray-600 flex flex-col gap-6">
      <div className="flex flex-col gap-3 border-b-1 pb-2">
        {amount && (
          <div className="flex items-center gap-3 justify-center">
            <p className="text-primary text-lg">₦{amount}</p> <p>|</p>
            <p className="line-through">₦{discount || amount}</p>
          </div>
        )}
        <p className="font-thin">
          Take advantage of this transformational course
        </p>
      </div>
      <LinkButton url={'#'} label={'Buy Now'} className="w-full" />
      {/* other Details */}
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <FaClock color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Duration</p>
          <p className="font-medium">{duration} weeks</p>
        </div>
      </div>
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <MdSubtitles color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Subject</p>
          <p className="font-medium">{category}</p>
        </div>
      </div>
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <SiLevelsdotfyi color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Level</p>
          <p className="font-medium">{level}</p>
        </div>
      </div>
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <FaFileAlt color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Certificate</p>
          <p className="font-medium">Yes</p>
        </div>
      </div>
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <TbWorld color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Language</p>
          <p className="font-medium">English</p>
        </div>
      </div>
      <div className="flex-center gap-5 text-sm ">
        <div className="bg-primary/5 p-3 rounded-full">
          <SiGoogleclassroom color="#DA2721" size={16} className="text-2xl" />
        </div>
        <div>
          <p className="font-light">Class</p>
          <p className="font-medium">{mode}</p>
        </div>
      </div>
    </div>
  )
}
export default OtherDetails
