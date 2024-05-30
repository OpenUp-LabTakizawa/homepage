import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import type React from 'react'
import type { Navigation } from '../interfaces/navigation'
import type { Theme } from '../interfaces/theme'
import { metadata } from '../layout'

export const navigation: Navigation[] = [
  {
    name: '最新情報',
    href: '/info',
    color: 'text-primary',
    icon: NewspaperIcon,
  },
  {
    name: 'ラボ滝沢とは？',
    href: '/about',
    color: 'text-accent',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: 'メンバー',
    href: '/member',
    color: 'text-secondary',
    icon: UserGroupIcon,
  },
  {
    name: 'お問い合わせ',
    href: '/contact',
    color: 'text-info',
    icon: EnvelopeIcon,
  },
] as const

const themes: Theme[] = [
  { name: 'デフォルト', value: 'light' },
  { name: 'ダーク', value: 'dark' },
  { name: 'カップケーキ', value: 'cupcake' },
  { name: 'マルハナバチ', value: 'bumblebee' },
  { name: 'エメラルド', value: 'emerald' },
  { name: 'コーポレート', value: 'corporate' },
  { name: 'シンセウェイブ', value: 'synthwave' },
  { name: 'レトロ', value: 'retro' },
  { name: 'サイバーパンク', value: 'cyberpunk' },
  { name: 'バレンタイン', value: 'valentine' },
  { name: 'ハロウィン', value: 'halloween' },
  { name: 'ガーデン', value: 'garden' },
  { name: 'フォレスト', value: 'forest' },
  { name: 'アクア', value: 'aqua' },
  { name: 'ローファイ', value: 'lofi' },
  { name: 'パステル', value: 'pastel' },
  { name: 'ファンタジー', value: 'fantasy' },
  { name: 'ワイヤーフレーム', value: 'wireframe' },
  { name: 'ブラック', value: 'black' },
  { name: 'ラグジュアリー', value: 'luxury' },
  { name: 'ドラキュラ', value: 'dracula' },
  { name: 'CMYK', value: 'cmyk' },
  { name: 'オータム', value: 'autumn' },
  { name: 'ビジネス', value: 'business' },
  { name: 'アシッド', value: 'acid' },
  { name: 'レモネード', value: 'lemonade' },
  { name: 'ナイト', value: 'night' },
  { name: 'コーヒー', value: 'coffee' },
  { name: 'ウィンター', value: 'winter' },
  { name: 'ディム', value: 'dim' },
  { name: 'ノール', value: 'nord' },
  { name: 'サンセット', value: 'sunset' },
] as const

export function Header(): React.JSX.Element {
  return (
    <header className="navbar sticky top-0 z-[1] bg-base-100">
      <div className="navbar-start">
        <DropdownMenu />
        <Link href="/" className="btn btn-ghost text-xl">
          {metadata.title as string}
        </Link>
      </div>
      <nav className="navbar-center hidden lg:flex">
        <NavItems />
      </nav>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </header>
  )
}

function DropdownMenu(): React.JSX.Element {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Bars3CenterLeftIcon className="size-7" />
      </div>
      <nav>
        <ul className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <item.icon className={`size-5 ${item.color}`} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

function NavItems(): React.JSX.Element {
  return (
    <ul className="menu menu-horizontal px-1">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>
            <item.icon className={`size-5 ${item.color}`} />
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ThemeController(): React.JSX.Element {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        テーマ
        <ChevronDownIcon className="size-5" />
      </div>
      <ul className="dropdown-content z-[1] h-52 w-40 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl">
        {themes.map((theme) => (
          <li key={theme.name}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.name}
              value={theme.value}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
