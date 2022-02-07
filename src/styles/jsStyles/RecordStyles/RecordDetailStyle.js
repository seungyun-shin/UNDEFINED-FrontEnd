import styled, {css, createGlobalStyle} from "styled-components"

export const RecordDetailStyleCom = styled.div` 

    display: flex;
    justify-content: center;
    align-items: center;

    .contents-container{
        width: 80%;
    }
    
    .record-detail-info{
        
        .record-detail-title{
            color: white;
            display: flex;
            justify-content: center;
            margin-top: 3%;

            font-size: 3.6vw;
            line-height: 5vw;
            font-weight: 700;
            padding:2%;
            opacity: 0.79;
            /* border-bottom: 2px solid #dfd3c3; */
            /* border-bottom: 2px solid #dfd3c3; */

            /* font-size: 3rem;
            font-weight: 700;
            padding:2%;
            border-bottom: 1px solid white; */
        }

        .record-detail-info{
            color: white;
            display: flex;
            justify-content: center;
            /* font-size: 1.5rem; */
            font-size: 2vw;
            font-weight: 700;
            margin-top: 7%;
            opacity: 0.79;

            .slash-box{
                margin-left: 2%;
                margin-right: 2%;
            }

        }
        .record-detail-contents{
            border: 6px solid rgba(223,211,195,0.1);
            padding: 5%;
            color: white;
            
            font-size: 18px;
            font-size-adjust: 0.5;
            line-height: calc(1ex / 0.32);
                word-wrap:break-word;

            @media screen and (max-width: 550px) {
                font-size: 13px;
            }

            background-color: #161616;
        }

        a{
            color:#dfd3c3;
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
    }
`