import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Container = styled.div`
  max-width: 360px;
  width: 100%;

  > div {
    max-width: 360px;
    position: fixed;
  }
`

export const BarSection = styled.div`
  border: 1px solid ${colors.gray};
  padding: 12px 16px;
  border-radius: 16px;
  margin-top: 16px;

  p {
    font-size: 15px;
    margin-bottom: 12px;
  }

  ${ButtonLink} {
    width: 128px;
  }
`
export const TitleSection = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`

export const Trend = styled.div`
  padding: 8px 0;
  h5 {
    font-size: 15px;
  }
  span {
    font-size: 13px;
    color: ${colors.darkGray};
  }
`
export const Profile = styled.li`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 80px;
    border: none;
  }

  > div {
    display: flex;
    align-items: center;
  }
`

export const ProfileList = styled.ul`
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;
`
