import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
  max-width: 296px;
  with: 100%;
  text-align: center;

  h3 {
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .hr-line {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px 0;
    color: ${colors.gray};
  }

  .hr-line::before,
  .hr-line::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${colors.gray};
  }

  span {
    color: ${colors.black};
    font-size: 14px;
    padding: 8px;
  }

  p {
    font-weight: 700;
    margin-bottom: 18px;
  }

  ${ButtonContainer} {
    transition: 0.3s ease-in-out;
    &:hover {
      filter: brightness(0.9);
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background: ${colors.white};
  border-radius: 16px;
  max-width: 542px;
  max-height: 600px;
  width: 100%;
  height: 100%;
  padding: 8px;
`
export const CloseBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  img:first-child {
    cursor: pointer;
    display: inline-block;
    padding: 8px;
    width: 32px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 16px;
    }
  }
`
export const LogoImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 32px;
`
