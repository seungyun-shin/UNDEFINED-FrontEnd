
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { LinkStyleCom } from "../../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import { motion } from 'framer-motion'

//style
import { WorkDetailAIStyleCom } from "../../../styles/jsStyles/WorkStyles/WorkDetailAIStyle"

import pic1 from "../../../assets/images/work/AI/NLPSummary.png"

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
                                    <div className="work-info-category">Natural Language Processing</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Machine Learning</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Artificial Inteligence</div>
                                    {/* <div className="slash-box">/</div>
                                    <div className="work-info-visit">DNN, LSTM</div> */}
                                </div>
                                <div className="work-detail-title">
                                    <span>Real Estate Sentiment Analysis Natural Language Processing</span>
                                    <span>?????? ????????? ???????????? ??????????????? ????????????</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">I. ???????????? ??????(Project Purpose)</div>
                                    <div className="project-purpose-content"> ???, ???, ?????? ????????? ?????? ???????????? ???????????? ????????? ?????? ????????? ?????? ???????????? ??????, ?????? ????????? ????????? ?????? ???????????? ???????????? ??? ?????? ????????? ????????? ????????????. </div>
                                </div>
                                <div className="project-summary-container">
                                    <div className="project-summary-title">II. ???????????? ??????(Project Summary)</div>
                                    <div className="project-basic-info">
                                        <table className="basic-info-table">
                                            <tbody>
                                            <tr>
                                                <th scope="row">Period (???????????? ??????)</th>
                                                <td>2020.06.01 ~ 2020.12.21</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Language (?????? ??????)</th>
                                                <td>Python, SQL</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Frameworks (?????? ???????????????)</th>
                                                <td>Transformers, HuggingFace, TensorFlow, PyTorch, scikit-learn, Pandas</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tool (?????? ??????)</th>
                                                <td>Jupyter Lab, Notebook, VSCode</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">System (?????? ??????)</th>
                                                <td>Ubuntu</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="project-workflow-title">III. ???????????? ????????????(Workflow)</div>

                                        <div className="project-summary-content"> 
                                            <img src={pic1} alt="projectsummary" />
                                        </div>


                                        <div className="project-workflow-subtitle">1. ?????? ????????? ??????</div>
                                        <div className="project-workflow-description">
                                            1. ????????? ????????? ?????? ?????? ?????? ????????? ??????<br/>
                                            2. ????????? ??? ?????? ????????? ????????? ?????? ????????? ????????? ?????????<br/>
                                            3. ????????? ?????? ??????
                                        </div>
                                        <div className="project-workflow-subtitle">2. ????????? ?????? ?????? ?????????</div>
                                        <div className="project-workflow-description">
                                            1. ????????????(Pretrained)??? ??????????????? ?????? ??????, ??? ?????????????????? KoBERT, ALBERT ???????????? ?????? ??????.<br/>
                                            2. ???????????? ????????? ?????? ???????????? ?????? ????????? ?????????
                                        </div>
                                        <div className="project-workflow-subtitle">3. ???????????? ?????? ????????????</div>
                                        <div className="project-workflow-description">
                                            1. ????????? ????????? ????????? ??????????????? ?????????(Preprocessing) ??? ??????????????? ?????? <br/>
                                            2. ??????????????? ????????? ??????, ?????? ?????????????????? ???????????? ??????
                                        </div>
                                        <div className="project-workflow-subtitle">4. ?????? ?????? ??? ????????????</div>
                                        <div className="project-workflow-description">
                                            1. ?????? ?????? ????????? ?????? ????????? ?????? ??????, ?????? ?????? ??? ??????<br/>
                                            2. ???????????? ?????? ????????? ????????? ?????? ?????? ??????, ?????? ?????? ????????? ??? ?????????<br/>
                                            3. ????????? ???????????? ????????? ?????? ??? ???????????? ??????
                                        </div>

                                    <div className="project-workflow-title">IV. ???????????? ?????????(Singularity)</div>
                                    <div className="project-workflow-description">
                                        1. ??????????????? ?????? ????????? ??????????????? ????????? (BERT, GPT3, T5...)<br/>
                                        2. ????????? ????????? ??????????????? ????????? ????????? ????????? ?????????????????? ???????????? ??????????????? ????????? ??????????????? ????????? ????????????.<br/>
                                        3. ?????? ????????? ????????? ????????? ??? ?????? BERT mulilingual ????????? ?????????, ?????? BERT????????? ?????? ????????? ????????? ????????? ?????? ?????????.<br/>
                                        4. ???????????? ?????????, BERT??? ???????????? ?????????????????? ??? SKT??? ????????? Kobert????????? ?????????????????? ????????? ???????????? ???????????? ??????????????? ALBERT??? ??????????????? ??????.<br/> 
                                        5. ???????????? ????????? ???????????? ???????????? ?????????????????? ???????????????, Kobert?????? ALBERT??? ??? ??? ????????? ????????? ????????? ????????? ???????????? ??? ????????? ????????? ??????????????? ???.<br/>
                                        6. HuggingFace??? Transformer ?????????????????? ??????, ???????????? ??????????????? ????????? ????????? ?????? ?????? ??? ?????? ????????? ???????????? ??????.<br/>
                                        7. ??????????????? ??????(Classification) ??????????????? ??????????????? ????????? ???????????? softmax??? sigmoid ???????????? ?????? ????????? ??????.<br/>
                                        8. ??????????????? ?????? ???????????????, ?????? ?????? ?????? ?????? ????????? ???????????? ????????? ?????? ??? ?????????, ?????? ????????? ???????????? ????????? ????????? ????????? ????????? ??? ?????? ????????? ??????????????? ?????? ?????????(?)??? ???????????????.<br/>
                                        9. ??????????????? ???????????? ?????? ???????????? ?????? ????????? ????????? ?????????, ????????? '???'??????????????? '???'?????????????????? ??????????????? ????????? ?????? ????????? ?????? ????????? ?????????.
                                    </div>
                                    <div className="project-workflow-title">V. ???????????? ????????? ??? ??????(Feedback & Conclusion)</div>
                                    <div className="project-workflow-description">
                                        1. ???????????? ????????? ?????????????????? ??????????????????, ALBERT??? KoBERT?????? ????????? ?????? ????????? ???????????????, ????????? ?????????????????? ?????????????????? ??????????????? ??????????????? ????????? ??????????????? ???????????????. <br/>
                                        2. 500?????? ???????????? ?????????????????????, 1000??? ????????? ?????????????????? ????????? ?????? ????????? ?????? ?????? ????????? ????????? ?????? ????????? ?????? ????????? ????????? ??????????????? ?????????.<br/>
                                        3. ????????? ????????? ?????? ?????? ???????????? ????????? ????????? ???????????? ???????????????, ?????? ????????? ?????? ?????? ???????????? ?????? ????????? ?????????.<br/>
                                        4. ??? ??????????????? ?????? ????????? ????????? ????????? ????????? ?????????????????????, ????????? insight??? ?????? ????????? ?????????????????? ????????? ???????????????.<br/>
                                        5. ????????? ????????????????????? ?????? ??????????????? ?????????, ?????? ???????????? ???????????? ??? ??? ???????????? ????????? ?????????????????? ????????? ??????. 
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
