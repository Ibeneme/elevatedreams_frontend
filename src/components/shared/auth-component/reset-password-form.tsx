'use client'
import InputField from '@/components/ui/form-fields/input-field'
import { yupResolver } from '@hookform/resolvers/yup'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MdEmail } from 'react-icons/md'
import * as yup from 'yup'
import { Button } from '../button/button'

export const schema = yup.object({
  email: yup.string().required('Email is required').email('Invalid email'),
})

const ResetPasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  })

  const handleReset = async (data: { email: string }) => {
    // Handle reset logic here
  }

  return (
    <>
      {' '}
      <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
      <p className="text-sm text-gray-600 mb-6">
        We will send a <strong>4 digit code</strong> to your email address.
      </p>
      <form onSubmit={handleSubmit(handleReset)} className="space-y-6">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              name="email"
              placeholder="Email"
              value={field.value}
              errors={errors}
              field={field}
              className="w-full"
              startContent={
                <MdEmail className="text-xl text-gray-400 pointer-events-none" />
              }
            />
          )}
        />

        <Button className="w-full bg-red-600 text-white  py-2" size={'lg'}>
          <p className="p-3">Send reset email</p>
        </Button>
      </form>
    </>
  )
}

export default ResetPasswordForm
