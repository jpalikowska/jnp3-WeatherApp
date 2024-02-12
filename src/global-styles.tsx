import { createGlobalStyle } from 'styled-components';
import { theme } from 'styled-tools';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
         color: ${theme('colors.text')};
         background-color: ${theme('colors.background')};
        
         font-size: ${theme('fonts.basic.fontSize')};
         font-family: ${theme('fonts.basic.fontFamily')};
    }

    body {
        height: 100hv;
        width: 100hv;
        max-width: 100%;
        margin: ${theme('dims.bigSpacing')};
    }
`;