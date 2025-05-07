import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  padding: 16px;
`

export const TitleSection = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const ProfileList = styled.ul`
  max-height: 75vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Profile = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    strong {
      font-size: 15px;
    }
  }

  button {
    max-width: 80px;
    background-color: ${colors.black};
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 14px;
  }
`
