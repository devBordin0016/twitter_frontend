import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  padding: 0 8px;

  button {
    margin-top: 16px;
    max-width: 232px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    color: ${colors.white};
    background-color: ${colors.black};
    border: none;
    border-radius: 24px;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`

export const Menu = styled.div`
  h1 {
    padding: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      justify-content: center;
      display: flex;
    }

    img {
      width: 28px;
    }
  }
`

export const MenuItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  margin-top: 8px;

  img {
    width: 26px;
    margin-right: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 0;
      width: 24px;
    }
  }
`

export const MenuLabel = styled.span`
  font-size: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  padding: 0 8px;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }

  img {
    width: 26px;
    cursor: pointer;
  }
`
