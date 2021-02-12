import { createGlobalStyle } from 'styled-components'

// import CarroisGothicSCRegularWoff from 'assets/fonts/CarroisGothicSCRegular.woff'
// import CarroisGothicSCRegularWoff2 from 'assets/fonts/CarroisGothicSCRegular.woff2'

import { COLORS, MEASURE, BORDER, SCALE } from './variables'

export const GlobalStyles = createGlobalStyle`

  :root {  
    font-size: calc(1rem + 0.4vw); 
    font-family: sans-serif;
    background-color: ${COLORS.light};
  }

  * {
    /* border-style: solid; */
    box-sizing: border-box;
    max-width: ${MEASURE};
  
    /* &::before,
    &::after {  border-style: solid;} */
  }

  
  html,body,div,header,nav,main,footer {
    max-width: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
  }

  button {
    background-color: inherit;
    border-color: inherit;
    border: ${BORDER.thick} solid;
    padding: ${SCALE['s-1']};
  }
`
