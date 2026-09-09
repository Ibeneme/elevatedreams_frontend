import Card from '@/components/pages/about-us/card'
import HeroSection from '@/components/pages/about-us/hero'
import MissionVision from '@/components/pages/about-us/mission-vision'
import ClassLearning from '@/components/shared/class-learning'
import LearningJourney from '@/components/shared/learning-journey/learning-journey'
import { FC } from 'react'

type Props = {}
const AboutUsPage: FC<Props> = ({}) => {
  const data1 = [
    'In-demand Services',
    'Up-to-date Technology',
    'Resources Available',
  ]
  const data2 = [
    'Microsoft Certified',
    'IBM Certified',
    'Oracle Certified & more',
  ]
  return (
    <>
      <HeroSection />
      <MissionVision />
      <ClassLearning />
      <Card
        data={data1}
        header={'Services We Offer'}
        subHeader={
          'Welcome to Elevate Dreams, where possibilities know no bounds. As a trusted partner in Immigration, Business, and Intellectual Property consulting, we bridge borders and provide world-class guidance to individuals and entrepreneurs worldwide..'
        }
        img={'/images/relied/img1.png'}
      />

      {/* <Card
        data={data2}
        header={'Certified Expert'}
        subHeader={
          'At the core of our success are our seasoned consultants. With extensive experience and recognized expertise, they bring unmatched insights to every consultation. We carefully select professionals who are not only leaders in their fields but are also dedicated to guiding and empowering our clients. At Elevate Dreams, our commitment to excellence begins with our team.'
        }
        img={'/images/about-us/img1.png'}
      /> */}

      <LearningJourney />
    </>
  )
}
export default AboutUsPage
