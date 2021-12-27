import styled, {css, createGlobalStyle} from "styled-components"

export const CSSHamburgerStyleCom = styled.div`

            .s-button{
                /* display: none !important; */
                /* visibility: hidden; */
                /* position: fixed;
                top: 50%; */
                padding-top: 15px;

                @media ${props => props.theme.laptop} {
                    display: block;
                }

                input{
                    display: block;
                    width: 40px;
                    height: 32px;
                    position: absolute;
                    top: 6px;
                    left: -5px;
                    
                    cursor: pointer;
                    
                    opacity: 0; /* hide this */
                    z-index: 999999999; /* and place it over the hamburger */
                    
                    -webkit-touch-callout: none;
                }
                
                span{
                    padding: 0px 0px 0px 0px !important;
                    /* display: block; */
                    width: 33px;
                    height: 4px;
                    margin-bottom: 5px;
                    position: relative;
                    
                    background: #cdcdcd;
                    border-radius: 3px;
                    
                    z-index: 9999999;
                    
                    transform-origin: 4px 0px;
                    
                    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                                opacity 0.55s ease;
                }

                span:first-child{
                    transform-origin: 0% 0%;
                }

                span:nth-last-child(2)
                {
                    transform-origin: 0% 100%;
                }

                /* 
                * Transform all the slices of hamburger
                * into a crossmark.
                */
                input:checked ~ span
                {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                    background: #232323;
                }

                /*
                * But let's hide the middle one.
                */
                input:checked ~ span:nth-last-child(3)
                {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                /*
                * Ohyeah and the last one should go the other direction
                */
                input:checked ~ span:nth-last-child(2)
                {
                    transform: rotate(-45deg) translate(0, -1px);
                }
                input:checked ~ span
                {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                    background: #ffffff;
                }

                /*
                * But let's hide the middle one.
                */
                input:checked ~ span:nth-last-child(3)
                {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                /*
                * Ohyeah and the last one should go the other direction
                */
                input:checked ~ span:nth-last-child(2)
                {
                    transform: rotate(-45deg) translate(0, -1px);
                }
                input:checked ~ .menu-screen
                {
                    /* display: block; */
                    /* visibility: visible; */
                    transform: scaleY(1);
                }
            }
`