import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, NavLink, Redirect } from 'react-router-dom';
//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import RecordHeader from "../RecordComponents/RecordHeader"

//Record
import Record from '../RecordComponents/Record'

// import Records from '../../assets/etc/products'
//Components
import Loader from "../componentParts/Loader"
import Message from "../componentParts/Message"

//style
import { RecordScreenStyleCom } from "../../styles/jsStyles/RecordStyles/RecordScreenStyle"

import { listRecords } from '../../actions/recordActions'

function ShopScreen() {

    const dispatch = useDispatch()
    const recordlist = useSelector(state => state.recordList)
    const {error, loading, records} = recordlist

    useEffect(() => {
        dispatch(listRecords())
    }, [dispatch])

    return (
        <>
            {loading ? <Loader/>
                : error ? <Message>{error}</Message>
                    : 
                    <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <RecordScreenStyleCom>
                        <div className="contents-container">
                            <ContentsBanner bannerTitle={"RECORD"}/>
                            {/* <RecordHeader/> */}
                            
                            <div className="record-contents-container">
                                <div className="tbl-header">
                                <table>
                                    {/* <caption>Statement Summary</caption> */}
                                    <thead>
                                        <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Pulbish</th>
                                        <th scope="col"><i className="far fa-eye"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {records.map(record => (
                                        <Record record={record} key={record._id}/>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </RecordScreenStyleCom>
                    </motion.div>
                    </>
                }
        </>
    )
}

export default ShopScreen
