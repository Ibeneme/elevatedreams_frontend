'use client'

import Image from 'next/image'

export default function TeamMemberBio() {
  return (
    <section className="def-contain mx-auto px-10 py-12 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <Image
              src="/images/team/member1.png"
              alt="Lorraine Birabil, Esq."
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Lorraine Birabil, Esq.
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Attorney Lorraine Birabil has made exceptional contributions to
              the practice of law and her community over the years. She has
              served in various capacities at the federal, state, and local
              levels of government, helping to shape legislation and policy.
            </p>
            <p className="text-gray-600 mb-4">
              Lorraine has worked with businesses ranging from startups to
              Fortune 100 companies, assisting them in navigating challenging
              legal situations. She has also played a pivotal role in election
              law litigation for over a decade, contributing to major reforms in
              Texas election policies.
            </p>
            <p className="text-gray-600 mb-4">
              Her passion for justice and public service led to her tenure as a
              state legislator, where she focused on healthcare, education,
              economic opportunity, and justice reform. She has mentored young
              professionals interested in public service and continues to
              advocate for community-driven policies.
            </p>
            <p className="text-gray-600 mb-4">
              Lorraine earned her Bachelor of Science in Biology and a Bachelor
              of Arts in Political Science from the University of North Texas.
              She received her Juris Doctor from Texas A&M University School of
              Law with an Intellectual Property Concentration.
            </p>
            <p className="text-gray-600 mb-4">
              As the founder of the Elaine Law Group, PLLC, Lorraine continues
              to provide dedicated legal services to individuals and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
