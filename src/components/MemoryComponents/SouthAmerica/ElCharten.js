
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

import ImgMain from '../../../assets/images/memory/ElCharten/ElChartenMain.jpg'

import Img1 from '../../../assets/images/memory/ElCharten/1170/ElCharten.jpg'
import Img2 from '../../../assets/images/memory/ElCharten/1170/ElCharten2.jpg'
import Img3 from '../../../assets/images/memory/ElCharten/1170/ElCharten3.jpg'
import Img4 from '../../../assets/images/memory/ElCharten/1170/ElCharten4.jpg'
import Img5 from '../../../assets/images/memory/ElCharten/1170/ElCharten5.jpg'
import Img6 from '../../../assets/images/memory/ElCharten/1170/ElCharten6.jpg'
import Img7 from '../../../assets/images/memory/ElCharten/1170/ElCharten7.jpg'
import Img8 from '../../../assets/images/memory/ElCharten/1170/ElCharten8.jpg'

import Imgs1 from '../../../assets/images/memory/ElCharten/300/ElCharten.jpg'
import Imgs2 from '../../../assets/images/memory/ElCharten/300/ElCharten2.jpg'
import Imgs3 from '../../../assets/images/memory/ElCharten/300/ElCharten3.jpg'
import Imgs4 from '../../../assets/images/memory/ElCharten/300/ElCharten4.jpg'
import Imgs5 from '../../../assets/images/memory/ElCharten/300/ElCharten5.jpg'
import Imgs6 from '../../../assets/images/memory/ElCharten/300/ElCharten6.jpg'
import Imgs7 from '../../../assets/images/memory/ElCharten/300/ElCharten7.jpg'
import Imgs8 from '../../../assets/images/memory/ElCharten/300/ElCharten8.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function ElCharten({match, history }) {

    let mainpics = { imgSrc: ImgMain }

    let picsData = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
    ]

    let spicsData = [
        { id: 1, imgSrc: Imgs1 },
        { id: 2, imgSrc: Imgs2 },
        { id: 3, imgSrc: Imgs3 },
        { id: 4, imgSrc: Imgs4 },
        { id: 5, imgSrc: Imgs5 },
        { id: 6, imgSrc: Imgs6 },
        { id: 7, imgSrc: Imgs7 },
        { id: 8, imgSrc: Imgs8 },
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

export default ElCharten
