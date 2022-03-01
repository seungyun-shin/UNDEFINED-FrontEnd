import styled from "styled-components"

export const ShopCartScreenStyleCom = styled.div`


    .cart-contents-wraper{  
        
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* justify-content: space-space-evenly; */
        width: 100%;
        height: 100%;
        margin-top: 3rem;

        a{
            font-weight: 700;
            color:white;
            text-decoration: none;
        }

        .cart-contents-container{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .cart-screen-title{
                position: relative;
                width: 70%;
                color: white;
                margin-bottom: 3%;
                opacity: 0.89;
            }

            .cart-list-container{
                display: flex;
                width: 70%;
                height: 20vh;
                color:white;
                padding-top: 1%;
                padding-left: 6%;
                padding-bottom: 1%;
                
                background: rgba(1,1,1,0.7);
                
                /* background: white; */
                /* border: 1px solid white; */

                .cart-list-image{
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;


                    img{
                        width: 100px;
                        height: 150px;
                    }
                }
                
                .cart-info-wraper{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    /* padding-left: 3%;
                    padding-right: 3%; */

                    @media screen and (max-width: 500px) {
                        flex-direction: column;
                        
                        justify-content: space-evenly;
                    }

                }

                .cart-list-name{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* width: 20%; */
                }

                .cart-list-price{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* width: 20%; */
                }

                .cart-list-qty{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* width: 20%; */
                    
                    .cart-list-select{
                        /* width:79px; */
                        font-size: 1rem;
                        /* width: 100%; */
                    }
                }

                .cart-list-button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* width: 20%; */
                    
                    button{
                        padding:2%;
                        font-size: 1rem;
                        cursor: pointer;
                        /* background-color: black; */
                    }

                    i{
                        /* color:white; */
                        /* font-size: 1.19rem; */
                        /* background: black; */
                    }
                }
            }
            
            .cart-subtotal-container{
            
                width: 100%;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 3%;

                .subtotal-title{
                    position: relative;
                    width: 70%;
                    color: white;
                    margin-bottom: 3%;
                    line-height: 3rem;

                    h2{
                        padding-left: 3%;
                    }
                    .cart-subtotal-button{
                        padding-left: 3%;
                        width: 30%;
                        min-width: 170px;
                    }
                }
            }
        }

    }
`