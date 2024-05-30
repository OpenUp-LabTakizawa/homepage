import type React from 'react'
import { Breadcrumb } from '../components/breadcrumb'
import { navigation } from '../components/navbar'

const info = navigation.filter((item) => item.href === '/info')[0]

export default function Info(): React.JSX.Element {
  return (
    <main>
      <h1 className="text-5xl font-bold flex justify-center">
        <info.icon className={`size-12 mr-1 ${info.color}`} />
        {info.name}
      </h1>
      <Breadcrumb crumb={info} />
    </main>
  )
}
