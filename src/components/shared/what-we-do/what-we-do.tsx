import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import LinkButton from '../button/link-button'
import { Header } from '../header'

interface OfferingCard {
  imageSrc: string
  title: string
  text: string
  class: string
  url: string
}

const OfferingCourseCard = () => {
  const cardDetails: OfferingCard[] = [
    {
      imageSrc: '/images/offering/img1.png',
      title: 'EB1 Visa (Employment-Based First Preference)',
      class: 'Classroom',
      text: 'If you’ve reached the top of your field—whether in the arts, sciences, business, or athletics—the EB1 visa is designed for you.',
      url: '/eb1-visa',
    },
    {
      imageSrc: '/images/offering/img2.png',
      title: 'EB2 Visa (Employment-Based Second Preference)',
      class: 'Online',
      text: 'If you hold an advanced degree (like a Master’s or higher) or have exceptional talent in your field, the EB2 visa may be your gateway to the U.S.',
      url: '/eb2-visa',
    },
    {
      imageSrc: '/images/offering/img3.png',
      title: 'EB5 Visa (Employment-Based Fifth Preference)',
      class: 'Blended',
      text: 'This visa is designed for entrepreneurs who create jobs for U.S. workers. By investing in an approved U.S. business, you can secure permanent residency for yourself and your family while contributing to economic growth.',
      url: '/eb5-visa',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: [0, 1], translateY: [100, 0] }}
      animate={{ opacity: [0, 1], translateY: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="margining"
    >
      <div className="flex flex-col def-contain">
        <div className="text-center">
          <Header text="What We Do" />
          <p>
            We simplify the U.S. visa process, focusing on three key pathways to
            residency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 h-fit mt-5 gap-6">
          {cardDetails.map((card, index) => (
            <div key={index} className="bg-base rounded-[24px]">
              <div className="p-4 2xl:p-6 flex flex-col justify-between h-full">
                <div>
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={1200}
                    height={900}
                    className="w-full rounded-[24px]"
                  />
                  <div className="pt-6 font-jakarta">
                    <h3 className="text-2xl font-semibold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.text}</p>
                  </div>
                </div>

                {/* action buttons */}
                <LinkButton
                  url={card.url}
                  label={'Read more'}
                  isIcon={true}
                  className={`mt-5 w-full lg:w-fit ${
                    index === 1
                      ? 'bg-secondary hover:bg-secondary/90'
                      : 'bg-primary'
                  }`}
                  iconClassName={`${
                    index === 1
                      ? 'text-darkIndigo hover:bg-darkIndigo/90'
                      : 'text-primary'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default OfferingCourseCard
