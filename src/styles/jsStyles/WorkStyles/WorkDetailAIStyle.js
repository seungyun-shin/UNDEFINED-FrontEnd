import styled, {css, createGlobalStyle} from "styled-components"

export const WorkDetailAIStyleCom = styled.div` 

    display: flex;
    justify-content: center;
    align-items: center;
    
    .work-contents-container{
        width: 80%;
        /* max-width: 1700px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; */
    }

    .work-detail-container{
        color: white;
        
        margin-top: 3rem;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 3rem;
        /* justify-content: space-space-evenly; */
        /* width: 100%;
        height: 100%; */
        /* margin-top: 7rem; */
        
    }       

    .work-title-container{
        
        .work-detail-title{
            flex-direction: column;
            line-height: 6rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 3%;
            font-size: 3rem;
            font-weight: 700;
            padding:2%;
            border-bottom: 1px solid white;
        }

        .work-detail-info{
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
    }

.work-contents{
    margin-top: 3%;
    padding: 3%;

    .project-purpose-container{
        .project-purpose-title{
            color: white;
            font-size: 1.9rem;
            font-weight: 900;
            opacity: 0.79;
        }
        .project-purpose-content{
            margin-top: 3%;
            padding-left: 1.9%;
            color:white;
        }
    }

    .project-summary-container{

        margin-top: 6%;
        .project-summary-title{
            color: white;
            font-size: 1.9rem;
            font-weight: 900;
            opacity: 0.79;
        }
        .project-summary-content{
            margin-top: 3%;
            padding-left: 1.9%;
            color:white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .project-basic-info{
            color: white;
            /* font-weight: 700; */
            margin-top: 3%;
            padding-left: 1.9%;
            display: flex;
            flex-direction: column;
            width: 100%;

            table.basic-info-table {
                border-collapse: collapse;
                text-align: left;
                line-height: 1.5;
                /* margin : 20px 10px; */
                
                
                    th {
                        width: 16%;
                        padding: 10px;
                        font-weight: bold;
                        vertical-align: top;
                        border: 1px solid #ccc;
                    }
                    td {
                        width: 64%;
                        padding: 10px;
                        vertical-align: top;
                        border: 1px solid #ccc;
                    }
                }
        }
    }

    .project-workflow-title{
        color: white;
        font-size: 1.9rem;
        font-weight: 900;
        opacity: 0.79;
        margin-top: 3%;
    }
    .project-workflow-subtitle{
        color: white;
        font-size: 1.6rem;
        font-weight: 900;
        opacity: 0.79;
        margin-top: 5%;
        padding-left: 2%;
    }
    .project-workflow-description{
        color: white;
        font-size: 1.3rem;
        margin-top: 2%;
        margin-bottom: 5%;
        padding-left: 3%;
        line-height: 189%;
    }

}


img{ width: 36%; }

.imgfull{ width: 70%; }
        

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