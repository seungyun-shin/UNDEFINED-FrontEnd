import React, {useState} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { ShopShippingScreenStyleCom } from "../../styles/jsStyles/ShopStyles/ShopShippingScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import { saveShippingAddress } from '../../actions/cartActions'

import CheckoutSteps from './CheckoutSteps';

// import Loader from '../../components/componentParts/Loader'
// import Message from '../../components/componentParts/Message'

function ShippingScreen({history}) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
            <ShopShippingScreenStyleCom>
            <div className="register-screen-container">
            <div className="register-wraper">
            <CheckoutSteps step1 step2/>
                <form onSubmit={submitHandler}>
                    <div className="register-banner">SHIPPING</div>

                    <div className="field">
                        <label className="register-label">Address</label>
                        <input
                            className='input-Address'
                            autoComplete="off"
                            type="text"
                            name="name"
                            value={address ? address : ''}
                            placeholder='Enter Address'
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field">
                        <label className="register-label">City</label>
                        <input
                            className='input-city'
                            autoComplete="off"
                            type="text"
                            name="city"
                            value={city? city : ''}
                            placeholder='Enter city'
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field">
                        <label className="register-label">Postal Code</label>
                        <input
                            className='input-postalCode'
                            autoComplete="off"
                            type="text"
                            name="postalCode"
                            value={postalCode? postalCode : ''}
                            placeholder='Enter postalCode'
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="field">
                        <label className="register-label">Country</label>
                        <input
                            className='input-Country'
                            autoComplete="off"
                            type="text"
                            name="Country"
                            value={country? country : ''}
                            placeholder='Enter Country'
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="register-button"> Continue </button>

                </form>
            </div>
            </div>
            </ShopShippingScreenStyleCom>
        </motion.div>
           
        </>
    )
}

export default ShippingScreen
