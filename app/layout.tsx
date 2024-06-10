import type { Metadata } from "next"
import type React from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import "./globals.css"
import { ScrollToTop } from "./components/scrollToTop"
import { SITE_TITLE } from "./lib/constant"

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "地域に寄り添った社会課題解決コミュニティ",
  metadataBase: new URL("https://openuplab-takizawa.jp"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  )
}
