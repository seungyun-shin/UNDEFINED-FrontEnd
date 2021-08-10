import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const LoginScreenStyleCom = styled.div`

    .login-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 63vh;
        max-width: 1500px;
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        
        .login-wraper{
            position: relative;
            width: 50%;
            height: 79%;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            background: rgba(1,1,1,0.7);
            
            .login-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 13px;
                display: flex;
                justify-content:center;
                align-items: center;
            }

            .login-label{
                margin-bottom: 13px;
            }

            .password-label{
                padding-bottom: 13px;
            }
            
            .input-email{
                width: 90.3%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .input-password{
                width: 90.3%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .login-button{
                width: 100%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                cursor: pointer;
            }

            .login-label{
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