import { Skeleton } from '@nextui-org/react'
import { FC } from 'react'

type Props = {}
const BlogLoader: FC<Props> = ({}) => {
  return (
    <div className="border shadow-sm grid min-w-f max-h-[530px] rounded-xl p-4 gap-3">
      <Skeleton className="h-52 rounded-xl w-full" />
      <div className="grid gap-3 px-4">
        <Skeleton className="h-2 w-32" />
        <Skeleton className="h-[90px] w-full" />
        <div className="flex items-center gap-4 mt-2">
          <Skeleton className="h-10 rounded-xl w-10" />
          <div>
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogLoader
