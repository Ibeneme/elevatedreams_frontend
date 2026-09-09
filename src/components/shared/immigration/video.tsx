'use client'
import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

function Video() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-4xl h-96 rounded-2xl border-4 border-orange-500 overflow-hidden">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/WeYlxX8LHe8?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="w-full h-full bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url('/images/video-placeholder.jpg')" }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                className="bg-secondary text-white w-16 h-16 rounded-full flex justify-center items-center shadow-lg hover:bg-green-600"
                onClick={() => setIsPlaying(true)}
              >
                <FaPlay className="text-3xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Video
