import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const ButtonContainer = styled.button<{
  $bgColor?: string
  $textColor: string
}>`
  border: 1px solid ${colors.gray};
  color: ${({ $textColor }) => $textColor || colors.black};
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
  width: 100%;
  border-radius: 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)<{
  $bgColor?: string
  $textColor: string
}>`
  border: 1px solid ${colors.gray};
  color: ${({ $textColor }) => $textColor || colors.black};
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
  border-radius: 16px;
  cursor: pointer;
`
