import styled, {css, createGlobalStyle} from "styled-components"

export const HamburgerStyleCom = styled.div`

    .hamburger-menu{
        z-index:-1;
        top: 0;
        /* bottom: 0; */
        left: 0;
        right: 0;
        position: fixed;
        height: 100vh;
        width: 100%;
        background-color: black;
        display: none;

        .menu-secontary-background-color{
            background-color: $black;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: fixed;
            height: 100vh;
            width: 100%;
            z-index: -1;
        }
        .menu-layer {
            position: relative;
            background: $red;
            height: 100%;
            overflow: hidden;
            .menu-background{ 
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                position: absolute;
                height: 100%;
                width: 100%;
                opacity: 0;

            }
        }

    }
    .container{
        
    }

`