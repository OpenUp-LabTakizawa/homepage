import type React from 'react'
import { Breadcrumb } from '../components/breadcrumb'
import type { Navigation } from '../interfaces/navigation'
import { navigation } from './header'

export function Heading({ href }: { href: string }): React.JSX.Element {
  const heading: Navigation = navigation.filter((item) => item.href === href)[0]

  return (
    <>
      <h1 className="text-5xl font-bold flex justify-center">
        <heading.icon className={`size-12 mr-1 ${heading.color}`} />
        {heading.name}
      </h1>
      <Breadcrumb crumb={heading} />
    </>
  )
}
