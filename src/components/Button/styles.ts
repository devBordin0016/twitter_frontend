import styled from 'styled-components'
import { colors } from '../../styles'

type ButtonProps = {
  $bgColor?: string
  $textColor: string
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  padding: 8px 0;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  border: none;
  border-radius: 16px;

  color: ${({ $textColor }) => $textColor || colors.black};
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
