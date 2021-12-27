import React, {useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, NavLink, Redirect } from 'react-router-dom';
//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import WorkHeader from "./WorkHeader"

//Record
import Record from '../RecordComponents/Record'

// import Records from '../../assets/etc/products'
//Components
import Loader from "../componentParts/Loader"
import Message from "../componentParts/Message"
import FadeInSection from "../componentParts/Observer"

//style
import { WorkScreenStyleCom } from "../../styles/jsStyles/WorkStyles/WorkScreenStyle"

import { listRecords } from '../../actions/recordActions'

//img
import rechardImg from "../../assets/images/work/ART/WorkArtRechard.jpg"
import papayaImg from "../../assets/images/work/ART/WorkArtPapaya.jpg"
import rechardImg2 from "../../assets/images/work/ART/WorkArtRechard2.jpg"
import papayaImg2 from "../../assets/images/work/ART/WorkArtPapaya2.jpg"
import vibrantImg from "../../assets/images/work/ART/WorkArtVibrant.jpg"
import particleImg from "../../assets/images/work/ART/WorkArtParticleBack.jpg"
import WorkArtDigital from "../../assets/images/work/ART/WorkArtDigital.jpg"
import WorkArtSun from "../../assets/images/work/ART/WorkArtSun.jpg"

function WorkScreenART() {

    useEffect(() => {

    }, [])

    
    const [pos, changePos] = useState({ x: 0, y: 0 });
    const titleContainer = useRef(null);

    const containerMove = (e) => {
        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        const left = e.currentTarget.offsetParent.offsetLeft
        const top = e.currentTarget.offsetParent.offsetTop
        // const width = titleContainer.current.clientWidth
        // const height = titleContainer.current.clientHeight
        // const oX = (e.nativeEvent.offsetX/width) * 100
        // const oY = (e.nativeEvent.offsetY/height) * 100

        const mouseX = (e.pageX - left - width/2) /width
        const mouseY = (e.pageY - top - height/2) /height -2
        // console.log('ddd', mouseX * 30, mouseY * -30)

        // console.log(oX, oY)
        changePos({ x: mouseX * 20, y: mouseY * -20 })
        
        e.currentTarget.style.transform = `rotateX(${pos.y}deg) rotateY(${pos.x}deg) translateZ(69px)`;
        // titleContainer.current.style.transform = `rotateX(${pos.y}deg)`;
        // titleContainer.current.style.transform = `rotateY(${pos.x}deg)`;
    }

    const containerOut = (e) => {
        changePos({ x: 0, y: 0 })

        e.currentTarget.style.transform = `rotateX(${0}deg) rotateY(${0}deg) translateZ(0)`;
        // titleContainer.current.style.transform = `rotateX(0deg)`;
        // titleContainer.current.style.transform = `rotateY(0deg)`;
    }

    return (
        <>
                    <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <WorkScreenStyleCom>
                        <div className="contents-container">
                            <ContentsBanner bannerTitle={"ART"}/>
                            <WorkHeader/>
                            
                            <div className="record-contents-container">
                                <div className="work-3d-wraper">

                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt">
                                        <img src={rechardImg}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> GRAPHIC SHADER / WEBGL / GLSL</div>
                                            <div className="card-3d-content"> Alien Richard Mattka</div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>

                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt7">
                                        <img src={WorkArtSun}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> THREE.JS / NOISE / GRAPHIC SHADER / WEBGL </div>
                                            <div className="card-3d-content"> Solar Athena Noise </div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>
                                    
                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt3">
                                        <img src={vibrantImg}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> 3D MODEL / THREE.JS / GRAPHIC SHADER / GLSL</div>
                                            <div className="card-3d-content"> Francis Face Model</div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>

                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt6">
                                        <img src={WorkArtDigital}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> THREE.JS / GRAPHIC SHADER / WEBGL </div>
                                            <div className="card-3d-content"> Infinite Cave Kernel</div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>

                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt5">
                                        <img src={particleImg}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> THREE.JS / GRAPHIC SHADER / GLSL </div>
                                            <div className="card-3d-content"> Deep Particle Drawing </div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>
                                    
                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailArt2">
                                        <img src={papayaImg}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> THREE.JS / GRAPHIC SHADER / WEBGL </div>
                                            <div className="card-3d-content"> Unpredictable Beneficial Virus </div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>
                                </div>
                            </div>
                        </div>
                    </WorkScreenStyleCom>
                    </motion.div>
                    </>
                
        </>
    )
}

export default WorkScreenART
