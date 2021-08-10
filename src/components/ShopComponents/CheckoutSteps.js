import React from 'react'
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import { CheckoutStepsStyleCom } from "../../styles/jsStyles/ShopStyles/CheckoutStepsStyle";

function CheckoutSteps( { step1, step2, step3, step4} ) {
    return (
        <>
            <CheckoutStepsStyleCom>
                <div className="checkout-container">
                    {step1 ? (
                        <LinkStyleCom to='/login'><span>Login</span></LinkStyleCom>
                    ) : (
                        <LinkStyleCom to='/login' className='disabled'><span>Login</span></LinkStyleCom>
                    )}

                    {step2 ? (
                        <LinkStyleCom to='/shipping'>Shipping</LinkStyleCom>
                    ) : (
                        <LinkStyleCom to='/shipping' className='disabled'>Shipping</LinkStyleCom>
                    )}

                    {step3 ? (
                        <LinkStyleCom to='/payment'>Payment</LinkStyleCom>
                    ) : (
                        <LinkStyleCom to='/payment' className='disabled'>Payment</LinkStyleCom>
                    )}

                    {step4 ? (
                        <LinkStyleCom to='/placeorder'>Place Order</LinkStyleCom>
                    ) : (
                        <LinkStyleCom to='/placeorder' className='disabled'>Place Order</LinkStyleCom>
                    )}
                </div>
            </CheckoutStepsStyleCom>
        </>
    )
}

export default CheckoutSteps
