import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { OrderScreenStyleCom } from "../../styles/jsStyles/ShopStyles/OrderScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

// import { savePaymentMethod } from '../../actions/cartActions' 

// import CheckoutSteps from './CheckoutSteps';

import Loader from '../../components/componentParts/Loader'
import Message from '../../components/componentParts/Message'
import { LinkStyleCom } from '../../styles/jsStyles/LinkStyle';

import { getOrderDetails } from '../../actions/orderActions'

function OrderScreen({ match }) {

    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading} = orderDetails

    if(!loading && !error){
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }
    
    useEffect(() => {
        if(!order || order._id !== Number(orderId)){
            dispatch(getOrderDetails(orderId))
        }
    }, [order, orderId])

    return loading ? (
        <Loader/>
    ) : error ? (
        <Message>{error}</Message>
    ) : (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
            <OrderScreenStyleCom>
            <div className="placeOrder-screen-container">
            <div className="placeOrder-wraper">
                <form>
                    <div className="placeOrder-banner">Order: {order._id}}</div>
                    <div className="placeOrder-banner">Place Order</div>
                    <div className="shipping-info">
                        <h2>Shipping</h2>
                        <span><strong>Name: </strong></span>
                        <span>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city},
                            {'   '}
                            {order.shippingAddress.postalCode},
                            {'   '}
                            {order.shippingAddress.country}
                        </span>
                    </div>
                    <div className="shipping-info">
                        <h2>Payment Method</h2>
                        <span>
                            <strong>Method: </strong>
                            {order.paymentMethod}
                        </span>
                    </div>
                    
                    <div className="shipping-info">
                        <h2>Order Items</h2>
                        <span>
                            {order.orderItems.length === 0 ? <Message>
                                Order is empty
                            </Message> : (
                                <>
                                {order.orderItems.map((item, index) => (
                                    <div className="cart-item-container" key={index}>
                                        <div className="cart-item-image"><img src={item.image} alt={item.image}/></div>
                                        <div className="cart-item-name"><LinkStyleCom to={`/shopproduct/${item.product}`}>{item.name}</LinkStyleCom> </div>
                                        <div className="cart-item-price"> {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}</div>
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
                                <div className="summary-title">Item:</div> ${order.itemsPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Shipping:</div> ${order.shippingPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Tax:</div> ${order.taxPrice}
                            </div>
                            <div className="summary-content">
                                <div className="summary-title">Total:</div> ${order.totalPrice}
                            </div>
                        </div>
                    </div>
                    

                    {/* <button type="button" onClick={} className="payment-button"> Place Order </button> */}

                </form>
            </div>
            </div>
            </OrderScreenStyleCom>
        </motion.div>
        </>
    )
}

export default OrderScreen
