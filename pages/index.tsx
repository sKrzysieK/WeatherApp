import type { NextPage } from 'next'
import HomeHead from '../src/components/Home/HomeHead'
import HomeSlogan from '../src/components/Home/HomeSlogan'
import Card from '../src/layouts/Card'

const Home: NextPage = () => {
  return (
    <>
      <HomeHead/>
      <HomeSlogan />
      <Card>
        <p>Test text</p>
      </Card>
    </>
  )
}

export default Home
