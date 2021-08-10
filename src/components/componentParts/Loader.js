import React from 'react'

import { LoadingStyleCom } from "../../styles/jsStyles/LoadingStyle"

function Loader() {
    return (
        <>
            <LoadingStyleCom>
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
            </LoadingStyleCom>
        </>
    )
}

export default Loader
