import type { Navigation } from "@/app/interfaces/navigation"
import {
  EnvelopeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "OPENUP ラボ滝沢"

export const INFO: Navigation = {
  name: "最新情報",
  href: "/info",
  color: "text-primary",
  icon: NewspaperIcon,
}
export const ABOUT: Navigation = {
  name: "ラボ滝沢とは？",
  href: "/about",
  color: "text-accent",
  icon: QuestionMarkCircleIcon,
}
export const MEMBER: Navigation = {
  name: "メンバー",
  href: "/member",
  color: "text-secondary",
  icon: UserGroupIcon,
}
export const CONTACT: Navigation = {
  name: "お問い合わせ",
  href: "/contact",
  color: "text-info",
  icon: EnvelopeIcon,
}

export const navigation: Navigation[] = [INFO, ABOUT, MEMBER, CONTACT] as const
