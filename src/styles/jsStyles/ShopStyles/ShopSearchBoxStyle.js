import { Link } from 'react-router-dom'
import styled, {css, createGlobalStyle} from "styled-components"

export const ShopSearchBoxStyleCom = styled.div`
    .shop-search-container{
        display: flex;

        form{
            display: flex;
        }

        .input-search{
            padding: 13px;
            /* width: 130px;
            height: 50px; */

            
            @media screen and (max-width: 1000px) {
                padding: 10px;
            }
            @media screen and (max-width: 750px) {
                padding: 7px;
            }
            @media screen and (max-width: 500px) {
                padding: 5px;
                width: 100px;
            }
        }

        .search-button{
            padding: 13px;
            font-weight: 700;
            cursor: pointer;
            
            @media screen and (max-width: 1000px) {
                padding: 10px;
            }
            @media screen and (max-width: 750px) {
                padding: 7px;
            }
            @media screen and (max-width: 500px) {
                padding: 5px;
            }
        }
    }
`