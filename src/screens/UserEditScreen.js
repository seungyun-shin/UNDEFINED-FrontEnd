import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { UserEditScreenStyleCom } from "../styles/jsStyles/UserEditScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'
import FormContainer from '../components/componentParts/FormContainer'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'

function UserEditScreen({match, history}) {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const {error: errorUpdate, loading:loadingUpdate, success:successUpdate } = userUpdate

    useEffect(()=> {

        if(successUpdate){
            dispatch({type:USER_UPDATE_RESET})
            history.push('/admin/userlist')
        }else{
            if(!user.name || user._id !== Number(userId)){
                dispatch(getUserDetails(userId))
            }else{
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
        
    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({_id:user._id, name, email, isAdmin}))

    }

    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <UserEditScreenStyleCom>
            <div className="register-screen-container">
                <FormContainer>
                    <div className="register-wraper">
                        <div className="register-message-wraper">
                            <div className="register-message-container">
                                {/* {loading && <Loader/>}
                                {message && <Message>{message}</Message>}
                                {error && <Message>{error}</Message>} */}
                            </div>
                        </div>
                            <div className="register-banner">EDIT USER</div>

                            {/* Update User Loading*/}
                            {loadingUpdate && <Loader/>}
                            {errorUpdate && <Message>{errorUpdate}</Message>}

                            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
                            <form onSubmit={submitHandler}>
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
                                    />
                                </div>

                                <div className="checkbox-field">
                                    <div className="control">
                                    <input
                                        className='is-admin-checkbox'
                                        type="checkbox"
                                        name="isadmin"
                                        checked={isAdmin}
                                        placeholder='Enter Password'
                                        onChange={(e) => setIsAdmin(e.target.checked)}
                                    />
                                    </div>
                                    <label className="checkbox-label">isAdmin</label>
                                </div>
                                <button type="submit" className="register-button"> Update </button>
                                <h3><LinkStyleCom to='/admin/userlist'>Go Back</LinkStyleCom></h3>
                            </form>   
                            )}
                        </div>
                </FormContainer>
            </div>
        </UserEditScreenStyleCom>
        </motion.div>
        </>
    )
}

export default UserEditScreen
