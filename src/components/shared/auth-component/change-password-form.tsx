'use client'
import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { EyeIcon, LockKeyhole } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../button/button'
import EyeSlashIcon from './icons/eye-slash-icon'

export const schema = yup.object({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
})

const ChangePasswordForm = () => {
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

  const handlePasswordChange = async (data: object) => {}

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      <p className="text-sm text-gray-600 mb-6">
        Set a new password for your account
      </p>

      <form
        onSubmit={handleSubmit(handlePasswordChange)}
        className=" space-y-8 font-jakarta lg:w-full overflow-y-scroll scrollbar-hide  "
      >
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

        <Button className="w-full bg-red-600 text-white py-2" size={'lg'}>
          <p className="p-3">Set new password</p>
        </Button>
      </form>
    </>
  )
}

export default ChangePasswordForm
