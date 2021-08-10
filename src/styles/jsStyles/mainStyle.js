import styled, {css, createGlobalStyle} from "styled-components"
import BoldMain from "../Fonts/body-grotesque.large-trial-bold.ttf" 

export const MainTitleStyleCom = styled.div`

    padding-top: 6vh;
    height: 72vh;

    .main-title{
        /* latin */
        @font-face {
            font-family: 'mainfont';
            font-style: normal;
            font-weight: 700;
            src: url(${BoldMain}) format('ttf');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        font-family: 'mainfont';
        /* position:absolute; */
        font-weight: 700;
        /* top: 27%;
        left: 17%; */
        padding-left: 16%;
        font-size: 8.9rem;
        z-index: 103;
        /* width: 100vw;
        height: 100vh; */
        /* border: 1px solid #f00; */
        color: #ffffff;
        mix-blend-mode: difference;
        /* opacity:1; */
    }

    .sub-title{
          /* latin */
        @font-face {
            font-family: 'Tourney';
            font-style: normal;
            font-weight: 300;
            font-stretch: 100%;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/tourney/v1/AlZv_ztDtYzv1tzq1wcJnbVt7xseomk-tPE3gk0.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        font-family: 'Tourney';
        /* position:absolute; */
        /* top: 41%;
        left: 17%; */
        padding-left: 16%;
        font-size: 9.6rem;
        z-index: 103;
        /* width: 100vw;
        height: 100vh; */
        /* border: 1px solid #f00; */
        color: #ffffff;
        mix-blend-mode: difference;
        /* opacity:1; */
    }
    
    .main-title-wraper{
        /* position:absolute;
        top: 27%;
        left: 17%; */
        /* background-color: blue; */
        z-index: 103;
        
        overflow: hidden;
    }

    .sub-title-wraper{
        /* position:absolute;
        top: 41%;
        left: 17%;
        z-index: 103; */
        /* background-color: red; */

        overflow: hidden;
    }
    .main-footer{
        position: absolute;
        bottom:6vh;
        padding-left: 9%;
        padding-right: 9%;
    }
`
