import React, {useState, useEffect} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { OrderScreenStyleCom } from "../../styles/jsStyles/ShopStyles/OrderScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import { PayPalButton } from 'react-paypal-button-v2'

// import { savePaymentMethod } from '../../actions/cartActions' 

// import CheckoutSteps from './CheckoutSteps';

import Loader from '../../components/componentParts/Loader'
import Message from '../../components/componentParts/Message'
import { LinkStyleCom } from '../../styles/jsStyles/LinkStyle';

import { getOrderDetails, deliverOrder } from '../../actions/orderActions'
// import { getOrderDetails, payOrder, deliverOrder } from '../../actions/orderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../../constants/orderConstants'

function OrderScreen({ match, history }) {

    const orderId = match.params.id
    const dispatch = useDispatch()

    const [sdkReady, setSdkReady] = useState(false)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading} = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading:loadingPay, success:successPay } = orderPay
    
    const orderDeliver = useSelector(state => state.orderDeliver)
    const { loading:loadingDeliver, success:successDeliver } = orderDeliver

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    if(!loading && !error){
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    }
    
    const addPayPalScript = () =>{
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AYMPwGufamOliEpVOGOF814IRsPHVUAQh4u8imja-OR7bHMcQCeLmheK-fkEPNzh1t6t9jYXxxrbV27N'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }

    useEffect(() => {

        if(!userInfo){
            history.push('/login')
        }

        if(!order || successPay || order._id !== Number(orderId) || successDeliver ){
            dispatch({type:ORDER_PAY_RESET})
            dispatch({type:ORDER_DELIVER_RESET})
            dispatch(getOrderDetails(orderId))
        }else if(!order.isPaid){
            if(!window.paypal){
                addPayPalScript()
            }else{
                setSdkReady(true)
            }
        }
    }, [dispatch ,order, orderId, successPay, successDeliver, history, userInfo])

    // const successPaymentHandler = (paymentResult) => {
    //     dispatch(payOrder(orderId, paymentResult))
    // }

    const deliverHandler = () =>{
        dispatch(deliverOrder(order))
    }

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
                    <div className="placeOrder-banner">Order: {order._id}</div>
                    {/* <div className="placeOrder-banner">Place Order</div> */}
                    <div className="shipping-info">
                        <div className="order-detail-info-container">
                            <span className="order-detail-info"><strong>Name: </strong> {order.user.name} </span>
                            <span className="order-detail-info"><strong>Email: </strong> <a href={`mailto:${order.user.email}`}>{order.user.email}</a> </span>
                        </div>
                        <h2>Shipping</h2>
                        <span>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city},
                            {'   '}
                            {order.shippingAddress.postalCode},
                            {'   '}
                            {order.shippingAddress.country}
                        </span>
                        {order.isDelivered ? (
                            <div className="payMessage-paid">Delivered on {order.deliveredAt}</div>
                        ) : (
                            <div className="payMessage-not">Not Delivered</div>
                        )}

                        {loadingDeliver && <Loader/>}
                        {userInfo && userInfo.isAdmin && !order.isDelivered && (
                            <div className="button-container">
                                <button type="submit" className="deliver-button" onClick={deliverHandler}> Mark As Delivered </button>
                            </div>
                        )}

                    </div>
                    <div className="shipping-info">
                        <h2>Payment Method</h2>
                        <span>
                            <strong>Method: </strong>
                            {order.paymentMethod}
                        </span>
                        {order.isPaid ? (
                            <div className="payMessage-paid">Paid on {order.paidAt}</div>
                        ) : (
                            <div className="payMessage-not">Not paid</div>
                        )}
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
                    
                    {!order.isPaid && (
                        <div className="paypal-container">
                            {loadingPay && <Loader/> }
                            
                            {!sdkReady ? (
                                <Loader/>
                            ) : (
                                <PayPalButton
                                    // amount={order.totalPrice}
                                    // onSuccess={successPaymentHandler}
                                />
                            )}
                        </div>
                    )}

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
