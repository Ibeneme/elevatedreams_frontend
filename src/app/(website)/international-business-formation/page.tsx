import Video from '@/components/shared/immigration/video'
import InternationBusinessDetails from '@/components/shared/internation-business-formation/internation-business-formation'
import React from 'react'

function InternationBusiness() {
  return (
    <div style={{ marginTop: '150px' }}>
      <h1 className="text-center font-bold text-5xl text-secondary">
        Internation Business Formation
      </h1>
      <Video />
      <InternationBusinessDetails />
    </div>
  )
}

export default InternationBusiness
