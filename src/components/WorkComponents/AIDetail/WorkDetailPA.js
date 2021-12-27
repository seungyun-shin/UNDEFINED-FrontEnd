
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

import pic1 from "../../../assets/images/work/AI/PASummary.png"

//video

import video1 from "../../../assets/videos/golf_compare.mp4"
import video2 from "../../../assets/videos/tennis_compare.mp4"

function WorkDetailNLP({history, match }) {

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
                                    <div className="work-info-published">Pose Estimation</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Artificial Inteligence</div>
                                    {/* <div className="slash-box">/</div>
                                    <div className="work-info-visit">DNN, LSTM</div> */}
                                </div>
                                <div className="work-detail-title">
                                    <span>DeepLearning Posture Analysis and Similarity Analysis</span>
                                    <span>딥러닝 자세분석 및 유사도 분석</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content"> 딥러닝 모델을 활용하여 영상 속 사람들의 관절(KeyPoint)을 탐지하고, 탐지된 키포인트를 활용하여 움직임을 분석한다. 움직임을 분석하기위해 많은 하드웨어 장치와 자원이 필요했던 기존의 방식과 달리, 영상속에서 움직임을 분석하고 추출한다는 점에서 큰 잠재력이 있음.</div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                        <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2019.10.01 ~ 2021.08.21</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>OpenCV, TensorFlow, Pandas</td>
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
                                        
                                        {/* <video >
                                            <source src={video2} type="video/mp4"/>
                                        </video> */}

                                        <div className="project-workflow-subtitle">Phase 1.</div>
                                        <div className="project-workflow-description">
                                            1. OpenPose 라이브러리를 활용하여 자세분석 시도.<br/>
                                            2. OpnePose 라이선스 비용 및 낮은 자유도 제한점 도출.
                                        </div>
                                        <div className="project-workflow-subtitle">Phase 2.</div>
                                        <div className="project-workflow-description">
                                            1. 제한점 해결을 위해 OpenPose Tensorflow버전 도입.<br/>
                                            2. 분석 목적에 맞게 내부 알고리즘 변형.
                                        </div>
                                        <div className="project-workflow-subtitle">Phase 3.</div>
                                        <div className="project-workflow-description">
                                            1. 자세분석 과정 아래와 같은 순서로 진행.<br/>
                                            2. Pose Estimation 모델을 통한 키포인트(Keypoints) 탐지.<br/>
                                            3. 키포인트의 좌표 추출.<br/>
                                            4. 키포인트 간 각도 계산.<br/>
                                            5. 자세 교정 시나리오 설계.<br/>
                                            6. 자세 교정 시나리오 적용.<br/>
                                            7. 이외 골프 스윙스피드, 템포 추출 및 스윙 장면 검출 및 유사도 계산 작업.
                                        </div>
                                        <div className="project-workflow-subtitle">ETC</div>
                                        <div className="project-workflow-description">
                                            1. 스토리보드 APP기획<br/>
                                            2. 상용 서버 설계조사<br/>
                                            3. 다수의 회사와 협력 사업 논의 및 제안서 제출<br/>
                                            4. 관련 특허 출원<br/>
                                            5. 검증 툴 제작 배포 <br/>
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 자율 프로젝트로 시작된 프로젝트<br/>
                                        2. 2D Pose Estimation에 관심을 갖는 기업 및 사람이 많았음. 다양한 사업을 모색하였지만 대부분 계약까지는 가지 못했음.<br/>
                                        3. 특허출원. <br/>
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. 2D Pose Estimation으로 전문적인 자세분석을 하기에는 한계가 명확했음. 2D로 입체적인 움직임 특징을 추출하기엔 제한점이 큼.<br/>
                                        2. 2D Pose Estimation을 활용한 어플리케이션 서비스가 5년전부터 계속해서 출시가 되었었지만, 큰 호응을 받지는 못하는 것으로 조사됨.<br/>
                                        3. 2D Pose Estimation으로 역동적인 스포츠 야구, 테니스 등 자세 분석을 시도해보았지만, 타이밍과 감 처럼 정성적인 특징들이 중요한 스포츠인 만큼 유의미한 결과물을 도출해내기는 힘들었음.<br/>   
                                        4. 비교적 여러 고정된 기준이 있는 골프, 헬스, 요가 등에서 계속해서 Pose Estimation 모델이 활용되고 있는것으로 보임.<br/>
                                        5. 이중에서도 골프 분야에서 수요와 잠재력이 큰 것으로 보임, 실제로 많은 서비스에서 참고용으로 활용되기도함.<br/>
                                        6. 미국에서 사용자가 많은 '18Birdies' 라는 Pose Estimation AI골프 분석 서비스를 조사해본 결과, AI자세분석 기능은 테니스 서브영상을 넣어도 대부분 자세가 올바르다고 나올 정도로 모델이 정교하지는 않음.<br/>
                                        7. 다만 자세분석 기능 앞 뒤로 여러 컨텐츠(골프 코칭영상 추천, 가까운 골프장 추천 등.)를 잘 연결하여 서비스를 잘 구상했기에 큰 호응을 받는것으로 보여짐.<br/>
                                        8. 결론적으로, 2D Pose Estimation 모델로 자세분석 서비스를 만드는건, Pose Estimaion의 결과물이 참고용 혹은 흥미유발용으로는 활용될 수 있으나 2D Pose Estimation 자세분석 자체가 중심이 되기에는 결과물이 전문적이지 못하다고 느껴짐. <br/>
                                        9. 2D Pose Estimation의 제한점을 보완하기위해 3D Pose Estimation 모델이 대안이 될 수 있음. 다만, 2D 결과로 z값을 예측하는 방법이기 때문에 발전성에 대해서는 의문이 듬.<br/>
                                        10. 앞으로 컴퓨터 비전 및 Pose Estimation 기술은 계속해서 발전할것으로 보이고, 점점 더 하드웨어에서 부터 자유로워질 것으로 예측됨.
                                    </div>
                                </div>
                            </div>
                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreen" style={{textDecoration:"none"}}>BACK TO WORK</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkScreenART" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkDetailAIStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailNLP
