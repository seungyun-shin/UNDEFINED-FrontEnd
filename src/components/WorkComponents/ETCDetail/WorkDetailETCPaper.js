
import React from 'react'

import { LinkStyleCom } from "../../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import { motion} from 'framer-motion'

//style
import { WorkDetailETCPaperStyleCom } from "../../../styles/jsStyles/WorkStyles/WorkDetailETCPaperStyle"

import pic1 from "../../../assets/images/work/ETC/paper/paper1.JPG"
import pic2 from "../../../assets/images/work/ETC/paper/paper2.JPG"
import pic3 from "../../../assets/images/work/ETC/paper/paper3.JPG"
import pic4 from "../../../assets/images/work/ETC/paper/paper4.JPG"
import pic5 from "../../../assets/images/work/ETC/paper/paper5.JPG"
import pic6 from "../../../assets/images/work/ETC/paper/paper6.JPG"
import pic7 from "../../../assets/images/work/ETC/paper/paper7.JPG"
import pic8 from "../../../assets/images/work/ETC/paper/paper8.JPG"
import pic9 from "../../../assets/images/work/ETC/paper/paper9.JPG"
import pic10 from "../../../assets/images/work/ETC/paper/paper10.JPG"
import pic11 from "../../../assets/images/work/ETC/paper/paper11.JPG"
import pic12 from "../../../assets/images/work/ETC/paper/paper12.JPG"
import pic13 from "../../../assets/images/work/ETC/paper/paper13.JPG"
import pic14 from "../../../assets/images/work/ETC/paper/paper14.JPG"
import pic15 from "../../../assets/images/work/ETC/paper/paper15.JPG"
import pic16 from "../../../assets/images/work/ETC/paper/paper16.JPG"
import pic17 from "../../../assets/images/work/ETC/paper/paper17.JPG"
import pic18 from "../../../assets/images/work/ETC/paper/paper18.JPG"
import pic19 from "../../../assets/images/work/ETC/paper/paper19.JPG"
import pic20 from "../../../assets/images/work/ETC/paper/paper20.JPG"
import pic21 from "../../../assets/images/work/ETC/paper/paper21.JPG"
import pic22 from "../../../assets/images/work/ETC/paper/paper22.JPG"
import pic23 from "../../../assets/images/work/ETC/paper/paper23.JPG"
import pic24 from "../../../assets/images/work/ETC/paper/paper24.JPG"
import pic25 from "../../../assets/images/work/ETC/paper/paper25.JPG"
import pic26 from "../../../assets/images/work/ETC/paper/paper26.JPG"
import pic27 from "../../../assets/images/work/ETC/paper/paper27.JPG"
import pic28 from "../../../assets/images/work/ETC/paper/paper28.JPG"

