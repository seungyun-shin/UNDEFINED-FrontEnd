
import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import {ReactComponent as LeftArrow} from "../../assets/svg/arrow-left.svg"
import {ReactComponent as RightArrow} from "../../assets/svg/arrow-right.svg"

//style
import { MemoryDetailStyleCom } from "../../styles/jsStyles/MemoryStyles/MemoryDetailStyle"

// import ImgMain from '../../assets/images/memory/Thanks/thanksMain.jpg'

// import Img1 from '../../assets/images/memory/Thanks/1170/thanks.jpg'
// import Img2 from '../../assets/images/memory/Thanks/1170/thanks2.jpg'
// import Img3 from '../../assets/images/memory/Thanks/1170/thanks3.jpg'
// import Img5 from '../../assets/images/memory/Thanks/1170/thanks5.jpg'
// import Img6 from '../../assets/images/memory/Thanks/1170/thanks6.jpg'
// import Img7 from '../../assets/images/memory/Thanks/1170/thanks7.jpg'
// import Img8 from '../../assets/images/memory/Thanks/1170/thanks8.jpg'
// import Img9 from '../../assets/images/memory/Thanks/1170/thanks9.jpg'
// import Img10 from '../../assets/images/memory/Thanks/1170/thanks10.jpg'
// import Img11 from '../../assets/images/memory/Thanks/1170/thanks11.jpg'
// import Img12 from '../../assets/images/memory/Thanks/1170/thanks12.jpg'
// import Img13 from '../../assets/images/memory/Thanks/1170/thanks13.jpg'
// import Img14 from '../../assets/images/memory/Thanks/1170/thanks14.jpg'
// import Img15 from '../../assets/images/memory/Thanks/1170/thanks15.jpg'
// import Img16 from '../../assets/images/memory/Thanks/1170/thanks16.jpg'
// import Img17 from '../../assets/images/memory/Thanks/1170/thanks17.jpg'
// import Img18 from '../../assets/images/memory/Thanks/1170/thanks18.jpg'
// import Img19 from '../../assets/images/memory/Thanks/1170/thanks19.jpg'
// import Img20 from '../../assets/images/memory/Thanks/1170/thanks20.jpg'
// import Img21 from '../../assets/images/memory/Thanks/1170/thanks21.jpg'
// import Img22 from '../../assets/images/memory/Thanks/1170/thanks22.jpg'
// import Img23 from '../../assets/images/memory/Thanks/1170/thanks23.jpg'
// import Img24 from '../../assets/images/memory/Thanks/1170/thanks24.jpg'
// import Img25 from '../../assets/images/memory/Thanks/1170/thanks25.jpg'
// import Img26 from '../../assets/images/memory/Thanks/1170/thanks26.jpg'
// import Img27 from '../../assets/images/memory/Thanks/1170/thanks27.jpg'
// import Img28 from '../../assets/images/memory/Thanks/1170/thanks28.jpg'
// import Img29 from '../../assets/images/memory/Thanks/1170/thanks29.jpg'
// import Img30 from '../../assets/images/memory/Thanks/1170/thanks30.jpg'
// import Img31 from '../../assets/images/memory/Thanks/1170/thanks31.jpg'
// import Img32 from '../../assets/images/memory/Thanks/1170/thanks32.jpg'
// import Img33 from '../../assets/images/memory/Thanks/1170/thanks33.jpg'
// import Img34 from '../../assets/images/memory/Thanks/1170/thanks34.jpg'
// import Img35 from '../../assets/images/memory/Thanks/1170/thanks35.jpg'


