import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import type React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <div className="hero min-h-screen bg-[url('/iwate_mountain.webp')]">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 font-bold text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">
            <span className="mb-5 font-bold text-5xl text-primary">
              テクノロジー
            </span>
            で
            <br />
            <span className="mb-5 font-bold text-5xl text-accent">
              地域貢献
            </span>
            に取り組む
          </h1>
          <p className="mb-5">
            岩手県立大学と滝沢市が産官学連携を目的として設立した滝沢市IPUイノベーションセンターにOPEN
            UPラボ滝沢は入居しています。
          </p>
          <p className="mb-5">
            ラボを取り巻くコミュニティとの協働や新たな取り組みで連携し、地域社会への貢献を行っています。
          </p>
          <Link
            href="/about"
            className="[&:not(:hover)]:animate-bounce btn btn-warning"
          >
            <QuestionMarkCircleIcon className="size-5 text-accent" />
            ラボ滝沢とは？
          </Link>
        </div>
      </div>
    </div>
  )
}
