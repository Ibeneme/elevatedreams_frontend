import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function InvestmentDetails() {
  return (
    <div className="mb-28 ">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          Your ideas and creations are valuable. Protect them with our
          intellectual property services:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Trademark Registration:
            </h2>
            <p className="text-gray-700 mt-2">
              Safeguard your brand identity by registering trademarks in the
              U.S.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Copyright Registration:
            </h2>
            <p className="text-gray-700 mt-2">
              Protect your creative works, including film, music, art, and
              literature.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
}

export default InvestmentDetails
