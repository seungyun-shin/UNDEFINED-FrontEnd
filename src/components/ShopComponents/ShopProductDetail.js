
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import { motion } from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import Rating from './Rating'
import Loader from '../componentParts/Loader'
import Message from '../componentParts/Message'

//style
import { ShopProductDetailStyleCom } from "../../styles/jsStyles/ShopStyles/ShopProductDetailStyle"

//redux
import { listProductDetails, createProductReview } from '../../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../../constants/productConstants'

function ShopProductDetail({match, history }) {

    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { loading:loadingProductReview, error:errorProductReview, success:successProductReview} = productReviewCreate
    

    const pointeryHomeClick = () => {
        window.open("https://point-ery.com");
      };

    const pointeryInstaClick = () => {
        window.open("https://www.instagram.com/point_ery");
    };

    useEffect(() => {
        if(successProductReview){
            setRating(0)
            setComment('')
            dispatch({type:PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match, successProductReview])
    
    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
                rating,
                comment
            }
        ))
    }

    // const options = [...Array(product.countInStock).keys()].map((x) => ({ value: x+1, label: x+1}))
    
    // const customStyles = {
    //     menu: (provided, state) => ({
    //         ...provided,
    //         width: state.selectProps.width,
    //         borderBottom: '1px dotted pink',
    //         // color: state.selectProps.menuColor,
    //         color: 'black',
    //         padding: 10,
    //       }),

    //       option: (provided, state) => ({
    //         ...provided,
    //         // borderBottom: '1px dotted black',
    //         color: state.isSelected ? 'red' : 'blue',
    //         padding: 5,
    //         color: 'black',
    //       }),
    // }

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
                            <ContentsBanner bannerTitle={"SHOP"}/>
                            <div className="shop-product-detail-container">
                                <img src={product.image} alt="product"/>
                                <div className="product-detail-info-wraper">
                                    <div className="product-detail-pointery-info">
                                        From POINT-ERY &nbsp;
                                        <span className="clickSpan" onClick={pointeryHomeClick}><i className="fas fa-home"></i></span> &nbsp;
                                        <span className="clickSpan" onClick={pointeryInstaClick}><i className="fab fa-instagram"></i></span>
                                    </div>
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
                                    <div className="product-detail-orderbox4"><button onClick={addToCartHandler} className='basic-button' style={ product.countInStock === 0 ? {display:'none'} : {}} type='button'>Add to Cart</button></div>
                                </div>
                                
                            {/* <div className="arrow-container">
                                <div className="arrow-box"></div>
                                <LinkStyleCom to="/ShopScreen" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                            </div> */}
                            </div>
                            <div className="shop-product-review-container">
                                <div className="shop-product-review-box">
                                    <div className="review-title">Review</div>
                                    <div className="review-wraper">
                                        {product.reviews.length === 0 && <Message>No Reviews</Message>}
                                        {product.reviews.map((review) => (
                                            <div className="review-content" key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825'/>
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p className='review-comment-p'>{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="review-input-container">
                                        <div className="review-title">Write a Review</div>
                                        
                                        {loadingProductReview && <Loader/>}
                                        {successProductReview && <Message>Review Submitted</Message>}
                                        {errorProductReview && <Message>{errorProductReview}</Message>}
                                        
                                        {userInfo ? (
                                            <form onSubmit={submitHandler}>
                                            
                                            <div className="product-detail-review-select-wraper">
                                                <label className="rating-label">Rating</label>
                                                <select className="rating-select" onChange={ (e) => setRating(e.target.value) }>
                                                        <option value=''>Select...</option>
                                                        <option value='1'>1 - Poor</option>
                                                        <option value='2'>2 - Fair</option>
                                                        <option value='3'>3 - Good</option>
                                                        <option value='4'>4 - Vey Good</option>
                                                        <option value='4'>5 - Excellent</option>
                                                    
                                                </select>
                                            </div>

                                            <div className="review-field">
                                                <label className="comment-label">Comment</label>
                                                <textarea
                                                    rows="5"
                                                    className='input-comment'
                                                    type="textarea"
                                                    name="comment"
                                                    value={comment}
                                                    placeholder='Enter comment'
                                                    onChange={(e) => setComment(e.target.value)}
                                                />
                                            </div>

                                            <button 
                                                disabled={loadingProductReview}
                                                type="submit" 
                                                className="rating-button"
                                            > 
                                            Submit 
                                            </button>
                                            </form>   
                                        ) : (
                                            <Message>Please <LinkStyleCom to='/login'>Login</LinkStyleCom> to write to review</Message>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/ShopScreen" style={{textDecoration:"none"}}>BACK TO SHOP</LinkStyleCom>
                                    </div>
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
