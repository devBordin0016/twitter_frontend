import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import { Content, Title } from './styles'

const Signup = () => {
  return (
    <Content>
      <Title>Criar sua conta</Title>
      <form action="">
        <InputGlobal>
          <input type="text" name="name" id="name" placeholder="" />
          <label htmlFor="name">Nome</label>
        </InputGlobal>
        <InputGlobal>
          <input type="text" name="password" id="password" placeholder="" />
          <label htmlFor="password">Senha</label>
        </InputGlobal>
        <InputGlobal>
          <input
            type="text"
            name="comfirmPassword"
            id="comfirmPassword"
            placeholder=""
          />
          <label htmlFor="comfirmPassword">Confirmar senha</label>
        </InputGlobal>
        <Button
          type="button"
          bgColor={colors.darkGray}
          title="Avançar para loguin"
          textColor={colors.white}
        >
          Avançar
        </Button>
      </form>
    </Content>
  )
}

export default Signup
