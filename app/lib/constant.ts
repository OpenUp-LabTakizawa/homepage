import type { Menu } from "@/app/interfaces/menu"
import {
  EnvelopeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"

export const SITE_TITLE: string = "OPENUP ラボ滝沢"

export const INFO: Menu = {
  name: "最新情報",
  href: "/info",
  color: "text-primary",
  icon: NewspaperIcon,
}
export const ABOUT: Menu = {
  name: "ラボ滝沢とは？",
  href: "/about",
  color: "text-accent",
  icon: QuestionMarkCircleIcon,
}
export const MEMBER: Menu = {
  name: "メンバー",
  href: "/member",
  color: "text-secondary",
  icon: UserGroupIcon,
}
export const CONTACT: Menu = {
  name: "お問い合わせ",
  href: "/contact",
  color: "text-info",
  icon: EnvelopeIcon,
}

export const NAVIGATION: Menu[] = [INFO, ABOUT, MEMBER, CONTACT] as const
