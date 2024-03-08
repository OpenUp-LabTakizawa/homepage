import {
  Bars3CenterLeftIcon,
  EnvelopeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const siteTitle = 'OPENUP ラボ滝沢'

const navItems = [
  { name: '最新情報', href: '/info', icon: NewspaperIcon },
  { name: 'ラボ滝沢とは？', href: '/about', icon: QuestionMarkCircleIcon },
  { name: 'メンバー', href: '/member', icon: UserGroupIcon },
  { name: 'お問い合わせ', href: '/contact', icon: EnvelopeIcon },
]

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          {siteTitle}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars3CenterLeftIcon className="h-7 w-7" />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
