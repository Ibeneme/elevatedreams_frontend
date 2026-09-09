'use client'

import AuthTabs from '@/components/pages/auth/auth-tabs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

type Props = { children: React.ReactNode }
const Layout: FC<Props> = ({ children }) => {
  const pathname = usePathname()
  const isRegister = pathname === '/register'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen overflow-hidden my-10 lg:my-0">
      <div className="def-contain flex-center flex-col  2xl:mt-24 mt-10 lg:mb-8 w-full h-full">
        <Link href="/" className="flex">
          <Image
            src={'/images/logo.png'}
            alt={'blog'}
            width={1200}
            height={900}
            className=" w-20 object-cover mb-10 "
          />
        </Link>
        <AuthTabs pathname={pathname} />
        {children}
      </div>
      <div className="hidden lg:flex">
        <Image
          src={
            isRegister ? '/images/auth/signup.png' : '/images/auth/login.png'
          } // Dynamic image based on isLogin state
          alt={isRegister ? 'sign up image' : 'login image'}
          width={3360}
          height={3016}
          className=" w-full h-full object-cover "
        />
      </div>
    </div>
  )
}
export default Layout
