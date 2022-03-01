import React from 'react'

import { ShopProductStyleCom } from "../../styles/jsStyles/ShopStyles/ShopProductStyle"
import Rating from '../ShopComponents/Rating'
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import FadeInSection from "../componentParts/Observer"

function ShopProduct({product}) {

    return (
        <>
            <ShopProductStyleCom>
                
            <FadeInSection>
                <div className="shop-product-container">
                    {/* <a href={`/product/${product._id}`}>
                        <img src={product.image}/>
                    </a> */}
                
                        <div className="book-container">
                            <div className="book">
                                <LinkStyleCom to={`/ShopProduct/${product._id}`}>
                                    <div className="book-cover">
                                        {/* <h1>{product.name}</h1> */}
                                        {/* <h2>{product.rating} from {product.numReviews} reviews</h2> */}
                                        {/* <h2>Bartolo Manzano</h2> */}
                                        {/* <img src="https://1.bp.blogspot.com/-m1-zHVG6p7g/U2bIYfsLUfI/AAAAAAAAPzg/oCcoC-RFFug/s1600/portada.jpg" /> */}
                                        <img src={product.image} alt="product"/>
                                    </div>
                                </LinkStyleCom>
                                <div className="book-spine">
                                    <h1>{product.name}</h1>
                                </div>
                                <div className="book-info">
                                    <div className="book-info-title">{product.name}</div>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                    <div className="book-info-price">{product.price}$</div>
                                </div>
                            </div> 
                        </div>
                </div>
                
                </FadeInSection>
            </ShopProductStyleCom>
        </>
    )
}

export default ShopProduct
