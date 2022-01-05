import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const ProductEditScreenStyleCom = styled.div`

    .register-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        margin-top: 5%;
        /* height: 75vh; */
        /* max-width: 1500px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;
        
        
        .register-wraper{
            position: relative;
            width: 50%;
            padding: 3.9rem 2.9rem;
            margin-bottom: 5%;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);

            @media screen and (max-width: 1100px) {
                width: calc(95% - 125px);
            }

            margin-bottom: 5%;
            
            .register-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 13px;
                display: flex;
                justify-content:center;
                align-items: center;
                font-family: Romelio;

                @media screen and (max-width: 510px) {
                    font-size: 2rem;
                }
                @media screen and (max-width: 400px) {
                    font-size: 1.5rem;
                }
            }

            .register-label{
                margin-bottom: 13px;
            }

            .password-label{
                padding-bottom: 13px;
            }

            .input-name{
                /* width: 90.3%; */
                width: calc(100% - 29px);
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
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

            .input-confirmPassword{
                width: calc(100% - 29px);
                /* width: 90.3%; */
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
        
        .checkbox-field{
            display: flex;
            margin-bottom: 13px;

            .checkbox-label{
                color: white;
                margin-left: 2%;
            }

            .is-admin-checkbox{
                
            }
        }
        .image-input-form{
            margin-bottom: 13px;
                /* padding: 13px; */
                font-weight: 700;
                /* font-size: 1rem; */
                /* margin-bottom: 13px; */
        }
    }

`