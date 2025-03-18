import { ScrollToTop } from "@/app/components/button/scrollToTop"
import { Footer } from "@/app/components/layout/footer"
import { Header } from "@/app/components/layout/header"
import { SITE_TITLE } from "@/app/lib/constant"
import type { Metadata } from "next"
import {
  type JSX,
  type ReactNode,
  unstable_ViewTransition as ViewTransition,
} from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: "地域に寄り添った社会課題解決コミュニティ",
  metadataBase: new URL("https://openuplab-takizawa.com"),
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="ja">
      <body>
        <ViewTransition>
          <Header />
          <main>
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </ViewTransition>
      </body>
    </html>
  )
}
