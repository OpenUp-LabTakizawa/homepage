"use client"

import type { Theme } from "@/app/interfaces/theme"
import { NAVIGATION, SITE_TITLE } from "@/app/lib/constant"
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import type React from "react"
import { type RefObject, useRef, useState } from "react"

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
      className={`transition duration-400 ease bg-base-100 navbar sticky z-10 ${
        headerHeight < scrollY.scrollY && scrollY.isScrollDown
          ? "-translate-y-20"
          : "translate-y-0"
      }`}
    >
      <div className="navbar-start">
        <DropdownMenu />
        <Link
          href="/"
          className="btn btn-ghost navbar-center text-xl tilt-shaking"
        >
          {SITE_TITLE}
        </Link>
      </div>
      <nav className="hidden navbar-center lg:flex">
        <Navigation />
      </nav>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </header>
  )
}

function DropdownMenu(): React.JSX.Element {
  const ref: RefObject<HTMLDetailsElement> = useRef<HTMLDetailsElement>(null)

  if (typeof window !== "undefined") {
    window.addEventListener("click", () => {
      if (ref.current) {
        ref.current.open = false
      }
    })
  }

  return (
    <details ref={ref} className="dropdown">
      <summary className="btn btn-ghost lg:hidden">
        <Bars3CenterLeftIcon className="size-7" />
      </summary>
      <nav>
        <ul className="bg-base-100 dropdown-content menu menu-sm mt-3 p-2 rounded-box z-10">
          {NAVIGATION.map((menu) => (
            <li key={menu.name}>
              <Link href={menu.href} className="font-bold text-nowrap">
                <menu.icon className={`size-5 ${menu.color}`} />
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

function Navigation(): React.JSX.Element {
  return (
    <ul className="menu menu-horizontal px-1">
      {NAVIGATION.map((menu) => (
        <li key={menu.name} className="hover:scale-110">
          <Link href={menu.href} className="font-bold">
            <menu.icon className={`size-5 ${menu.color}`} />
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ThemeController(): React.JSX.Element {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn gap-1">
        <SwatchIcon className="size-5 text-success" />
        テーマ
        <ChevronDownIcon className="size-5" />
      </div>
      <ul className="bg-base-300 dropdown-content h-52 overflow-y-auto p-2 rounded-box shadow-2xl z-10">
        {themes.map((theme) => (
          <li key={theme.name}>
            <input
              type="radio"
              name="theme-dropdown"
              className="btn btn-block btn-sm btn-ghost justify-start text-nowrap theme-controller"
              aria-label={theme.name}
              value={theme.value}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
