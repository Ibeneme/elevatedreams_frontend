// import { Skeleton } from "@/components/ui/skeleton";
import { Skeleton } from '@nextui-org/react'
import { FC } from 'react'

type Props = {}
const CardLoader: FC<Props> = ({}) => {
  return (
    <div className="shadow-sm flex flex-col  h-[580px] w-fit rounded-xl gap-3 pb-5">
      <Skeleton className="h-full rounded-t-xl w-[360px]" />
      <div className="grid gap-4 px-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-2 w-28" />
        <Skeleton className="h-[100px] w-full" />
        <div className="flex-center gap-1 mt-4 justify-between">
          <Skeleton className="h-10 rounded-xl w-28" />
          <Skeleton className="h-10 rounded-xl w-28" />
          <Skeleton className="h-10 rounded-xl w-28" />
        </div>
      </div>
    </div>
  )
}
export default CardLoader
