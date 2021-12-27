import styled, {css, createGlobalStyle} from "styled-components"

// export const GlobalStyles = createGlobalStyle`
export const GlobalStyles = createGlobalStyle`

      * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
      }
      .shop-select {
        width: 100%;
        padding: .8em .5em;
        border: 1px solid #999;
        font-family: inherit;
        font-weight: 700;
        background-image: url("./images/etc/selectboxarrow.jpg") no-repeat 95% 50%;
        border-radius: 0px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: black;
        background-color: white ;
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