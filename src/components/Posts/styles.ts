import styled from 'styled-components'
import { colors } from '../../styles'
import { transparentize } from 'polished'

export const SelectPostsWrapper = styled.div`
  position: sticky;
  top: 0;
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

export const TweetSections = styled.div`
  padding-top: 8px;
  width: 100%;

  button {
    max-width: 80px;
    border: none;
    padding: 8px 16px;
    float: right;
  }

  &.width-profile {
    width: 40px;
  }
  .text-width {
    width: 100%;
    margin-right: 0;
  }
`

export const TweetContainer = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};
`

export const TweetInputWrapper = styled.div`
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

export const TweetMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const TweetActions = styled.div`
  display: flex;
  padding: 0 8px;
  margin-top: 24px;
  width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;

    img {
      cursor: pointer;
      width: 18px;
      &:hover {
        box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.2);
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 16px;
      }
    }

    span {
      font-size: 14px;
    }
  }
`

export const TweetContent = styled.p`
  margin: 8px 0 8px 8px;
  font-size: 15px;
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
`
