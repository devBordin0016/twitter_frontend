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
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  }
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
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`
