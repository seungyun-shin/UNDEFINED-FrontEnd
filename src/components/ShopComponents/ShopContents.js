import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { ShopContentsStyleCom } from "../../styles/jsStyles/ShopStyles/ShopContentsStyle"

import ShopProduct from './ShopProduct'
import { listProducts } from '../../actions/productActions'

//Components
import Loader from "../componentParts/Loader"
import Message from "../componentParts/Message"

function ShopContents() {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products} = productList
 
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            
            {loading ? <Loader/>
                : error ? <Message>{error}</Message>
                    : 
                    <ShopContentsStyleCom>
                        <div className="shop-contents-container">
                            {products.map(product => (
                                // <h3>{product.name}</h3>
                                <ShopProduct product={product} key={product._id}/>
                            ))}
                        </div>
                    </ShopContentsStyleCom> 
            }
        </>
    )
}

export default ShopContents
