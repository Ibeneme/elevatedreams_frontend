'use client'
import React from 'react'
import { socialLinks } from './footer'
import SocialLinks from './footer-social-links'

const DashboardFooter = () => {
  return (
    <footer className="bg-gray-100 py-4 flex flex-col items-center justify-center">
      {/* Social Icons */}
      <div className="flex space-x-4 mb-4">
        <SocialLinks links={socialLinks} />
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-600">
        © 2024 Built by Collabogig Innovations. All rights reserved.
      </p>
    </footer>
  )
}

export default DashboardFooter
