//navbar/mobile/mobile-navbar.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'

const MobileDasboardNavbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null) // Create a ref for the dropdown

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const linksData = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Explore Courses', url: '/courses' },
    { name: 'Profile', url: '/profile' },
    { name: 'Logout', url: '/logout' },
  ]

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside)

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <nav className="md:hidden flex items-center justify-between py-2 px-4 bg-white">
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        {/* <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="w-20 object-cover"
            width={1200}
            height={900}
          />
        </Link> */}
      </div>

      {/* Hamburger Icon */}
      <div className="relative">
        <HiMiniBars3BottomRight
          className="text-gray-600 text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          ref={dropdownRef} // Attach the ref here
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50"
        >
          <ul className="py-2">
            {linksData.map((link) => (
              <li
                key={link.url}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MobileDasboardNavbar
