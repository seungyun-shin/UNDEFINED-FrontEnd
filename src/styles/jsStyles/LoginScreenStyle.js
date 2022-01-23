import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const LoginScreenStyleCom = styled.div`

    .login-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        /* width: 100%;
        height: 100%; */
        /* width: 100vw;
        height: 100vh; */
        width: 100vw;
        margin-top: 5%;
        /* height: 63vh; */
        /* max-width: 1500px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        color: rgba(255,255,255,.9);
        
        .login-wraper{
            position: relative;
            /* width: 28vw; */
            width: 500px;
            /* min-width: 530px; */
            /* height: auto; */
            margin-bottom: 5%;

            padding: 3.9rem 2.9rem;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            /* background: rgba(1,1,1,0.7); */
            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);

            @media screen and (max-width: 700px) {
                width: calc(95% - 125px);
            }

            .field{
                width: 100%;
            }
            
            .login-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                /* margin-bottom: 13px; */
                display: flex;
                justify-content:center;
                align-items: center;
                font-family: Romelio;
                margin-bottom: 13%;
            }

            .login-label{
                margin-bottom: 13px;
            }

            .password-label{
                padding-bottom: 13px;
            }
            
            .input-email{
                /* width: 90.3%; */
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .input-password{
                /* width: 90.3%; */
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .login-button{
                /* width: 100%; */
                width: calc(100%);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                cursor: pointer;
            }

            .login-label{
                /* color: white; */
                color: rgba(255,255,255,.9);
            }
            .password-label{
                /* color: white; */
                color: rgba(255,255,255,.9);
            }

            a{
                text-decoration: none;
                color: #dfd3c3;

            }
            h3{
                text-align: center;
            }
        }
    }

`