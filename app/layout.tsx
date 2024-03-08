import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'
import { Sawarabi_Gothic } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Sawarabi_Gothic({
  subsets: ['latin'],
  weight: '400',
})

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
