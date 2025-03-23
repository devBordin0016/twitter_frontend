import { colors } from '../../styles'
import Button from '../Button'
import { Container } from './styles'

const Login = () => (
  <Container>
    <h3>Inscreva-se hoje</h3>
    <Button
      type="button"
      title="Abrir aba para criar conta"
      onClick={open}
      bgColor={colors.blue}
      textColor={colors.white}
    >
      Criar conta
    </Button>
    <div className="hr-line">
      <span>ou</span>
    </div>

    <p>Já tem uma conta?</p>

    <Button
      type="button"
      title="Abrir aba para criar conta"
      onClick={open}
      textColor={colors.blue}
    >
      Entrar
    </Button>
  </Container>
)

export default Login
