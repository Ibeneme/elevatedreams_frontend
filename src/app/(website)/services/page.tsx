'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'EB1 Visa (Employment-Based First Preference)',
    description:
      "If you've reached the top of your field—whether in the arts, sciences, business, or athletics—the EB1 visa is designed for you.",
    image: '/images/offering/img1.png',
    buttonText: 'Read more',
    buttonColor: 'bg-primary',
    link: '/eb1-visa',
  },
  {
    title: 'EB2 Visa (Employment-Based Second Preference)',
    description:
      'If you hold an advanced degree (like a Master’s or higher) or have exceptional talent in your field, the EB2 visa may be your gateway to the U.S.',
    image: '/images/offering/img2.png',
    buttonText: 'Read more',
    buttonColor: 'bg-secondary',
    link: '/eb2-visa',
  },
  {
    title: 'EB5 Visa (Employment-Based Fifth Preference)',
    description:
      'This visa is designed for entrepreneurs who create jobs for U.S. workers. By investing in an approved U.S. business, you can secure permanent residency for yourself and your family.',
    image: '/images/offering/img3.png',
    buttonText: 'Read more',
    buttonColor: 'bg-primary',
    link: '/eb5-visa',
  },
  {
    title: 'International Business Formation',
    description:
      'Launch and grow your business in the U.S. with confidence. We guide you through every step, from choosing the right business structure to legal registration and compliance.',
    image: '/images/offering/img5.png',
    buttonText: 'Read more',
    buttonColor: 'bg-primary',
    link: '/international-business-formation',
  },
  {
    title: 'Intellectual Property Protection',
    description:
      'We protect your intellectual property, safeguard your brand identity by registering trademarks, and protect your creative works.',
    image: '/images/offering/img4.png',
    buttonText: 'Read more',
    buttonColor: 'bg-secondary',
    link: '/intellectual-Property',
  },
]

export default function ServicesPage() {
  return (
    <section className="def-contain py-12 px-6 bg-gray-50">
      {/* Ensure this margin creates space above the header */}
      <div className="bg-gradient-to-r from-yellow-500 to-green-600 text-white py-12 px-6 shadow-lg text-center mt-16 mb-5">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <p className="text-lg mt-4">
          We simplify the U.S. visa process, focusing on three key pathways to
          residency
        </p>
      </div>
      <div className="container mx-auto">
        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-lg p-6"
            >
              <div className="relative w-full md:w-1/3 h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <button
                    className={`px-4 py-2 text-white font-medium rounded-md ${service.buttonColor} hover:opacity-80`}
                  >
                    {service.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
