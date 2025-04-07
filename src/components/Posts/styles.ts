import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { transparentize } from 'polished'

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  border-left: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
  flex-direction: column;
  position: relative;
`
export const SelectPostsWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${transparentize(0.05, colors.white)};
  border-bottom: 1px solid ${colors.gray};
  z-index: 1;
  display: flex;
  justify-content: center;
`
export const SelectPosts = styled.div`
  width: 100%;
  display: flex;

  button {
    flex: 1;
    border: none;
    font-size: 16px;
    padding: 16px;
    background-color: transparent;
    color: ${colors.darkGray};
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s;

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
export const Section = styled.div`
  padding: 8px 16px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};

  > div {
    padding-top: 8px;
  }

  p {
    margin: 8px 0 8px 8px;
    font-size: 15px;
  }

  .text-width {
    width: 100%;
    margin-right: 0;
  }

  ${ButtonContainer} {
    max-width: 80px;
    border: none;
    padding: 8px 16px;
    float: right;
  }
`
export const Posting = styled.div`
  width: 100%;
  padding: 8px 8px 40px;
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: 8px;

  textarea {
    width: 100%;
    font-size: 20px;
    resize: none;
    height: 28px;
    overflow: hidden;
    border: none;
    outline: none;
    color: ${colors.darkGray};
  }
`
