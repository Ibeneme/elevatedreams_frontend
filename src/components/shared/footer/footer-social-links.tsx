import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'

type SocialLink = {
  icon: JSX.Element
  href: string
}

type SocialLinksProps = {
  links: SocialLink[]
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-6 mb-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
