import Link from 'next/link'
import React from 'react'

type LinkItem = {
  label: string
  href: string
}

type FooterLinksProps = {
  links: LinkItem[]
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li
          key={index}
          className="mb-4 text-footerText font-extralight md:text-lg hover:text-gray-400"
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
