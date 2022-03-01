import styled from "styled-components"

export const GallaryBannerStyleCom = styled.div`
    .contents-banner-container{
        position: relative;
        display: flex;
        width: 100%;
        /* background-color: black; */
        justify-content: center;
        align-items: center;

        .contents-banner-title{

            /* @font-face {
                font-family: 'Tourney';
                font-style: normal;
                font-weight: 300;
                font-stretch: 100%;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/tourney/v1/AlZv_ztDtYzv1tzq1wcJnbVt7xseomk-tPE3gk0.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            } */
            
            font-family: 'Romelio';
            font-size: 9vw;
            opacity: 0.5;
            color: white;

            /* @media screen and (max-width: 850px) {
                font-size: 11rem;
            }
            @media screen and (max-width: 750px) {
                font-size: 10rem;
            }
            @media screen and (max-width: 650px) {
                font-size: 9rem;
            }
            @media screen and (max-width: 550px) {
                font-size: 8rem;
            }
            @media screen and (max-width: 450px) {
                font-size: 7rem;
            }
            @media screen and (max-width: 350px) {
                font-size: 6rem;
            }
            @media screen and (max-width: 300px) {
                font-size: 5rem;
            } */



        }
        .contents-sub-title-container{
            position: absolute;
            top:60%;
            left:0;
            width: 100%;
            text-align: center;
            font-weight: 700;
            color: white;
            /* font-size: 2vw; */
        }

    }
`