function WorkDetailETCPaper({history, match }) {

    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin

    // useEffect( () => {

    //     if(userInfo == null ){
    //         history.push('/warningscreen')
    //     }else{
    //         if( !userInfo.isAdmin){
    //             history.push('/warningscreen')
    //         }
    //     }
        
    // }, [history, userInfo])

    return (
        <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <WorkDetailETCPaperStyleCom>
                        <div className="work-contents-container">
                            
                            {/* <ContentsBanner bannerTitle={"AI DETAIL"}/> */}

                            <div className="work-title-container">
                                
                                <div className="work-detail-info">
                                    <div className="work-info-category">Research Paper</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-published">Machine Learning</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-author">Big Data</div>
                                    <div className="slash-box">/</div>
                                    <div className="work-info-visit">Sports Industry</div>
                                </div>
                                <div className="work-detail-title">
                                    <span>Professional Player Salary Prediction Using BigData And DeepLearning</span>
                                    <span>빅데이터와 딥러닝을 활용한 프로농구선수 연봉 예측</span>
                                </div>

                            </div>

                            <div className="work-contents">
                                <div className="project-purpose-container">
                                    <div className="project-purpose-title">프로농구선수 연봉 예측 머신러닝 모델 비교 및 빅데이터 활용 가능성 모색</div>
                                    <div className="project-purpose-content">
                                    <div className="project-sub-title">국문 초록</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        본 연구는 아직 국내 프로스포츠산업 시장에 활성화되지 못한 심층신경망(Deep Neural Network) 모델을 이용하여 프로농구리그 선수 연봉 예측 모델의 성능 향상 가능성에 대해 모색한다. 또한 프로 선수들의 1차 기록과 2차 기록을 모두 포함한  빅데이터를 학습데이터로 활용하여, 국내 프로스포츠산업에 빅데이터 적용 가능성에 대해 탐색하고, 1차 기록만 학습한 모델과 1차, 2차 기록을 모두 학습데이터로 사용한 모델을 비교 분석하여 2차 기록의 유의미성을 간접적으로 검증한다.      
                                    </p>
                                    <div className="project-sub-title">목차</div> 
                                    <div className="project-small-title">Ⅰ. 서 론</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 연구의 필요성<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        1) 연봉<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        2) 2차 기록<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        3) 인공신경망<br/>
                                    </p>
                                    <div className="project-small-title">Ⅱ. 분석 모델</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 랜덤포레스트(Random Forest) 분석<br/>
                                        &nbsp;&nbsp;
                                        2. XGboost 분석<br/>
                                        &nbsp;&nbsp;
                                        3. 심층신경망(Deep Neural Network) 분석<br/>
                                    </p>
                                    <div className="project-small-title">Ⅲ. 분석 방법</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 데이터<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        1) 수집 및 전처리(Preprocessing)<br/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        2) 주요 2차 기록 데이터<br/>
                                        &nbsp;&nbsp;
                                        2. 검증 방법<br/>
                                        &nbsp;&nbsp;
                                        3. 평가 지표<br/>
                                    </p>
                                    <div className="project-small-title">Ⅳ. 결과 분석</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 다중회귀분석(Multiple Linear Regression) 결과<br/>
                                        &nbsp;&nbsp;
                                        2. 랜덤포레스트(Random Forest) 분석 결과<br/>
                                        &nbsp;&nbsp;
                                        3. XGboost 분석 결과<br/>
                                        &nbsp;&nbsp;
                                        4. 심층신경망(Deep Neural Network) 분석 결과<br/>
                                    </p>
                                    <div className="project-small-title">Ⅴ. 분석 결과</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 모델 간 성능 비교<br/>
                                        &nbsp;&nbsp;
                                        2. 모델 간 중요 변수 비교<br/>
                                    </p>
                                    <div className="project-small-title">Ⅵ. 결론 및 제언</div> 
                                    <p>
                                        &nbsp;&nbsp;
                                        1. 결론<br/>
                                        &nbsp;&nbsp;
                                        2. 제언<br/>
                                    </p>
                                    <div className="project-small-title">참고문헌</div> 
                                    <div className="project-small-title">표 목차</div> 
                                    <p>
                                    [표 1] 1차 기록 데이터 변수 및 설명	<br/>
                                    [표 2] 2차 기록 데이터 변수 및 설명	<br/>
                                    [표 3] 상관계수가 높은 변수를 제거한 최종 변수	<br/>
                                    [표 4] 1차기록 데이터를 활용한 선형회귀분석	<br/>
                                    [표 5] 2차 기록을 포함한 데이터를 활용한 선형회귀분석	<br/>
                                    [표 6] 심층신경망 모델 구조와 학습 파라미터	<br/>
                                    [표 7] 학습모델 데이터별 RMSE 지표	<br/>
                                    [표 8] 학습모델 데이터별 중요 변수	<br/>
                                    </p>
                                    <div className="project-small-title">그림 목차</div> 
                                    <p>
                                    [그림 1] 랜덤포레스트 모델 설계 과정	<br/>
                                    [그림 2] XGboost 모델 설계 과정	<br/>
                                    [그림 3] 기본 인공신경망 모델 구조	<br/>
                                    [그림 4] 심층 신경망 모델 구조	<br/>
                                    [그림 5] 대표적인 활성화 함수 종류	<br/>
                                    [그림 6] 심층 신경망 모델의 학습 과정	<br/>
                                    [그림 7] PER 공식	<br/>
                                    [그림 8] uPER 공식	<br/>
                                    [그림 9] TS% 공식	<br/>
                                    [그림 10] Usg% 공식	<br/>
                                    [그림 11] BPM 공식	<br/>
                                    [그림 12] VORP 공식	<br/>
                                    [그림 13] K-Fold 교차 검증 기법	<br/>
                                    [그림 14] MSE(Mean Squared Error)	<br/>
                                    [그림 15] RMSE(Root Mean Squared Error)	<br/>
                                    [그림 16] 1차 기록 데이터를 사용한 랜덤포레스트 모델의 변수 중요도	<br/>
                                    [그림 17] 모든 데이터를 사용한 랜덤포레스트 모델의 변수 중요도	<br/>
                                    [그림 18] 1차 기록 데이터를 사용한 XGboost 모델의 변수 중요도	<br/>
                                    [그림 19] 모든 데이터를 사용한 XGboost 모델의 변수 중요도	<br/>
                                    [그림 20] 설계된 심층 신경망 모델 구조와 파라미터	<br/>
                                    </p>
                                    <div className="project-sub-title">Ⅰ. 서론</div> 
                                    <div className="project-sub-title">1. 연구의 필요성</div> 
                                    <div className="project-small-title">1) 연봉(Salary)</div>
                                    <p>
                                    &nbsp;&nbsp;프로스포츠 시장에서 연봉은 프로선수의 가치를 나타내는 가장 명확하고 확실한 근거이다. 프로스포츠 리그에서 발생하는 모든 사건, 트레이드, 이적, 갈등의 중심에는 언제나 선수의 가치를 대표하는 연봉이 있다. 선수들의 활약 또한 해당 선수가 받는 연봉을 기준으로 평가된다. 아무리 좋은 성적과 기량을 보이는 선수라 할지라도, 그 선수가 받는 연봉이 그 이상의 성적을 기대하는 액수라면 언제든 팬들의 비판과 함께 ‘거품’이라는 꼬리표가 붙게 된다. 반대로, 크게 주목받지 못할 개인기록을 보유한 선수라 할지라도 그가 받는 연봉이 활약에 상응하거나 더 적다면, 그 선수는 자신의 몫을 다하는 좋은 선수로 평가되기 마련이다. 그렇기 때문에 시즌마다 프로선수들의 자유계약 금액은 큰 관심을 받는다. 
                                    <br/><br/>
                                    &nbsp;&nbsp;선수가 받는 연봉의 액수에 따라 선수들이 긍정적인 평가와 부정적인 평가를 받는다는 사실은 다른 관점에서 보면, 일부 선수는 실제 시장가치보다 더 많은 연봉을 수령하고 있으며, 반대로 자신의 가치를 충분히 인정받지 못하고 적은 보수를 받고 활약하는 선수 또한 존재한다고 해석할 수 있다. 모기업의 지원에 의존하는 국내 프로스포츠산업 특성상, 구단 운영은 한정된 자원 내에서 이루어질 수밖에 없다. 다시 말해, 일부 선수가 실제 시장가치보다 더 많은 연봉을 받게 된다면 그만큼 자신의 가치를 충분히 인정받지 못하는 선수가 필연적으로 발생하게 되며, 이는 곧 프로스포츠산업 발전에 큰 장애물인 선수들의 ‘연봉 편차’를 더욱 심화시킬 우려가 있다.
                                    <br/><br/>
                                    &nbsp;&nbsp;선수가 정당한 가치를 인정받지 못하는 가장 큰 이유는, 바로 ‘연봉’에 대한 객관적인 지표가 없기 때문이다. 대부분 구단은 주관적인 경험과 계약 당시 관계자들의 의견에 따라 선수들에게 계약금액을 제시하고 있는 실정이다. 기본적인 근거와 가이드가 없는 계약은, 특히 스포츠 에이전트제도가 활성화되지 않은 국내 프로스포츠시장에서, 선수들을 협상테이블에서 충분히 보호하지 못할뿐더러 구단 입장에서도 원활한 선수계약에 걸림돌이 될 수 있다. 
                                    <br/><br/>
                                    &nbsp;&nbsp;이전부터 이러한 문제점을 해결하기 위해 선수의 개인 기록을 바탕으로 적절한 연봉을 예측하는 모델 개발이 시도되었다. 선형회귀 및 랜덤 포레스트 모델을 활용하여 국내 프로야구 선수 연봉 예측을 시도했으며 변수는 출장 경기, 득점, 안타, 2루타, 3루타 등 메이저리그의 22가지 데이터가 활용되었다. 결과는 기존 선형회귀 모델보다 머신러닝 트리계열의 랜덤 포레스트 모델이 향상된 성능을 보인 것으로 나타났다(이경문, 황규백, 2017). 또한, 시즌 데이터를 토대로 다중 회귀분석을 통해 국내 프로농구선수의 연봉 예측을 시도한 사례가 있다. 변수는 출전게임 수, 출전 경기 시간, 2점 슛 수, 3점 슛 수, 자유투 수 등이 고려되었으며 최종적으로 득점요인, 수비요인, 경력 및 게임 출전 수가 변수로 선택된 회귀선이 가장 좋은 설명력을 나타냈다(한필수, 이석인, 2003). 하지만, 대부분의 선행연구는 기존의 통계 모델과 변수 설명력에 강점을 가지고 있는 랜덤 포레스트 머신 러닝 모델만을 사용했으며, 활용한 데이터 또한 단순한 선수의 1차 스탯을 바탕으로 이루어졌다는 제한점이 있다.
                                    <br/><br/>
                                    &nbsp;&nbsp;본 연구는 비선형 추론에 강점을 가지고 있는 인공신경망 모델을 활용하여 프로농구선수의 연봉을 예측하고자 하며, 데이터 또한 선수들의 1차 기록뿐 만 아니라 2차 기록까지 포함된 빅데이터를 활용하여 스포츠산업에서 빅데이터 응용 가능성에 대해 살펴보고자 한다.         
                                    </p> 
                                    <div className="project-small-title">2) 2차 기록(Advanced Stats)</div>
                                    <p>
                                    &nbsp;&nbsp;앞으로는 데이터가 부와 권력의 핵심이 될 것이라는 전망이 계속되는 가운데, 빅데이터는 4차산업의 중심 원동력이라고 볼 수 있다. 이러한 시대의 흐름은 스포츠산업 또한 예외 없이 적용된다. 데이터는 스토리를 만들고 스토리는 관중과 팬들에게 경기를 지켜봐야 할 이유를 제공해준다, 오래전부터 미국 프로스포츠 시장은 선수들의 개인기록 데이터를 다양한 관점에서 기록하고 축척하고 있다. 대표적으로 'Advanced Stats'으로 불리는 2차 기록이 있다. 2차 기록은 단순히 있는 그대로 집계되는 1차 기록에서 한 번 더 통계적인 가공 방법을 거쳐, 1차 기록이 반영하지 못하는 유의미한 통계정보를 추출한 가공된 데이터이다. 2차 기록은 대상을 분석하는 과정에서 1차 기록이 담아내지 못하는 다양한 관점을 관찰자에게 제시한다. 또한, 편향된 시각에서 벗어나 넓은 시야에서 대상을 바라볼 수 있도록 새로운 기준을 제공한다는 점에서 의의가 있다.
                                    <br/><br/>
                                    &nbsp;&nbsp;국내 프로스포츠 리그는 대부분 단순한 1차 기록만 축척하고 공개하고 있는 상황이다. 예를 들어 국내 프로농구리그(KBL)는 공식 홈페이지에서는 선수들의 게임 출전 수, 경기 시간, 평균 득점, 슛 성공 확률, 리바운드 수, 어시스트 수, 스틸 성공 횟수 등 일반적인 기록만 확인을 할 수 있다. 반면에, 미국 프로농구리그(NBA) 공식 사이트에서는 1차 기록은 물론 '분당 생산 기여도'(Player Efficiency Rating), '승리 기여도'(Win Share), 대체 선수 대비 기여도(Value Over Replacement Player) 등 다양한 통계방식을 적용하여 가공한 2차 기록들도 모두 공개를 하고 있다. 가장 중요한 점은 이렇게 대상을 다양한 관점에서 분석하고 또 새로운 방향을 제시하려는 노력을 지금도 끊임없이 하고 있다는 것이다. 미국 프로농구리그(NBA)는 작년 새로운 2차 기록인 박스아웃(Box Outs), 대인 수비(Matchup Defence) 수치를 공개한 것에 이어 올해에는 해당 선수가 팀에 기여한 정도를 공격과 수비로 나누어 분석한 BPM(Box Plus Minus) 데이터를 공개하는 등 현대 농구 트렌드의 흐름에 맞추어 적합한 정보들을 담은 2차 기록을 생산해내고 있다. 이러한 미국 프로농구리그(NBA)의 데이터들은 팬들에게 새로운 볼거리는 물론, 리그 구단들의 경기 전략 발전 등 다양한 방면에서 큰 파급효과를 불러오고 있다.        
                                    </p>
                                    <div className="project-small-title">3) 인공신경망(Artificial Neural Network) 모델</div>
                                    <p>
                                    &nbsp;&nbsp;지금 세계는 인공지능 시대라고 해도 과언이 아니다. 4차산업혁명과 함께 세계가 AI(Artificial Intelligence)구현 기술에 주목하고 있으며, 다수의 국가와 기업이 정부 차원에서 인공지능산업 육성에 심혈을 기울이고 있다. 그리고 현재 인공지능산업의 중심에는 딥러닝(Deep Learning)이 있다. 1980년대 Perceptron 알고리즘이라는 이름으로 처음 등장한 인공신경망(Neural Network)은 오랜 기간 동안 여러 가지 이유로 빛을 보지 못했지만, 최근 컴퓨터 성능의 발전, GPU를 사용한 병렬연산과 빅데이터의 등장과 맞물리게 되면서 그 잠재력을 발현하고 있다. 그리고 2016년 딥러닝 모델로 설계된 알파고(AlphaGo)와 이세돌 9단의 대국 이후, 불가침영역으로 여겨졌던 바둑이라는 영역이 깨지게 되면서 딥러닝 기술이 대중에게 확실히 눈도장을 찍는 계기가 되었다.
                                    <br/><br/>
                                    &nbsp;&nbsp;인공신경망(Neural Network) 모델은 기존 통계방식인 회귀분석(regression analysis)과는 큰 차이점이 있다. 회귀분석은 모델링이 이루어지기 전에 만족해야 하는 제약조건이 있다. 먼저 사용되는 변수 간의 관계를 직선으로 가정하고 분석을 시작하는 경우가 많다. 그 때문에 분석에 사용되는 설명변수의 수가 늘어날수록 변수의 실제 유의미함과는 별개로 기여율이 높아지는 문제점이 있다. 또한, 분석에 사용되는 데이터의 확률분포는 정규분포를 따라야 하며 오차항의 평균은 0이 되어야 하는 등 선형성, 정규성, 독립성 등의 조건을 만족해야 한다(노형진, 정한열, 2002). 하지만 인공신경망(Neural Network)은 데이터를 학습하는 과정에서 변수 간의 관계를 추론한다. 그렇기 때문에 인공신경망(Neural Network)은 기본적으로 사용되는 변수의 통계적인 분포를 가정하지 않는다. 이는 활성화 함수(Activation Function)을 사용하여 비선형추론이 가능한 인공신경망(Neural Network)의 강점이다.
                                    <br/><br/>
                                    &nbsp;&nbsp;현재 딥러닝 신경망 모델은 다양한 분야에서 연구되고 접목되고 있다. 하지만 비교적 빅데이터가 축적된 제한적인 분야에서만 활발히 진행되고 있으며, 특히 국내 스포츠산업의 딥러닝 적용 가능성에 대한 연구는 부족한 실정이다. 따라서, 본 연구는 미국프로농구(NBA) 빅데이터를 이용하여 미국프로농구 선수 연봉 예측 딥러닝 모델을 설계하고자 한다. 또한, 변인들의 상관관계를 파악하기 힘든 인공신경망의 단점을 보완하기 위해 기존 머신러닝 알고리즘 Random Forest, XGboost 모델을 활용하여 변인들의 중요도를 분석하고 딥러닝과의 성능을 비교분석 해보고자 한다.
                                    </p>

                                    <div className="project-sub-title">Ⅱ. 분석모델</div> 
                                    <div className="project-sub-title">1. 랜덤포레스트(Random Forest) 분석</div> 
                                    <p>
                                    &nbsp;&nbsp;랜덤 포레스트(Random Forest) 모델은 다수의 머신러닝 모델을 결합하여 더 높은 성능을 가지는 모델을 생성해내는 앙상블(ensemble) 기법으로 설계된 모델이다. 랜덤 포레스트 모델은 데이터의 부분집합을 학습한 다수의 단일 의사결정 나무모델(decision tree)으로 구성되며, 각 의사결정 나무에서 도출되는 결과를 합쳐 최종 예측값을 만들어낸다. 랜덤 포레스트는 앙상블 기법 중 하나인 Bagging(Bootstrap aggregating)이라는 방법을 통해 모델을 구성한다. 먼저 다수의 의사결정 나무를 Bootstrap 샘플링을 통해서 학습시킨다.  Bootstrap 샘플링이란 중복을 허용하여 원 데이터와 같은 크기의 표본 데이터를 여러 개 생성해내는 방법을 의미한다. 다만, 이 과정에서 랜덤 포레스트는 데이터뿐만 아니라 변수 또한 무작위로 선택한다는 점에서 일반적인 Bagging 기법과 차이가 있다. 그 후 학습된 수많은 의사결정 나무 중 다시 다수의 의사결정 나무 모형을 선택하여 최적의 조합 모델을 구성한다. 단일 의사결정 나무는 작은 편향 값과 큰 분산 값을 갖기 때문에 모형의 깊이가 깊어질수록 훈련 데이터에 과적합(Overfitting) 될 가능성이 높아지게 되지만, 이러한 랜덤 포레스트의 설계 과정은 모형의 분산을 줄여주어 의사결정 나무의 단점을 보완할 수 있게 된다(Breiman, 2001).  
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic1} alt="pic1" />
                                        <div className="img-caption">[그림 1] 랜덤포레스트 모델 설계 과정</div>
                                    </div>
                                    <div className="project-sub-title">2. XGboost 분석</div> 
                                    <p>
                                    &nbsp;&nbsp;랜덤 포레스트(Random Forest) 모델이 앙상블 기법 중 Bagging 방법을 통해 구성되었다면, XGboost 모델은 또 다른 기법인 Boosting 방법을 통해 설계된 모델이다. Boosting 기법이란 다수의 단일 의사결정 나무를 순차적으로 학습시키면서 이전 단계 분류기의 오차를 보완하고 최종 모델을 도출해내는 방법이다. Boosting 기법은 초기 전체 데이터를 활용하여 다수의 분류기를 생성한다는 점에서 Bagging과 유사하다. 하지만, Bagging 기법은 Bootstrap 샘플링한 데이터를 각자의 단일 모델에 학습시키지만, Boosting 기법은 순차적으로 분류기를 학습시키며, 이전 분류기 학습 과정에서 도출된 가중치 값이 다음 분류기가 학습될 때 영향을 준다는 점에서 차이가 있다. 기존의 Boosting 기법은 단일 의사결정 나무들을 단계별로 훈련을 시켜야 하기 때문에 학습 시간이 다른 머신러닝 모델에 비해 크게 늘어나는 단점이 있다. XGBoost 모델은 이러한 Boosting 기법의 단점을 보완하기 위해 단일 의사결정트리를 구성하는 과정에 병렬처리기법을 적용하여 학습속도를 개선한 모델이다(Ke et al., 2016). 
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic2} alt="pic2" />
                                        <div className="img-caption">[그림 2] XGboost 모델 설계 과정</div>
                                    </div>
                                    <div className="project-sub-title">3. 심층신경망(Deep Neural Network) 분석</div> 
                                    <p>
                                    &nbsp;&nbsp;인공신경망(Artificial Neural Network)은 인간 두뇌의 신경세포가 물체를 인지하고 학습하는 과정을 모방하여 설계한 모델이다. 기본적인 인공신경망 모델은 입력 데이터를 받는 입력층(Input Layer)과 노드 간에 네트워크를 통해 가중치를 계산하는 은닉층(Hidden Layer) 그리고 결과물을 도출하는 출력층(Output Layer)이 각각 하나씩 존재한다. 여기에 두 개 이상의 은닉층(Hidden Layer)을 구성하여 보다 더 복잡한 관계 추론을 가능하도록 한 것이 심층 신경망 모델이다.    
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic3} alt="pic3" />
                                        <div className="img-caption">[그림 3] 기본 인공신경망 모델 구조</div>
                                    </div>
                                    <div className="img-caption-container">
                                        <img src={pic4} alt="pic4" />
                                        <div className="img-caption">[그림 4] 심층 신경망 모델 구조</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;심층 신경망이 처음 활용되기 시작한 초기에는 은닉층이 많아질수록 노드 간의 네크워크 수가 급격히 늘어나 연산량이 감당할 수 없을 정도로 늘어나게 되는 한계가 있었다. 또한 학습 데이터에 과적합(overfitting) 되거나 역 전파(Back propagation)학습 과정에서 출력층 오차가 다음 은닉층으로 충분히 전달되지 않는 그래디언트 소실(Vanishing Gradient)과 같은 문제점이 나타났다. 하지만 이러한 장애물들이 컴퓨터 성능 향상 및 GPU 병렬 연산 강화, 드롭아웃(Dropout) 및 배치 정규화(Batch Nomalization) 기법 개발, ReLU(Rectified Linear Unit) 활성화 함수 적용 등으로 하나씩 해결이 되면서 지금은 인공지능 구현의 핵심기술로 활용되고 있다(Goodfellow, I., Bengio, Y., & Courville, A, 2016).   
                                    <br/><br/>
                                    &nbsp;&nbsp;심층 신경망은 학습 초기에 기본적으로 입력층, 은닉층, 출력층을 순서대로 지나가는 순전파(forward propagation)방법으로 신호를 전달한다. 그리고 각 은닉층을 구성하고 있는 노드들은 전달받은 값에 가중치(Weight)를 곱한 값의 합으로 연산 되고 최종적으로 활성화 함수(Activation Function)를 거쳐 다음 노드로 값이 전달된다. 대표적인 활성화 함수에는 Sigmoid, Tanh, ReLU 등이 활용되고 있다.  </p>
                                    <div className="img-caption-container">
                                        <img src={pic5} alt="pic5" />
                                        <div className="img-caption">[그림 5] 대표적인 활성화 함수 종류</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;다음 원하는 결과값에 도달하기 위해 아래 표와 같이 역전파(Backpropagation)학습을 진행한다. 역전파 학습은 순전파를 통해 도출된 결과값과 목표값의 차이를 토대로 각 노드의 가중치를 조정해주는 과정이다. 이러한 과정을 반복하면서 경사하강법(Gradient Descent)기법을 통해 오차율이 최소가 되는 지점을 찾아 모델을 최적화시키게 된다(Kingma, D. P., & Ba, J., 2014).
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic6} alt="pic6" />
                                        <div className="img-caption">[그림 6] 심층 신경망 모델의 학습 과정</div>
                                    </div>
                                    <div className="project-sub-title">Ⅲ. 분석방법</div> 
                                    <div className="project-sub-title">1. 데이터</div> 
                                    <div className="project-sub-title">1) 데이터 수집 및 전처리(Preprocessing)</div> 
                                    <p>
                                    &nbsp;&nbsp;분석에 사용된 데이터는 미국 프로농구리그(NBA) 공식 사이트에서 공개하는 2019~2020년 선수 개인 지표와 2차 기록 데이터 그리고 연봉 데이터를 수집하여 결합하였다. 수집한 데이터는 선수 이름, 소속팀 포지션 등 기본적인 선수 개인정보와 선수의 시즌 출전 경기, 선발출전 경기, 출전 시간 등 총 49개의 설명변수와 1개의 종속변수로 이루어져 있다.
                                    <br/><br/>
                                    &nbsp;&nbsp;모델을 훈련하기 위한 데이터 전처리(Preprocessing)과정에서 범주형 데이터는 더미(dummy)화 하여 변환하였고 수치형 데이터는 머신러닝과 인공신경망 모델의 특성상 0과 1 사이의 값으로 변환시켰다. 머신러닝 모델은 변수 간 데이터 수치의 범위 차이가 너무 크면 손실함수의 최소값을 찾아가는 과정이 어려운 특성이 있다(Simonyan, K., & Zisserman, A., 2014).
                                    <br/><br/>
                                    &nbsp;&nbsp;수집한 데이터는 총 577개의 데이터로 이루어져 있으며, 이 데이터를 통해 다양한 알고리즘의 성능을 검증하기 위해서 데이터를 훈련데이터(train)와 검증데이터(test)로 나누어 연구를 진행하였다. 훈련데이터를 이용해서 머신러닝 및 인공신경망 모델을 학습시키고 이를 통해서 추정된 가중치(weight)를 이용하여 선수들의 개인 연봉을 예측하고 실제값과의 차이를 통해 모델의 성능을 측정하였다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic7} alt="pic7" />
                                        <div className="img-caption">[표 1] 1차 기록 데이터 변수 및 설명</div>
                                    </div>
                                    <div className="img-caption-container">
                                        <img src={pic8} alt="pic8" />
                                        <div className="img-caption">[표 2] 2차 기록 데이터 변수 및 설명</div>
                                    </div>
                                    <div className="project-sub-title">2) 주요 2차 기록 데이터 </div>
                                    <div className="project-sub-title">(1) PER(Player Efficiency Rating)</div> 
                                    <p>
                                    &nbsp;&nbsp;PER은 선수의 효율성을 나타내는 2차 기록으로 개별 선수의 득점, 도움, 리바운드와 같은 선수의 긍정적인 지표와 파울, 실책 등 부정적인 지표를 모두 고려하여 만든 평가지표이다. 또한, 해당 경기의 팀의 성적도 고려하고 분 단위로 계산을 하므로 한 선수가 소속팀에 긍정적인 기여를 하는 정도를 비교적 잘 반영하고 있는 기록이다.     
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic9} alt="pic9" />
                                        <div className="img-caption">[그림 7] PER 공식</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;PER 지표에 대한 공식은 간단하지만, 수식에 들어가는 uPER을 구하는 방법이 비교적 복잡하다. 
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic10} alt="pic10" />
                                        <div className="img-caption">[그림 8] uPER 공식</div>
                                    </div>
                                    <div className="project-sub-title">(2)TS%(True Shooting Percentage)</div> 
                                    <p>
                                    &nbsp;&nbsp;TS%(True Shooting Percentage)기록은 야투 성공확률에 3점 슛과 자유투를 보정하여 다시 설정한 기록이다. 3점 슛을 던지는 비율이 높은 선수의 경우, 미들레인지 게임을 주로 하는 선수보다 야투성공률이 낮은 경우가 많다. 하지만, 팀 득점에 기여한  고려해 봤을 때 오히려 3점 슛을   이 2차 기록을 비교하여 선수의 슛 시도 효율성을 비교적 더 정확히 살펴볼 수 있다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic11} alt="pic11" />
                                        <div className="img-caption">[그림 9] TS% 공식</div>
                                    </div>
                                    <div className="project-sub-title">(3) USG%(Usage Rate)</div> 
                                    <p>
                                    &nbsp;&nbsp;USG%기록은 공격 시 팀 소유권 끝맺는 슛을 던지는 비율을 의미한다. 더 쉽게 말하면 선수가 팀에서 공격을 마무리하는 슈팅을 던진 비율이다. 공격 시 공을 오래 소유한 선수일수록 USG% 지표가 높게 나타나는 경향이 있지만 반대로 USG% 지표가 높다고 해서 항상 팀에서 볼 소유 시간이 많은 것은 아니다. 예를 들어 현 골든스테이트 워리어스(Golden State Warriors) 소속의 클레이 탐슨(Klay Thompson), 뉴올리언스 펠리컨스(New Orleans Pelicans)의  J.J 레딕(Jonathan Clay Redick), 밀워키 벅스(Milwaukee Bucks)의 카일 코버(Kyle Elliot Korver)선수와 같은 캐치 앤 슛(Catch & Shoot)을 주 패턴으로 활용하는 선수의 경우 볼 소유 시간은 적지만 USG% 지표는 높게 나타난다. 보통 팀의 에이스의 경우 USG% 기록이 35% 수준으로 나타나며, 1993년 우승을 차지한 마이클 조던의 경우 그 당시 USG%지표가 38.03%로 나타났다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic12} alt="pic12" />
                                        <div className="img-caption">[그림 10] Usg% 공식</div>
                                    </div>
                                    <div className="project-sub-title">(4) WS(Win Share), WS/48(Win Share Per 48Minutes)</div> 
                                    <p>
                                    &nbsp;&nbsp;Win Share는 승리 기여도를 나타내는 지표로, 개인 선수가 공격과 수비를 통해 팀 승리에 얼마만큼 기여했는가를 의미한다. 승리 기여도는 선수의 공격 승리 기여도(OWS)와 수비 승리 기여도(DWS)의 합이다. 수치 1은 실제 팀의 1승과 같은 맥락으로 팀 선수 전체의 WS 지표를 합하면 당해 시즌 그 팀의 승수와 비슷한 수치가 나오게 된다. WS는 누적기록이기 때문에 많은 경기를 뛴 선수일수록 높은 수치가 나타나는 경향이 있으며 기복이 있는 선수보다 꾸준히 많은 경기에 출장하며 활약하는 선수가 높은 수치를 나타낸다. WS에서 파생된 2차 지표로 'WS/48'이 있는데, 이 수치는 WS라는 누적 기록을 비율로 나타내기 위해 WS를 1경기 시간 48분으로 환산한 지표이다.  
                                    </p>
                                    <div className="project-sub-title">(5) BPM(Box Plus/Minus)</div> 
                                    <p>
                                    &nbsp;&nbsp;BPM은 100번의 볼 소유당 해당 선수가 팀에 기여한 정도를 나타내는 지표다. BPM는 TS%, TRB%, STL%, AST%, BLK%, USG%, TO%등 다수의 기록을 변수로 활용하여 회귀 분석하여 새롭게 만든 2차 지표이다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic13} alt="pic13" />
                                        <div className="img-caption">[그림 11]BPM 공식</div>
                                    </div>
                                    <div className="project-sub-title">(6) VORP(Value Over Replacement Player)</div>
                                    <p>
                                    &nbsp;&nbsp;VORP은 BPM지표를 각 선수의 팀에 대한 전체적인 기여율을 추정한 수치로 변환한 기록이다. 즉 VORP은 리그 내 모든 팀에서 항시 출전할 수 있는 대체 선수의 성적을 기준으로, 해당 선수가 동일한 조건의 대체 선수보다 얼마나 더 혹은 덜 팀에 기여했는가를 나타낸다.   
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic14} alt="pic14" />
                                        <div className="img-caption">[그림 12]VORP 공식</div>
                                    </div>
                                    <div className="project-sub-title">2. 검증방법</div> 
                                    <p>
                                    &nbsp;&nbsp;본 연구는 총 577개의 데이터 중 80%는 훈련 데이터로, 나머지 20%는 모델 검증 데이터로 사용하였으며, 훈련된 모델을 통해서 미국프로농구선수 검증 데이터의 연봉을 예측하고 실제 선수들의 연봉 값과의 차이를 통해 평균 제곱근 오차(Root Mean Square Error)를 기준으로 모델 간의 성능을 비교하였다. 또한, 검증의 안정성과 신뢰성을 높이기 위해 K-Fold 교차 검증 방법을 사용했다. K-Fold 교차 검증은 전체 데이터 세트를 K개의 데이터 세트로 분류한 후 각 분류된 데이터 세트를 이용하여 반복적으로 모델을 검증하는 방법으로, 특히 전체 데이터 세트의 수가 적은 경우 안정적으로 모델에 대한 성능을 측정하기 위해 많이 활용되는 방법이다(Kohavi, R., 1995).
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic15} alt="pic15" />
                                        <div className="img-caption">[그림 13]K-Fold 교차 검증 기법</div>
                                    </div>
                                    <div className="project-sub-title">3. 평가지표</div> 
                                    <p>
                                    &nbsp;&nbsp;본 연구는 k-fold 방법을 통해 추출된 검증데이터를 예측하여 실제 선수들의 연봉 값과의 차이를 통해 RMSE(Root Mean Square Error)를 기준으로 모델 간의 성능을 비교하였다. RMSE는 예측값과 실제값의 차를 제곱시킨 값의 합인 MSE(Mean Squared Error)에 루트를 적용한 식으로 MSE의 절대값인 표준 에러라고 볼 수 있다. 에측값과 실제값의 차가 0이 될 때 100%의 성능을 가지게 되며 이때 RMSE는 0이 된다 즉, RMSE가 낮을수록 성능은 향상됨을 의미한다(Chai, T., & Draxler, R. R., 2014).
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic16} alt="pic16" />
                                        <div className="img-caption">[그림 14]MSE(Mean Squared Error) 공식</div>
                                    </div>
                                    <div className="img-caption-container">
                                        <img src={pic17} alt="pic17" />
                                        <div className="img-caption">[그림 15]RMSE(Root Mean Squared Error) 공식</div>
                                    </div>
                                    <div className="project-sub-title">4. 분석도구</div> 
                                    <p>
                                    &nbsp;&nbsp;본 연구는 Python 언어를 기반으로 Numpy, Pandas 등의 라이브러리를 활용하여 데이터를 전처리(Preprocessing)하였으며, Lasso, Random Forest, XGboost 머신러닝 모델 같은 경우 사이킥런(Scikit Learn)을 인공신경망 모델은 텐서플로우(Tensorflow)을 활용하여 연구를 진행하였다.    
                                    </p>
                                    <div className="project-sub-title">Ⅳ. 결과분석</div> 
                                    <p>
                                    &nbsp;&nbsp;먼저 데이터의 경우 기존 통계 모델인 선형 회귀분석과 머신 러닝 모델 모두 독립변수 간의 상관성이 높은 변수들은 가장 의미 있는 변수를 제외하고 모두 제거해 주었다. 이는 선형 회귀분석의 경우 변수의 독립성을 준수하고 다중공선성을 제거하기 위해서고, 머신러닝모델의 경우 꼭 다중공선성을 제거해주어야 하는 것은 아니지만, 설명변수가 너무 많아지면 오히려 모델의 설명력과 성능이 하락하게 되는 차원의 저주에서 벗어나고, 변수의 계수가 지나치게 높아질 가능성을 방지하기 위해 똑같이 다중공선성을 제거한 데이터를 활용하였다. 상관관계가 높은 변수를 제거한 최종 데이터는 아래 표와 같다. 또한, 2차 기록 데이터의 유의미성을 살펴보기 위해 1차 기록 데이터만 이루어진 훈련데이터와, 2차 기록 데이터를 모두 포함한 훈련데이터 2가지로 분류하여 모델을 학습하고 성능을 측정해보았다. 
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic18} alt="pic18" />
                                        <div className="img-caption">[표 3] 상관계수가 높은 변수를 제거한 최종 변수</div>
                                    </div>
                                    <div className="project-sub-title">1. 다중회귀분석(Multiple Linear Regression) 결과</div>
                                    <p>
                                    &nbsp;&nbsp;선형 회귀분석의 경우 변수 선택에 대한 제약이 많기 때문에, Stepwise 단계적 변수 선택 방법을 사용하여 통계적으로 유의성이 있는 변수만을 활용하여 모델을 설계하였다. Stepwise 변수 선택법은 전체 변수를 활용한 모델에서 기준 통계수치에 영향을 주지 않거나 예측력을 저하하는 변수를 제거하거나, 포함되지 않은 변수 중 기준 통계수치에 가장 많이 도움이 되는 변수를 추가하는 과정을 반복하여 최적의 변수를 찾는 방법이며, 변수의 추가 제거 기준은 AIC를 기준으로 하였다(Bendel, R. B., & Afifi, A. A, 1977). 그 결과, 1차 기록 데이터에서는 Age, GS, 3P 등 총 9개의 변수가 선택되었으며, 모든 기록데이터에서는 VORP, DWS 기록을 포함하여 총 11개의 변수가 선택되었다.
                                    <br/><br/>
                                    &nbsp;&nbsp;선형 회귀분석모형의 경우 표준화된 회귀계수를 활용하여 활용도니 변수 간의 상대적인 중요도를 추출할 수 있다. 표4를 보면 중요한 변수는 BLK, FT, 3P 순이었으며, RMSE 지표는 5.5731로 나타났다.  
                                    </p> 
                                    <div className="img-caption-container">
                                        <img src={pic19} alt="pic19" />
                                        <div className="img-caption">[표 4] 1차기록 데이터를 활용한 선형회귀분석</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;2차 기록을 포함한 모든 데이터를 활용한 선형 회귀분석 회귀 계수는 표 6과 같이 나타났다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic20} alt="pic20" />
                                        <div className="img-caption">[표 5] 2차 기록을 포함한 데이터를 활용한 선형회귀분석</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;2차 기록을 포함한 모든 데이터를 활용하였을 때 결과는 BLK, 3P, FT 순으로 나타났다. RMSE는 5.5679로 1차 지표만 활용했을 때 보다 소폭 감소하였다.
                                    </p>
                                    <div className="project-sub-title">2. 랜덤 포레스트(Random Forest) 분석 결과</div>
                                    <p>
                                    &nbsp;&nbsp;랜덤 포레스트 모델은 다수의 의사결정 나무 모델이 결합하여 설계되므로 하나의 최종적인 모델을 제시하기에는 무리가 있다. 그렇기 때문에, 모델의 성능에 영향을 미치는 모델 파라미터를 일정한  범위에서 반복 학습하여 최적의 성능이 나오는 파라미터를 선택하였다. 랜덤 포레스트 모델은 입력변수가 성능지표에 영향을 미치는 정도를 고려하여 변수의 중요도를 추출할 수 있다. 아래 표6은 랜덤 포레스트모델로 추출해낸 변수의 중요도를 시각화한 자료이다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic21} alt="pic21" />
                                        <div className="img-caption">[그림 16]1차 기록 데이터를 사용한 랜덤포레스트 모델의 변수중요도</div>
                                    </div>
                                    <div className="img-caption-container">
                                        <img src={pic22} alt="pic22" />
                                        <div className="img-caption">[그림 17]모든 데이터를 사용한 랜덤포레스트 모델의 변수중요도</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;1차 기록 데이터를 활용한 경우와 모든 데이터를 활용한 경우 모두 PTS, Age, MP, FT 순으로 변수의 중요도가 높게 나타났다. 1차지표 데이터만 사용한 모델은 RMSE가 5.4780로 나타났고, 모든 데이터를 사용한 모델은 5.4321로 RMSE가 소폭 감소한 것으로 나타났다. 
                                    </p>
                                    <div className="project-sub-title">3. XGboost 분석 결과</div>
                                    <p>
                                    &nbsp;&nbsp;XGboost 모델의 파라미터는 크게 일반 파라미터, 학습 파라미터 그리고 부스트 파라미터로 분류된다. XGboost 파라미터 또한 일정 범위 내, 경우의 수를 반복 학습하여 최적의 성능 값을 선택하였다. XGboost 모델 또한, 입력변수가 성능지표에 영향을 미치는 정도를 고려하여 변수의 중요도를 추출하였다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic23} alt="pic23" />
                                        <div className="img-caption">[그림 18] 1차 기록 데이터를 사용한 XGboost 모델의 변수중요도</div>
                                    </div>
                                    <div className="img-caption-container">
                                        <img src={pic24} alt="pic24" />
                                        <div className="img-caption">[그림 19] 모든 데이터를 사용한 XGboost 모델의 변수중요도</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;1차 기록 데이터를 활용한 경우 FT, PTS, Age 순으로 변수중요도가 높은 것으로 나타났고, 모든 변수를 활용했을 때는 PTS, FT, MP 순으로 다소 차이가 있었다. RMSE 지표 경우 1차 기록 데이터만 사용한 모델은 5.6579로 나타났고, 모든 데이터를 사용한 모델은 5.5275로 나타났다.
                                    </p>
                                    <div className="project-sub-title">4. 심층신경망(Deep Neural Network) 분석 결과</div>
                                    <p>
                                    &nbsp;&nbsp;인공신경망 모델은 딥러닝의 기본적 구조인 심층신경망(Deep Neural Network) 구조를 사용하였다. 심층신경망 모델의 경우 설계단계에서 정의해야 할 구조와 파라미터가 다른 머신 러닝 모델과 비교해 많다. 크게 구조적인 정의는 레이어 층의 개수, 층마다 존재하는 노드의 개수, 활성화 함수(Activation Function)의 종류, 가중치 초기값 설정 함수 등이 있고 훈련과정에서 파라미터는 훈련 횟수를 의미하는 epoch, 훈련하는 정도를 나타내는 Learning rate 등이 있다. 또한, 각 모델 구조와 파라미터를 어떻게 정의하고 조절하느냐에 따라 성능의 차이가 매우 크기 때문에 설계단계에서 다양한 시도가 필요하다. 본 연구에서 심층신경망 모델을 설계 학습하면서 시도한 경우의 수는 아래 표와 같다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic25} alt="pic25" />
                                        <div className="img-caption">[표 6] 심층신경망 모델 구조와 학습 파라미터</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;반복 학습을 통해 얻은 최적화된 심층신경망 모델의 구조는 아래 표와 같다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic26} alt="pic26" />
                                        <div className="img-caption">[그림 20] 설계된 심층 신경망 모델 구조와 파라미터</div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;인공신경망의 경우 1차 기록 데이터를 사용한 모델은 RMSE가 5.4993으로 나타났고, 모든 데이터를 사용한 모델은 5.4598로 나타났다.
                                    </p>
                                    <div className="project-sub-title">Ⅴ. 분석결과</div> 
                                    <div className="project-sub-title">1. 모델 간 성능비교</div>
                                    <p>
                                    &nbsp;&nbsp;지금까지 다중회귀모형(Multiple Linear Regression), 랜덤 포레스트(Random Forest), XGboost, 심층신경망(Deep Neural Network) 모델을 1차 지표 데이터만 활용해서 학습시킨 결과와 2차 기록까지 모두 포함한 데이터를 학습한 모델의 결과는 아래 표와 같다.
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic27} alt="pic27" />
                                        <div className="img-caption">[표 7] 학습모델 데이터별 RMSE 지표 </div>
                                    </div>
                                    <p>
                                    &nbsp;&nbsp;비교결과 모든 데이터를 활용하여 학습한 랜덤 포레스트(Random Forest) 모델이 RMSE가 5.4321로 가장 좋은 성능을 보였으며, 1차 기록만 활용한 선형회귀모형이 5.5731로 가장 낮은 성능을 나타냈다. 인공신경망(Neural Network)의 경우 랜덤 포레스트(Random Forest)모델 다음으로 가장 좋은 성능을 보였다. 전체적으로 1차 기록 데이터만 활용했을 때 보다 2차 기록을 포함한 모든 데이터를 학습하였을 때 RMSE가 소폭 낮아져 더 좋은 성능을 보인 것으로 나타났다.
                                    </p>
                                    <div className="project-sub-title">2. 모델 간 중요 변수 비교</div>
                                    <p>
                                    &nbsp;&nbsp;모델마다 가장 중요한 변수 상위 5개를 추출한 표는 아래와 같다. 인공신경망의 경우 노드 간의 네트워크가 복잡하게 얽혀있기 때문에  설명력에 단점이 있다는 것을 고려하여 중요변수 비교 분석에서 제외하였다. 선형회귀모형은 회귀계수 값이 높은 변수순서대로 추출하였으며, 랜덤 포레스트와 XGboost는 RMSE를 감소시키는 크기순으로 나열하였다. 모든 모형 공통적으로 FT(게임 평균 자유투 성공 수)가 중요한 변수로 나타났다. 선형회귀모델 같은 경우 BLK(게임평균 블록 수)가 가장 큰 회귀계수 값을 나타냈으며, 머신러닝 모델은 공통으로 PTS(게임 평균 득점), AGE(나이), MP(게임 출전 시간), FT(게임 평균 자유투 성공 수)가 중요한 변수로 나타났다.  
                                    </p>
                                    <div className="img-caption-container">
                                        <img src={pic28} alt="pic28" />
                                        <div className="img-caption">[표 8] 학습모델 데이터별 중요변수 </div>
                                    </div>
                                    <div className="project-sub-title">Ⅵ. 결론 및 제언</div> 
                                    <div className="project-sub-title">1. 결론</div>
                                    <p>
                                    &nbsp;&nbsp;본 연구는 미국 프로농구리그(NBA)에서 공개하고 있는 2019-2020년 선수들의 1차 기록과 2차 기록 그리고 연봉 데이터를 활용하여 기존 통계방식인 선형회귀모형과 머신 러닝 모델 간의 차이를 분석하고자 하였다. 또한, 1차 기록만 학습한 모델과 1, 2차 기록을 모두 학습한 모델을 비교하여 2차 기록 데이터의 유의미성을 간접적으로 살펴보고자 하였다. 
                                    <br/><br/>
                                    &nbsp;&nbsp;본 연구가 밝히고자 하는 방향은 다음과 같은 두 가지다. 첫째, 프로스포츠 리그에서 공개된 데이터를 활용하여 연봉예측을 하 되 기존 선행연구에서 다루지 않았던 2차 기록 데이터를 수집하여, 국내 스포츠산업에 빅데이터의 활용방안을 모색하고 연봉예측 모형에 큰 영향을 주는 요인들을 밝히고자 하였다. 두 번째로 기존 선행연구에서는 기존 통계방식인 선형회귀모형만을 활용했다면, 본 연구는 선형회귀모형과 함께 비선형추론이 가능한  랜덤포레스트(Random Forest)와 XGboost 그리고 인공신경망(Neural Network) 모형을 활용하여 모델 간의 성능을 비교함으로써 연봉협상 과정에 있어서 의사결정에 참고할 수 있는 더 나은 가이드라인을 제시하고자 하였다.   
                                    <br/><br/>
                                    &nbsp;&nbsp;연구 결과 기존 선형회귀모형보다 머신러닝 모델이 다소 높은 성능을 보이는 것으로 나타났으며, 랜덤포레스트(Random Forest)모델이 4개 모형 중 가장 우수한 성능을 보였다. 이는 독립변수와 종속변수간의 비선형적인 관계를 추론할 수 있는 머신러닝이 선형회귀모형보다 더 다양한 변수들을 활용할 수 있었기 때문으로 추론된다. 인공신경망(Neural Network) 또한 기존 선형회귀모형보다 더 좋은 성능을 나타냈지만 랜덤 포레스트 보다는 다소 낮은 성능을 보였다. 하지만, 본 연구에서 수집한 데이터가 1,000개 미만이라는 점과 독립변수와 종속변수간의 관계가 비교적 단순하다는 점에서 미루어 보았을 때, 앞으로 더 다양한 설명변수와 방대한 데이터양이 축적된다면 인공신경망 모델이 더 다양한 방향으로 활용 될 수 있다고 기대된다.  
                                    <br/><br/>
                                    &nbsp;&nbsp;또한, 네 가지 모형 모두 1차 기록 데이터만 학습한 경우보다 2차 기록을 포함한 모든 데이터를 활용하여 학습하였을 때 더 좋은 성능을 나타냈다. 이는 스포츠산업에 축척되고 있는 다양한 데이터들과 그 데이터들을 활용하여 지속해서 대상에 대한 다른 관점을 제시하는 노력이 유의미하다는 것을 간접적으로 추론해 볼 수 있다.
                                    </p>
                                    <div className="project-sub-title">2. 제언</div>
                                    <p>
                                    &nbsp;&nbsp;본 연구 결과를 통해 제언하고자 하는 점은 크게 두 가지이다. 먼저 앞으로 데이터가 산업 분야의 자산이 되고 경쟁력이 되는 시대에서 국내 스포츠산업 또한 데이터 축적에 심혈을 기울여야 한다고 판단된다. 특히, 단순히 일차적인 데이터를 축적하는 것도 중요하지만 그것을 창의적으로 가공하여 관찰 대상에 대해 기존에 보지 못했던 부분까지 도출해 낼 수 있는 창의적인 노력이 필요하다. 미국 프로농구 리그(NBA) 같은 경우 매년 새로운 통계방식을 접목한 2차 가공 지표를 발표한다. 이는 그해 프로농구리그 트렌드에 맞는 관점에서 선수들을 평가하고 관찰하기 위한 노력이다. 하지만, 국내 프로농구리그(KBL) 같은 경우 여전히 단순한 1차 기록만 공개하고 있으며, 1차 기록 또한 세부적이지 않은 실정이다. 국내 스포츠산업 또한 다양한 데이터를 축적하고 분석한다면, 더 좋은 성능의 연봉예측 가이드라인 등 스포츠 산업 전체적으로 유의미한 결과들을 도출해 낼 수 있을 것으로 기대된다.
                                    <br/><br/>
                                    &nbsp;&nbsp;두 번째로 기존의 통계 모형뿐 만 아니라, 데이터를 통해 관계를 추론해내고 새로운 의미를 발견할 수 있는 머신러닝 기술 또한 적극적으로 활용되어야 한다고 판단된다. 특히 랜덤 포레스트(Random Forest), 인공신경망(Neural Network)과 같은 비선형 추론에 강점이 있는 머신러닝 모델들이 적극적으로 활용된다면, 이전에 적극적으로 활용되지 못했던 빅데이터를 분석하여 스포츠산업 다양한 분야에 적용할 수 있을 것으로 기대된다.
                                    <br/><br/>
                                    &nbsp;&nbsp;다만, 본 연구는 비교적 많은 변수에 비해 훈련데이터가 1,000개 이하라는 점에서 머신러닝 모델의 성능을 극대화하지 못했을 가능성이 있다. 이는 미국 프로농구리그(NBA)에서 한 시즌 팀에 소속된 전체 선수의 수가 500명에서 600명 내외이기 때문이다. 이에 차후 본 연구에는 다년 시즌에 대한 선수기록과 연봉 데이터를 수집하고, 동일 선수 데이터에 대한 적절한 데이터 가공을 하거나, 미국 프로농구리그뿐만 아니라 타 리그의 데이터까지 함께 사용하는 등 유의미하고 더 많은 데이터를 수집하는 연구가 필요하다. 또한, 본 연구에서는 컴퓨터의 자원적인 한계로 인해, 머신러닝 모델을 최적화 하는 과정에서 시도한 파라미터 조합의 경우의 수가 제한적이라는 한계가 있다. 후속적인 연구에서는 그리드 서치(Grid Search)의 설정값을 보다 넓은 범위로 설정하여 더 많은 경우의 조합을 탐색해볼 필요가 있다. 또한, AWS(Amazon Web Services)에서 제공하고 있는 SageMaker 등과 같은 파라미터 튜닝 자동화 서비스를 활용하여 머신러닝 모델을 최적화한다면, 더욱 정확한 비교를 통해 의미 있는 결과를 도출해 낼 수 있을 것으로 기대된다. 
                                    </p>
                                    <div className="project-sub-title">참고 문헌</div>
                                    <p>
                                    &nbsp;&nbsp;노형진, 정한열. (2002). 한글SPSS10.0 기초에서 응용까지, 서울 :형설출판사
                                    <br/><br/>
                                    &nbsp;&nbsp;이경문, 황규백.(2017). 선형 회귀 및 랜덤 포레스트를 이용한 개인 기록 기반 프로야구 선수 연봉 예측. 한국정보과학회 학술발표논문집, 1842-1844.
                                    <br/><br/>
                                    &nbsp;&nbsp;이석인, 한필수. (2003). 스포츠산업,경영 : 2001-2002시즌 데이트를 이용한 프로농구선수의 연봉모형 예측 및 변수생성. 한국체육학회지, 42(3), 477-486.
                                    <br/><br/>
                                    &nbsp;&nbsp;Liaw, A., & Wiener, M. (2002). Classification and regression by randomForest. R news, 2(3), 18-22.
                                    <br/><br/>
                                    &nbsp;&nbsp;Ke, G., Meng, Q., Finley, T., Wang, T., Chen, W., Ma, W., ... & Liu, T. Y. (2017). Lightgbm: A highly efficient gradient boosting decision tree. In Advances in neural information processing systems (pp. 3146-3154).
                                    <br/><br/>
                                    &nbsp;&nbsp;Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT press.
                                    <br/><br/>
                                    &nbsp;&nbsp;Kingma, D. P., & Ba, J. (2014). Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980.
                                    <br/><br/>
                                    &nbsp;&nbsp;Simonyan, K., & Zisserman, A. (2014). Very deep convolutional networks for large-scale image recognition. arXiv preprint arXiv:1409.1556.
                                    <br/><br/>
                                    &nbsp;&nbsp;Kohavi, R. (1995). A study of cross-validation and bootstrap for accuracy estimation and model selection. In Ijcai (Vol. 14, No. 2, pp. 1137-1145).
                                    <br/><br/>
                                    &nbsp;&nbsp;Chai, T., & Draxler, R. R. (2014). Root mean square error (RMSE) or mean absolute error (MAE)?–Arguments against avoiding RMSE in the literature. Geoscientific model development, 7(3), 1247-1250.
                                    <br/><br/>
                                    &nbsp;&nbsp;Bendel, R. B., & Afifi, A. A. (1977). Comparison of stopping rules in forward “stepwise” regression. Journal of the American Statistical association, 72(357), 46-53.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="biarrow-container">
                            <div className="arrow-container">
                                <div className="arrow-box">
                                    <LinkStyleCom to="/WorkScreenETC" style={{textDecoration:"none"}}>BACK TO ETC</LinkStyleCom>
                                </div>
                            </div>
                        </div>

                    </div>
                    </WorkDetailETCPaperStyleCom>
                    </motion.div>
        </>
    )
}

export default WorkDetailETCPaper
