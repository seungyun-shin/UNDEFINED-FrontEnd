import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const RecordEditScreenStyleCom = styled.div`


.register-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        /* height: 75vh; */
        max-width: 1500px;
        /* background: rgba(1,1,1,0.7); */

        display: flex;
        justify-content:center;
        align-items: center;
        
        .register-banner{
            color: white;
        }
        
        .register-wraper{
            position: relative;
            width: 50%;
            height: 90%;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            /* background-color: teal; */
            background: rgba(1,1,1,0.7);
            
            padding: 5%;
            margin-bottom: 5%;
            
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
                width: 95.3%;
                padding: 13px;
                font-weight: 700;
                font-size: 1rem;
                margin-bottom: 13px;
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