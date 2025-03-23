import styled from 'styled-components'
import { colors } from '../../../styles'

export const Columns = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 95vh;
`

export const SectionLoguin = styled.div`
  padding: 16px;

  h2 {
    font-family: 'Open Sans';
    font-size: 64px;
    font-weigt: 900;
    margin-bottom: 52px;
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
