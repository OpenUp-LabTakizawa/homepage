import type { Navigation } from "@/app/interfaces/navigation"
import { HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import type React from "react"

export function Heading({
  navigation,
}: Readonly<{ navigation: Navigation }>): React.JSX.Element {
  return (
    <section>
      <div className="max-w-fit mx-auto">
        <h1 className="typing font-bold text-3xl">
          <navigation.icon
            className={`inline size-9 mr-1 mb-1 ${navigation.color}`}
          />
          {navigation.name}
        </h1>
      </div>
      <Breadcrumb crumb={navigation} />
    </section>
  )
}

function Breadcrumb({
  crumb,
}: Readonly<{ crumb: Navigation }>): React.JSX.Element {
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
          <Link href={crumb.href}>
            <crumb.icon className={`size-5 mr-1 ${crumb.color}`} />
            {crumb.name}
          </Link>
        </li>
      </ul>
    </div>
  )
}
