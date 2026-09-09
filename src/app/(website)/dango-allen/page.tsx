'use client'

import Image from 'next/image'

export default function TeamMemberBio2() {
  return (
    <section className="def-contain mx-auto px-10 py-12 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <Image
              src="/images/team/member2.png"
              alt="Lorraine Birabil, Esq."
              layout="fill"
              objectFit="cover" // "contain" works too, but may leave whitespace
              objectPosition="top center" // Adjusts positioning to show the head
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Dango Allen.
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Dango Michael Allen is a licensed US attorney and Certified Public
              Accountant (CPA) with extensive experience in tax law, audit,
              compliance, and international business. An indigene of Rivers
              State, Nigeria, Dango brings a unique global perspective to his
              practice. Based in the North Texas region of the United States,
              Dango combines legal expertise with a strong background in
              accounting, serving clients with complex business and immigration
              needs, including EB1, EB2, and EB5 visa applications. He has over
              a decade of experience with the Texas Comptroller of Public
              Accounts and additional legal experience in tax dispute
              resolution, estate planning, business compliance, and cross-border
              transactions.
            </p>
            <p className="text-gray-600 mb-4">
              Dango holds a Juris Doctor from Texas A&M University School of Law
              and a Master of Business Administration in Accounting from
              Pittsburg State University. He also earned a Master’s Degree in
              Tax at the University of Texas at Arlington. Dango has been
              admitted to the Texas State Bar, and he is known for his detailed
              approach to resolving tax controversies, including successful
              negotiations on tax liens, levies, payment agreements, and
              innocent spouse relief. He has also advised international clients
              on tax com pliance and planning, leveraging his understanding of
              global tax regulations.
            </p>
            <p className="text-gray-600 mb-4">
              As the founder of the Law Office of Dango Allen PLLC in the United
              States, he has represented clients in areas such as State and
              Federal Tax Controversies, immigration, estate planning, contract
              disputes, and international business. His practice extends to
              assisting clients with EB1, EB2, and EB5 visa applications,
              guiding them through the complex U.S. immigration system. He also
              focuses on community education and outreach, providing legal
              support to underserved communities, including immigrants and
              international business owners.
            </p>
            <p className="text-gray-600 mb-4">
              Before launching Elevate Dreams, Dango served as an Auditor with
              the Texas Comptroller of Public Accounts. He led audit engagements
              for business entities, verified compliance with state statutes,
              trained junior auditors, and defended audits in court where he
              showcased his expertise in tax and accounting compliance. His
              experience with international clients and cross-border financial
              matters has positioned him as a valuable resource for those
              navigating the complexities of global business and U.S.
              immigration law.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