// import Imgs1 from '../../assets/images/memory/Thanks/300/thanks.jpg'
// import Imgs2 from '../../assets/images/memory/Thanks/300/thanks2.jpg'
// import Imgs3 from '../../assets/images/memory/Thanks/300/thanks3.jpg'
// import Imgs5 from '../../assets/images/memory/Thanks/300/thanks5.jpg'
// import Imgs6 from '../../assets/images/memory/Thanks/300/thanks6.jpg'
// import Imgs7 from '../../assets/images/memory/Thanks/300/thanks7.jpg'
// import Imgs8 from '../../assets/images/memory/Thanks/300/thanks8.jpg'
// import Imgs9 from '../../assets/images/memory/Thanks/300/thanks9.jpg'
// import Imgs10 from '../../assets/images/memory/Thanks/300/thanks10.jpg'
// import Imgs11 from '../../assets/images/memory/Thanks/300/thanks11.jpg'
// import Imgs12 from '../../assets/images/memory/Thanks/300/thanks12.jpg'
// import Imgs13 from '../../assets/images/memory/Thanks/300/thanks13.jpg'
// import Imgs14 from '../../assets/images/memory/Thanks/300/thanks14.jpg'
// import Imgs15 from '../../assets/images/memory/Thanks/300/thanks15.jpg'
// import Imgs16 from '../../assets/images/memory/Thanks/300/thanks16.jpg'
// import Imgs17 from '../../assets/images/memory/Thanks/300/thanks17.jpg'
// import Imgs18 from '../../assets/images/memory/Thanks/300/thanks18.jpg'
// import Imgs19 from '../../assets/images/memory/Thanks/300/thanks19.jpg'
// import Imgs20 from '../../assets/images/memory/Thanks/300/thanks20.jpg'
// import Imgs21 from '../../assets/images/memory/Thanks/300/thanks21.jpg'
// import Imgs22 from '../../assets/images/memory/Thanks/300/thanks22.jpg'
// import Imgs23 from '../../assets/images/memory/Thanks/300/thanks23.jpg'
// import Imgs24 from '../../assets/images/memory/Thanks/300/thanks24.jpg'
// import Imgs25 from '../../assets/images/memory/Thanks/300/thanks25.jpg'
// import Imgs26 from '../../assets/images/memory/Thanks/300/thanks26.jpg'
// import Imgs27 from '../../assets/images/memory/Thanks/300/thanks27.jpg'
// import Imgs28 from '../../assets/images/memory/Thanks/300/thanks28.jpg'
// import Imgs29 from '../../assets/images/memory/Thanks/300/thanks29.jpg'
// import Imgs30 from '../../assets/images/memory/Thanks/300/thanks30.jpg'
// import Imgs31 from '../../assets/images/memory/Thanks/300/thanks31.jpg'
// import Imgs32 from '../../assets/images/memory/Thanks/300/thanks32.jpg'
// import Imgs33 from '../../assets/images/memory/Thanks/300/thanks33.jpg'
// import Imgs34 from '../../assets/images/memory/Thanks/300/thanks34.jpg'
// import Imgs35 from '../../assets/images/memory/Thanks/300/thanks35.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function Thanks({match, history }) {

    let mainpics = { imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/thanksMain.jpg" }

    let picsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks.jpg" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks2.jpg" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks3.jpg" },
        // { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks5.jpg" },
        { id: 6, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks6.jpg" },
        { id: 7, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks7.jpg" },
        { id: 8, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks8.jpg" },
        { id: 9, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks9.jpg" },
        { id: 10, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks10.jpg" },
        { id: 11, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks11.jpg" },
        { id: 12, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks12.jpg" },
        { id: 13, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks13.jpg" },
        { id: 14, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks14.jpg" },
        { id: 15, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks15.jpg" },
        { id: 16, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks16.jpg" },
        { id: 17, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks17.jpg" },
        { id: 18, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks18.jpg" },
        { id: 19, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks19.jpg" },
        { id: 20, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks20.jpg" },
        { id: 21, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks21.jpg" },
        { id: 22, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks22.jpg" },
        { id: 23, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks23.jpg" },
        { id: 24, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks24.jpg" },
        { id: 25, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks25.jpg" },
        { id: 26, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks26.jpg" },
        { id: 27, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks27.jpg" },
        { id: 28, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks28.jpg" },
        { id: 29, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks29.jpg" },
        { id: 30, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks30.jpg" },
        { id: 31, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks31.jpg" },
        { id: 32, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks32.jpg" },
        { id: 33, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks33.jpg" },
        { id: 34, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks34.jpg" },
        { id: 35, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks35.jpg" },
        { id: 36, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks36.jpg" },
        { id: 37, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/1170/thanks37.jpg" },
    ]

    let spicsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks.jpg" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks2.jpg" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks3.jpg" },
        // { id: 4, imgSrc: Imgs4 },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks5.jpg" },
        { id: 6, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks6.jpg" },
        { id: 7, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks7.jpg" },
        { id: 8, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks8.jpg" },
        { id: 9, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks9.jpg" },
        { id: 10, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks10.jpg" },
        { id: 11, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks11.jpg" },
        { id: 12, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks12.jpg" },
        { id: 13, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks13.jpg" },
        { id: 14, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks14.jpg" },
        { id: 15, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks15.jpg" },
        { id: 16, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks16.jpg" },
        { id: 17, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks17.jpg" },
        { id: 18, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks18.jpg" },
        { id: 19, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks19.jpg" },
        { id: 20, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks20.jpg" },
        { id: 21, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks21.jpg" },
        { id: 22, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks22.jpg" },
        { id: 23, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks23.jpg" },
        { id: 24, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks24.jpg" },
        { id: 25, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks25.jpg" },
        { id: 26, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks26.jpg" },
        { id: 27, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks27.jpg" },
        { id: 28, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks28.jpg" },
        { id: 29, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks29.jpg" },
        { id: 30, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks30.jpg" },
        { id: 31, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks31.jpg" },
        { id: 32, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks32.jpg" },
        { id: 33, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks33.jpg" },
        { id: 34, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks34.jpg" },
        { id: 35, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks35.jpg" },
        { id: 36, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks36.jpg" },
        { id: 37, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Thanks/300/thanks37.jpg" },
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
                            
                            <ContentsBanner bannerTitle={"Appreciate"}/>
                    <div className="gallaryfullwraper">
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
                                    {/* <div className="arrow-box">
                                        <LinkStyleCom to="/Thanks" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
                                        <span>&nbsp;&nbsp;PREV</span> 
                                    </div> */}
                                    <div className="arrow-box">
                                        <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                                    </div>
                                    {/* <div className="arrow-box">
                                        <span>NEXT&nbsp;&nbsp;</span>
                                        <LinkStyleCom to="/SSYProject" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default Thanks
