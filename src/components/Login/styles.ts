import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Content = styled.div`
  margin: 0 136px;

  ${ButtonLink} {
    margin-top: 32px;
    transition: 0.3s ease-in-out;
    background-color: ${colors.black};
    border: none;

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    }
  }

  p {
    text-align: left;
    font-size: 14px;
    margin-top: 32px;
    color: ${colors.darkGray};
    font-weight: 400;
  }
`
export const Title = styled.h4`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 40px;
`
