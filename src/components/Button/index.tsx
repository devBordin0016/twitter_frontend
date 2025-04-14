import { colors } from '../../styles'
import { ButtonContainer } from './styles'

type Props = {
  type?: 'button' | 'submit'
  title: string
  onClick?: () => void
  children: string
  bgColor?: string
  textColor?: string
  disabled?: boolean
  className?: string
}

const Button = ({
  title,
  children,
  onClick,
  bgColor,
  textColor = colors.black,
  disabled,
  type = 'button',
  className
}: Props) => {
  return (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
      $bgColor={bgColor}
      $textColor={textColor}
      className={className}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
