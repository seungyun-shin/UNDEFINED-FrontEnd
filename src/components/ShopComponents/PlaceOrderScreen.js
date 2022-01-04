import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { ShopPlaceOrderScreenCom } from "../../styles/jsStyles/ShopStyles/ShopPlaceOrderScreen";

import { useDispatch, useSelector } from 'react-redux';

import { savePaymentMethod } from '../../actions/cartActions' 

import CheckoutSteps from './CheckoutSteps';

import Loader from '../../components/componentParts/Loader'
import Message from '../../components/componentParts/Message'
import { LinkStyleCom } from '../../styles/jsStyles/LinkStyle';

import { createOrder } from '../../actions/orderActions'
import { ORDER_CREATE_RESET } from '../../constants/orderConstants'

function PlaceOrderScreen({history}) {

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success} = orderCreate
    
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
    
    cart.totalPrice = Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)

    if(!cart.paymentMethod){
        history.push('/payment')
    }

    useEffect(() => {
        if(success){
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET})
        }
    }, [success, history])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }))
    } 

    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
            <ShopPlaceOrderScreenCom>
            <div className="placeOrder-screen-container">
            <div className="placeOrder-wraper">
            <CheckoutSteps step1 step2 step3 step4/>
                <form>
                    <div className="placeOrder-banner">Place Order</div>
                    <div className="shipping-info">
                        <h2>Shipping</h2>
                        <span>
                            <strong>Address: </strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city},
                            {'   '}
                            {cart.shippingAddress.postalCode},
                            {'   '}
                            {cart.shippingAddress.country}
                        </span>
                    </div>
                    <div className="shipping-info">
                        <h2>Payment Method</h2>
                        <span>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </span>
                    </div>
                    
                    <div className="shipping-info">
                        <h2>Order Items</h2>
                        <span>
                            {cart.cartItems.length === 0 ? <Message>
                                Your cart is empty
                            </Message> : (
                                <>
                                {cart.cartItems.map((item, index) => (
                                    <div className="cart-item-container" key={index}>
                                        <div className="cart-item-image"><img src={item.image} alt={item.image}/></div>
                                        <div className="cart-info-wraper">
                                            <div className="cart-item-name"><LinkStyleCom to={`/shopproduct/${item.product}`}>{item.name}</LinkStyleCom> </div>
                                            <div className="cart-item-price"> {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}</div>
                                        </div>
                                    </div>
                                    ))}
                                </>
                            )}
                        </span>
                    </div>
                    
                    <div className="placeOrder-banner">Order Summary</div>
                    <div className="shipping-summay">
                        <h2>Order Infomation</h2>
                        <div className="summary-container">
                            <div className="summary-content">
                                <div className="summary-title">{error && <Message>{error}</Message>}</div>
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Item:</div> ${cart.itemsPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Shipping:</div> ${cart.shippingPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Tax:</div> ${cart.taxPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Total:</div> ${cart.totalPrice}
                            </div>
                        </div>
                    </div>
                    

                    <button type="button" onClick={placeOrder} className="payment-button"> Place Order </button>

                </form>
            </div>
            </div>
            </ShopPlaceOrderScreenCom>
        </motion.div>
        </>
    )
}

export default PlaceOrderScreen
