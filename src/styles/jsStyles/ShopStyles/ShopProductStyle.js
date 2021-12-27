import styled, {css, createGlobalStyle} from "styled-components"

export const ShopProductStyleCom = styled.div`
    
    /* position: relative; */
    
    

        .shop-product-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 23.5vw;
            height: 28.5vw;
            

            /* img{
                width: 90%;
                height: 90%;
            } */

            @media ${props => props.theme.laptop2} {
                width: 42.5vw;
                height: 43vw;
            }
            @media ${props => props.theme.mobile3} {
                width: 85vw;
                height: 84.5vw;
            }
            @media ${props => props.theme.mobile7} {
                margin-bottom: 3%;
            }
        }
    
        
        .book-container { 
            /* width: 375px;  */
            position: relative;
                
            width: 70%;
            height: 90%;
            
            /* margin: 40px auto;  */
            display: block;
            -webkit-perspective: 1200px;
            -moz-perspective: 1200px;
            perspective: 1200px;
            }
            
            .book { 
                width: 100%;
                height: 80%;
                z-index: 5; 
                box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
                -webkit-transition: 0.75s;
                -moz-transition: 0.75s;
                transition: 0.75s;
                -webkit-transform-style: preserve-3d;
                -moz-transform-style: preserve-3d;
                transform-style: preserve-3d;
                -webkit-transform-origin: 125px 0;
                -moz-transform-origin: 125px 0;
                transform-origin: 125px 0;
                
                transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(39deg);
             
                @media ${props => props.theme.mobile7} {
                    transform: translateX(0px) translateX(0px) rotateY(0deg);
                }

            }
            .book:after { 
                content: ""; 
                position: absolute; 
                top: 0; 
                bottom: 0; 
                left: 3px; 
                width: 7px; 
                background: url(https://3.bp.blogspot.com/-9KyPk9T8yko/U2bDJq8s52I/AAAAAAAAPzM/OvSY7JUf-tY/s1600/ridge.png) repeat-y; 
                z-index: 20;
                -webkit-transform: translateZ(1px);
                /* Fix for flickering in Chrome  */
            }

            .book:hover {
                -webkit-transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(60deg);
                -moz-transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(60deg);
                /* transform: translateX(-10px) translateZ(35px) translateX(35px) rotateY(60deg); */
                transform: translateX(0px) translateZ(0px) translateX(0px) rotateY(0deg);
            }

            .book-cover { 
                width: 100%;
                height: 100%;
                position: relative; 
                z-index: 10; 
            }

            .book-cover h1, .book-cover h2 {
                position: absolute;
                margin: 30px 30px;
                text-align: left;
                color: #eee;
                text-shadow: 0 0 4px #333;
                font-size: 1.3vw;
            }

            .book-cover h2 {
                bottom: 0;
                right: 0;
                font-family: courier;
                font-size: 80%;
            }

            .book-cover img { 
                vertical-align: bottom; 
                /* max-width: 100%; 
                height: auto;  */
                width: 100%; 
                height: 100%; 
                /* object-fit: cover; */
            }

            .book-spine { 
                position: absolute; 
                color: #fff; 
                
                /* background-color: black; */
                background-color: #161616;
                position: absolute; 
                bottom: 0; 
                top: 0; 
                /* width: 50px; */
                width: 50px; 
                z-index: 5; 
                overflow: hidden; 
                box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
                /* background: url(https://1.bp.blogspot.com/-_LC9R5Ri9Zo/U2bIX1W4qrI/AAAAAAAAPzc/ZM3T4IWWgd0/s1600/lomo.jpg) -64px 0 no-repeat; */
                background-size: auto 100%;
                -webkit-transform: rotateY(-90deg) translateX(-49px);
                -moz-transform: rotateY(-90deg) translateX(-49px);
                transform: rotateY(-90deg) translateX(-49px);
                -webkit-transform-origin: 0 0;
                -moz-transform-origin: 0 0;
                transform-origin: 0 0;
            }

            .book-spine h1 { 
                display: block; 
                /* width: 325px;   */
                width: 325px; 
                text-align: left; 
                /* color: #fff;  */
                color: #dfd3c3; 
                position: absolute; 
                top: 0; 
                left: 39px; 
                text-indent: 43px; 
                text-transform: uppercase; 
                font-family: Romelio; 
                font-size: 1.6vw; 
                opacity: 0.75; 
                font-weight: normal;
                -webkit-font-smoothing: antialiased;
                -webkit-transform: rotateZ(90deg);
                -moz-transform: rotateZ(90deg);
                transform: rotateZ(90deg);
                -webkit-transform-origin: 0 0;
                -moz-transform-origin: 0 0;
                transform-origin: 0 0;

                
                @media ${props => props.theme.laptop2} {
                    font-size: 2.3vw;
                }
                @media ${props => props.theme.mobile3} {
                    font-size: 3.9vw;
                }

            }
            .book-spine:before { 
                display: block; 
                content: ""; 
                width: 100%; 
                height: 100%; 
                background: rgba(0, 0, 0, 0.3); 
                /* background: white; */
            }

            .book-info{
                opacity: 0;
                background-color: black;
                padding: 10px;
                color: white;

                @media ${props => props.theme.mobile7} {
                    opacity: 1;
                }

                .book-info-title{
                    font-weight: 700;
                }
                .book-info-price{
                    font-weight: 700;
                }
            }

            .book:hover .book-info{
                opacity: 1;
                transition: 1s ease;
            }
            
    
`