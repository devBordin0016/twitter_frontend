import { useNavigate } from 'react-router-dom'
import { useGetCurrentUserQuery } from '../../services/auth.api'
import * as S from './styles'
import { ModalContent, ModalWrapper, ProfileName } from '../../styles'

import logo from '../../assets/icon.svg'
import grok from '../../assets/grok.svg'
import letter from '../../assets/letter.svg'
import bell from '../../assets/bell.svg'
import more from '../../assets/more.svg'
import profile from '../../assets/profile.svg'
import magnifier from '../../assets/magnifier.svg'
import home from '../../assets/home.svg'
import tape from '../../assets/tape.svg'
import ray from '../../assets/ray.svg'
import cloud from '../../assets/cloud.svg'
import community from '../../assets/community.svg'
import closeUser from '../../assets/closeUser.svg'
import closeIcon from '../../assets/close.svg'

import UserAvatar from '../UserAvatar'
import AccountSettings from '../AccountSettings'
import { useState } from 'react'

const BarLeft = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { data: user } = useGetCurrentUserQuery()
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    navigate('/entry')
  }

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <S.Header>
        <S.Menu>
          <h1>
            <img src={logo} alt="logo X" />
          </h1>
          <S.MenuItem
            onClick={() => navigate('/feed')}
            className="hover-action"
          >
            <img src={home} alt="home" />
            <S.MenuLabel>Página Inicial</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={magnifier} alt="explorar" />
            <S.MenuLabel>Explorar</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={bell} alt="notificação" />
            <S.MenuLabel>Notificações</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={letter} alt="mensagens" />
            <S.MenuLabel>Mensagens</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={grok} alt="grok" />
            <S.MenuLabel>Mensagens</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={tape} alt="itens salvos" />
            <S.MenuLabel>Itens salvos</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={community} alt="comunidade" />
            <S.MenuLabel>Comunidades</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={cloud} alt="premium" />
            <S.MenuLabel>Premium</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={ray} alt="organizações verificadas" />
            <S.MenuLabel>Organizações Ve...</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="hover-action" onClick={openModal}>
            <img src={profile} alt="perfil" />
            <S.MenuLabel>Perfil</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem>
            <img src={more} alt="mais opções" />
            <S.MenuLabel>Mais</S.MenuLabel>
          </S.MenuItem>
        </S.Menu>
        <button onClick={handleTopClick} title="Subir" type="button">
          Subir
        </button>
        {user && (
          <S.Profile>
            <div>
              <UserAvatar />
              <ProfileName>{user.username}</ProfileName>
            </div>
            <img
              className="hover-action"
              onClick={handleLogout}
              src={closeUser}
              alt="sair do perfil"
            />
          </S.Profile>
        )}
      </S.Header>
      {isOpenModal && (
        <ModalWrapper>
          <ModalContent>
            <div>
              <img src={closeIcon} alt="Fechar aba" onClick={closeModal} />
            </div>
            <AccountSettings />
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </ModalWrapper>
      )}
    </>
  )
}

export default BarLeft
