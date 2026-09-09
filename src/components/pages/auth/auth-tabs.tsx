import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { authLinks } from './data'

type Props = { pathname: string }
const AuthTabs: FC<Props> = ({ pathname }) => {
  return (
    <div className="max-w-screen-sm grid grid-cols-2 p-1 bg-base w-full rounded-lg">
      {authLinks.map((el, index) => {
        const active = pathname === el.url
        return (
          <Link key={index} as={el.url} href={el.url}>
            <div
              className={`${
                active ? 'bg-white ' : 'text-gray-500'
              } w-full py-2 px-4 rounded-lg focus:outline-none text-center`}
            >
              <div className="text-sm">{el.name}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default AuthTabs
