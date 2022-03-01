import React, { useEffect } from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import { RecordListScreenStyleCom } from "../../styles/jsStyles/RecordStyles/RecordListScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import { listRecords, deleteRecord, createRecord } from '../../actions/recordActions'
import { RECORD_CREATE_RESET } from '../../constants/recordConstants'

import Loader from '../componentParts/Loader'
import Message from '../componentParts/Message'

import ReactHtmlParser from 'react-html-parser';


function ProductListScreen( { history, match } ) {

    const dispatch = useDispatch()

    const recordList = useSelector(state => state.recordList)
    const {loading, error, records } = recordList

    const recordDelete = useSelector(state => state.recordDelete)
    const {loading: loadingDelete, error:errorDelete, success:successDelete } = recordDelete

    const recordCreate = useSelector(state => state.recordCreate)
    const {loading: loadingCreate, error:errorCreate, success:successCreate, record:createdRecord } = recordCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect( () => {

        dispatch({type:RECORD_CREATE_RESET})

        if(!userInfo.isAdmin){
            history.push('/login')
        }

        if(successCreate){
            history.push(`/admin/record/${createdRecord._id}/edit`)
        }else{
            dispatch(listRecords())
        }

        // if (userInfo && userInfo.isAdmin){
        //     dispatch(listRecords())
        // }else{
        //     history.push('/login')

        // }
        // if(successCreate){
        //     history.push(`/admin/product/${createdProduct._id}/edit`)
        // }else{
        //     dispatch(listProducts(keyword))
        // }
        
    }, [dispatch, history, userInfo, successDelete, successCreate, createdRecord])

    const deleteHandler = (id) => {
        var confirmMessage = window.confirm('Are you sure you want to delete this product?');
        if(confirmMessage){
            dispatch(deleteRecord(id))
        }
    }

    const createRecordHandler = () => {
        dispatch(createRecord())
    }

    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <RecordListScreenStyleCom>
            <div className="register-screen-container">
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="profile-order-wraper">
                            <div className="productlist-top">
                                <div className="register-banner">RECORD</div>
                                <div className="create-button-wraper">
                                    <button className="create-button" onClick={createRecordHandler}>+ CREATE</button>
                                </div>
                            </div>

                            { loadingDelete && <Loader/>}
                            { errorDelete && <Message>{errorDelete}</Message>}
                            
                            { loadingCreate && <Loader/>}
                            { errorCreate && <Message>{errorCreate}</Message>}

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
                                                    <th scope="col">CONTENTS</th>
                                                    <th scope="col">CATEGORY</th>
                                                    <th scope="col">VISIT</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {records.map(record => (
                                                    <tr key={record._id}>
                                                        <td data-label="ID">{record._id}</td>
                                                        
                                                        <td data-label="name"><LinkStyleCom to={`/records/${record._id}`}>{record.title}</LinkStyleCom></td>
                                                        
                                                        <td data-label="contents">{ReactHtmlParser(record.contents.substring(0, 13))}</td>
                                                        <td data-label="category">{record.category}</td>
                                                        <td data-label="visit-count">{record.visit_count}</td>

                                                        <td data-label="ID">
                                                            <LinkStyleCom to={`/admin/record/${record._id}/edit`}> 
                                                                <button className="profile-order-button">
                                                                    <i className='far fa-edit'></i>
                                                                </button> 
                                                            </LinkStyleCom>

                                                            <button className="profile-delete-button" onClick={() => deleteHandler(record._id)}>
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
            </RecordListScreenStyleCom>
            </motion.div>
        </>
    )
}

export default ProductListScreen
