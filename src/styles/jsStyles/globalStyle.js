import styled, {css, createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
      * {
        
        /* latin */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        /* color: white; */
        /* font-size: 3rem; */
        /* @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
        font-family: "Noto Sans KR", sans-serif !important; */
      }
`

/* export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  
  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
` */

// export const Container = styled.div`
//   flex-grow: 1;
//   margin: 0 auto;
//   padding: 0 32px;
//   position: relative;
//   width: auto;
//   height: 100%;
//   @media (min-width: 1024px) {
//     max-width: 960px;
//   }
//   @media (min-width: 1216px) {
//     max-width: 1152px;
//   }
//   @media (min-width: 1408px) {
//     max-width: 1244px;
//   }
//   ${props =>
//     props.fluid &&
//     css`
//       padding: 0;
//       margin: 0;
//       background: red;
//       max-width: 100% !important;
//     `}
// `