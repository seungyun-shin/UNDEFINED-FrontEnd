import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { OrderListScreenStyleCom } from "../styles/jsStyles/OrderListScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'

import { listOrders } from '../actions/orderActions'

function OrderListScreen({ history }) {

    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const {loading, error, orders} = orderList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect( () => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        }else{
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <OrderListScreenStyleCom>
            <div className="register-screen-container">
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="profile-order-wraper">
                            <div className="register-banner">ORDERS</div>
                                {loading
                                    ? (<Loader/>)
                                    : error
                                        ? (<Message>{error}</Message>)
                                        : (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">USER</th>
                                                    <th scope="col">DATE</th>
                                                    <th scope="col">TOTAL</th>
                                                    <th scope="col">PAID</th>
                                                    <th scope="col">DELIVERED</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map(order => (
                                                    <tr key={order._id}>
                                                        <td data-label="ID">{order._id}</td>
                                                        <td data-label="name">{order.user && order.user.name}</td>
                                                        <td data-label="createdAt">{order.createdAt.substring(0, 10)}</td>
                                                        <td data-label="totalprice">${order.totalPrice}</td>

                                                        <td data-label="isPaid">{order.isPaid ? (
                                                            order.paidAt.substring(0, 10)
                                                        ): (
                                                            <i className='fas fa-check' style={{color:'coral'}}></i>
                                                        )}</td>

                                                        <td data-label="isDelivered">{order.isDelivered ? (
                                                            order.deliveredAt.substring(0, 10)
                                                        ): (
                                                            <i className='fas fa-check' style={{color:'coral'}}></i>
                                                        )}</td>

                                                        

                                                        <td data-label="ID">
                                                            <LinkStyleCom to={`/order/${order._id}`}> 
                                                                <button className="profile-order-button">
                                                                    Details
                                                                </button> 
                                                            </LinkStyleCom>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
            </OrderListScreenStyleCom>
            </motion.div>
        </>
    )
}

export default OrderListScreen
