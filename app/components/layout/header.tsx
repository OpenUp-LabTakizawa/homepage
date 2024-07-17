"use client"

import type { Theme } from "@/app/interfaces/theme"
import { SITE_TITLE, navigation } from "@/app/lib/constant"
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import type React from "react"
import { useState } from "react"

const themes: Theme[] = [
  { name: "デフォルト", value: "light" },
  { name: "ダーク", value: "dark" },
  { name: "カップケーキ", value: "cupcake" },
  { name: "マルハナバチ", value: "bumblebee" },
  { name: "エメラルド", value: "emerald" },
  { name: "コーポレート", value: "corporate" },
  { name: "シンセウェイブ", value: "synthwave" },
  { name: "レトロ", value: "retro" },
  { name: "サイバーパンク", value: "cyberpunk" },
  { name: "バレンタイン", value: "valentine" },
  { name: "ハロウィン", value: "halloween" },
  { name: "ガーデン", value: "garden" },
  { name: "フォレスト", value: "forest" },
  { name: "アクア", value: "aqua" },
  { name: "ローファイ", value: "lofi" },
  { name: "パステル", value: "pastel" },
  { name: "ファンタジー", value: "fantasy" },
  { name: "ワイヤーフレーム", value: "wireframe" },
  { name: "ブラック", value: "black" },
  { name: "ラグジュアリー", value: "luxury" },
  { name: "ドラキュラ", value: "dracula" },
  { name: "CMYK", value: "cmyk" },
  { name: "オータム", value: "autumn" },
  { name: "ビジネス", value: "business" },
  { name: "アシッド", value: "acid" },
  { name: "レモネード", value: "lemonade" },
  { name: "ナイト", value: "night" },
  { name: "コーヒー", value: "coffee" },
  { name: "ウィンター", value: "winter" },
  { name: "ディム", value: "dim" },
  { name: "ノール", value: "nord" },
  { name: "サンセット", value: "sunset" },
] as const

export function Header(): React.JSX.Element {
  const [scrollY, setScrollY] = useState<{
    scrollY: number
    isScrollDown: boolean
  }>({ scrollY: 0, isScrollDown: false })
  const headerHeight: number = 100

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrollY({
        scrollY: window.scrollY,
        isScrollDown: scrollY.scrollY < window.scrollY,
      })
    })
  }

  return (
    <header
      className={`transition duration-400 ease bg-base-100 navbar sticky top-0 z-10 ${
        headerHeight < scrollY.scrollY && scrollY.isScrollDown
          ? "-translate-y-20"
          : "translate-y-0"
      }`}
    >
      <div className="navbar-start">
        <DropdownMenu />
        <Link href="/" className="btn btn-ghost text-xl tilt-shaking">
          {SITE_TITLE}
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
        <ul className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="font-bold">
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
        <li key={item.name} className="hover:scale-110">
          <Link href={item.href} className="font-bold">
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
        <SwatchIcon className="size-5 text-success" />
        テーマ
        <ChevronDownIcon className="size-5" />
      </div>
      <ul className="dropdown-content z-10 h-52 w-40 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl">
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
