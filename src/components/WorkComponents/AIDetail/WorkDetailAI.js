
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

import pic1 from "../../../assets/images/work/AI/trainProjectSummary500.png"

function WorkDetailAI({history, match }) {

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
                                    <div className="work-info-category">Forecasting Models</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Machine Learning</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Artificial Inteligence</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-visit">DNN, LSTM</div>
                                </div>
                                <div className="work-detail-title">
                                    <span>Demand and Vacancy Forecasting DeepLearning Models for Train</span>
                                    <span>열차 수요 및 공석 예측 딥러닝 모델</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content"> 시간, 구간별 열차의 수요와 공석을 예측하여 예약가능 티켓 수량을 배정한다. 모델을 통해 열차 운행 공석을 최소화 하여 티켓 수익은 극대화 하며, 승객들에게는 최적화된 최대한 많은 좌석을 제공하여 편의성을 증대시킨다.    </div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2019.07.01 ~ 2020.06.30</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>TensorFlow, scikit-learn, Pandas</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tool (사용 도구)</th>
                                                <td>Jupyter Lab, Notebook</td>
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
                                            1. 운영 데이터베이스 운행 데이터 분석<br/>
                                            2. 필요 데이터 추출 및 결합 전처리(Preprocessing)<br/>
                                            3. 데이터 세트 생성
                                        </div>
                                        <div className="project-workflow-subtitle">2. 시계열 모델(LSTM) 학습 및 예측</div>
                                        <div className="project-workflow-description">
                                            1. 열차 역 구간별, 전체 구간별 수요 데이터 구축<br/>
                                            2. 시계열 모델(LSTM) 학습을 위한 시계열 데이터 전처리(차분 및 정상화 전처리, window size 테스트, 정규화 등...)<br/>
                                            3. 시계열 모델(LSTM) 훈련 데이터 세트 생성 및 학습 예측<br/>
                                            4. 시계열 모델(LSTM) 예측 결과물 시간대별, 열차별 수요 점유율 분배
                                        </div>
                                        <div className="project-workflow-subtitle">3. DNN 모델 학습 및 예측</div>
                                        <div className="project-workflow-description">
                                            1. 기본 열차정보, LSTM 예측 분배 결과, 외부요인 결합 학습 데이터 구축 <br/>
                                            2. 심층신경망 모델(DNN) 학습을 위한 데이터 전처리<br/>
                                            3. 심층신경망 모델(DNN) 훈련 데이터 세트 생성(작년 동월 데이터 학습) 및 학습 예측<br/>
                                            4. 심층신경망 모델(DNN) 최종 예측 결과물 생성
                                        </div>
                                        <div className="project-workflow-subtitle">4. 모델 검증 및 경합</div>
                                        <div className="project-workflow-description">
                                            1. 최종 예측 결과 데이터베이스 저장<br/>
                                            2. 예측 모델 열차별 평균 상대오차 추출 및 데이터베이스 저장<br/>
                                            3. 통계모델(Holt-Winters, ARIMA, Regression 등)과 성능 경합<br/>
                                            4. 경합은 전체 훈련 데이터의 과거 70% 를 훈련한 후, 최근 30%를 예측하여 WMAPE(가중평균절대백분율오차)를 계산하여 비교<br/>
                                            4. 열차별로 WMAPE(가중평균절대백분율오차)가장 작은 모델 선정 및 예측값 도출<br/>
                                            5. 최종 예측 결과를 통한 의사결정
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 기존에 도입된 통계모델 고도화 작업과 함께 AI 딥러닝 모델 도입이 진행되어, 통계모델과의 여러 차이점을 느끼면서 프로젝트를 진행할 수 있었음.<br/>
                                        2. 데이터 구축, 전처리, 훈련, 예측, 저장, 경합 모든 과정이 하루에 한번 진행되도록 100% 자동화가 필요했음.<br/>
                                        3. 단순히 시계열 데이터뿐만이 아니라 외부요인들도 학습해야 했기 때문에, LSTM과 DNN이 결합된 딥러닝 모델 설계가 필요했음.<br/>
                                        4. 또한, LSTM 모델 만으로는 열차수(100개 이상)에 대응하는 모델 갯수가 필요했기 때문에, 시간과 자원이 제한적인 프로젝트상 LSTM만으로 모델을 설계하는데는 한계가 있었음.<br/>
                                        5. 통계모델과 전처리, 훈련 및 예측 과정이 달랐기 때문에 경합을 위한 공정한 기준을 맞추기 위해 많은 의논이 필요했음.<br/>
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. 비선형 추론에 강점이 있는 딥러닝 모델은, 간단한 회귀, 시계열 모델 문제에 있어서 통계모델보다 눈에띄게 뛰어난 성능을 기대하기는 힘들다고 느껴졌음.<br/>
                                        2. 시계열 데이터 차분, 계절차분 등 정상화 전처리가 필수적인 통계모델과 달리, 비선형 추론이 가능한 딥러닝 모델은 정상화 작업이 필수적이지는 않을 수 있음(결국 모든 통계적 기법은 해보고 비교해봐야 알 수 있음).<br/>
                                        3. 경쟁사 열차, 우회노선, 날씨 등 다양한 외부요인 데이터를 결합하여 훈련 시켜보았지만, 사전 분석이 결여된 데이터는 오히려 성능을 망가뜨렸음.<br/>
                                        4. 모든 열차마다 대응하는 딥러닝 모델을 만들 수 없었기때문에 구간열차 예측같은 경우 출발역, 도착역을 데이터 컬럼(Feature)로 넣었지만 통계모델처럼 열차번호라는 단일 컬럼으로 훈련시켰을때 더 좋은 성능을 기대할 수 있었을 거라고 생각함.<br/>
                                        5. 특히, 본 문제와 같이 수많은 열차에 대응하는 모델이 필요할때(수많은 모델을 만들어야하고 자원이 제한적일때) 통계모델이 딥러닝 모델보다 더욱 효율적일 수 있음.<br/>
                                        6. 100% 자동화 프로세스를 위해 LSTM, DNN 모델에 Early Stopping 콜백함수를 사용했고, 그 결과 모델이 항상 100% 최적화 훈련이 이루어 졌다고 말하기는 힘들다고 느껴졌음.<br/>
                                        7. 아무리 성능이 좋은 예측 모델이라도 오차율이 크게 어긋날 수 있음, 이를 대비해 보정하는 함수가 필요함. 
                                    </div>
                                </div>
                            </div>

                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/WorkDetailSB" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/WorkScreen" style={{textDecoration:"none"}}>BACK TO WORK</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/WorkDetailAIHR" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </WorkDetailAIStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailAI
