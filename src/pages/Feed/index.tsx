import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import Posts from '../../components/Posts'
import { Container, MainContainer } from './styles'

const Feed = () => (
  <Container>
    <BarLeft />
    <MainContainer>
      <Posts />
      <BarRight />
    </MainContainer>
  </Container>
)

export default Feed
