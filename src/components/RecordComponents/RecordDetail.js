import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RecordDetailStyleCom } from "../../styles/jsStyles/RecordStyles/RecordDetailStyle"
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

//transition Animation
import { motion } from 'framer-motion'

import Loader from '../componentParts/Loader'
import Message from '../componentParts/Message'

import ReactHtmlParser from 'react-html-parser';

import { listRecordDetails } from '../../actions/recordActions'

function RecordDetail({ match }) {
    
    const dispatch = useDispatch()
    const recordDetails = useSelector(state => state.recordDetails)
    const { loading, error, record } = recordDetails

    useEffect(() => {
        dispatch(listRecordDetails(match.params.id))
    }, [dispatch, match])

    return (
            <>

            {loading ?
                <Loader/>
                :error
                    ? <Message>{error}</Message>
                :(
                <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <RecordDetailStyleCom>
                        <div className="contents-container">
                            {/* <ContentsBanner bannerTitle={"Record"}/> */}
                            <div className="record-detail-info">
                                
                                <div className="record-detail-info">
                                    <div className="record-info-category">{record.category}</div>
                                    <div className="slash-box">/</div>
                                    <div className="record-info-published">{(record.createdAt+'date').substring(0, 10)}</div>
                                    <div className="slash-box">/</div>
                                    <div className="record-info-author">{record.user}</div>
                                    <div className="slash-box">/</div>
                                    <div className="record-info-visit">{record.visit_count}</div>
                                </div>
                                <div className="record-detail-title">
                                    {/* <div className="arrow-container">
                                        <div className="arrow-box"></div>
                                        <LinkStyleCom to="/RecordScreen" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                    </div> */}
                                    {record.title}
                                </div>
                                <div className="record-detail-contents">
                                    {ReactHtmlParser(record.contents)}
                                </div>
                                
                                <div className="biarrow-container">
                                    <div className="arrow-container">
                                        <div className="arrow-box">
                                            <LinkStyleCom to="/RecordScreen" style={{textDecoration:"none"}}>BACK TO LIST</LinkStyleCom>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </RecordDetailStyleCom>
                    </motion.div>
                )
            }   
            </>
    )
}

export default RecordDetail
