import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const ShopShippingScreenStyleCom = styled.div`

    .register-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        /* width: 100%; */
        width: 100vw;
        margin-top: 5%;
        /* height: 75vh; */
        /* max-width: 1700px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        
        .register-wraper{
            position: relative;
            /* width: 50%;
            height: 90%; */
            
            width: 500px;
            margin-bottom: 5%;
            height: auto;
            padding: 3.9rem 2.9rem;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);
            
            @media screen and (max-width: 700px) {
                width: calc(95% - 125px);
            }
            
            .register-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 13px;
                display: flex;
                justify-content:center;
                align-items: center;
            }

            .register-label{
                margin-bottom: 13px;
            }

            .password-label{
                padding-bottom: 13px;
            }

            .input-Address{
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }
            
            .input-city{
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .input-postalCode{
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .input-Country{
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .register-button{
                width: 100%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                cursor: pointer;
            }

            .register-label{
                color: white;
            }
            .password-label{
                color: white;
            }

            a{
                text-decoration: none;
                color: skyblue;

            }
        }
    }

`