import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = { children: React.ReactNode; img: string }
const AuthLayout: FC<Props> = ({ children, img }) => {
  return (
    <div className="h-screen bg-white rounded-lg overflow-hidden w-full grid grid-cols-1 md:grid-cols-[50%_50%]">
      {/* Left side - OTP Verification */}
      <div className="w-full md:px-9 md:pt-40 lg:px-36">
        <Link className="self-start mb-8 flex gap-2 items-center" href={'/'}>
          <ArrowLeft className="size-5" />
          Go back to <span className="text-primary">Home</span>
        </Link>
        <Link href="/" className="flex justify-center">
          <Image
            src={'/images/logo.png'}
            alt={'blog'}
            width={1200}
            height={900}
            className=" w-20 object-cover mb-10 "
          />
        </Link>
        {children}
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block">
        <Image
          src={img}
          alt="Person with laptop"
          width={3360}
          height={3016}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
export default AuthLayout
