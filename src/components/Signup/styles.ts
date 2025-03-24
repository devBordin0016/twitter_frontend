import styled from 'styled-components'

export const Content = styled.div`
  margin: 0 72px;

  button {
    margin-top: 38px;
    border-radius: 24px;
    padding: 16px;
    transition: 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    }
  }
`
export const Title = styled.h4`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 40px;
`
