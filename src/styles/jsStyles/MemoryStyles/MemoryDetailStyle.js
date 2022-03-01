import styled from "styled-components"

export const MemoryDetailStyleCom = styled.div`

.gallaryfullwraper{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.memory-detail-container{
        width: 95vw;
        color: white;
        
        /* margin-top: 3rem; */
        margin-top: 5%;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* padding-bottom: 3rem; */
        /* justify-content: space-space-evenly; */
        /* width: 100%;
        height: 100%; */
        /* margin-top: 7rem; */
            
    }

    .main-pic-container{
        /* width: 100%; */
        /* width: 95vw; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding-bottom: 3%; */
        margin-bottom: 3%;

        .picsContainer{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        img{
            width: calc(100% - 30px);
            border: 15px solid black;
            /* padding: 2px; */

            @media (max-width: 480px){
            width: calc(100% - 10px);
            border: 5px solid black;
            }
        }
    }

    .gallary{
        
        /* width: 95vw;
        max-width: 1500px; */
        
        -webkit-column-break-inside: avoid;
        -webkit-backface-visibility: hidden;
        -webkit-column-count: 4;
        -moz-column-count: 4;
        column-count: 4;
        -webkit-column-width: 25%;
        -moz-column-width: 25%;
        column-width: 25%;

        column-fill: balance;
        -moz-column-fill: balance;
        -webkit-column-fill: balance;
        /* padding: 0 12px; */
        /* -webkit-column-gap:.5em;
        -moz-column-gap:.5em;
        column-gap:.5em; */

        @media (max-width: 991px){
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
        }

        @media (max-width: 480px){
            -webkit-column-count: 1;
            -moz-column-count: 1;
            column-count: 1;
            -webkit-column-width: 100%;
            -moz-column-width: 100%;
            column-width: 100%;
        }

        .picsContainer{

            -webkit-transition: all 350ms ease;
            transition: all 350ms ease;
            cursor: pointer;
            margin-bottom:12px;
            filter: opacity(.79);

            :hover{
                filter: opacity(1)
            }

            img { 
                width: calc(100% - 10px);
                border: 5px solid rgba(0,0,0,0.39);
                /* height: 100%; */
            }
        }
    }

    .arrow-container{

        /* position: absolute; */
        /* top:39%;
        left:3%; */
        width: 100%;
        height: 13vh;
        /* opacity: 0.39; */
        display: flex;
        align-items: center;
        justify-content: space-around;

        .arrow-box{
            display: flex;
            align-items: center;
            color:gray;
            font-weight: 700;

            a{
                color:gray;
                font-weight: 700;
                transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            a:hover{
                color:white;
                font-weight: 700;
            }
        }

        #LeftArrow{
            color: gray;
            width: 60px;
            height: 60px;
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #LeftArrow:hover{
            color:white;
            transform: translateX(-30px);
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        }

        #RightArrow{
            color: gray;
            width: 60px;
            height: 60px;
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #RightArrow:hover{
            color:white;
            transform: translateX(30px);
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        }
    }
`