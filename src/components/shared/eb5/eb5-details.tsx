import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function Eb5Details() {
  return (
    <div className="flex justify-center items-center min-h-screen mb-5">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <p className="text-lg text-gray-700 mb-6">
          The EB-5 Immigrant Investor Program offers a pathway to U.S. permanent
          residency for foreign nationals who make qualifying investments in the
          United States. Established by Congress in 1990, the program aims to
          stimulate the U.S. economy through job creation and capital investment
          by foreign investors.
        </p>

        <p className="font-bold text-4xl mb-4">Eligibility Criteria</p>

        <p>
          To qualify for an EB-5 visa, applicants must meet specific investment
          and job creation requirements:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              1. Investment Amount
            </h2>
            <p className="text-gray-700 mt-2">
              <strong>• Standard Investment: </strong>The EB-1 visa is divided
              into three categories, each catering to different types of
              applicants:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>• Targeted Employment Area (TEA) Investment: </strong>A
              reduced minimum of $900,000 if the investment is made in a TEA,
              which includes rural areas or regions with high unemployment.
              USCIS
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              2. Job Creation
            </h2>
            <p className="text-gray-700 mt-2">
              • The investment must create or preserve at least 10 full-time
              jobs for qualifying U.S. workers within two years of the
              investor&apos;s admission to the United States as a conditional
              permanent resident. USCIS
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              3. New Commercial Enterprise
            </h2>
            <p className="text-gray-700 mt-2">
              • The investment must be in a for-profit entity formed for the
              ongoing conduct of lawful business. USCIS
            </p>
          </div>

          <div>
            <p className="font-bold text-4xl mb-4">Application Process</p>

            <p className="mb-3">
              The EB-5 application process involves several key steps:
            </p>

            <h2 className="text-lg font-semibold text-gray-900">
              1. Filing Form I-526:
            </h2>
            <p className="text-gray-700 mt-2">
              • The prospective investor submits Form I-526, Immigrant Petition
              by Alien Investor, to U.S. Citizenship and Immigration Services
              (USCIS), providing evidence of the investment and job creation
              plans. Travel.gov
            </p>
            <h2 className="text-lg font-semibold text-gray-900 mt-3">
              2. Conditional Permanent Residency
            </h2>
            <p className="text-gray-700 mt-2">
              • Upon approval of the I-526 petition, the investor applies for a
              two-year conditional permanent resident status. Travel.gov
            </p>
            <h2 className="text-lg font-semibold text-gray-900 mt-3">
              3. Filing Form I-829
            </h2>
            <p className="text-gray-700 mt-2">
              • Within the 90-day period before the second anniversary of
              obtaining conditional status, the investor files Form I-829,
              Petition by Investor to Remove Conditions on Permanent Resident
              Status, demonstrating that the investment criteria have been met.
            </p>
          </div>
          <div>
            <p className="font-bold text-4xl mb-4">
              Recent Developments and Statistics
            </p>

            <p className="mb-3">
              In recent years, the EB-5 program has seen significant activity:
            </p>

            <p className="text-gray-700 mt-2">
              • <strong>Increased Demand:</strong> Fiscal Year 2024 experienced
              a record-breaking number of EB-5 visa issuances, with all
              unreserved EB-5 visa numbers fully utilized by August 2024. Invest
              In the USA
            </p>

            <p className="text-gray-700 mt-2">
              <strong>• Processing Updates: </strong> The U.S. Citizenship and
              Immigration Services (USCIS) has updated its policy manual to
              provide guidance on the integrity measures introduced by the EB-5
              Reform and Integrity Act, emphasizing compliance and due diligence
              for investors and associated entities. Reuters
            </p>
          </div>

          <p className="font-bold text-4xl mb-4">
            Take the Next Step with Elevate Dreams
          </p>
          <p>
            Navigating the EB-5 visa process requires careful planning and
            adherence to detailed requirements. Elevate Dreams is dedicated to
            assisting you through each phase, from evaluating your investment
            options to preparing and submitting your application. Book a
            consultation today to explore how we can help you achieve your U.S.
            immigration objectives.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <ConsultationButton />
        </div>
      </div>
    </div>
  )
}

export default Eb5Details
