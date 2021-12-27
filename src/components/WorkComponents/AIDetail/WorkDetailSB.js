
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

import pic1 from "../../../assets/images/work/AI/SBSummary.png"

function WorkDetailSB({history, match }) {

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
                                    <span>Pictograms Supplement Model For The Visually Impaired</span>
                                    <span>시각장애인 픽토그램 보완 딥러닝 이미지 모델 프로젝트</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. 프로젝트 목적(Project Purpose)</div>
                                    <div className="project-purpose-content"> 
                                    전시예술은 모든 감각을 아우르지만 시각에 가장 의존하기 때문에, 시각 정보에 제한이 있는 시각 장애인은 전시 예술을 감상하는데 큰 어려움이 있다.
                                    이러한 한계를 극복하기 위해, 다방면에서 시각적인 정보를 청각, 촉각적인 정보로 변환하여 전달하려는 시도가 나타나고 있다. 
                                    본 프로젝트는 시각 장애인이 촉각을 이용해 전시물을 감상할 수 있도록, 픽토그램 생성 프로그램의 결과물을 AI 모델로 보완하여 더욱 구체적인 픽토그램을 제공하는 것을 목표로 한다.</div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. 프로젝트 개요(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (프로젝트 기간)</th>
                                                <td>2021.05.01 ~ 2021.08.31</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (메인 언어)</th>
                                                <td>Python</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (주요 프레임워크)</th>
                                                <td>TensorFlow, PyTorch, Pandas</td>
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
                                            <img className='imgfull' src={pic1} alt="projectsummary" />
                                        </div>

                                        <div className="project-workflow-subtitle">1. 모델 및 방법론 조사</div>
                                        <div className="project-workflow-description">
                                            1. 경계선 추출(Edge Detection) 방법론 채택<br/>
                                            2. 딥러닝 이미지 경계선 추출 모델, Image Gradients, Image Depth 컴퓨터 vision 기술 활용.<br/>
                                            2. Image Gradients : 이미지 내 픽셀들의 밝기 값이 급격하게 변하는 곳을 경계선으로 규정하고 이를 감지.<br/>
                                            3. Image Depth : 동일 객체를 2개 이상의 각도에서 촬영한 이미지를 활용하여, 3D 구조를 계산하고 경계선을 추출한다.<br/>
                                            4. Deep Learning : 주로 이미지 처리에 활용되는 CNN 모델을 기반으로 설계된 DenseDepth, BDCN, DexiNed 등의 모델을 활용하여 경계선을 추출한다.  
                                        </div>
                                        <div className="project-workflow-subtitle">2. 모델 및 방법론 적용</div>
                                        <div className="project-workflow-description">
                                            1. Image Gradients - Canny Algorithm 적용<br/>
                                            2. Image Depth - StereoBM 적용<br/>
                                            3. Deep Learning - DenseDepth, BDCN, DexiNed 적용
                                        </div>

                                    <div className="project-workflow-title">IV. 프로젝트 특이점(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. 3D 모델 이미지를 활용하여, 픽토그램으로 만들 이미지 특징을 추출해야했음.<br/>
                                        2. 기본적으로 이미지의 경계선 이미지 특징을 추출하였지만, 실제로 시각 장애인분들이 픽토그램을 읽을때 어떤 특징을 중요하게 생각하시는지 도메인 지식이 중요하다고 생각함.<br/>
                                    </div>
                                    <div className="project-workflow-title">V. 프로젝트 피드백 및 결론(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. 픽셀의 기울기로 경계선을 탐지한 Canny 알고리즘 같은 경우 경계선 추출이 양호했으나 노이즈가 많았음. <br/>
                                        2. 시야에 따른 깊이의 차이로 경계선을 검출한 StereoBM 알고리즘 같은 경우 명확한 경계선 검출이 힘들었음. <br/>
                                        3. DenseDepth 딥러닝 모델같은 경우 깊이 값이 라벨링된 데이터셋을 학습하며, 경계선 검출 결과가 다른 모델에 비해 부정확했음. <br/>
                                        4. BDCN 모델은 이미지의 지엽적인 디테일과 전체적 맥락을 양방향으로 학습하여 경계선을 추출하며 경계선과 함께 좀 더 세부적인 특징 검출이 가능했음. <br/>
                                        5. DexiNed 모델은 딥러닝 모델의 레이어층이 깊어질수록 경계선 추출 이미지가 왜곡, 소실되는 문제를 해결한 모델로, 6개의 메인 블록과 Upsampling 블록의 연결로 최종 결과물이 원본 이미지의 특징을 소실하지 않음. 가장 깔끔한 윤곽선 추출 결과물을 나타냈음.
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

export default WorkDetailSB
