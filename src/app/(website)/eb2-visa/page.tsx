import Eb2Details from '@/components/shared/eb2/eb2-details'
import Video from '@/components/shared/immigration/video'

import React from 'react'

function page() {
  return (
    <div style={{ marginTop: '150px' }}>
      <h1 className="text-center font-bold text-5xl text-secondary">
        EB2 Visa (Employment-Based Second Preference)
      </h1>
      <Video />
      <Eb2Details />
    </div>
  )
}

export default page
