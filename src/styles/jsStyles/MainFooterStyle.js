import styled from "styled-components"

export const MainFooterStyleCom = styled.div`

display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 9vh;

width: 100%;
/* max-width: 1500px; */
/* bottom: 6vh; */
z-index: 139;

/* color: white; */
color: rgba(255,255,255,.79);
/* font-size: 14.3px; */

.mainfooter-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* max-width: 1700px; */
    justify-content: space-between;
    padding-left: 9%;
    padding-right: 9%;

    .footer-left-container{

        .small-info {
            padding-top: 1.9%;
            /* display: flex; */
            /* flex-direction: column; */

            /* span:first-child{
                padding-left: 14px;
            } */

            span{
                padding-top: 7px;
                /* font-size: 0.9rem; */
                font-size: 15px;
                font-weight: 700;

                @media screen and (max-width: 550px) {  
                    font-size: 13px;
                }
                @media screen and (max-width: 415px) {  
                    font-size: 10px;
                }
            }
        }
    }

    .footer-right-container{

        .menu-container{

            span{
                padding-left: 36px;
                font-weight: 600;
                /* font-size: 1.3rem; */
                font-size: 19px;
                /* color: white; */
                color: rgba(255,255,255,.79);

                @media screen and (max-width: 550px) {  
                    font-size: 14px;
                }
                @media screen and (max-width: 415px) {  
                    font-size: 10px;
                }
            }
            a {    
                text-decoration:none;
                font-weight: 600;
            }

        }
    }
}
`