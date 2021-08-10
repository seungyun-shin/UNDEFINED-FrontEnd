import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { ShopPaymentScreenStyleCom } from "../../styles/jsStyles/ShopStyles/ShopPaymentScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import { savePaymentMethod } from '../../actions/cartActions' 

import CheckoutSteps from './CheckoutSteps';

import Loader from '../../components/componentParts/Loader'
import Message from '../../components/componentParts/Message'


function PaymentScreen({history}) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address){
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
            <ShopPaymentScreenStyleCom>
            <div className="register-screen-container">
            <div className="register-wraper">
            <CheckoutSteps step1 step2 step3/>
                <form onSubmit={submitHandler}>
                    <div className="register-banner">PAYMENT</div>

                    <div className="field">
                        <label className="payment-label">Select Method</label>
                        <div className="radio-container">
                            <input
                                className='input-payment'
                                type="radio"
                                name="paymentMethod"
                                label='PayPal or Credit Card'
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                required
                                checked
                            />
                            PayPal or Credit Card
                        </div>
                    </div>

                    <button type="submit" className="payment-button"> Continue </button>

                </form>
            </div>
            </div>
            </ShopPaymentScreenStyleCom>
        </motion.div>
           
        </>
    )
}

export default PaymentScreen
