import styled from "styled-components"

export const ShopHeaderStyleCom = styled.div`

    /* position:fixed; */
    /* top:0; */
    /* left:0; */
    width: 100%;
    /* max-width: 1700px; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9%;
    padding-top: 3%;
    /* padding-left: 3%;
    padding-right: 3%; */
    z-index: 139;

    /* color: white; */
    color: rgba(255,255,255,.79);
    font-size: 1rem;

    .header-container{
        display: flex;
        width: 100%;
        /* justify-content: space-between; */
        justify-content: center;
        align-items: center;
        /* padding-left: 9%;
        padding-right: 9%; */

        .menu-container{

            display: flex;

            .first-span{
                padding-left: 0px;
            }

            span{
                padding-right: 36px;
                font-weight: 600;
                /* color: white; */
                color: rgba(255,255,255,.79);
                transition: 1s;
                font-family: 'Romelio';
            }
            span:hover{
                color: rgba(255,255,255,1);
            }

            a {    
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration:none;
                font-size: 1.5rem;
                font-weight: 600;
                color: rgba(255,255,255,.79);

                @media screen and (max-width: 750px) {
                    font-size: 1.3rem;
                }
                @media screen and (max-width: 500px) {
                    font-size: 1.0rem;
                }
            }

        }
        
    }

    .fa-shopping-cart{
        @media screen and (max-width: 750px) {
            font-size: 19px;
        }
        @media screen and (max-width: 500px) {
            font-size: 16px;
        }
    }
`