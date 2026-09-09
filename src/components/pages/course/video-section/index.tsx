'use client'

import { useWindowSize } from '@/lib/hooks/useResize'
import { motion } from 'framer-motion'
import { MicIcon, MicOffIcon } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import OtherDetails from './other-details'

type Props = {
  amount: string
  discount?: string
  duration: string
  category: string
  mode: string
  level: string
  videoUrl: string
  imgUrl: string
}

const VideoSection: FC<Props> = ({
  amount,
  discount,
  duration,
  category,
  mode,
  level,
  imgUrl,
  videoUrl,
}) => {
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    setMuted(!muted)
  }

  const {
    windowSize: { width },
  } = useWindowSize()

  return (
    <motion.div
      initial={{ opacity: 0, translateX: 100 }}
      whileInView={{ opacity: [0, 1], translateX: [100, 0] }}
      animate={{ opacity: [0, 1], translateX: [100, 0] }}
      transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className={`absolute border-1 border-gray-300 h-fit bg-white z-10 top-[280px] md:top-[300px] lg:top-[150px] lg:-bottom-10 lg:right-0 right-0 l mx-4 md:mx-8 lg:mx-0 lg:l lg:absolute-contain`}
    >
      <div className=" min-w-[280px] relative">
        <video
          src={videoUrl}
          poster={imgUrl}
          preload="auto"
          autoPlay
          muted={muted} // Mute the video initially to allow autoplay
          loop
          // onLoadedData={handleLoadedData}
          // onEnded={handleWaiting}
          // onWaiting={handleWaiting}
          controls={false}
          className="lg:w-[400px] w-full"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Unmute button */}
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 z-40 bg-white p-1 text-gray-500 rounded-full"
        >
          {muted ? <MicOffIcon size={16} /> : <MicIcon size={16} />}
        </button>
      </div>
      <OtherDetails
        amount={amount}
        duration={duration}
        category={category}
        mode={mode}
        level={level}
        discount={discount}
      />
    </motion.div>
  )
}

export default VideoSection
