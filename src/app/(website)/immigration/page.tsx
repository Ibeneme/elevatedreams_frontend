import React from 'react'
import ImmigrationDetails from '../../../components/shared/immigration/immigration-details'
import Video from '../../../components/shared/immigration/video'

function Immigration() {
  return (
    <div style={{ marginTop: '150px' }}>
      <h1 className="text-center text-5xl text-secondary">Immigration</h1>
      <Video />
      <ImmigrationDetails />
    </div>
  )
}

export default Immigration
