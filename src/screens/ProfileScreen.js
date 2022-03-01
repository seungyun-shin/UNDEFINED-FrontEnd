import React, {useState, useEffect} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { ProfileScreenStyleCom } from "../styles/jsStyles/ProfileScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'

function ProfileScreen({history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const { loading:loadingOrders, error:errorOrders, orders  } = orderListMy

    useEffect(()=> {
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user || !user.name || success || userInfo._id !== user._id){
                dispatch({type:USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(updateUserProfile({
                'id':user._id,
                'name':name,
                'email':email,
                'password': password
            }))
            setMessage('')
        }
    }


    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <ProfileScreenStyleCom>
            <div className="register-screen-container">
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="profile-update-wraper">
                            <div className="register-message-wraper">
                                <div className="register-message-container">
                                    {loading && <Loader/>}
                                    {message && <Message>{message}</Message>}
                                    {error && <Message>{error}</Message>}
                                </div>
                            </div>
                            <form onSubmit={submitHandler}>
                                <div className="register-banner">PROFILE</div>

                                <div className="field">
                                    <label className="register-label">Name</label>
                                    <input
                                        className='input-name'
                                        autoComplete="off"
                                        type="name"
                                        name="name"
                                        value={name}
                                        placeholder='Enter name'
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Email Address</label>
                                    <input
                                        className='input-email'
                                        autoComplete="off"
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder='Enter Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="field">
                                    <label className="password-label">Password</label>
                                    <div className="control">
                                    <input
                                        className='input-password'
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder='Enter Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="password-label">Confirm Password</label>
                                    <div className="control">
                                    <input
                                        className='input-confirmPassword'
                                        type="password"
                                        name="password"
                                        value={confirmPassword}
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        // required
                                    />
                                    </div>
                                </div>

                                <button type="submit" className="register-button"> Update </button>

                                {/* <h3>Have an Account? <LinkStyleCom to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</LinkStyleCom></h3> */}

                                </form>
                            </div>


                            
                        <div className="profile-order-wraper">
                            <div className="register-message-wraper">
                            <div className="register-message-container">
                            <div className="register-banner">My Orders</div>
                            <label className="password-label">Order History</label>
                                {loadingOrders ? (
                                    <Loader/>
                                ) : errorOrders ? (
                                    <Message>{errorOrders}</Message>
                                ) : (
                                    <table>
                                        {/* <caption>Order History & Summary</caption> */}
                                        <thead>
                                            <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">TOTAL</th>
                                            <th scope="col">PAID</th>
                                            <th scope="col">DELIVERED</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map(order => (
                                                <tr key={order._id}>
                                                    <td data-label="ID">{order._id}</td>
                                                    <td data-label="Date">{order.createdAt.substring(0,10)}</td>
                                                    <td data-label="TOTAL">{order.totalPrice}</td>
                                                    <td data-label="PAID">{order.isPaid ? order.paidAt.substring(0,10) : (
                                                        <i className='fas fa-times' style={{color:'coral'}}></i>
                                                    )}</td>
                                                    <td data-label="DELIVERED">
                                                        <LinkStyleCom to={`/order/${order._id}`}> 
                                                            <button className="profile-order-button">Details</button> 
                                                        </LinkStyleCom>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileScreenStyleCom>
            </motion.div>
        </>
    )
}

export default ProfileScreen
