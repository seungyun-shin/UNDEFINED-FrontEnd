
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
import Select from 'react-select'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import Rating from './Rating'
import Loader from '../componentParts/Loader'
import Message from '../componentParts/Message'
import {ReactComponent as LeftArrow} from "../../assets/svg/arrow-left.svg"

//style
import { ShopProductDetailStyleCom } from "../../styles/jsStyles/ShopStyles/ShopProductDetailStyle"

//redux
import { listProductDetails } from '../../actions/productActions'

function ShopProductDetail({match, history }) {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails
 
    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])
    
    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const options = [...Array(product.countInStock).keys()].map((x) => ({ value: x+1, label: x+1}))
    
    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            // color: state.selectProps.menuColor,
            color: 'black',
            padding: 10,
          }),

          option: (provided, state) => ({
            ...provided,
            // borderBottom: '1px dotted black',
            color: state.isSelected ? 'red' : 'blue',
            padding: 5,
            color: 'black',
          }),
    }

    const qtyfunction = (e) => {
        setQty(e.target.value)
    }

    return (
        <>
            {loading ?
                <Loader/>
                :error
                    ? <Message>{error}</Message>
                :(
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <ShopProductDetailStyleCom>
                        <div className="contents-container">
                            <ContentsBanner/>
                            <div className="shop-product-detail-container">
                                <img src={product.image}/>
                                <div className="product-detail-info-wraper">
                                    <div className="product-detail-name">{product.name}</div>
                                    <div className="product-detail-rating"><Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} /></div>
                                    <div className="product-detail-price">Price : $ {product.price}</div>
                                    {/* <div className="product-detail-option">Status : {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'} </div> */}
                                    
                                    {/* <div className="product-detail-select-wraper">
                                        <Select options={options} styles={customStyles} placeholder="Qty" autoFocus/> 
                                    </div> */}
                                    {/* <button className='basic-button' style={ product.countInStock == 0 ? {display:'none'} : {}} type='button'>Add to Cart</button>  */}
                                    <div className="product-detail-description">{product.description}</div>
                                </div>
                                <div className="product-detail-orderbox">
                                    <div className="product-detail-orderbox1">Price : $ {product.price}</div>
                                    <div className="product-detail-orderbox2">Status : {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</div>
                                    <div className="product-detail-orderbox3">
                                        <div className="product-detail-select-wraper">
                                            <select className="shop-select" onChange={qtyfunction}>
                                                {
                                                    [...Array(product.countInStock).keys()].map((x)=>(
                                                        <option key={x+1} value={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="product-detail-orderbox4"><button onClick={addToCartHandler} className='basic-button' style={ product.countInStock == 0 ? {display:'none'} : {}} type='button'>Add to Cart</button></div>
                                </div>
                                
                            <div className="arrow-container">
                                <div className="arrow-box"></div>
                                <LinkStyleCom to="/ShopScreen" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                            </div>
                            </div>
                        </div>
                    </ShopProductDetailStyleCom>
                    </motion.div>
                )
            }
        </>
    )
}

export default ShopProductDetail
