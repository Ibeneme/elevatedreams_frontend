import { FC } from 'react'

type Props = {
  currentIndex: number
  list: string[]
  setCurrentIndex: (val: number) => void
}
const Navigation: FC<Props> = ({ currentIndex, list, setCurrentIndex }) => {
  return (
    <div className="flex flex-col h-fit w-full mb-5 lg:mt-20 pt-14 order-first lg:order-last">
      <div className="lg:self-end flex lg:flex-col gap-3 items-center pl-4 lg:pl-0">
        {list.map((_, i) =>
          currentIndex === i ? (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="bg-white rounded-full h-2 w-2"
            ></div>
          ) : (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="rounded-full w-2 h-2 bg-gray-400"
            ></div>
          ),
        )}
      </div>
    </div>
  )
}
export default Navigation
