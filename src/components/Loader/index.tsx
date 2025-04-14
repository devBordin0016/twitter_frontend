import { PulseLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={colors.blue} />
  </Container>
)

export default Loader
