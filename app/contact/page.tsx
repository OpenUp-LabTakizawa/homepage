import { Breadcrumb } from '../components/breadcrumb'
import { navigation } from '../components/navbar'

const contact = navigation.filter((item) => item.href === '/contact')[0]

export default function Contact() {
  return (
    <main>
      <h1 className="text-5xl font-bold flex justify-center">
        <contact.icon className="size-12 mr-1" />
        {contact.name}
      </h1>
      <Breadcrumb crumb={contact} />
    </main>
  )
}
