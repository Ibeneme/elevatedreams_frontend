import Eb5Details from '@/components/shared/eb5/eb5-details'
import Video from '@/components/shared/immigration/video'

import React from 'react'

function page() {
  return (
    <div style={{ marginTop: '150px' }}>
      <h1 className="text-center font-bold text-5xl text-secondary">
        EB-5 Visa: Investing in U.S. Permanent Residency
      </h1>
      <Video />
      <Eb5Details />
    </div>
  )
}

export default page
