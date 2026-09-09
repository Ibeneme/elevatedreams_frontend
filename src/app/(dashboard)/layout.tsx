import DashboardFooter from '@/components/shared/footer/dashboard-footer'
import DashboardNavbar from '@/components/shared/navbar/dashboard-navbar'
import React from 'react'

export default function dashboardLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <>
      <DashboardNavbar />
      <div>{children}</div>
      <DashboardFooter />
    </>
  )
}
