import styled, {css, createGlobalStyle} from "styled-components"

export const ShopProductDetailStyleCom = styled.div` 
    
    .shop-product-detail-container{
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
        
        img{
            width: 35vw;
            max-width: 500px;
            /* max-height: 700px; */
            transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .product-detail-info-wraper{
            /* line-height: 3rem; */
            
            width: 15vw;
            max-width: 500px;
            display: flex;
            flex-direction: column;
            font-weight: 700;
            margin-left: 3rem;

            .product-detail-name{
                font-weight: 700px;
                font-size: 2rem;
            }

            .product-detail-rating{
                /* font-weight: 700; */
                margin-top: 1rem;
                font-size: 1.3rem;
            }

            .product-detail-price{
                margin-top: 1rem;
                font-size: 1.3rem;
            }

            .product-detail-option{
                margin-top: 1rem;
                font-size: 1.3rem;
            }

            .product-detail-description{
                margin-top: 1rem;
                font-size: 1rem;
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

            .product-detail-orderbox1{
                /* margin-top: 1rem; */
                font-size: 1.3rem;
                border: 1px solid white;
                text-align: center;
                padding: 7px;
            }
            .product-detail-orderbox2{
                /* margin-top: 1rem; */
                font-size: 1.3rem;
                border: 1px solid white;
                border-top: 0px;
                text-align: center;
                padding: 7px;
            }
            .product-detail-orderbox3{
                display: flex;
                /* margin-top: 1rem; */
                font-size: 1.3rem;
                width: 100%;

                .product-detail-select-wraper{
                    /* display: flex; */
                    width:79px;
                    margin-top: 1rem;
                    font-size: 1rem;
                    width: 100%;
                }
            }
            .product-detail-orderbox4{
                /* margin-top: 1rem; */
                font-size: 1.3rem;
            }
        }
            
            .arrow-container{

                position: absolute;
                top:39%;
                left:3%;
                opacity: 0.39;

                /* display: flex;
                justify-content: center;
                align-items: center; */

                .arrow-box{
                    /* position: absolute;
                    top: 0;
                    left: 0;
                    width: 5vw;
                    height: 5vw;
                    border: 0.2rem solid white; */
                }
             
                #LeftArrow{
                /* font-size: 5rem; */
                /* position: absolute;
                top:39%;
                right:6%; */
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
`