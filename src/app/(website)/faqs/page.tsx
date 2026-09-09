import FaqPage from '@/components/pages/home/faq-page/faq'
import React from 'react'

function page() {
  return (
    <div>
      {/* Ensure this margin creates space above the header */}
      <div className="bg-gradient-to-r from-yellow-500 to-green-600 text-white py-12 px-6 shadow-lg text-center mt-16">
        <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
        <p className="text-lg mt-4">
          Find answers to common questions about our services
        </p>
      </div>

      <FaqPage />
    </div>
  )
}

export default page
