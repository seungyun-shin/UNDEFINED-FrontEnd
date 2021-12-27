
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

import pic1 from "../../../assets/images/work/AI/AIHRSummary.png"

function WorkDetailAIHR({history, match }) {

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
                                    <span>Deep Learning Recruitment Recommendation Model</span>
                                    <span>딥러닝 구직자 채용 추천 모델 및 이력서 관리 프로젝트</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content"> 이력서 데이터 및 지원 합격 여부 데이터를 분석하여, 채용공고 입력시 내용에 알맞는(합격 가능성이 높은) 구직자를 추천한다. </div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2019.09.12 ~ 2019.12.11</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python, SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>Django, AWS Elastic Beanstalk, AWS RDS, TensorFlow, scikit-learn, Pandas</td>
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


                                        <div className="project-workflow-subtitle">1. 데이터 입력툴 제작</div>
                                        <div className="project-workflow-description">
                                            1. 이력서에서 추출할 데이터 컬럼 협의<br/>
                                            2. 이력서 데이터 입력 폼 사이트 제작 및 배포<br/>
                                            3. 의뢰사에서 배포된 사이트를 통해 이력서 데이터 입력<br/>
                                        </div>
                                        <div className="project-workflow-subtitle">2. 모델 설계</div>
                                        <div className="project-workflow-description">
                                            1. 입력된 이력서 데이터 전처리 및 학습데이터 구축<br/>
                                            2. 구직자 개인 정보, 이력과 지원 회사 종류(스타트업, 중소기업, 대기업), 직군(마케팅, HR, IT 등.) 등 데이터 컬럼지정. <br/>
                                            3. 지원 합격 불합격 여부를 Target(Y) 으로 지정. <br/>
                                            4. 딥러닝 모델 훈련.
                                        </div>
                                        <div className="project-workflow-subtitle">3. 웹 배포 및 기능연결</div>
                                        <div className="project-workflow-description">
                                            1. Django 사이트 제작<br/>
                                            2. (이력서 입력 페이지, 이력서 관리 페이지, 채용공고 입력 페이지, 채용공고 관리 페이지, 인공지능 구직자 추천 페이지 및 기능)
                                            3. 채용공고 관리 페이지와 딥러닝 모델 추천기능 연결
                                        </div>
                                        <div className="project-workflow-subtitle">4. 서비스 활용</div>
                                        <div className="project-workflow-description">
                                            1. 채용공고 내용에 알맞은(합격 가능성이 가장 높은 순서대로) 데이터베이스에 입력된 구직자 표출<br/>
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 헤드헌팅 의뢰사에서 보유하고 있는 이력서 데이터를 활용.<br/>
                                        2. 이력서에서 추출할 데이터 컬럼을 의뢰사와 협력하는데 시간과 수정작업이 많이 필요했음.<br/>
                                        3. Django를 활용하여, 의뢰사가 이력서와 채용공고를 데이터베이스에 입력하고 관리할 수 있는 웹 시스템을 제작 배포함.<br/>
                                        4. 데이터베이스는 의뢰사가 추후 관리하기 편하도록 AWS RDS 서비스를 활용함.<br/>
                                        5. 배포 또한 AWS Elastic Beanstalk을 활용하였음. 의뢰사 입장에서는 편리했을 수 있으나, 직접 서버를 유지 관리하기에는 여러가지 어려운 점이 있었음(이유를 알 수 없는 서버 오류 등.). 
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. 빅데이터에서 데이터를 분석하여 필요한 데이터를 추출하는 것이 아닌, 학습할 데이터를 미리 정의하고 시작한 프로젝트이기 때문에 성능적인 한계가 뚜렸했다고 생각함(인공지능 모델을 활용한 의미가 퇴색됨)<br/>
                                        2. 프로젝트 규모와 시간상, 이력서 데이터의 이력(줄 글 데이터)부분을 적극적으로 활용하지 못한점이 아쉬움.<br/>
                                        3. 좀 더 발전된 프로젝트를 위해서는, 이력서 데이터의 이력부분을 자연어처리해서 활용해야 할 것이라고 생각함.<br/>
                                        4. 의뢰사에서 눈에 보이는 웹사이트를 더 중요하게 피드백 하다보니, 딥러닝 모델보다는 웹 사이트를 구축하는데 더 많은 시간이 소요됨.<br/>
                                        5. 의뢰사에서 직접 데이터 컬럼(feature)을 지정하고, 데이터와 결과의 관계를 미리 추측하고 들어간 프로젝트이기 때문에, 올바른 인공지능 모델 개발 과정에 대해 다시 생각해 볼 필요가 있음. 
                                    </div>
                                </div>
                            </div>

                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkDetailAI" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreen" style={{textDecoration:"none"}}>BACK TO WORK</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkDetailBCP" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                            
                        </div>
                    </WorkDetailAIStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailAIHR
