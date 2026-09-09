import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function ImmigrationDetails() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IMMIGRATION</h1>
        <p className="text-lg text-gray-700 mb-6">
          We simplify the process of building a life and business in the United
          States, focusing on three key pathways:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • EB1 Visa (Employment-Based First Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              Ideal for individuals with extraordinary abilities in arts,
              sciences, business, or athletics. Also available for outstanding
              professors, researchers, and multinational executives or managers.
              This visa allows you to apply based on your accomplishments, with
              no job offer required.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • EB2 Visa (Employment-Based Second Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              For individuals with advanced degrees or exceptional talents. The
              National Interest Waiver (NIW) pathway allows applicants to bypass
              the job offer requirement if their work significantly benefits the
              U.S.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              EB5 Visa (Employment-Based Fifth Preference):
            </h2>
            <p className="text-gray-700 mt-2">
              This visa is designed for entrepreneurs who create jobs for U.S.
              workers. By investing in an approved U.S. business, you can secure
              permanent residency for yourself and your family while
              contributing to economic growth.
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

export default ImmigrationDetails
