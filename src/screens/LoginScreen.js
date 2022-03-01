import React, {useState, useEffect} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { LoginScreenStyleCom } from "../styles/jsStyles/LoginScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'
import FormContainer from '../components/componentParts/FormContainer'
import { login } from '../actions/userActions'

function LoginScreen({location, history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/ShopScreen'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo } = userLogin

    useEffect(()=> {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>

        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <LoginScreenStyleCom>
            <div className="login-screen-container">
                <FormContainer>
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="login-wraper">
                        <div className="login-message-wraper">
                            <div className="login-message-container">
                                {loading && <Loader/>}
                                {error && <Message>{error}</Message>}
                            </div>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="login-banner">Log In</div>
                            <div className="field">
                                <label className="login-label">Email Address</label>
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

                            <button type="submit" className="login-button"> Sign In </button>

                            <h3>New Customer? <LinkStyleCom to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</LinkStyleCom></h3>

                            </form>
                        </div>
                </FormContainer>
            </div>
        </LoginScreenStyleCom>
        </motion.div>
        </>
    )
}

export default LoginScreen
