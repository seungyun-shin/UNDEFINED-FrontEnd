import React from 'react'

//transition Animation
import {motion} from 'framer-motion'

import { WarningScreenStyleCom } from "../../styles/jsStyles/WarningScreenStyle"

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
            <WarningScreenStyleCom>
                <div className="warning-screen-container">
                    <div className="lock-container">
                        <i className="fas fa-user-lock"></i>
                    </div>
                    <div className="description">
                        <span>권한이 필요한 보안 문서 입니다. 관리자에게 문의 주세요.</span>
                    </div>
                    <div className="eng-description">
                        <span>This page requires access rights. Please Log on with administrator privileges, or contact your administrator.</span>
                    </div>
                </div>
            </WarningScreenStyleCom>
            </motion.div>
        </>
    )
}

export default Message
