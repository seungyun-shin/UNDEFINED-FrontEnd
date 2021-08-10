import styled, {css, createGlobalStyle} from "styled-components"

export const HeaderStyleCom = styled.div`
    
    .header-wraper{
        position:relative;
        /* top:0; */
        /* left:0; */
        width: 100%;
        max-width: 1500px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 9vh;
        padding-top: 9vh;
        color: white;
        font-size: 1rem;

        .header-container{
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding-left: 9%;
            padding-right: 9%;

            .left-container{
                
                .logo{
                    padding-bottom: 30px;
                    a {    
                        text-decoration:none;
                        font-weight: 600;
                        color: white;
                    }
                }

                .small-info {
                    padding-top: 1.9%;
                    display: flex;
                    flex-direction: column;
                    

                    span{
                        padding-top: 6px;
                        font-size: 0.79rem;
                        font-weight: 500;
                    }
                }
            }

            .right-container{

                .menu-container{

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
        }
    }
`