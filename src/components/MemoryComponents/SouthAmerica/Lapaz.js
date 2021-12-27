
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

import ImgMain from '../../../assets/images/memory/Lapaz/lapazMain.jpg'

import Img1 from '../../../assets/images/memory/Lapaz/1170/lapaz.jpg'
import Img2 from '../../../assets/images/memory/Lapaz/1170/lapaz2.jpg'
import Img3 from '../../../assets/images/memory/Lapaz/1170/lapaz3.jpg'
import Img4 from '../../../assets/images/memory/Lapaz/1170/lapaz4.jpg'

import Imgs1 from '../../../assets/images/memory/Lapaz/300/lapaz.jpg'
import Imgs2 from '../../../assets/images/memory/Lapaz/300/lapaz2.jpg'
import Imgs3 from '../../../assets/images/memory/Lapaz/300/lapaz3.jpg'
import Imgs4 from '../../../assets/images/memory/Lapaz/300/lapaz4.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function Lapaz({match, history }) {

    let mainpics = { imgSrc: ImgMain }

    let picsData = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
    ]

    let spicsData = [
        { id: 1, imgSrc: Imgs1 },
        { id: 2, imgSrc: Imgs2 },
        { id: 3, imgSrc: Imgs3 },
        { id: 4, imgSrc: Imgs4 },
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
                            
                            <ContentsBanner bannerTitle={"Copacabana"}/>
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
                                        <LinkStyleCom to="/Toress" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div>
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                                    </div>
                                    <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/Copacabana" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default Lapaz
