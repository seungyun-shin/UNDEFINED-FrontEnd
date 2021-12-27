import styled, {css, createGlobalStyle} from "styled-components"

export const MainTitleStyleCom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56vh;

    .main-title{

        @font-face {
            font-family: 'sarrif';
            src: url("./fonts/HelveticaNeueLTStd-BdEx.otf");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        font-family: 'sarrif';
        font-size: 8.7rem;
        font-weight: 900;
        z-index: 103;
        color: #ffffff;
        mix-blend-mode: difference;
        opacity:0.86;
        padding-left: 9%;
        padding-right: 9%;

        @media ${props => props.theme.laptop} {
            font-size: 7.7rem;
        }
        @media ${props => props.theme.tablet} {
            font-size: 6rem;
        }
        @media ${props => props.theme.mobile} {
            font-size: 5rem;
        }
        @media ${props => props.theme.mobile3} {
            font-size: 4.3rem;
        }
        @media ${props => props.theme.mobile5} {
            font-size: 3.9rem;
        }
        @media ${props => props.theme.mobile6} {
            font-size: 3.6rem;
        }
        @media ${props => props.theme.mobile7} {
            font-size: 3.3rem;
        }
        @media ${props => props.theme.mobile8} {
            font-size: 3.0rem;
        }
        @media ${props => props.theme.mobile9} {
            font-size: 2.7rem;
        }

    }

    .sub-title{
          /* latin */
        /* @font-face {
            font-family: 'Tourney';
            font-style: normal;
            font-display: swap;
            src: url("./fonts/Romelio-Sans.otf");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        } */

        font-family: 'Romelio';
        font-weight: 0;
        font-size: 6.9rem;
        z-index: 103;
        color: #ffffff;
        mix-blend-mode: difference;
        opacity:0.86;
        padding-left: 9%;
        padding-right: 9%;

        
        @media ${props => props.theme.laptop} {
            font-size: 5.9rem;
        }
        @media ${props => props.theme.tablet} {
            font-size: 5.3rem;
        }
        @media ${props => props.theme.mobile} {
            font-size: 4.3rem;
        }
        @media ${props => props.theme.mobile3} {
            font-size: 3.9rem;
        }
        @media ${props => props.theme.mobile5} {
            font-size: 3.6rem;
        }
        @media ${props => props.theme.mobile6} {
            font-size: 3.3rem;
        }
        @media ${props => props.theme.mobile7} {
            font-size: 3.0rem;
        }
        @media ${props => props.theme.mobile8} {
            font-size: 2.7rem;
        }
        @media ${props => props.theme.mobile9} {
            font-size: 2.3rem;
        }


    }

    .main-text-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 1500px;

        .main-title-wraper{
            z-index: 103;
            
            overflow: hidden;
        }

        .sub-title-wraper{

            overflow: hidden;
        }
    }
    
    .main-footer{
        position: absolute;
        bottom:6vh;
        padding-left: 9%;
        padding-right: 9%;
    }
`
