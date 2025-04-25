import { transparentize } from 'polished'
import styled from 'styled-components'
import { colors } from '../../styles'

export const FixedTop = styled.div`
  top: 0;
  background: ${transparentize(0.05, colors.white)};
  display: flex;
  padding: 8px;
  align-items: center;

  img {
    width: 32px;
    cursor: pointer;
    padding: 4px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 16px;
    }
  }

  p {
    margin-left: 32px;
    font-size: 20px;
    font-weight: 700;
  }
`

export const Section = styled.div`
  .font {
    font-size: 15px;
  }

  .margin-tp {
    margin-top: 8px;
  }
`

export const Meta = styled.div`
  p {
    margin-top: 16px;
    font-size: 18px;
    width: 100%;
    word-wrap: break-word;
    word-break: break-word;
  }

  .date {
    margin: 16px 0;
    color: ${colors.darkGray};
  }
`
export const Actions = styled.ul`
  display: flex;
  padding: 14px 0;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};

  div {
  }

  li {
    display: flex;
    align-items: center;
    flex: 1;
    width: 100%;

    img {
      width: 20px;
    }

    span {
      font-size: 14px;
    }
  }
`
export const InputComment = styled.div`
  width: 100%;
  padding: 8px 0 0;
  margin-left: 8px;

  button {
    max-width: 110px;
    border: none;
    float: right;
  }

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

export const Content = styled.div`
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid ${colors.gray};
`
