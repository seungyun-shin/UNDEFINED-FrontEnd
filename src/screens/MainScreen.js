import React from 'react'

import { MainTitleStyleCom } from "../styles/jsStyles/mainStyle"

//animation 
// import gsap from 'gsap'
import {motion} from 'framer-motion'

// component
// import Header from "../components/componentParts/Header"
import MainFooter from "../components/componentParts/MainFooter"

// import IntroOverlay from "../components/componentParts/IntroOverlay"

function MainScreen() {

    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <MainTitleStyleCom>
            <div className="main-text-container">
                <div className="main-title-wraper">
                    <div className="main-title">CREATOR</div>
                </div>
                <div className="sub-title-wraper">
                    <div className="sub-title">UNDEFINED</div> 
                </div>
            </div>
        </MainTitleStyleCom>
        </motion.div>
        <MainFooter/>
        </>
    )
}

export default MainScreen
