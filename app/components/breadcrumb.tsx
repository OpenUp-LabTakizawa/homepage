import { HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import type { Navigation } from '../interfaces/navigation'

export function Breadcrumb({ crumb }: { crumb: Navigation }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <HomeIcon className="size-5 mr-1" />
            ホーム
          </Link>
        </li>
        <li>
          <Link href={crumb.href}>
            <crumb.icon className="size-5 mr-1" />
            {crumb.name}
          </Link>
        </li>
      </ul>
    </div>
  )
}
