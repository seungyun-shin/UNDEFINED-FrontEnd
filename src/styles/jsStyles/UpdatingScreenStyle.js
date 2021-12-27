import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const UpdatingScreenStyleCom = styled.div`

    .warning-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 26vh;
        /* max-width: 1900px; */
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        color: white;

        flex-direction: column;
        
        .lock-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 10%;
            opacity: 0.9;

            i{
                font-size: 7rem;
            }
        }

        .description{
            margin-top: 3%;
        }
        .eng-description{
            margin-top: 1%;
        }
    }

`