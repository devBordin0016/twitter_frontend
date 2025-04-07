import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import { Content, Title } from './styles'

const Login = () => {
  return (
    <Content>
      <Title>Entrar no X</Title>
      <form action="">
        <InputGlobal>
          <input type="text" name="name" id="name" placeholder="" />
          <label htmlFor="name">Nome</label>
        </InputGlobal>
        <InputGlobal>
          <input type="text" name="password" id="password" placeholder="" />
          <label htmlFor="password">Senha</label>
        </InputGlobal>
        <Button
          type="link"
          bgColor={colors.black}
          title="Avançar para pagina de feed"
          textColor={colors.white}
        >
          Avançar
        </Button>
      </form>
      <p>Não tem uma conta? Inscreva-se</p>
    </Content>
  )
}

export default Login
