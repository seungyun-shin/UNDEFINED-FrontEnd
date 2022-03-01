import styled from "styled-components"

export const IntroOverlayStyleCom = styled.div`
.overlay-container{
        position:fixed;
        top:0;
        left:0;
        width: 100vw;
        height: 100vh;
        /* z-index: 99; */
        .top{

            height: 50vh;
            /* height: calc(var(--vh, 1vh) * 50); */
            position : absolute;
            width: 100%;
            top: 0;
            left: 0;
            /* z-index: 99; */
            /* background-color: white; */

            .overlay-top{
                position: absolute;
                height: 100%;
                /* width: 33.333vw; */
                width: 100%;
                background: black;
                top: 0;
                left: 0;
                /* right: 0; */

                /* &:nth-child(2){
                    left: 33.333%;
                }
                &:nth-child(3){
                    left:66.666%;
                } */
            }
        }

        .bottom{

            height: 50vh;
            /* height: calc(var(--vh, 1vh) * 50); */
            position : absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            /* z-index: 99; */

            .overlay-bottom{
                position: absolute;
                height: 100%;
                /* width: 33.333vw; */
                width: 100%;
                background: black;
                bottom: 0;
                left: 0;
                /* right: 0; */

                /* &:nth-child(2){
                    left: 33.333%;
                }
                &:nth-child(3){
                    left:66.666%;
                } */
            }
        }
    }
`