import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  max-width: 296px;
  with: 100%;
  text-align: center;

  h3 {
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .hr-line {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px 0;
    color: ${colors.gray};
  }

  .hr-line::before,
  .hr-line::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${colors.gray};
    margin: 0 10px;
  }

  span {
    color: ${colors.black};
    font-size: 14px;
  }

  p {
    font-weight: 700;
    margin-bottom: 18px;
  }
`
