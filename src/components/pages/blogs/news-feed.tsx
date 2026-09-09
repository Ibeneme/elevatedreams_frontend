import BlogFilter from '@/components/shared/blog/blog'
import { Header, SubHeader } from '@/components/shared/header'
import { FC } from 'react'
import Blog from '../home/blog/blog'

type Props = {}
const NewsFeed: FC<Props> = ({}) => {
  return (
    <div className="def-contain flex flex-col gap-5 md:gap-10 margining xl:pb-10">
      <div className="justify-between flex flex-col md:flex-row w-full">
        <Header text={'All News Feeds'} />
        <SubHeader
          text={`Our News Feed provides daily updates on the latest trends and news in
          social media, tech, and digital marketing. It's a great resource to
          stay informed and ahead of the curve.`}
          className="xl:w-[40%] lg:w-[50%]"
        />
      </div>
      <BlogFilter row={2} />
    </div>
  )
}
export default NewsFeed
