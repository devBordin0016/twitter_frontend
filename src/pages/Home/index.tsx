import AccountAction from '../../components/AccountAction'

import { SplitLayout, Footer, Logo, SectionLoguin } from './styles'
import logo from '../../assets/icon.svg'

const Home = () => (
  <>
    <div>
      <SplitLayout>
        <Logo>
          <img src={logo} alt="logo X" />
        </Logo>
        <SectionLoguin>
          <h2>Acontecendo agora</h2>
          <AccountAction />
        </SectionLoguin>
      </SplitLayout>
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
    </div>
  </>
)

export default Home
