import { FC } from 'react'
import HeroComp from './hero'
import Latest from './latest'
import NewsFeed from './news-feed'

type Props = {}
const Blog: FC<Props> = ({}) => {
  return (
    <div>
      <HeroComp />
      <Latest />
      <NewsFeed />
    </div>
  )
}
export default Blog
