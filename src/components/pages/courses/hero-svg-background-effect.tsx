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
          d="M0 80 C 300 120, 600 40, 900 80 S 1440 160 2000 80"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 160 C 300 200, 600 120, 900 160 S 1440 240 2000 160"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 240 C 300 280, 600 200, 900 240 S 1440 320 2000 240"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 320 C 300 360, 600 280, 900 320 S 1440 400 2000 320"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 400 C 300 440, 600 360, 900 400 S 1440 480 2000 400"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 480 C 300 520, 600 440, 900 480 S 1440 550 2000 480"
        />
        <path
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
          d="M0 560 C 300 600, 600 520, 900 560 S 1440 630 2000 560"
        />
      </svg>
    </div>
  )
}

export default SvgEffect
