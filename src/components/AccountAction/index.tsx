import closeIcon from '../../assets/close.svg'
import { colors } from '../../styles'
import Button from '../Button'
import { CloseBar, Container, LogoImg, Modal, ModalContent } from './styles'
import logo from '../../assets/icon.svg'
import Signup from '../Signup'
import Login from '../Login'
import { useState } from 'react'

const AccountAction = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalType, setModalType] = useState<'login' | 'signup'>('signup')

  const openModal = (type: 'login' | 'signup') => {
    setModalType(type)
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <Container>
      <h3>Inscreva-se hoje</h3>
      <Button
        type="button"
        title="Abrir aba para criar conta"
        onClick={() => openModal('signup')}
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
        title="Abrir aba para entrar"
        onClick={() => openModal('login')}
        textColor={colors.blue}
      >
        Entrar
      </Button>
      {isOpenModal && (
        <Modal>
          <ModalContent>
            <CloseBar>
              <img src={closeIcon} alt="Fechar aba" onClick={closeModal} />
              <LogoImg src={logo} alt="Logo X" />
            </CloseBar>
            {modalType === 'login' ? <Login /> : <Signup />}
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </Container>
  )
}
export default AccountAction
