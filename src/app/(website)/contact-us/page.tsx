import ContactForm from '@/components/pages/contact-us/contact-form'
import HeroContactUs from '@/components/pages/contact-us/hero'
import React from 'react'
import { FC } from 'react'

type Props = {}
const ContactUsPage: FC<Props> = ({}) => {
  return (
    <>
      <HeroContactUs />
      <ContactForm />
    </>
  )
}
export default ContactUsPage
