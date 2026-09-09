import Eb1Details from '@/components/shared/eb1/eb1-details'
import Video from '@/components/shared/immigration/video'

import React from 'react'

function page() {
  return (
    <div style={{ marginTop: '150px' }}>
      <h1 className="text-center font-bold text-5xl text-secondary">
        EB1 Visa (Employment-Based First Preference)
      </h1>
      <Video />
      <Eb1Details />
    </div>
  )
}

export default page
