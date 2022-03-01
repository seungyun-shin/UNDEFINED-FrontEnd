import styled from "styled-components"

export const OrderScreenStyleCom = styled.div`

    .placeOrder-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        margin-top: 5%;
        /* height: 90vh; */
        /* max-width: 1700px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        .placeOrder-wraper{
            position: relative;
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
                margin-bottom: 5%;
                display: flex;
                justify-content:center;
                align-items: center;
                opacity: 0.93;
            }

            .shipping-info{

                margin-bottom: 3%;
                padding-bottom: 1.5%;
                border-bottom: solid 1px gray;
                opacity: 0.93;

                h2{
                    padding-bottom: 2%;
                    opacity: 0.93;
                }
                span{
                    opacity: 0.93;
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
                    text-align: center;
                    a{
                        color:white;
                    }
                }

                .cart-item-price{
                    text-align:center;
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
                    opacity: 0.93;

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
                color:#dfd3c3;

            }


        }

        .order-detail-info-container{
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid gray;
            margin-bottom: 2%;

            .order-detail-info{
                margin-bottom: 3%;
                font-size: 1.2rem;
            }
        }

        .payMessage-not{
            margin: 1%;
            padding: 2%;
            background-color: bisque;
            color: black;
            font-weight: 700;
        }

        .payMessage-paid{
            margin: 1%;
            padding: 2%;
            background-color: lightgreen;
            color: black;
            font-weight: 700;
        }
        
        .button-container{
            /* padding: 2%; */
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .deliver-button{
            width: 98.5%;
            padding: 13px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            color:#dfd3c3;
            background:#161616;
            border: 1px solid rgba(223,211,195,0.1);
        }
        
    }

    .paypal-container{
        text-align:center;
    }

`