
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

import ImgMain from '../../../assets/images/memory/Copacabana/CopacabanaMain.jpg'

import Img1 from '../../../assets/images/memory/Copacabana/1170/Copacabana2.jpg'
import Img2 from '../../../assets/images/memory/Copacabana/1170/Copacabana3.jpg'
import Img3 from '../../../assets/images/memory/Copacabana/1170/Copacabana4.jpg'
import Img4 from '../../../assets/images/memory/Copacabana/1170/Copacabana5.jpg'
import Img5 from '../../../assets/images/memory/Copacabana/1170/Copacabana6.jpg'
import Img6 from '../../../assets/images/memory/Copacabana/1170/Copacabana7.jpg'
import Img7 from '../../../assets/images/memory/Copacabana/1170/Copacabana8.jpg'
import Img8 from '../../../assets/images/memory/Copacabana/1170/Copacabana9.jpg'
import Img9 from '../../../assets/images/memory/Copacabana/1170/Copacabana10.jpg'
import Img10 from '../../../assets/images/memory/Copacabana/1170/Copacabana11.jpg'
import Img11 from '../../../assets/images/memory/Copacabana/1170/Copacabana12.jpg'
import Img12 from '../../../assets/images/memory/Copacabana/1170/Copacabana13.jpg'
import Img13 from '../../../assets/images/memory/Copacabana/1170/Copacabana14.jpg'
import Img14 from '../../../assets/images/memory/Copacabana/1170/Copacabana15.jpg'
import Img15 from '../../../assets/images/memory/Copacabana/1170/Copacabana16.jpg'
import Img16 from '../../../assets/images/memory/Copacabana/1170/Copacabana17.jpg'

import Imgs1 from '../../../assets/images/memory/Copacabana/300/Copacabana2.jpg'
import Imgs2 from '../../../assets/images/memory/Copacabana/300/Copacabana3.jpg'
import Imgs3 from '../../../assets/images/memory/Copacabana/300/Copacabana4.jpg'
import Imgs4 from '../../../assets/images/memory/Copacabana/300/Copacabana5.jpg'
import Imgs5 from '../../../assets/images/memory/Copacabana/300/Copacabana6.jpg'
import Imgs6 from '../../../assets/images/memory/Copacabana/300/Copacabana7.jpg'
import Imgs7 from '../../../assets/images/memory/Copacabana/300/Copacabana8.jpg'
import Imgs8 from '../../../assets/images/memory/Copacabana/300/Copacabana9.jpg'
import Imgs9 from '../../../assets/images/memory/Copacabana/300/Copacabana10.jpg'
import Imgs10 from '../../../assets/images/memory/Copacabana/300/Copacabana11.jpg'
import Imgs11 from '../../../assets/images/memory/Copacabana/300/Copacabana12.jpg'
import Imgs12 from '../../../assets/images/memory/Copacabana/300/Copacabana13.jpg'
import Imgs13 from '../../../assets/images/memory/Copacabana/300/Copacabana14.jpg'
import Imgs14 from '../../../assets/images/memory/Copacabana/300/Copacabana15.jpg'
import Imgs15 from '../../../assets/images/memory/Copacabana/300/Copacabana16.jpg'
import Imgs16 from '../../../assets/images/memory/Copacabana/300/Copacabana17.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function Copacabana({match, history }) {

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
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 },
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img13 },
        { id: 14, imgSrc: Img14 },
        { id: 15, imgSrc: Img15 },
        { id: 16, imgSrc: Img16 },
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
        { id: 9, imgSrc: Imgs9 },
        { id: 10, imgSrc: Imgs10 },
        { id: 11, imgSrc: Imgs11 },
        { id: 12, imgSrc: Imgs12 },
        { id: 13, imgSrc: Imgs13 },
        { id: 14, imgSrc: Imgs14 },
        { id: 15, imgSrc: Imgs15 },
        { id: 16, imgSrc: Imgs16 },
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
                                        <LinkStyleCom to="/ElCharten" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div>
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                                    </div>
                                    <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/Uyuni" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default Copacabana
