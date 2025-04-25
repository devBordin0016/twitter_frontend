import { useState } from 'react'
import { colors, ModalContent, ModalWrapper } from '../../styles'
import Button from '../Button'
import closeIcon from '../../assets/close.svg'
import logo from '../../assets/icon.svg'
import Signup from '../Signup'
import Login from '../Login'
import * as S from './styles'

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
    <S.Container>
      <h3>Inscreva-se hoje</h3>
      <Button
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
        className="border-button"
        title="Abrir aba para entrar"
        onClick={() => openModal('login')}
        textColor={colors.blue}
      >
        Entrar
      </Button>

      {isOpenModal && (
        <ModalWrapper>
          <ModalContent>
            <S.CloseBar>
              <img src={closeIcon} alt="Fechar aba" onClick={closeModal} />
              <S.LogoImg src={logo} alt="Logo X" />
            </S.CloseBar>
            {modalType === 'login' ? (
              <>
                <Login />
                <S.ForRegistration>
                  Não tem uma conta?{' '}
                  <span onClick={() => openModal('signup')}>Inscreva-se</span>
                </S.ForRegistration>
              </>
            ) : (
              <Signup />
            )}
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </ModalWrapper>
      )}
    </S.Container>
  )
}

export default AccountAction
