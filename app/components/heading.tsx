import { Breadcrumb } from "@/app/components/breadcrumb"
import type { Navigation } from "@/app/interfaces/navigation"
import {
  EnvelopeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import type React from "react"

export const navigation: Navigation[] = [
  {
    name: "最新情報",
    href: "/info",
    color: "text-primary",
    icon: NewspaperIcon,
  },
  {
    name: "ラボ滝沢とは？",
    href: "/about",
    color: "text-accent",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "メンバー",
    href: "/member",
    color: "text-secondary",
    icon: UserGroupIcon,
  },
  {
    name: "お問い合わせ",
    href: "/contact",
    color: "text-info",
    icon: EnvelopeIcon,
  },
] as const

export function Heading({ href }: { href: string }): React.JSX.Element {
  const heading: Navigation = navigation.filter((item) => item.href === href)[0]

  return (
    <>
      <div className="max-w-fit mx-auto">
        <h1 className="typing font-bold text-3xl">
          <heading.icon
            className={`inline size-9 mr-1 mb-1 ${heading.color}`}
          />
          {heading.name}
        </h1>
      </div>
      <Breadcrumb crumb={heading} />
    </>
  )
}
