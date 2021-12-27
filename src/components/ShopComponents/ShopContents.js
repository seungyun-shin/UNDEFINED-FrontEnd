import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ShopContentsStyleCom } from "../../styles/jsStyles/ShopStyles/ShopContentsStyle"

import ShopProduct from './ShopProduct'
import { listProducts } from '../../actions/productActions'

//Components
import Loader from "../componentParts/Loader"
import Message from "../componentParts/Message"
//paginate
import Paginate from "../componentParts/Paginate"


function ShopContents( ) {

    let history = useHistory()

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages} = productList
    
    let keyword = history.location.search
    
    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    return (
        <>
            
            {loading ? <Loader/>
                : error ? <Message>{error}</Message>
                    : 
                    <>
                        <ShopContentsStyleCom>
                            <div className="shop-contents-container">
                                {products.map(product => (
                                    // <h3>{product.name}</h3>
                                    <ShopProduct product={product} key={product._id}/>
                                ))}
                            </div>
                        </ShopContentsStyleCom> 
                    {/* <Paginate page={page} pages={pages} keyword={keyword}/> */}
                    </>
            }
        </>
    )
}

export default ShopContents
