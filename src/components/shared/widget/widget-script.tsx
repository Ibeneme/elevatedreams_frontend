'use client'
import { useEffect } from 'react'

const WidgetScript = () => {
  useEffect(() => {
    console.log('Injecting widget script...')
    const widgetScript = document.createElement('script')
    widgetScript.src =
      'https://mfyhaltgnrxxo5dsmfrwwltdn4rts43snzrxki32gy3hkmtr.apiii.co/api/widget/0BD93a95A38Af907572F0ce53CEC65c5'
    widgetScript.defer = true
    widgetScript.async = true
    document.head.appendChild(widgetScript)

    widgetScript.onload = () => {
      console.log('Widget script loaded successfully.')
    }

    widgetScript.onerror = () => {
      console.error('Error loading widget script.')
    }

    return () => {
      console.log('Cleaning up widget script...')
      document.head.removeChild(widgetScript)
    }
  }, [])

  return null // This component does not render any UI
}

export default WidgetScript
