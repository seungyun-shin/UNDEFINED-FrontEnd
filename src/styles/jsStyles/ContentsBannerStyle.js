import styled, {css, createGlobalStyle} from "styled-components"

export const ContentsBannerStyleCom = styled.div`
    .contents-banner-container{
        position: relative;
        display: flex;
        width: 100%;
        /* background-color: black; */
        justify-content: center;
        align-items: center;

        .contents-banner-title{
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
            font-size: 13rem;
            opacity: 0.5;
            color: white;

        }
        .contents-sub-title-container{
            position: absolute;
            top:50%;
            left:0;
            width: 100%;
            text-align: center;
            font-weight: 700;
            color: white;
        }

    }
`