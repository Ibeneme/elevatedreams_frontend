'use client'

import Image from 'next/image'

export default function TeamMemberBio2() {
  return (
    <section className="def-contain mx-auto px-10 py-12 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <Image
              src="/images/team/member3.png"
              alt="Lorraine Birabil, Esq."
              layout="fill"
              objectFit="cover" // "contain" works too, but may leave whitespace
              objectPosition="top center" // Adjusts positioning to show the head
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Evans Dule.
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Barr. Evans B. Giayetor is a seasoned legal professional with over
              13 years of experience in corporate practice and compliance law.
              Called to the Bar as a Barrister and Solicitor of the Supreme
              Court of Nigeria in 2013, he has built a distinguished career
              advising organizations on regulatory compliance, corporate
              governance, and legal risk management. His expertise extends to IT
              law, where he provides strategic legal solutions for businesses
              navigating the evolving digital landscape.
            </p>
            <p className="text-gray-600 mb-4">
              A Nigerian national based in Rivers State, Barr. Evans has gained
              valuable international exposure, having traveled to five different
              countries and attended various conferences and seminars. These
              experiences have enriched his ability to work with diverse
              cultures and legal systems, enhancing his approach to global
              corporate law.
            </p>
            <p className="text-gray-600 mb-4">
              Having served as a Principal Legal Officer with the Hydrocarbon
              Pollution Remediation Project (HYPREP) under the Federal Ministry
              of Environment, he has spent the past eight years playing a key
              role in environmental and corporate legal compliance. His work
              ensures that organizations operate within legal frameworks while
              addressing critical regulatory and environmental concerns.
            </p>
            <p className="text-gray-600 mb-4">
              Barr. Evans holds a Master of Laws (LLM) and a Bachelor of Laws
              (LLB) from the University of the West of England, Bristol, United
              Kingdom. His academic background, coupled with extensive practical
              experience, positions him as a trusted advisor in corporate law,
              compliance, and IT-related legal matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
