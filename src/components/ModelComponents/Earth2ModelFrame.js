import React, { useRef, useEffect, Suspense } from 'react'
// import * as THREE from "three";

import gsap from 'gsap'

import Earth2Model from '../ModelComponents/Earth2Model'

import { Loader } from '@react-three/drei'
// reset Styles
import "../../App.scss"

//R3F
import { Canvas } from '@react-three/fiber'
// import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";


//transition Animation
import { motion } from 'framer-motion'

function Earth2ModelFrame() {

    useEffect(() => {

        
        const tl = gsap.timeline();

        tl.to('#mesh-container', {
            duration: 1,
            opacity: 0,
            display: "none",
        }).to(".earthContainer", {
            duration: 1,
            opacity: 1,
        });

        return() => {
            gsap.to( '#mesh-container', {
                duration: 1,
                opacity: 1,
                display: "flex",
            } );
        }

    }, [])

    
    const countryInfo = useRef();
    const countryInfoName = useRef();
    
    return (

        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <>

        <div className="earthContainer">

            <div className="country-info-show"  ref={countryInfo}>
                <div className="name-info" ref={countryInfoName} ></div>
            </div>

            <div className="guide-container" >
                <div className="guide-info">
                    <span>Click the Points or Planet</span> 
                    {/* <div className="link-container">
                        <LinkStyleCom to="/memoryfullgallery">Go to Gallery</LinkStyleCom>
                    </div> */}

                    <div className="mouse_scroll">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                            <span className="m_scroll_arrows unu"></span>
                            <span className="m_scroll_arrows doi"></span>
                            <span className="m_scroll_arrows trei"></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Canvas>
                <Suspense fallback={null}>
                    <Earth2Model countryInfo={countryInfo} countryInfoName={countryInfoName}/>
                </Suspense>
            </Canvas>
            <Loader />

        </div>
        </>
        </motion.div>
    )
}

export default Earth2ModelFrame
