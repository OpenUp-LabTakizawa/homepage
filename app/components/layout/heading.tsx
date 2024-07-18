import type { Menu } from "@/app/interfaces/menu"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Heading({ menu }: Readonly<{ menu: Menu }>): React.JSX.Element {
  return (
    <section>
      <div className="max-w-fit mx-auto">
        <h1 className="typing font-bold text-3xl">
          <menu.icon className={`inline size-9 mr-1 mb-1 ${menu.color}`} />
          {menu.name}
        </h1>
      </div>
      <Breadcrumb menu={menu} />
    </section>
  )
}

function Breadcrumb({ menu }: Readonly<{ menu: Menu }>): React.JSX.Element {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1 text-primary" />
            ホーム
          </Link>
        </li>
        <li>
          <menu.icon className={`size-5 mr-1 ${menu.color}`} />
          {menu.name}
        </li>
      </ul>
    </div>
  )
}
