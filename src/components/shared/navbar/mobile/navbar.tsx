'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'
import { linksData } from '..'
import LinkButton from '../../button/link-button'

type Props = {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
  path: string
}

const MobileNavbar: FC<Props> = ({ isOpen, setIsOpen, path }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div
      className={`z-30 grid grid-cols-[70%_30%] md:grid-cols-[50%_50%] fixed transition duration-[2000ms] delay-150 ease-in-out h-full ${
        isOpen
          ? 'translate-x-[0] lg:-translate-x-[100%]'
          : '-translate-x-[100%]'
      } w-full block lg:hidden`}
    >
      <motion.div
        initial={false}
        transition={{
          ease: 'easeInOut',
          duration: 0.4,
          delay: 0.5,
        }}
        animate={{
          opacity: [0, 1],
          translateX: [-100, 0],
        }}
        className={`bg-white h-full px-6 pt-5`}
      >
        {linksData.map((item, index) => {
          if (item.name === 'Services') {
            return (
              <div key={index} className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-between items-center py-4 cursor-pointer"
                >
                  <p
                    className={`${
                      path !== item.url ? 'text-gray-600' : 'text-primary'
                    }`}
                  >
                    {item.name}
                  </p>
                  <span className="ml-2">{dropdownOpen ? '▲' : '▼'}</span>
                </div>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="pl-4 border-l-2 border-gray-300"
                  >
                    <Link
                      href="/immigration"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary"
                    >
                      Immigration
                    </Link>
                    <Link
                      href="/international-business-formation"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary"
                    >
                      International Business Formation
                    </Link>
                    <Link
                      href="/international-investment"
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-600 hover:text-primary"
                    >
                      International Investment
                    </Link>
                  </motion.div>
                )}
              </div>
            )
          }

          return (
            <Link href={item.url} onClick={() => setIsOpen(false)} key={index}>
              <motion.div
                transition={{
                  ease: 'easeInOut',
                  duration: 0.4,
                  delay: 0.2 + 0.2 * index,
                }}
                animate={{
                  opacity: [0, 1],
                  translateX: [-100, 0],
                }}
                key={index}
                className="flex-gap gap-3 py-4"
              >
                <p
                  className={`${
                    path !== item.url ? 'text-gray-600' : 'text-primary'
                  }`}
                >
                  {item.name}
                </p>
              </motion.div>
            </Link>
          )
        })}
        <motion.div
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
            delay: 1.4,
          }}
          animate={{
            opacity: [0, 1],
            translateX: [-100, 0],
          }}
        >
          <div className="grid gap-2 mt-10">
            <LinkButton
              url={'/login'}
              label={'Log in'}
              className="border w-full border-primary bg-transparent text-primary hover:text-white py-3"
            />
            <LinkButton
              url={'/register'}
              label={'Get Started'}
              className="w-full border py-3"
            />
          </div>
        </motion.div>
      </motion.div>
      {isOpen && (
        <div
          className="bg-gray-500/70 h-full"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default MobileNavbar
