import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const SplitLayout = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 95vh;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`

export const SectionLoguin = styled.div`
  padding: 16px;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    justify-items: center;
  }

  .mobile-logo {
    display: none;
    margin-bottom: 16px;

    img {
      width: 150px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      display: block;
    }
  }

  h2 {
    font-family: 'Open Sans';
    font-size: 64px;
    font-weight: 900;
    margin-bottom: 52px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 24x;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;

  img {
    width: 336px;
    height: auto;
  }

  &.desktop-logo {
    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`

export const Footer = styled.footer`
  text-align: center;
  margin: 8px auto;
  p {
    color: ${colors.gray};
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: ${colors.gray};
  }
`
