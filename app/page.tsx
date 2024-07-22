import { ABOUT, SITE_TITLE } from "@/app/lib/constant"
import Link from "next/link"
import type { JSX } from "react"

export default function Home(): JSX.Element {
  return (
    <article className="hero min-h-screen bg-[url('/iwate_mountain.avif')]">
      <div className="hero-overlay bg-opacity-70" />
      <section className="hero-content gap-4 grid text-center text-neutral-content">
        <h1 className="font-bold max-w-fit text-3xl typing">
          <span className="text-5xl text-primary">テクノロジー</span>
          で
          <br />
          <span className="text-5xl text-accent">地域貢献</span>
          に取り組む
        </h1>
        <p>
          岩手県立大学と滝沢市が
          <br />
          産官学連携を目的として設立した
          <br />
          滝沢市IPUイノベーションセンターに
          <br />
          {SITE_TITLE}は入居しています。
        </p>
        <p>
          ラボを取り巻くコミュニティとの協働や
          <br />
          新たな取り組みで連携し、
          <br />
          地域社会への貢献を行っています。
        </p>
        <Link
          href="/about"
          className="[&:not(:hover)]:animate-bounce btn btn-warning mx-auto w-fit"
        >
          <ABOUT.icon className={`size-5 ${ABOUT.color}`} />
          {ABOUT.name}
        </Link>
      </section>
    </article>
  )
}
