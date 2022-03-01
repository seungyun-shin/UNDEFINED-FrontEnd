import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Route, NavLink, Redirect } from 'react-router-dom';
//transition Animation
import { motion } from 'framer-motion'

// import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import WorkHeader from "./WorkHeader"

//Record
// import Record from '../RecordComponents/Record'

// import Records from '../../assets/etc/products'
//Components
// import Loader from "../componentParts/Loader"
// import Message from "../componentParts/Message"

//style
import { WorkScreenStyleCom } from "../../styles/jsStyles/WorkStyles/WorkScreenStyle"

// import { listRecords } from '../../actions/recordActions'

import UpdateScreen from '../componentParts/UpdatingScreen'
//img
// import img1 from "../../assets/images/work/newpics4.jpg"

function WorkScreenWEB() {

    useEffect(() => {

    }, [])

    
    // const [pos, changePos] = useState({ x: 0, y: 0 });
    // const titleContainer = useRef(null);

    // const containerMove = (e) => {
    //     const width = e.currentTarget.offsetWidth
    //     const height = e.currentTarget.offsetHeight
    //     // const width = titleContainer.current.clientWidth
    //     // const height = titleContainer.current.clientHeight
    //     // const oX = (e.nativeEvent.offsetX/width) * 100
    //     // const oY = (e.nativeEvent.offsetY/height) * 100

    //     const mouseX = (e.pageX - e.currentTarget.offsetLeft - width/2) /width
    //     const mouseY = (e.pageY - e.currentTarget.offsetTop - height/2) /height - 1.3
    //     // console.log('ddd', mouseX * 30, mouseY * -30)

    //     // console.log(oX, oY)
    //     changePos({ x: mouseX * 20, y: mouseY * -20 })
        
    //     e.currentTarget.style.transform = `rotateX(${pos.y}deg) rotateY(${pos.x}deg) translateZ(69px)`;
    //     // titleContainer.current.style.transform = `rotateX(${pos.y}deg)`;
    //     // titleContainer.current.style.transform = `rotateY(${pos.x}deg)`;
    // }

    // const containerOut = (e) => {
    //     changePos({ x: 0, y: 0 })

    //     e.currentTarget.style.transform = `rotateX(${0}deg) rotateY(${0}deg) translateZ(0)`;
    //     // titleContainer.current.style.transform = `rotateX(0deg)`;
    //     // titleContainer.current.style.transform = `rotateY(0deg)`;
    // }

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
                            <ContentsBanner bannerTitle={"WEB"}/>
                            <WorkHeader/>
                
                            <div className="record-contents-container">
                                <UpdateScreen/>
                                <div className="work-3d-wraper">
                                    {/* <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <LinkStyleCom to="/ShopScreen">
                                        <img src={img1}/>
                                        </LinkStyleCom>
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div>
                                    <div className="card-3d-container"
                                        onMouseMoveCapture={containerMove}
                                        onMouseLeave={containerOut}
                                        ref={titleContainer}
                                    >
                                        <div className="card-3d-contents">
                                            <div className="card-3d-title"> Artificial Inteligence</div>
                                            <div className="card-3d-content"> train demension persperctive</div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </WorkScreenStyleCom>
                    </motion.div>
                    </>
                
        </>
    )
}

export default WorkScreenWEB
