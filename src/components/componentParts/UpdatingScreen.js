import React from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { UpdatingScreenStyleCom } from "../../styles/jsStyles/UpdatingScreenStyle"

// import lock from "../../assets/images/etc/lockShild.png"

function Message({ children }) {
    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
            <UpdatingScreenStyleCom>
                <div className="warning-screen-container">
                    <div className="lock-container">
                        <i className="fas fa-user-edit"></i>
                    </div>
                    <div className="description">
                        <span> 업데이트 중인 페이지입니다. </span>
                    </div>
                    <div className="eng-description">
                        <span> This page is being updated.</span>
                    </div>
                </div>
            </UpdatingScreenStyleCom>
            </motion.div>
        </>
    )
}

export default Message
