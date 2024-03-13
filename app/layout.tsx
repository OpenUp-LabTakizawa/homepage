import type { Metadata } from 'next'
import type React from 'react'
import { Footer } from './footer'
import './globals.css'
import { Navbar } from './navbar'

export const metadata: Metadata = {
  title: 'OPENUP ラボ滝沢',
  description: '地域に寄り添った社会課題解決コミュニティ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
