import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
export const MainContainer = styled.main`
  margin-left: 272px;
  display: flex;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 58px;
  }
`
