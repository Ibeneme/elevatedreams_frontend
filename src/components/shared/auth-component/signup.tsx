'use client'

import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import { LockKeyhole } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  MdEmail,
  MdLock,
  MdPeople,
  MdPerson,
  MdPhone,
  MdWork,
} from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'
import Checkbox from './checkbox'
import EyeIcon from './icons/eye-icon'
import EyeSlashIcon from './icons/eye-slash-icon'

export const schema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  occupation: yup.string().notRequired(),
  nextOfKinName: yup.string().notRequired(),
  nextOfKinPhone: yup.string().notRequired(),
})

const SignUp = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {},

    resolver: yupResolver(schema),
  })

  const handleSignUp = async (data: object) => {}
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: [0, 1], translateY: [50, 0] }}
      animate={{ opacity: [0, 1], translateY: [50, 0] }}
      transition={{ delay: 0.2, duration: 0.7, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="flex flex-col lg:px-2 max-w-screen-sm mt-5 lg:mt-10"
    >
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className=" space-y-8 font-jakarta w-full lg:overflow-y-scroll px-4 scrollbar-hide flex flex-col 2xl:h-4/6 lg:h-1/2"
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <InputField
              name="firstName"
              placeholder="Enter Your Full Name"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPerson className="size-8  text-gray-400 pointer-events-none " />
              }
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              name="email"
              placeholder="Enter Email"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdEmail className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <InputField
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdPhone className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="occupation"
          control={control}
          render={({ field }) => (
            <InputField
              name="occupation"
              placeholder="Enter Occupation"
              value={field.value}
              errors={errors}
              field={field}
              startContent={
                <MdWork className="size-8  text-gray-400 pointer-events-none" />
              }
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              name="password"
              type={isVisible ? 'text' : 'password'}
              placeholder="Pas*****"
              errors={errors}
              startContent={<LockKeyhole className=" text-gray-600 size-8" />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              field={{ ...field }}
            />
          )}
        />

        <Button className="w-full" size={'lg'}>
          Sign Up
        </Button>
        <div className="flex gap-1 bg-red-100 text-center items-center font-jakarta text-gray-500 mt-4 px-6 py-4">
          <div className="inline-flex items-center">
            <label className="relative flex cursor-pointer ">
              <input
                id="ripple-on"
                type="checkbox"
                className="peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-primary transition-all checked:bg-transparent checked:before:bg-transparent hover:before:opacity-10"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>

          <div>
            By Signing Up, you agree to our{' '}
            <Link href="/#" className="text-red-600 underline">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link href="/#" className="text-red-600 underline">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default SignUp
