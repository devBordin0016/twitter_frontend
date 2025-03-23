import { colors } from '../../styles'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick: () => void
  children: string
  bgColor?: string
  textColor?: string
}

const Button = ({
  type,
  title,
  children,
  to,
  onClick,
  bgColor,
  textColor
}: Props) => {
  if (type === 'button')
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        $bgColor={bgColor}
        $textColor={textColor || colors.black}
      >
        {children}
      </ButtonContainer>
    )
  return (
    <ButtonLink
      to={to as string}
      title={title}
      $bgColor={bgColor}
      $textColor={textColor || colors.black}
    >
      {children}
    </ButtonLink>
  )
}

export default Button
