import type React from 'react'
import { Breadcrumb } from '../components/breadcrumb'
import { navigation } from '../components/navbar'

const contact = navigation.filter((item) => item.href === '/contact')[0]

export default function Contact(): React.JSX.Element {
  return (
    <main>
      <h1 className="text-5xl font-bold flex justify-center">
        <contact.icon className={`size-12 mr-1 ${contact.color}`} />
        {contact.name}
      </h1>
      <Breadcrumb crumb={contact} />
    </main>
  )
}
