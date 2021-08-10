import React from 'react'

import { MessageStyleCom } from "../../styles/jsStyles/MessageStyle"

function Message({ children }) {
    return (
        <>
            <MessageStyleCom>
                <div className="message-container">
                    <div className="message-content">
                        {children}
                    </div>
                </div>
            </MessageStyleCom>
        </>
    )
}

export default Message
