import { POCard, POHeader }  from '../../components/'
import { Main } from './styles'

function Home() {
  return (
    <>
      <POHeader />
      <Main>
        {
          [1,2,3,4,5,6,7,8,9].map(item => <POCard />)
        }
      </Main>
    </>
  )
}

export default Home
