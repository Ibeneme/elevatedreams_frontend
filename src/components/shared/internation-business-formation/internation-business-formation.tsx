import React from 'react'
import ConsultationButton from '../consultation-button/book-consultation-button'

function BusinessFormationDetails() {
  return (
    <div className="flex justify-center items-center min-h-screen mb-5">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          International Business Formation
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At Elevate Dreams, we offer comprehensive support to help individuals
          and businesses establish a foothold in the United States. Our services
          include:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Business Registration::
            </h2>
            <p className="text-gray-700 mt-2">
              Guiding you through registering your business entity in the U.S.,
              ensuring compliance with all legal and regulatory requirements.
            </p>
          </div>

          {/* <div>
            <h2 className="text-lg font-semibold text-gray-900">
              • Setting Up Physical Offices:
            </h2>
            <p className="text-gray-700 mt-2">
              Establishing a physical presence in the U.S. is a key step for
              many businesses. We assist in every stage of the process, from
              scouting the perfect location to ensuring your office meets your
              specific needs. Whether you’re looking for office space in a
              bustling city center or a more serene business environment, we
              help identify the best options that align with your goals and
              objectives.
            </p>
          </div> */}

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Lease Agreements:
            </h2>
            <p className="text-gray-700 mt-2">
              If you elect to set up a physical office, we can guide you through
              the lease agreement process. Our team helps negotiate favorable
              terms, ensuring you understand all the details, from rent and
              maintenance costs to the length of the lease and renewal options.
              We ensure your lease aligns with your business strategy and
              protects your interests as you establish your U.S. operations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Partnership:
            </h2>
            <p className="text-gray-700 mt-2">
              Helping you identify and establish partnerships with U.S. firms
              that align with your business goals. We ensure a smooth
              collaboration, from selecting the right partner to structuring
              agreements. Our team guides you through all legal and operational
              aspects, creating a strong foundation for a successful, mutually
              beneficial partnership.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Bank Account Opening:
            </h2>
            <p className="text-gray-700 mt-2">
              Navigating the complexities of opening business bank accounts in
              the U.S., providing guidance on required documentation and
              processes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Virtual Office Space:
            </h2>
            <p className="text-gray-700 mt-2">
              For businesses not ready for a physical office, we offer solutions
              to establish a virtual presence with a professional address and
              communication services.
            </p>
          </div>

          {/* <div>
            <h2 className="text-lg font-semibold text-gray-900">
              ⁠Intellectual Property Registration:
            </h2>
            <p className="text-gray-700 mt-2">
              Protect your innovations and brand by registering trademarks,
              copyrights, and patents in the U.S.
            </p>
          </div> */}

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              ⁠⁠Customized Solutions:
            </h2>
            <p className="text-gray-700 mt-2">
              We understand that every client’s needs are unique. Book a
              consultation, and tell us what you want. We will craft a tailored
              solution to make your vision a reality.
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

export default BusinessFormationDetails
