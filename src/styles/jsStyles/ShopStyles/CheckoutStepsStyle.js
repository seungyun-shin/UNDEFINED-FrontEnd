import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const CheckoutStepsStyleCom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .checkout-container{
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 3%;

        /* justify-content: space-evenly; */

        /* span{
            color:white;
            pointer-events: none; 
            color:gray;
        } */
        @media screen and (max-width: 700px) {
            width: 100%;
        }
        @media screen and (max-width: 450px) {
            font-size: 0.7rem;
        }
        
        a.disabled{
            pointer-events: none;
            cursor: default; 
            color: gray !important;
        }
    }

    
`