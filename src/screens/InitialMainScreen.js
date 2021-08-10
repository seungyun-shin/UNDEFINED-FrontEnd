import React, {useEffect, useRef} from 'react'

import { MainTitleStyleCom } from "../styles/jsStyles/mainStyle"

//animation 
import gsap from 'gsap'
import {AnimatePresence, motion} from 'framer-motion'

// component
import Header from "../components/componentParts/Header"
import MainFooter from "../components/componentParts/MainFooter"

import IntroOverlay from "../components/componentParts/IntroOverlay"

function MainScreen({}) {

    useEffect(() => {

        // document.getElementsByClassName("overlay-top").transform = "scaleY(1)"

        //timeline
        const tl = gsap.timeline();
        const tl2 = gsap.timeline();

        tl.from('.main-title', 1.8,{
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        opacity:0
        }).to('.overlay-top', 1.6, {
        scaleY: 0,
        ease: 'expo.inOut',
        stagger:0.4,
        transformOrigin: 'top',
        }).from('.header-container', 1.6, {
        y: -70,
        opacity: 0,
        ease: "power4.out",
        }).to(".overlay-container", {
            opacity: 0,
            display: "none",
            })
        ;

        tl2.from('.sub-title', 1.8,{
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        },
        opacity:0
        }).to('.overlay-bottom', 1.6, {
        scaleY: 0,
        ease: 'expo.inOut',
        stagger:0.4,
        // delay: -.8,
        transformOrigin: 'bottom',
        stagger: 0.4
        }).from('.mainfooter-container', 1.6, {
            y: 70,
            opacity: 0,
            ease: "power4.out",
        });

    }, [])

    return (
        <>
        <IntroOverlay/>
        {/* <Header/> */}
        <MainTitleStyleCom>
            <div className="main-title-wraper">
                <div className="main-title">CREATOR</div>
            </div>
            <div className="sub-title-wraper">
                <div className="sub-title">UNDEFINED</div> 
            </div>
        </MainTitleStyleCom>
        
        <MainFooter/>
        </>
    )
}

export default MainScreen
