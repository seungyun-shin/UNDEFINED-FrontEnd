import React from 'react'

import { IntroOverlayStyleCom } from "../../styles/jsStyles/IntroOverlayStyle";

function IntroOverlay() {
    return (
        <>
            <IntroOverlayStyleCom>
                <div className="overlay-container">
                    <div className="top">
                        <div className="overlay-top"></div>
                        {/* <div className="overlay-top"></div>
                        <div className="overlay-top"></div> */}
                    </div>
                    <div className="bottom">
                        <div className="overlay-bottom"></div>
                        {/* <div className="overlay-bottom"></div>
                        <div className="overlay-bottom"></div> */}
                    </div>
                </div>
            </IntroOverlayStyleCom>
        </>
    )
}

export default IntroOverlay
