import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  border-left: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
  flex-direction: column;
`
export const SelectContent = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray};

  button {
    width: 100%;
    border: none;
    font-size: 16px;
    color: ${colors.darkGray};
    cursor: pointer;
    padding: 16px;
    background-color: transparent;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.gray};
    }
  }

  .select-button {
    border-bottom: 4px solid ${colors.blue};
    color: ${colors.black};
    font-weight: 700;
  }
`
export const SectionPosting = styled.div`
  > div {
    padding: 16px;
    display: flex;
  }

  span {
    padding: 6px 14px;
    font-size: 24px;
    color: ${colors.white};
    background-color: orange;
    border-radius: 28px;
    margin-right: 16px;
  }
`
export const InputPosting = styled.div``
