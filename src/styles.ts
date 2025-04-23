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
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style:none;
  }

  body {
    background-color: ${colors.white}
    color:${colors.black};
    overflow-y: scroll;
  }

  .date {
    margin-left: 4px;
    padding-top: 2px;
    font-size: 14px;
    color: ${colors.darkGray};
  }
  .align {
    align-items: center;
  }
  .display {
    display: flex;
  }
  .padding {
    padding: 16px 0;
  }
  .padding-left {
    padding-left: 8px;
  }
  .padding-tp-bt {
    padding: 8px 0;
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

  small {
    color: #e53935;
  }
`

export const ProfileAvatar = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${colors.white};
  border-radius: 50%;
`

export const ProfileName = styled.span`
  margin-left: 8px;
  font-weight: 700;
`
export const MainContent = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  border-left: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
  flex-direction: column;
  position: relative;
`
