'use client'
import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scrollbar-thin scrollbar-thumb-MyColor01" lang="pt-br">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>{children}</NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
