
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
import { MemoryDetailStyleCom } from "../../../styles/jsStyles/MemoryStyles/MemoryDetailStyle"

import ImgMain from '../../../assets/images/memory/Macchuppichu/MacchuppichuMain.jpg'

import Img1 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu.jpg'
import Img2 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu2.jpg'
import Img3 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu3.jpg'
import Img4 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu4.jpg'
import Img5 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu5.jpg'
import Img6 from '../../../assets/images/memory/Macchuppichu/1170/Macchuppichu6.jpg'

import Imgs1 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu.jpg'
import Imgs2 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu2.jpg'
import Imgs3 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu3.jpg'
import Imgs4 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu4.jpg'
import Imgs5 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu5.jpg'
import Imgs6 from '../../../assets/images/memory/Macchuppichu/300/Macchuppichu6.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function Macchuppichu({match, history }) {

    let mainpics = { imgSrc: ImgMain }

    let picsData = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
    ]

    let spicsData = [
        { id: 1, imgSrc: Imgs1 },
        { id: 2, imgSrc: Imgs2 },
        { id: 3, imgSrc: Imgs3 },
        { id: 4, imgSrc: Imgs4 },
        { id: 5, imgSrc: Imgs5 },
        { id: 6, imgSrc: Imgs6 },
    ]

    const options = {
        settings: {
        }
    }
    
    return (
        <>
                    <motion.div
                        initial = {{ translateY:60, opacity: 0 }}
                        animate = {{ translateY:0, opacity: 1 }}
                        exit={{ translateY:60, opacity: 0 }}
                        transition={{duration: 0.5}}
                    >
                    <MemoryDetailStyleCom>
                        <div className="contents-container">
                            
                            <ContentsBanner bannerTitle={"Gala Pagos"}/>
                            <div className="memory-detail-container">

                                <SRLWrapper options={options}>

                                <div className="main-pic-container">
                                    <a href={mainpics.imgSrc}>
                                        <div className="picsContainer">
                                            <img src={mainpics.imgSrc}/>
                                        </div>
                                    </a>
                                </div>

                                <div className="gallary">
                                    {spicsData.map( (item, index )=> {
                                        return(
                                            <a href={picsData[index].imgSrc} key={index}>
                                                <div className="picsContainer" key={index}>
                                                    <img src={item.imgSrc}  srl_gallery_image="true"/>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                                </SRLWrapper>
                            </div>
                            <div className="biarrow-container">
                                <div className="arrow-container">
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/Cusco" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div>
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                                    </div>
                                    <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/MemoryDetailToress" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default Macchuppichu
