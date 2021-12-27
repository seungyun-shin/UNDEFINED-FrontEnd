import React from 'react'

import { LoadingStyleCom } from "../../styles/jsStyles/LoadingStyle"

function Loader() {
    return (
        <>
            <LoadingStyleCom>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
            </LoadingStyleCom>
        </>
    )
}

export default Loader
