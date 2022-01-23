import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const MessageStyleCom = styled.div`

    .message-container{

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        top: calc(3%);
        /* left: calc(50% - 256px); */
        /* max-width: 512px; */
        width: 100%;
        transition: 1s ease;
        margin-top: 3%;
        margin-bottom: 2%;

        .message-content{

            /* background-color: cornflowerblue; */
            background-color: #161616;
            padding: 16px;
            border-radius: 16px;
            text-align: center;
            min-width: 160px;

        }
        a{
            color: #dfd3c3;
            font-weight: 900;
        }
    }
    
`;