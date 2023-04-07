import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus {
    outline: transparent;
}
body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
}
body, input, textarea, button {
    font: 300 1rem 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}
`
