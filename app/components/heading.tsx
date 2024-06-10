import { Breadcrumb } from "@/app/components/breadcrumb"
import type { Navigation } from "@/app/interfaces/navigation"
import { navigation } from "@/app/lib/constant"
import type React from "react"

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
