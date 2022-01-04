import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const ShopPlaceOrderScreenCom = styled.div`

    .placeOrder-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        margin-top: 5%;
        max-width: 1700px;
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        .placeOrder-wraper{
            /* margin-top: 3%;
            margin-bottom: 5%; */
            /* padding: 5%; */
            padding: 4.9rem 3.9rem;
            position: relative;
            width: 700px;
            margin-bottom: 5%;
            /* height: 90%; */

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);
            

            form{
                width: 100%;
            }

            .field{
                display: flex;
                flex-direction: column;
            }
            
            .placeOrder-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-top: 7%;
                margin-bottom: 13px;
                display: flex;
                justify-content:center;
                align-items: center;
            }

            .shipping-info{

                margin-bottom: 3%;
                padding-bottom: 1.5%;
                border-bottom: solid 1px gray;

                h2{
                    padding-bottom: 2%;
                }
            }

            .shipping-summay{

            }

            .cart-item-container{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-left: 2%;
                padding-right: 2%;

                .cart-item-image img{
                    width: 45px;
                    height: 65px;
                }

                .cart-item-name{

                    a{
                        color:white;
                    }
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


            .summary-container{
                display: flex;
                flex-direction: column;
                padding: 2%;
                .summary-content{
                    display: flex;
                    position: relative;
                    padding-bottom: 2%;
                    padding-top: 2%;
                    border-bottom: solid 1px gray;

                    .summary-title{
                        padding-left: 1.6%;
                        font-weight: 700;
                        width: 30%;
                    }
                }
            }


            .payment-button{
                width: 100%;
                /* max-width: ; */
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                margin-top: 13px;
                cursor: pointer;
            }

            a{
                text-decoration: none;
                color: skyblue;

            }


        }
    }

`