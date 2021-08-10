import styled, {css, createGlobalStyle} from "styled-components"

export const MainFooterStyleCom = styled.div`

position:fixed;
/* top:0; */
/* left:0; */
width: 100%;
max-width: 1500px;
display: flex;
justify-content: center;
align-items: center;
bottom: 6vh;
z-index: 139;

color: white;
font-size: 1rem;

.mainfooter-container{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 9%;
    padding-right: 9%;

    .footer-left-container{

        .small-info {
            padding-top: 1.9%;
            /* display: flex; */
            /* flex-direction: column; */

            span{
                padding-top: 7px;
                font-size: 0.9rem;
                font-weight: 700;
            }
        }
    }

    .footer-right-container{

        .menu-container{

            span{
                padding-left: 36px;
                font-weight: 600;
                font-size: 1.3rem;
                color: white;
            }
            a {    
                text-decoration:none;
                font-weight: 600;
            }

        }
    }
}
`