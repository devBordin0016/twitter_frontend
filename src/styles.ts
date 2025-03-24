import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  blue: '#1a8cd8',
  white: '#ffff',
  black: '#000',
  gray: '#dadce0',
  darkGray: '#787a7a'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.white}
    color:${colors.black};
  }
`
export const InputGlobal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 38px;

  label {
    top: 30%;
    position: absolute;
    left: 12px;
    font-size: 14px;
    color: gray;
    pointer-events: none;
    transition: top 0.3s ease-in-out, font-size 0.3s ease-in-out,
      color 0.3s ease-in-out;
  }

  input {
    width: 100%;
    padding: 18px 10px 8px;
    font-size: 16px;
    border: 0.5px solid ${colors.gray};
    border-radius: 5px;
    outline: none;
    background: white;
  }

  input:focus {
    border: 1px solid ${colors.blue};
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 6px;
    font-size: 12px;
    color: ${colors.blue};
  }
`
