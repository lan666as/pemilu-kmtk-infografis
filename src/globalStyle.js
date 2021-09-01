import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    @font-face {
        font-family: 'Agrandir Grand Heavyy';
        src: url(./assets/fonts/AgrandirGrandHeavy-800.otf) format('otf');
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Amsterdam Four';
        src: url(./assets/fonts/AmsterdamFour_ttf.otf) format('otf');
        font-style: normal;
        font-display: swap;
    }
    
    html {
        --color-primary: #FCF2E3;
        --color-primary-dark: #F5DFBC;
        --color-text-primary: #68664c;

        scroll-behavior: smooth;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        user-select: none;
    }

    img {
        user-drag: none;
    }
`;
 
export default GlobalStyle;