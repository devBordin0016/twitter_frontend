import { ClipLoader, PulseLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

export const Loader1 = () => (
  <Container>
    <PulseLoader color={colors.blue} />
  </Container>
)

export const Loader2 = () => (
  <Container>
    <ClipLoader color={colors.blue} />
  </Container>
)
