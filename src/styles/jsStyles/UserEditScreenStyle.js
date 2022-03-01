import styled from "styled-components"

export const UserEditScreenStyleCom = styled.div`

    .register-screen-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        margin-top: 5%;

        display: flex;
        justify-content:center;
        align-items: center;
        color: rgba(255,255,255,.9);
        
        
        .register-wraper{
            position: relative;
            width: 500px;
            height: auto;
            padding: 3.9rem 2.9rem;
            margin-bottom: 5%;

            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;

            background-image: linear-gradient(180deg,#000,rgba(31,31,31,.19));
            backdrop-filter: brightness(155%) blur(5px);
            webkit-backdrop-filter: brightness(155%) blur(5px);
            
            @media screen and (max-width: 700px) {
                width: calc(95% - 125px);
            }
            
            margin-bottom: 5%;
            
            .register-banner{
                /* font-family: 'Tourney'; */
                font-size: 3rem;
                font-weight: 900;
                margin-bottom: 19px;
                display: flex;
                justify-content:center;
                align-items: center;
                font-family: Romelio;

                @media screen and (max-width: 400px) {
                    font-size: 2rem;
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
                /* width: 90.3%; */
                width: calc(100% - 29px);
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
                /* color: white; */
                color: rgba(255,255,255,.9);
            }
            .password-label{
                /* color: white; */
                color: rgba(255,255,255,.9);
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
                /* color: white; */
                color: rgba(255,255,255,.9);
                margin-left: 2%;
            }

            .is-admin-checkbox{
                
            }
        }
    }

`