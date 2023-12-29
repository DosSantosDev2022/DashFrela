import React from 'react'
import HeaderDash from '@/components/dashboard/layout/Header/header'
import SideBar from '@/components/dashboard/layout/SideBar/sidebar'
import { NextAuthProvider } from '@/providers/auth'

export default function DashboardLayout({
  children, // será uma página ou um layout aninhado
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <section className="flex flex-row w-screen h-screen overflow-hidden ">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <HeaderDash />
          <div className="flex-1 p-4 min-h-0 overflow-auto  scrollbar-thin scrollbar-thumb-primary">
            {children}
          </div>
        </div>
      </section>
    </NextAuthProvider>
  )
}
