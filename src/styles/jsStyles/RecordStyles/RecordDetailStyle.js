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
            font-size: 3rem;
            font-weight: 700;
            padding:2%;
            border-bottom: 1px solid white;
        }

        .record-detail-info{
            color: white;
            display: flex;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 7%;
            opacity: 0.79;

            .slash-box{
                margin-left: 2%;
                margin-right: 2%;
            }

        }
        .record-detail-contents{
            padding: 5%;
            color: white;
        }
    }

    .arrow-container{

        position: absolute;
        top:9%;
        left:3%;
        opacity: 0.39;

        #LeftArrow{
            color: white;
            width: 5vw;
            height: 5vw;
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        #LeftArrow:hover{
            transform: translateX(-30px);
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    }
}

    
`