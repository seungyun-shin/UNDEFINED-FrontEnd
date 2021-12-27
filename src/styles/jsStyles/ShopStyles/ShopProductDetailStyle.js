import styled, {css, createGlobalStyle} from "styled-components"

export const ShopProductDetailStyleCom = styled.div` 
    
    .shop-product-detail-container{
        color: white;
        
        margin-top: 5%;

        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 3rem;
        /* justify-content: space-space-evenly; */
        /* width: 100%;
        height: 100%; */
        /* margin-top: 7rem; */

        @media ${props => props.theme.laptop} {
            align-items: center;
            flex-direction: column;
        }
        
        img{
            width: 500px;
            height: 707px;
            /* width: 35vw;
            max-width: 500px; */
            /* max-height: 700px; */
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            @media screen and (max-width: 700px) {
                width: 300px;
                height: 560px;
            }
            @media screen and (max-width: 550px) {
                width: 200px;
                height: 360px;
            }
        }
        .product-detail-info-wraper{
            /* line-height: 3rem; */
            
            width: 15vw;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-weight: 700;
            margin-left: 3rem;

            @media ${props => props.theme.laptop} {
                margin-top: 3%;
                width: 100%;
                margin-left: 0;
            }

            .product-detail-name{
                font-weight: 700px;
                font-size: 2rem;

                @media screen and (max-width: 700px) {
                    font-size: 1.6rem;
                }
                @media screen and (max-width: 550px) {
                    font-size: 1.3rem;
                    padding-left: 2%;
                    padding-right: 2%;
                }
            }

            .product-detail-rating{
                /* font-weight: 700; */
                margin-top: 1rem;
                font-size: 1.3rem;

                @media screen and (max-width: 700px) {
                    font-size: 1rem;
                }
                @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                    padding-left: 2%;
                    padding-right: 2%;
                }
            }

            .product-detail-price{
                margin-top: 1rem;
                font-size: 1.3rem;

                @media screen and (max-width: 700px) {
                    font-size: 1rem;
                }
                @media screen and (max-width: 550px) {
                    padding-left: 2%;
                    padding-right: 2%;
                }
            }

            .product-detail-option{
                margin-top: 1rem;
                font-size: 1.3rem;

                @media screen and (max-width: 700px) {
                    font-size: 1rem;
                }
            }

            .product-detail-description{
                margin-top: 1rem;
                font-size: 1rem;

                @media screen and (max-width: 700px) {
                    font-size: 0.8rem;
                }
                @media screen and (max-width: 550px) {
                    padding-left: 2%;
                    padding-right: 2%;
                }
            }
        }

            .product-detail-qtyCart{
                /* display: flex; */
            }

        }


        .product-detail-orderbox{
            
            width: 9vw;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-weight: 700;
            margin-left: 3rem;

            @media ${props => props.theme.laptop} {
                width: 100%;
                margin-top: 3%;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: 0;
            }

            .product-detail-orderbox1{
                /* margin-top: 1rem; */
                font-size: 1.3rem;
                border: 1px solid white;
                text-align: center;
                padding: 7px;
                
                @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                    padding: 10px;
                }
            }
            .product-detail-orderbox2{
                /* margin-top: 1rem; */
                font-size: 1.3rem;
                border: 1px solid white;
                border-top: 0px;
                text-align: center;
                padding: 7px;

                @media ${props => props.theme.laptop} {
                    border-top: 1px solid white;
                }
                @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                    padding: 10px;
                }
            }
            .product-detail-orderbox3{
                display: flex;
                font-size: 1.3rem;
                width: 100%;

                @media ${props => props.theme.laptop} {
                    width: 79px;
                    margin-left: 1%;
                }
                @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                }

                .product-detail-select-wraper{
                    width:79px;
                    margin-top: 1rem;
                    font-size: 1rem;
                    width: 100%;
                    
                    @media ${props => props.theme.laptop} {
                        margin-top: 0;
                    }

                    @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                    }
                }
            }
            .product-detail-orderbox4{
                font-size: 1.3rem;

                @media ${props => props.theme.laptop} {
                    margin-left: 1%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                }
            }
        }
            
            .arrow-container{

                position: absolute;
                top:39%;
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
        }
        
        .shop-product-review-container{
            font-size: 1rem;
            color: white;
            margin-top: 3rem;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding-bottom: 3rem;
            @media screen and (max-width: 550px) {
                    font-size: 0.8rem;
                }

            .shop-product-review-box{
                border-top: 3px solid white;
                width: 70%;
                padding: 1.5%;

                .review-title{
                    font-size: 1.9rem;
                    font-weight: 700;
                    @media screen and (max-width: 550px) {
                    font-size: 1.3rem;
                    }
                }

                .review-content{
                    border-top: 1px solid white;
                    margin-top: 2%;
                    padding: 1%;
                    padding-top: 2.3%;

                    .review-comment-p{
                        margin-top: 0.5%;
                    }
                }

            .review-input-container{
                border-top: 3px solid white;
                width: 100%;
                padding-top: 1.5%;

                .product-detail-review-select-wraper{
                    display: flex;
                    flex-direction: column;

                    .rating-label{
                        color:white;
                        font-weight: 700;
                        margin-top: 0.5%;
                        margin-bottom: 0.5%;
                    }

                    .rating-select{
                        width: 200px;
                        height: 30px;
                    }
                }
                
                .review-field{
                    display: flex;
                    flex-direction: column;
                    
                    .comment-label{
                        color:white;
                        font-weight: 700;
                        margin-top: 0.5%;
                        margin-bottom: 0.5%;
                    }
                }

                .rating-button{
                    font-size: 1rem;
                    font-weight: 700;
                    padding: 15px;
                    cursor: pointer;
                    margin-top: 1%;

                    @media screen and (max-width: 550px) {
                        font-size: 0.8rem;
                    }
                }
            }
                
            }
            
        }

        @media ${props => props.theme.laptop} {
            .basic-button{
                margin-top: 0;
                height: 100%;
            }
        }
`