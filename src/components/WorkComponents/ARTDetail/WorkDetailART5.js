
import React, { useEffect } from 'react'

import { LinkStyleCom } from "../../../styles/jsStyles/LinkStyle"

//transition Animation
import { motion } from 'framer-motion'

//basic Components
import ContentsBanner from "../../componentParts/ContentsBanner"

//style
import { WorkDetailArtStyleCom } from "../../../styles/jsStyles/WorkStyles/WorkDetailArtStyle"

import ParticleMainModel from '../../ModelComponents/ParticleMainModel'
import gsap from 'gsap'

function WorkDetailART5({match, history }) {

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

    return (
        <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <WorkDetailArtStyleCom>
                        <div className="contents-container">
                            
                            <ContentsBanner bannerTitle={"GL"}/>
                            <div className="work-detail-container">
                                <ParticleMainModel/>
                            </div>
                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}>BACK TO ART</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkDetailArtStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailART5
