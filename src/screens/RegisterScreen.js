import React, {useState, useEffect} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { RegisterScreenStyleCom } from "../styles/jsStyles/RegisterScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'
import FormContainer from '../components/componentParts/FormContainer'
import { register } from '../actions/userActions'

function RegisterScreen({location, history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/ShopScreen'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo } = userRegister

    useEffect(()=> {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name, email, password))
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
        <RegisterScreenStyleCom>
            <div className="register-screen-container">
                <FormContainer>
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="register-message-wraper">
                            <div className="register-message-container">
                                {loading && <Loader/>}
                                {message && <Message>{message}</Message>}
                                {error && <Message>{error}</Message>}
                            </div>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="register-banner">Register</div>

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
                                    required
                                />
                                </div>
                            </div>

                            <button type="submit" className="register-button"> Register </button>

                            <h3>Have an Account? <LinkStyleCom to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</LinkStyleCom></h3>

                            </form>
                        </div>
                </FormContainer>
            </div>
        </RegisterScreenStyleCom>
        </motion.div>
        </>
    )
}

export default RegisterScreen
