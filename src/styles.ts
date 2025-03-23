import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#1a8cd8',
  white: '#ffff',
  black: '#000',
  gray: '#dadce0'
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
