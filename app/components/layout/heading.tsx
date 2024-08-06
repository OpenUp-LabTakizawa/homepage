import type { Menu } from "@/app/interfaces/menu"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type { JSX } from "react"

export function Heading({ menu }: Readonly<{ menu: Menu }>): JSX.Element {
  return (
    <section className="gap-4 grid">
      <Breadcrumb menu={menu} />
      <h1 className="flex font-bold items-center max-w-min mx-auto text-3xl typing">
        <menu.icon className={`mr-1 size-9 ${menu.color}`} />
        {menu.name}
      </h1>
    </section>
  )
}

function Breadcrumb({ menu }: Readonly<{ menu: Menu }>): JSX.Element {
  return (
    <div className="breadcrumbs pl-6 text-sm">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="mr-1 size-5 text-primary" />
            ホーム
          </Link>
        </li>
        <li>
          <menu.icon className={`mr-1 size-5 ${menu.color}`} />
          {menu.name}
        </li>
      </ul>
    </div>
  )
}
