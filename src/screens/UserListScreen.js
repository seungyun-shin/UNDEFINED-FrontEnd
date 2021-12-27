import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { UserListScreenStyleCom } from "../styles/jsStyles/UserListScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'

import { listUsers, deleteUser } from '../actions/userActions'

function UserListScreen({ history }) {

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const {loading, error, users} = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success:successDelete } = userDelete

    useEffect( () => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        }else{
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        var confirmMessage = window.confirm('Are you sure you want to delete this user?');
        if(confirmMessage){
            dispatch(deleteUser(id))
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
        <UserListScreenStyleCom>
            <div className="register-screen-container">
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="profile-order-wraper">
                            <div className="register-banner">USERS</div>
                                {loading
                                    ? (<Loader/>)
                                    : error
                                        ? (<Message>{error}</Message>)
                                        : (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">NAME</th>
                                                    <th scope="col">EMAIL</th>
                                                    <th scope="col">ADMIN</th>
                                                    <th scope="col">EDIT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map(user => (
                                                    <tr key={user._id}>
                                                        <td data-label="ID">{user._id}</td>
                                                        <td data-label="name">{user.name}</td>
                                                        <td data-label="email">{user.email}</td>
                                                        <td data-label="isAdmin">{user.isAdmin ? (
                                                            <i className='fas fa-check' style={{color:'green'}}></i>
                                                        ): (
                                                            <i className='fas fa-check' style={{color:'coral'}}></i>
                                                        )}</td>
                                                        <td data-label="ID">
                                                            <LinkStyleCom to={`/admin/user/${user._id}/edit`}> 
                                                                <button className="profile-order-button">
                                                                    <i className='far fa-edit'></i>
                                                                </button> 
                                                            </LinkStyleCom>

                                                            <button className="profile-delete-button" onClick={() => deleteHandler(user._id)}>
                                                                <i className='fas fa-trash'></i>
                                                            </button> 
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
            </UserListScreenStyleCom>
            </motion.div>
        </>
    )
}

export default UserListScreen
