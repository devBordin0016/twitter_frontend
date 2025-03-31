import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 0 8px;

  button {
    margin-top: 16px;
    max-width: 216px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    color: ${colors.white};
    background-color: ${colors.black};
    border: none;
    border-radius: 24px;
    cursor: pointer;
  }
`
export const Menu = styled.div`
  h1 {
    padding: 8px;
    img {
      width: 32px;
    }
  }

  p {
    padding: 8px;
    font-size: 20px;
    display: flex;
    align-items: center;

    img {
      width: 32px;
      margin-right: 16px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  padding: 0 8px;

  span {
    padding: 8px 16px;
    font-size: 24px;
    color: ${colors.white};
    background-color: orange;
    border-radius: 32px;
    margin-right: 16px;
  }

  p {
    font-weight: 700;
  }
`
