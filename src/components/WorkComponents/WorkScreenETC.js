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
import PaperMain from "../../assets/images/work/ETC/paper/PaperMain.jpg"
import BarclaysMain from "../../assets/images/work/ETC/barclays/BarclaysMain.jpg"
import ESportsMain from "../../assets/images/work/ETC/esports/ESportsMain.jpg"
import VARMain from "../../assets/images/work/ETC/var/VARMain.jpg"

function WorkScreenETC() {

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
        const mouseY = (e.pageY - top - height/2) /height - 1.3
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
                            <ContentsBanner bannerTitle={"ETC"}/>
                            <WorkHeader/>
                            
                            <div className="record-contents-container">
                                <div className="work-3d-wraper">

                                    <FadeInSection>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/WorkDetailETCPaper">
                                        <img src={PaperMain}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Research Paper / Machine Learning / Big Data / Sports Industry </div>
                                            <div className="card-3d-content">빅데이터와 머신러닝을 활용한 프로농구선수 연봉 예측</div>
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
                                        <LinkStyleCom to="/WorkDetailETC3">
                                        <img src={VARMain}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Sports Industry / Facility / Column </div>
                                            <div className="card-3d-content">VAR 제도, 심판의 ‘정체성’에 의문을 제기하다.</div>
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
                                        <LinkStyleCom to="/WorkDetailETC2">
                                        <img src={ESportsMain}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Sports Industry / Facility / Column </div>
                                            <div className="card-3d-content"> E-Sports 트렌디(Trendy)한 미디어로 발전하라.</div>
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
                                        <LinkStyleCom to="/WorkDetailETC">
                                        <img src={BarclaysMain}/>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Sports Industry / Facility / Column </div>
                                            <div className="card-3d-content"> 프로농구경기장, 경험과 문화를 파는 소통의 창구로. </div>
                                        </div>
                                        </LinkStyleCom>
                                    </div>
                                    </FadeInSection>

                                    {/* <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkScreenStyleCom>
                    </motion.div>
                    </>
                
        </>
    )
}

export default WorkScreenETC
