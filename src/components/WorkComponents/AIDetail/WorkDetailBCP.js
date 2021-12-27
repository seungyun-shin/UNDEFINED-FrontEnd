
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

import pic1 from "../../../assets/images/work/AI/NLPSummary.png"

function WorkDetailBCP({history, match }) {

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
                                    <span>Demand and Vacancy Forecasting DeepLearning Models for Train</span>
                                    <span>WorkDetailBCP</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content"> 시, 군, 구별 부동산 관련 뉴스제목 데이터를 자연어 처리 기술을 통해 감정분석 하여, 지역 부동산 가격에 대한 경향성을 추론해볼 수 있는 새로운 지표를 생성한다. </div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2020.06.01 ~ 2020.12.21</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python, SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>Transformers, HuggingFace, TensorFlow, PyTorch, scikit-learn, Pandas</td>
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
                                            1. 지역별 부동산 관련 뉴스 제목 데이터 수집<br/>
                                            2. 부동산 및 전문 도메인 지식을 통한 데이터 긍부정 라벨링<br/>
                                            3. 데이터 세트 구축
                                        </div>
                                        <div className="project-workflow-subtitle">2. 자연어 처리 모델 재설계</div>
                                        <div className="project-workflow-description">
                                            1. 사전학습(Pretrained)된 자연어처리 모델 로드, 본 프로젝트에선 KoBERT, ALBERT 사전학습 모델 사용.<br/>
                                            2. 감정분석 목적에 맞게 사전학습 모델 레이어 재설계
                                        </div>
                                        <div className="project-workflow-subtitle">3. 사전학습 모델 전이학습</div>
                                        <div className="project-workflow-description">
                                            1. 구축한 부동산 라벨링 데이터세트 전처리(Preprocessing) 및 학습데이터 구성 <br/>
                                            2. 사전학습된 모델에 긍정, 부정 학습데이터로 전이학습 진행
                                        </div>
                                        <div className="project-workflow-subtitle">4. 모델 예측 및 지표생성</div>
                                        <div className="project-workflow-description">
                                            1. 최종 학습 모델을 통해 지역별 뉴스 긍정, 부정 예측 및 저장<br/>
                                            2. 결과값을 통한 지역별 부동산 관련 뉴스 긍정, 부정 추이 시각화 및 점수화<br/>
                                            3. 새로운 지표로서 데이터 축적 및 의사결정 참고
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 자연어처리 모델 후보에 여러가지가 있었음 (BERT, GPT3, T5...)<br/>
                                        2. 대부분 대규모 자연어처리 모델은 영어에 초점이 맞춰져있어서 한국어에 특화되거나 변형된 자연어처리 모델이 필요했음.<br/>
                                        3. 세계 대부분 언어를 커버할 수 있는 BERT mulilingual 모델이 있지만, 기존 BERT모델에 비해 한국어 버전은 성능이 크게 떨어짐.<br/>
                                        4. 한국어에 특화된, BERT를 변형시킨 사전학습모델 중 SKT가 발표한 Kobert모델과 국민은행에서 발표한 법률관련 데이터를 사전학습한 ALBERT를 사용하기로 결정.<br/> 
                                        5. 부동산과 법률이 어느정도 연관성이 있을것이라고 생각했기에, Kobert보다 ALBERT가 좀 더 뛰어난 성능을 보이지 않을까 생각하며 두 모델의 성능을 비교하기로 함.<br/>
                                        6. HuggingFace의 Transformer 라이브러리와 같이, 대규모의 자연어처리 모델을 비교적 쉽게 다룰 수 있게 해주는 패키지가 있음.<br/>
                                        7. 사전학습된 분류(Classification) 자연어처리 모델중에는 마지막 레이어에 softmax나 sigmoid 레이어가 없는 경우가 많음.<br/>
                                        8. 전이학습에 대해 흥미로웠음, 마치 책을 많이 읽은 사람이 언어시험 성적이 높을 수 있듯이, 다른 전처리 데이터와 문제로 훈련된 딥러닝 모델이 또 다른 문제를 해결하는데 높은 적응력(?)을 보여주었음.<br/>
                                        9. 전이학습의 활용도와 확장 가능성에 대해 공부할 필요가 있겠음, 앞으로 '약'인공지능이 '강'인공지능으로 나아가는데 중요한 훈련 기술이 되지 않을까 생각함.
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. 예상대로 동일한 학습데이터를 학습시켰을때, ALBERT가 KoBERT보다 비교적 좋은 성능을 나타냈으나, 이것이 법률데이터를 사전학습했기 때문이라고 추측할수는 있지만 단정짓기는 힘들어보임. <br/>
                                        2. 500개의 데이터를 학습했을때보다, 1000개 이상을 학습시켰을때 성능이 대폭 향상된 것을 보아 대규모 모델인 만큼 비교적 많은 데이터 학습이 필요하다고 추측됨.<br/>
                                        3. 모델의 규모에 비해 해결 해야하는 문제가 비교적 단순하다 생각했지만, 좋은 모델인 만큼 그에 상응하는 높은 성능이 나왔음.<br/>
                                        4. 본 프로젝트를 통해 생성한 경향성 지표는 앞으로 검증해야겠지만, 의미와 insight가 깊은 지표를 만들어냈다고 하기엔 무리가있음.<br/>
                                        5. 이어질 프로젝트에서는 뉴스 제목뿐만이 아니라, 뉴스 내용까지 분석하여 좀 더 유의미한 지표를 만들어내야할 것으로 보임. 
                                    </div>
                                </div>
                            </div>
                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkDetailAIHR" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreen" style={{textDecoration:"none"}}>BACK TO WORK</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkDetailDT" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkDetailAIStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailBCP
