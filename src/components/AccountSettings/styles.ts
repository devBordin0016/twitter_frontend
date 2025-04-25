import styled from 'styled-components'

export const Content = styled.div`
  padding: 16px;

  small {
    margin: 0 auto;
  }

  > div {
    justify-content: space-between;
    align-items: center;
  }

  button {
    max-width: 72px;
    cursor: pointer;
  }

  form {
    justify-content: center;
    margin: 64px auto 0;
    max-width: 320px;
  }
`
export const Title = styled.h4`
  font-size: 26px;
  font-weight: 700;
`
