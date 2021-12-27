
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

import { SRLWrapper } from "simple-react-lightbox";

import {useLocation} from "react-router";

import countryPointArray from "../../assets/etc/countryPoint"

function MemoryPhotoGallery({match, history }) {

    // const [countryPoint,setCountryPoint] = useState('');
    const location = useLocation();
    let countryPoint = location.state;

    if(location.state !== undefined){
        localStorage.setItem('countryPoint', JSON.stringify(location.state.countryPoint))
        countryPoint = location.state.countryPoint
    } else {
        countryPoint = localStorage.getItem('countryPoint')
        if(countryPoint) countryPoint = JSON.parse(countryPoint)
    }

    useEffect(() => {
        
        if(location.state !== undefined){
            localStorage.setItem('countryPoint', JSON.stringify(location.state.countryPoint))
            countryPoint = location.state.countryPoint
        } else {
            countryPoint = localStorage.getItem('countryPoint')
            if(countryPoint) countryPoint = JSON.parse(countryPoint)
        }
    }, [])

    // const preCountry = countryPointArray.find( x => x._id == countryPoint._id - 1);
    // const nextCountry = countryPointArray.find( x => x._id == countryPoint._id + 1);

    // console.log('////////////pre',preCountry)
    // console.log('///// next ',nextCountry)

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

            { countryPoint !== undefined ? 
            <MemoryDetailStyleCom>

                <div className="contents-container">
                    
                    <ContentsBanner bannerTitle={countryPoint.name}/>
                    <div className="memory-detail-container">

                        <SRLWrapper options={options}>

                        <div className="main-pic-container">
                            <a href={countryPoint.mainImg}>
                                <div className="picsContainer">
                                    <img src={countryPoint.mainImg}/>
                                </div>
                            </a>
                        </div>

                        <div className="gallary">
                            {
                            countryPoint.simgList.map( (item, index )=> {
                                return(
                                    <a href={countryPoint.imgList[index].imgSrc} key={index}>
                                        <div className="picsContainer" key={index}>
                                            <img src={item.imgSrc}  srl_gallery_image="true"/>
                                        </div>
                                    </a>
                                )
                            })

                            }
                        </div>
                        </SRLWrapper>
                    </div>
                    <div className="biarrow-container">
                        <div className="arrow-container">
                            <div className="arrow-box">
                                <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                            </div>
                        </div>
                    </div>
                </div>
            </MemoryDetailStyleCom>
            : <></>
            }
            </motion.div>
        </>
    )
}

export default MemoryPhotoGallery
