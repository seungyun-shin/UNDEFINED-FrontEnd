
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

//basic Components
import ContentsBanner from "../../componentParts/ContentsBanner"
import {ReactComponent as LeftArrow} from "../../../assets/svg/arrow-left.svg"
import {ReactComponent as RightArrow} from "../../../assets/svg/arrow-right.svg"

//style
import { WorkDetailAIStyleCom } from "../../../styles/jsStyles/WorkStyles/WorkDetailAIStyle"

import pic1 from "../../../assets/images/work/AI/DTSummary.png"

function WorkDetailDT({history, match }) {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect( () => {

        if(userInfo == null ){
            history.push('/warningscreen')
        }else{
            if( !userInfo.isAdmin){
                history.push('/warningscreen')
            }
        }
        
    }, [history, userInfo])

    return (
        <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <WorkDetailAIStyleCom>
                        <div className="work-contents-container">
                            
                            {/* <ContentsBanner bannerTitle={"AI DETAIL"}/> */}

                            <div className="work-title-container">
                                
                                <div className="work-detail-info">
                                    <div className="work-info-category">Computer Vision</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Detection</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Deep Learning</div>
                                    {/* <div className="slash-box">/</div>
                                    <div className="work-info-visit">DNN, LSTM</div> */}
                                </div>
                                <div className="work-detail-title">
                                    <span>Facial Recognition Mask, Gender, Age Detection Deep Learning Model</span>
                                    <span>얼굴인식 마스크, 성별, 나이 탐지 딥러닝 프로젝트</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content">코로나 방역 소독기 게이트에 탑재될, 대상의 마스크 착용 유무를 탐지하고 성별 및 나이를 예측하는 딥러닝 모델을 설계하여 자동으로 소독기를 분사하고 방역 데이터를 축적한다.</div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2020.01.01 ~ 2020.12.31</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python, SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>YOLOv4, openCV, Django, TensorFlow, Pandas</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tool (사용 도구)</th>
                                                <td>Jupyter Lab, Notebook, VSCode</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">System (개발 환경)</th>
                                                <td>Ubuntu</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="project-workflow-title">III. 프로젝트 작업흐름(Workflow)</div>

                                        <div className="project-summary-content"> 
                                            <img src={pic1} alt="projectsummary" />
                                        </div>


                                        <div className="project-workflow-subtitle">1. 학습 데이터 구축</div>
                                        <div className="project-workflow-description">
                                            1. 마스크 이미지 데이터 수집<br/>
                                            2. Kaggle dataset, google dataset, image search 등 플랫폼을 통해 다양한 마스크 이미지 수집.<br/>
                                            3. GAN을 이용하여 증폭하거나 변형한 데이터셋이 많았음.
                                        </div>
                                        <div className="project-workflow-subtitle">2. 학습 데이터 라벨링</div>
                                        <div className="project-workflow-description">
                                            1. 모델 학습을 위한 데이터 라벨링 작업.<br/>
                                            2. 라벨링 툴을 이용하여 직접 라벨링.
                                        </div>
                                        <div className="project-workflow-subtitle">3. 이미지 처리 모델 학습</div>
                                        <div className="project-workflow-description">
                                            1. 라벨링한 학습 이미지 데이터로 YOLOv4 모델 훈련.<br/>
                                            2. 약 1~2만개의 이미지 데이터 학습.
                                        </div>
                                        <div className="project-workflow-subtitle">4. 파이프라인 설계</div>
                                        <div className="project-workflow-description">
                                            1. YOLOv4 모델과 AGE(나이) 예측 모델 연결<br/>
                                            2. 훈련된 YOLOv4 모델로 1차 예측 후, AGE(나이) 예측 모델로 2차 결과값 생성.<br/>
                                        </div>
                                        <div className="project-workflow-subtitle">5. API 설계</div>
                                        <div className="project-workflow-description">
                                            1. Django 프레임워크로 API 설계.<br/>
                                            2. 이미지 데이터를 받으면, 디텍션 및 예측 결과값을 반환.<br/>
                                            2. NGINX, UWSGI, Django 를 활용하여 배포.<br/>
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. YOLOv4 모델을 활용하였음.<br/>
                                        2. 이미지 데이터 학습에 시간이 오래걸림, 약 1만개 데이터 학습에 GPU를 활용하여 6시간 정도 소요됨.<br/>
                                        3. 1차적으로 이미지 데이터 학습 후, 인식이 잘 되지 않는 데이터는 각도 등, 여러 변형을 통해 데이터를 증폭시킨 후 재학습 시킴.
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. YOLO 모델, Age&Gender 모델 두 번 예측했음에도, 이미지 하나당 1초 미만, 약 0.5초의 시간이 소요되었음. <br/>
                                        2. 예상한것 보다 더 인식률 및 성능이 높게 나왔음.
                                    </div>
                                </div>
                            </div>
                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkDetailBCP" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreen" style={{textDecoration:"none"}}>BACK TO WORK</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkDetailNLP" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkDetailAIStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailDT
