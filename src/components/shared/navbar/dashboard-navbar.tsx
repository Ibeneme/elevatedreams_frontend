'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useRef, useState } from 'react'
import { FaChevronDown, FaUserCircle } from 'react-icons/fa'
import MobileDasboardNavbar from './mobile/mobile-navbar'

const DashboardNavbar: FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [username, setUsername] = useState<string>('Wumi Innocent')
  const [status, setStatus] = useState<string>('Active')
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)

  // Create a ref for the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null)

  const linksData = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Explore Courses', url: '/courses' },
  ]

  const toggleDropdown = () => {
    setDropDownOpen(!dropDownOpen)
  }

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDownOpen(false)
      }
    }

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <nav className="flex items-center justify-between py-2 px-6 bg-white">
      {/* Left Section (Logo) */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={'/images/logo.png'}
            alt={'Logo'}
            width={1200}
            height={900}
            className="w-20 object-cover"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-10 text-gray-600 text-sm font-medium ml-auto pr-8">
        {linksData.map((link) => (
          <li key={link.url} className="hover:text-red-600 cursor-pointer">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Right Section (Profile) */}
      <div className="hidden lg:flex relative items-center space-x-4">
        {profileImage ? (
          <Image
            src={profileImage}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <FaUserCircle className="text-4xl text-gray-400" />
        )}
        <div className="text-right">
          <span className="block text-sm font-medium">{username}</span>
          <span className="block text-xs text-gray-500">{status}</span>
        </div>
        <FaChevronDown
          className="text-red-600 cursor-pointer"
          onClick={toggleDropdown}
        />

        {/* Dropdown Menu */}
        {dropDownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-36 w-40 bg-white border border-gray-200 rounded shadow-lg z-50"
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <MobileDasboardNavbar />
      </div>
    </nav>
  )
}

export default DashboardNavbar
