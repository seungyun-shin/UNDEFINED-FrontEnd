import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const WarningScreenStyleCom = styled.div`

    .warning-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        /* margin-top: 13%; */
        height: 63vh;
        /* max-width: 1500px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        /* color: white; */
        color: rgba(255,255,255,.9);

        flex-direction: column;
        
        .lock-container{
            display: flex;
            align-items: center;
            justify-content: center;
            /* width: 10%; */
            opacity: 0.9;

            i{
                font-size: 6rem;
                @media screen and (max-width: 1100px) {
                    font-size: 5rem;
                }

                @media screen and (max-width: 800px) {
                    font-size: 3.9rem;
                }
                @media screen and (max-width: 500px) {
                }
            }
        }

        .description{
            width: 100%;
            margin-top: 3%;
            text-align: center;

            span{
                opacity: 0.9;
                padding-left: 3%;
                padding-right: 3%;
                font-size: 16px;
                /* font-family: 'Romelio'; */
                
                @media screen and (max-width: 800px) {
                    font-size: 13px;
                }

                @media screen and (max-width: 500px) {
                    font-size: 11px;
                }
            }
        }
        .eng-description{
            opacity: 0.9;
            width: 100%;
            margin-top: 1%;
            /* line-height: 3.9vw; */
            /* font-size: 0.9vw; */
            font-family: 'Romelio';
            text-align: center;

            span{
                padding-left: 2%;
                padding-right: 2%;
                font-size: 16px;
                font-family: 'Romelio';

                @media screen and (max-width: 800px) {
                    font-size: 13px;
                }

                @media screen and (max-width: 500px) {
                    font-size: 11px;
                }
            }
        }
    }

`