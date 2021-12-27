import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../componentParts/Message'  
import { addToCart, removeFromCart } from '../../actions/cartActions'

//shop component
import ShopHeader from "../ShopComponents/ShopHeader"
import ContentsBanner from "../componentParts/ContentsBanner"

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle"

//style
import { ShopCartScreenStyleCom } from "../../styles/jsStyles/ShopStyles/ShopCartScreenStyle"
import { ShopContentsStyleCom } from "../../styles/jsStyles/ShopStyles/ShopContentsStyle"

//transition Animation
import { motion } from 'framer-motion'

function CartScreen( { match, location, history } ) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log('cartitem', cartItems)

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <>
        <motion.div
                initial = {{ translateY:60, opacity: 0 }}
                animate = {{ translateY:0, opacity: 1 }}
                exit={{ translateY:60, opacity: 0 }}
                transition={{duration: 0.5}}
            >
            <ShopContentsStyleCom>
                <div className="contents-container">
                    <ContentsBanner bannerTitle={"Cart"}/>
                    <ShopHeader />

                    <ShopCartScreenStyleCom>
                        <div className="cart-contents-wraper">
                            <div className="cart-contents-container">
                                
                            <div className="cart-screen-title"><h1>SHOPPING CART</h1></div>
                                {cartItems.length === 0 ? (
                                    <>
                                    <Message>Your Cart is Empty <LinkStyleCom to='/ShopScreen'>Go Back</LinkStyleCom> </Message>
                                    </>
                                ) : (
                                    <>
                                        {cartItems.map(item => (
                                            <div className="cart-list-container" key={item.product}>
                                                <div className="cart-list-image"> <img src={item.image} alt={item.image}/></div>
                                                <div className="cart-list-name"><LinkStyleCom to={`/ShopProduct/${item.product}`}>{item.name}</LinkStyleCom></div>
                                                <div className="cart-list-price">${item.price}</div>
                                                <div className="cart-list-qty">
                                                    <div className="cart-list-select">
                                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                            {
                                                                [...Array(item.countInStock).keys()].map((x)=>(
                                                                    <option key={x+1} value={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="cart-list-button">
                                                    <button style={{cursor:'pointer'}} onClick={() => removeFromCartHandler(item.product)} type='button' className="cart-icon-button"><i className='fas fa-trash'></i></button>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="cart-subtotal-container">
                                            <div className="subtotal-title">
                                                <h1>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) ITEMS</h1>
                                                <h2>=> TOTAL PRICE : ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h2>
                                                <div className="cart-subtotal-button"><button onClick={checkoutHandler} className='basic-button' type='button' style={ cartItems.length == 0 ? {display:'none'} : {}} >PROCEED TO CHECKOUT</button></div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </ShopCartScreenStyleCom>

                </div>
            </ShopContentsStyleCom>
        </motion.div>
        </>
    )
}

export default CartScreen
