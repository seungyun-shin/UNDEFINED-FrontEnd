
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

import pic1 from "../../../assets/images/work/AI/RCSummary.png"

function WorkDetailRC({history, match }) {

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
                                    <div className="work-info-category">Natural Language Processing</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Machine Learning</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Artificial Inteligence</div>
                                    {/* <div className="slash-box">/</div>
                                    <div className="work-info-visit">DNN, LSTM</div> */}
                                </div>
                                <div className="work-detail-title">
                                    <span>Deep Learning Domestic Tourist Attractions Recommendation Model</span>
                                    <span>국내 관광지 추천 딥러닝 모델 프로젝트</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content">고객의 관광목적, 나이, 성별 주거지역, 방문 횟수 데이터를 활용하여 Deep Leaning Model이 전문인력을 대신하여 관광지를 추천해주고, 해당 고객의 만족도를 최대화 시킨다.</div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2019.08.01 ~ 2019.09.31</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>TensorFlow, Flask, Pandas</td>
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
                                            1. 해외 관광객을 대상으로 실시한 국내 관광지 선호도 조사 설문조사 데이터 3000개 전달받음.<br/>
                                            2. 데이터 분석 및 컬럼 생성. (사는지역, 나이, 성별, 선호관광 등..) <br/>
                                            3. 호텔, 볼거리, 쇼핑, 음식점 네가지 분류로 가장 선호하는 곳 라벨링
                                        </div>
                                        <div className="project-workflow-subtitle">2. 모델 설계</div>
                                        <div className="project-workflow-description">
                                            1. 호텔, 볼거리, 쇼핑, 음식점 네가지 딥러닝 모델 설계.<br/>
                                            2. 관광객의 정보를 input값으로 넣으면, 가장 선호할 만한 관광지를 도출해낸다.
                                        </div>
                                        <div className="project-workflow-subtitle">3. API 설계</div>
                                        <div className="project-workflow-description">
                                            1. 관광객의 정보를 Json 데이터와 함께 요청하면, 가장 선호할 만한 관광지 상위 5개를 반환하는 API 구축.<br/>
                                            2. 중국 보안문제로 https 를 사용.
                                            3. 추천 상위 5개 관광지 고유 ID값, 위치(위도, 경도), 추천 정도(별 1개~5개), 선호 연령(10~40대이상), 사용자 고유 ID값 반환.
                                        </div>
                                        <div className="project-workflow-subtitle">4. API 배포 및 앱 연동</div>
                                        <div className="project-workflow-description">
                                            1. AWS EC2를 활용하여 API 배포<br/>
                                            2. 앱 연동 확인
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 중국에 있는 중국인 앱 개발자와 소통을 해야했음.<br/>
                                        2. 모델을 API 로 만들어 앱연동을 해야했음.<br/>
                                        3. 중국에 있는 모든 서비스는 정부의 보안 문제로 꼭 http가아닌 https 를 사용해야한다고 들었음.
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                        <div className="project-workflow-description">
                                            1. 단순히 관광객의 정보를 input으로, 선호지를 Y로 넣는 추천모델은 한계가 많다고 느꼈음. <br/>
                                            2. 이전에 여러가지 필터링 작업을 추가하거나, 비슷한 취향, 연령대 사람들이 선호하는 장소를 추천하는 등 다양한 접근이 필요함.
                                            3. 관광지 선호도에 따른 가중치를 부여하기위해, 1위 관광지 데이터는 3배, 2위는 2배, 3위는 그대로 데이터의 수를 늘려서 학습을 시켰으나 이 방법에 대한 타당성과 대안에 대해 더 고민해 볼 필요가 있음.
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

export default WorkDetailRC
