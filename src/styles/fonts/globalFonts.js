import styled, { createGlobalStyle } from "styled-components";
import Romelio from "../fonts/Romelio-Sans.woff2";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Romelio';
        src: url(${Romelio}) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;