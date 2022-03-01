
import React from 'react'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
import { motion } from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"

//style
import { MemoryDetailStyleCom } from "../../styles/jsStyles/MemoryStyles/MemoryDetailStyle"

import { SRLWrapper } from "simple-react-lightbox";

function Certificate({match, history }) {

    let picsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/1170/Michigan.JPG" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/1170/Stanford.JPG" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/1170/Patent.JPG" },
        { id: 4, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/1170/Patent2.JPG" },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/1170/Patent3.JPG" },
    ]

    let spicsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/300/Michigan.JPG" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/300/Stanford.JPG" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/300/Patent.JPG" },
        { id: 4, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/300/Patent2.JPG" },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Certificate/300/Patent3.JPG" },
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
                            
                            <ContentsBanner bannerTitle={"CTF"}/>
                    <div className="gallaryfullwraper">
                            <div className="memory-detail-container">

                                <SRLWrapper options={options}>

                                <div className="gallary">
                                    {spicsData.map( (item, index )=> {
                                        return(
                                            <a href={picsData[index].imgSrc} key={index}>
                                                <div className="picsContainer" key={index}>
                                                    <img src={item.imgSrc}  srl_gallery_image="true" alt="gallpic"/>
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
                                        <LinkStyleCom to="/AboutMe" style={{textDecoration:"none"}}>BACK TO ABOUT</LinkStyleCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default Certificate
