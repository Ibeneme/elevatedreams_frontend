import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function Eb2Details() {
  return (
    <div className="flex justify-center items-center min-h-screen mb-5">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unlocking Opportunities for Advanced Professionals and Individuals
          with Exceptional Ability
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The EB-2 visa is a second-preference employment-based immigrant visa
          category in the United States, tailored for individuals who either
          hold advanced degrees or possess exceptional abilities in their
          professional fields. This visa offers a pathway to permanent
          residency, enabling qualified individuals to contribute their
          expertise to the U.S. economy and society.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Who Qualifies for the EB-2 Visa?
            </h2>
            <p className="text-gray-700 mt-2">
              The EB-2 visa encompasses two primary categories:
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Advanced Degree Professionals
            </h2>
            <p className="text-gray-700 mt-2">
              This category is for individuals who have obtained an advanced
              degree beyond a bachelor&apos;s, such as a master&apos;s or
              doctorate. Alternatively, a bachelor&apos;s degree followed by at
              least five years of progressive, post-bachelor&apos;s experience
              in the field can be considered equivalent to an advanced degree.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Individuals with Exceptional Ability
            </h2>
            <p className="text-gray-700 mt-2">
              This category targets those who have demonstrated exceptional
              ability in the sciences, arts, or business. &quot;Exceptional
              ability&quot; refers to a degree of expertise significantly above
              that ordinarily encountered in the respective field.
            </p>

            <p>
              Additionally, certain EB-2 applicants may qualify for a{' '}
              <strong>National Interest Waiver (NIW)</strong>, which allows the
              usual job offer and labor certification requirements to be waived
              if the applicant&apos;s work is of substantial merit and national
              importance to the United States.
            </p>
          </div>

          <div>
            <p className="font-bold text-4xl mb-4">Application Process</p>

            <p className="mb-3">
              The EB-2 visa application involves several key steps:
            </p>

            <h2 className="text-lg font-semibold text-gray-900">
              1. Labor Certification (PERM):
            </h2>
            <p className="text-gray-700 mt-2">
              Generally, the U.S. employer must obtain a labor certification
              from the Department of Labor, confirming there are no qualified
              U.S. workers for the position and that hiring a foreign worker
              will not adversely affect U.S. worker&apos;s wages and working
              conditions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Immigrant Petition (Form I-140):
            </h2>
            <p className="text-gray-700 mt-2">
              Once labor certification is approved, the employer files Form
              I-140, Petition for Alien Worker, on behalf of the applicant. For
              those seeking a National Interest Waiver, individuals can
              self-petition by filing Form I-140 directly.
            </p>
          </div>

          <div>
            <p className="font-bold text-4xl mb-4">Statistical Insights</p>
            <p className="text-gray-700 mt-2">
              The EB-2 visa category is highly sought after due to its benefits,
              including the potential for a National Interest Waiver and a clear
              path to permanent residency. In Fiscal Year 2024, the numerical
              limit for employment-based preference immigrants was 160,791,
              covering all EB visa categories.
            </p>

            <p>
              The EB-2 category reached its annual limit before the end of the
              fiscal year, underscoring the importance of timely and
              well-prepared applications.
            </p>
          </div>

          <div>
            <p className="font-bold text-4xl mb-4">
              Take the Next Step with Elevate Dreams
            </p>
            <p className="text-gray-700 mt-2">
              Embarking on the EB-2 visa journey can be complex, requiring
              careful navigation of legal and procedural requirements. Elevate
              Dreams is committed to assisting you throughout this process, from
              evaluating your qualifications to preparing and submitting a
              compelling application. Book a consultation today to explore your
              eligibility and take the first step toward achieving your U.S.
              immigration goals.
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

export default Eb2Details
