import React from 'react'

const SvgEffect = () => {
  return (
    <div>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 80 C 300 120, 600 40, 900 80 S 1440 160 1800 80"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 160 C 300 200, 600 120, 900 160 S 1440 240 1800 160"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 240 C 300 280, 600 200, 900 240 S 1440 320 1800 240"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 320 C 300 360, 600 280, 900 320 S 1440 400 1800 320"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 400 C 300 440, 600 360, 900 400 S 1440 480 1800 400"
        />
      </svg>
    </div>
  )
}

export default SvgEffect
