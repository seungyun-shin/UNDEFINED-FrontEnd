import React, {useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, NavLink, Redirect } from 'react-router-dom';
//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import WorkHeader from "../WorkComponents/WorkHeader"

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
import Trainstation from "../../assets/images/work/AI/trainstation.jpg"
import NLP from "../../assets/images/work/AI/NLP.jpg"
import PoseAnalysis from "../../assets/images/work/AI/PoseAnalysis.jpg"
import DT from "../../assets/images/work/AI/DT.jpg"
import AIHR from "../../assets/images/work/AI/AIHR.jpg"
import RC from "../../assets/images/work/AI/RC.jpg"
import SB from "../../assets/images/work/AI/SB.jpg"
import BCP from "../../assets/images/work/AI/BCP.jpg"

import lock from "../../assets/images/etc/lockShild.png"
  
function WorkScreen() {

    useEffect(() => {

    }, [])

    
    const [pos, changePos] = useState({ x: 0, y: 0 });
    const titleContainer = useRef(null);

    const containerMove = (e) => {

        console.log(e.currentTarget)

        const width = e.currentTarget.offsetWidth
        const height = e.currentTarget.offsetHeight
        const left = e.currentTarget.offsetParent.offsetLeft
        const top = e.currentTarget.offsetParent.offsetTop
        // const width = titleContainer.current.clientWidth
        // const height = titleContainer.current.clientHeight
        // const oX = (e.nativeEvent.offsetX/width) * 100
        // const oY = (e.nativeEvent.offsetY/height) * 100

        const mouseX = (e.pageX - left - width/2) / width
        const mouseY = (e.pageY - top - height/2) / height - 1.3
        // const mouseY = (e.pageY - e.currentTarget.offsetTop - height/2) / height -2
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
                    <ContentsBanner bannerTitle={"A I"}/>
                    <WorkHeader/>
                    
                    <div className="record-contents-container">
                        <div className="work-3d-wraper">

                            <FadeInSection>
                            <div className="card-3d-container"
                                onMouseMoveCapture={containerMove}
                                onMouseLeave={containerOut}
                                ref={titleContainer}
                            >
                                <LinkStyleCom to="/WorkDetailAI">
                                <img src={Trainstation}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Forecasting Models / Deep Learning / DNN / LSTM</div>
                                    <div className="card-3d-content">열차 수요 및 공석 예측 딥러닝 모델 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailNLP">
                                <img src={NLP}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Natural Language Processing / Deep Learning / BERT</div>
                                    <div className="card-3d-content"> 부동산 감정분석 자연어처리 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailPA">
                                <img src={PoseAnalysis}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Pose Estimation / Computer Vision / Deep Learning</div>
                                    <div className="card-3d-content"> 딥러닝 컴퓨터비전 자세분석 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailDT">
                                <img src={DT}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Detection / Deep Learning / Computer Vision</div>
                                    <div className="card-3d-content"> 얼굴인식 마스크, 성별, 나이 탐지 딥러닝 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailAIHR">
                                <img src={AIHR}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Recommender System / Django / Deep Learning</div>
                                    <div className="card-3d-content"> 딥러닝 구직자 채용 추천 모델 및 이력서 관리 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailBCP">
                                <img src={BCP}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Forecasting Models / Django / Deep Learning</div>
                                    <div className="card-3d-content"> 암호화폐 추이 및 등락예측 딥러닝 모델 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailSB">
                                <img src={SB}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Edge Detection / CNN / Deep Learning </div>
                                    <div className="card-3d-content"> 시각장애인 픽토그램 보완 딥러닝 이미지 모델 프로젝트</div>
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
                                <LinkStyleCom to="/WorkDetailRC">
                                <img src={RC}/>
                                <div className="lockImgContainer"><img src={lock} alt="lock"/></div>
                                <div className="card-3d-contents">
                                    <div className="card-3d-title"> Recommender System / Flask / Deep Learning</div>
                                    <div className="card-3d-content"> 국내 관광지 추천 딥러닝 모델 프로젝트</div>
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

export default WorkScreen
