import { createGlobalStyle } from "styled-components";

// Global Style
const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'poppins';
}

body {
    background: ${({ theme }) => theme.backgroundColor.secondary};
    color: ${({ theme }) => theme.textColor.primary};
    transition: all 0.2s ease
}

/* width */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbar.track};

}

/* Handle */
::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbar.thumb};
    border-radius: 6px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme.scrollbar.hover};
}

`;

export default GlobalStyle;
