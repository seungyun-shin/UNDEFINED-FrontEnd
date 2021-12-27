import styled, {css, createGlobalStyle} from "styled-components"

export const WorkScreenStyleCom = styled.div`
    
    $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
    $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

    
    
    /* position: relative; */
    /* color:white; */

    .record-contents-container{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* justify-content: space-space-evenly; */
        width: 100%;
        margin-top: 7rem;
    }

    a{
        color: black;
        font-weight: 700;
    }
    
    .work-3d-wraper{
        perspective: 1000px;
        transform-style: preserve-3d;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 13rem;
        /* align-items: center; */
        
    
        .card-3d-container{
        /* transform-style: preserve-3d;
        perspective: 1000px; */
            cursor: pointer;
            width: 42.5vw;
            height: 22vw;
            /* background-color: wheat; */
            /* margin: 1%; */
            transition: 0.3s;
            opacity:0.6;

            img{
                width: 100%;
                height: 100%;
            }

            @media screen and (max-width: 800px) {      
                width: 85vw;
                height: 43vw;
            }
        }

        .card-3d-container:hover{
            /* transition: 0.7s ease; */
            /* transform: translateX(10%); */
            cursor: pointer;
            opacity: 1;

        }

        .card-3d-container:hover .card-3d-contents{
            transition: 1s ease;
            opacity: 0.9;

        }

        .card-3d-container:hover .lockImgContainer{
            transition: 1s ease;
            opacity: 0.7;

        }

        .card-3d-contents{
            transform-style: preserve-3d;
            background-color: black;
            color: white;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 36%;
            opacity: 0;

            @media ${props => props.theme.laptop} {
                opacity: 1;
                background-color: transparent;
            }

            .card-3d-title{
                padding: 3%;
                height: 0%;
                font-weight: 700;
                opacity: 0.7;

                @media ${props => props.theme.laptop} {
                    font-size: 1vw;
                }
                @media ${props => props.theme.tablet2} {
                    font-size: 1.9vw;
                }
                
            }
            .card-3d-content{
                font-size: 1.3rem;
                font-weight: 700;
                padding: 3%;

                @media ${props => props.theme.laptop} {
                    opacity: 1.5;
                    font-size: 1.5vw;
                }
                @media ${props => props.theme.tablet2} {
                    opacity: 1.5;
                    font-size: 2.5vw;
                }

            }
        }
    }


    .lockImgContainer{
        position: absolute;
        width: 20%;
        opacity: 0;

        top: 3%;
        left: 3%;

        @media ${props => props.theme.laptop} {
                opacity: 0.5;
        }
    }
        

        
    
`