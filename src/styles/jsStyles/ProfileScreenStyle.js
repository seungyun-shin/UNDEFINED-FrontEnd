import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const ProfileScreenStyleCom = styled.div`

    .register-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
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
            height: 90%;
            padding: 5%;

            display: flex;
            /* justify-content:center;
            align-items: center; */
            /* flex-direction: column; */

            /* background-color: teal; */
            background: rgba(1,1,1,0.7);

            @media screen and (max-width: 1000px) {     
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .profile-update-wraper{
                width: 30%;
                margin-right: 3%;
                
                @media screen and (max-width: 1000px) {     
                    width: 170px;
                }
            }
            .profile-order-wraper{
                width: 70%;
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

            .input-name{
                width: 90.3%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                
                @media screen and (max-width: 1000px) {     
                    padding: 13px;
                }

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

            .input-confirmPassword{
                width: 90.3%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
            }

            .field{
                @media screen and (max-width: 1000px) {     
                    width: 170px;
                }
            }

            form{
                @media screen and (max-width: 1000px) {     
                    width: 170px;
                }
            }

            .register-button{
                width: 100%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
                cursor: pointer;
                
                @media screen and (max-width: 1000px) {     
                    width: 183px;
                }
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
            width: 100%;
            padding: 13px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
        }

    }

`