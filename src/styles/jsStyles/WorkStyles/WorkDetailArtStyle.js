import styled from "styled-components"

export const WorkDetailArtStyleCom = styled.div` 

    .work-detail-container{
        color: white;
        
        margin-top: 3rem;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* padding-bottom: 3rem; */
        /* justify-content: space-space-evenly; */
        /* width: 100%;
        height: 100%; */
        /* margin-top: 7rem; */
        
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