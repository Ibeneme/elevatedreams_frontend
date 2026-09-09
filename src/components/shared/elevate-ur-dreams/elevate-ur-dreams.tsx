'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaCogs, FaUserTie } from 'react-icons/fa'

const ElevateYourDreams = () => {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-12 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
        {isPlaying ? (
          <iframe
            className="w-full h-64 lg:h-[400px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/WeYlxX8LHe8?autoplay=1"
            title="YouTube Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Image
              src="/images/video-placeholder.jpg"
              alt="Happy Family"
              width={1200}
              height={900}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                onClick={handlePlayVideo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3v18l15-9L5 3z"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-5">
        <h1 className="text-3xl lg:text-4xl font-bold leading-snug">
          How we <span className="text-secondary italic">Operate</span>
        </h1>

        {/* Features */}
        <div className="flex flex-col lg:flex-row mt-6 space-y-6 lg:space-y-0 lg:space-x-8">
          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaCogs size={30} />
              <h3 className="text-lg font-semibold ml-2">
                Complete Application <br /> and Business Support
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              From preparing documents to liaising with U.S. authorities, we
              handle every step of the process, whether it’s immigration,
              business setup, or IP registration.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaUserTie size={20} />
              <h3 className="text-lg font-semibold ml-2">
                Personalized Consultations
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              We take the time to understand your unique situation and craft the
              best strategy for your journey.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaUserTie size={20} />
              <h3 className="text-lg font-semibold ml-2">Ongoing Guidance</h3>
            </div>
            <p className="mt-2 text-gray-600">
              We stay by your side even after submission, keeping you updated
              and helping with any follow-ups or adjustments needed.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-green-600"
            onClick={() => router.push('/about-us')}
          >
            MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  )
}

export default ElevateYourDreams
