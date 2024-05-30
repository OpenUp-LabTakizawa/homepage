import type React from 'react'
import { Breadcrumb } from '../components/breadcrumb'
import { navigation } from '../components/navbar'

const about = navigation.filter((item) => item.href === '/about')[0]

export default function About(): React.JSX.Element {
  return (
    <main>
      <h1 className="text-5xl font-bold flex justify-center">
        <about.icon className={`size-12 mr-1 ${about.color}`} />
        {about.name}
      </h1>
      <Breadcrumb crumb={about} />
    </main>
  )
}
