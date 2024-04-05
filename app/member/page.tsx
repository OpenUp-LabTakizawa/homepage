import { Breadcrumb } from '../components/breadcrumb'
import { navigation } from '../components/navbar'

const member = navigation.filter((item) => item.href === '/member')[0]

export default function Member() {
  return (
    <main>
      <h1 className="text-5xl font-bold flex justify-center">
        <member.icon className="size-12 mr-1" />
        {member.name}
      </h1>
      <Breadcrumb crumb={member} />
    </main>
  )
}
