import Login from '../../Login'
import { Columns, Footer, Logo, SectionLoguin } from './styles'

import logo from '../../../assets/icon.svg'

const Logout = () => (
  <>
    <Columns>
      <Logo>
        <img src={logo} alt="X" />
      </Logo>
      <SectionLoguin>
        <h2>Acontecendo agora</h2>
        <Login />
      </SectionLoguin>
    </Columns>
    <Footer>
      <p>
        Todos direitos reservados {''}
        <a
          href="http://linkedin.com/in/VitorBri"
          target="_blank"
          rel="noreferrer"
        >
          @João Vitor
        </a>
      </p>
    </Footer>
  </>
)

export default Logout
