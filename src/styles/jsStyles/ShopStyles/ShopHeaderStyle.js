import styled, {css, createGlobalStyle} from "styled-components"

export const ShopHeaderStyleCom = styled.div`

    /* position:fixed; */
    /* top:0; */
    /* left:0; */
    width: 100%;
    max-width: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9%;
    padding-top: 3%;
    /* padding-left: 3%;
    padding-right: 3%; */
    z-index: 139;

    color: white;
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

            .first-span{
                padding-left: 0px;
            }

            span{
                padding-left: 36px;
                font-weight: 600;
                color: white;
            }

            a {    
                text-decoration:none;
                font-weight: 600;
                color: white;
            }

        }
        
    }
`