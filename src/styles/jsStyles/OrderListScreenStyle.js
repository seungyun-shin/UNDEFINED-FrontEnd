import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const OrderListScreenStyleCom = styled.div`

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
            width: 70%;
            padding: 3.9rem 2.9rem;
            margin-bottom: 5%;

            display: flex;
            /* justify-content:center;
            align-items: center; */
            /* flex-direction: column; */

            /* background-color: teal; */
            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);

            @media screen and (max-width: 1100px) {
                width: calc(95% - 125px);
            }

            .profile-order-wraper{
                width: 100%;
            }

            .register-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 19px;
                display: flex;
                justify-content:center;
                align-items: center;
                font-family: Romelio;
            }


            a{
                text-decoration: none;
                color: skyblue;

            }
            .password-label{
                color: white;
            }
        }

        table {
            /* color:black; */
            border: 1px solid #ccc;
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            table-layout: fixed;
            }

            table caption {
                font-size: 1.5em;
                margin: .5em 0 .75em;
            }

            table tr {
                /* background-color: #f8f8f8; */
                border: 1px solid #ddd;
                padding: .35em;
            }

            table th,
            table td {
                padding: .625em;
                text-align: center;
            }

            table th {
                font-size: .85em;
                letter-spacing: .1em;
                text-transform: uppercase;
            }

            @media screen and (max-width: 600px) {
            table {
                border: 0;
            }

            table caption {
                font-size: 1.3em;
            }
            
            table thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            
            table tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .625em;
            }
            
            table td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;
            }
            
            table td::before {
                /*
                * aria-label has no advantage, it won't be read inside a table
                content: attr(aria-label);
                */
                content: attr(data-label);
                float: left;
                font-weight: bold;
                text-transform: uppercase;
            }
            
            table td:last-child {
                border-bottom: 0;
            }
        }

        .profile-order-button{
            padding:3%;
            font-size: 1rem;
            cursor: pointer;
        }

        .profile-delete-button{
            padding:3%;
            font-size: 1rem;
            cursor: pointer;
        }
    }

`