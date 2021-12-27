
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

// import ImgMain from '../../assets/images/memory/project/projectMain.jpg'

// import Img1 from '../../assets/images/memory/project/1170/project1.jpg'
// import Img2 from '../../assets/images/memory/project/1170/project2.jpg'
// import Img3 from '../../assets/images/memory/project/1170/project3.jpg'
// import Img4 from '../../assets/images/memory/project/1170/project4.jpg'
// import Img5 from '../../assets/images/memory/project/1170/project5.jpg'
// import Img6 from '../../assets/images/memory/project/1170/project6.jpg'
// import Img7 from '../../assets/images/memory/project/1170/project7.jpg'
// import Img8 from '../../assets/images/memory/project/1170/project8.jpg'
// import Img9 from '../../assets/images/memory/project/1170/project9.jpg'
// import Img10 from '../../assets/images/memory/project/1170/project10.jpg'
// import Img11 from '../../assets/images/memory/project/1170/project11.jpg'
// import Img12 from '../../assets/images/memory/project/1170/project12.jpg'
// import Img13 from '../../assets/images/memory/project/1170/project13.jpg'
// import Img14 from '../../assets/images/memory/project/1170/project14.jpg'
// import Img15 from '../../assets/images/memory/project/1170/project15.jpg'
// import Img16 from '../../assets/images/memory/project/1170/project16.jpg'
// import Img17 from '../../assets/images/memory/project/1170/project17.jpg'
// import Img18 from '../../assets/images/memory/project/1170/project18.jpg'
// import Img19 from '../../assets/images/memory/project/1170/project19.jpg'
// import Img20 from '../../assets/images/memory/project/1170/project20.jpg'
// import Img21 from '../../assets/images/memory/project/1170/project21.jpg'
// import Img22 from '../../assets/images/memory/project/1170/project22.jpg'
// import Img23 from '../../assets/images/memory/project/1170/project23.jpg'
// import Img24 from '../../assets/images/memory/project/1170/project24.jpg'
// import Img25 from '../../assets/images/memory/project/1170/project25.jpg'
// import Img26 from '../../assets/images/memory/project/1170/project26.jpg'
// import Img27 from '../../assets/images/memory/project/1170/project27.jpg'
// import Img28 from '../../assets/images/memory/project/1170/project28.jpg'
// import Img29 from '../../assets/images/memory/project/1170/project29.jpg'
// import Img30 from '../../assets/images/memory/project/1170/project30.jpg'
// import Img31 from '../../assets/images/memory/project/1170/project31.jpg'
// import Img32 from '../../assets/images/memory/project/1170/project32.jpg'
// import Img33 from '../../assets/images/memory/project/1170/project33.jpg'
// import Img34 from '../../assets/images/memory/project/1170/project34.jpg'
// import Img35 from '../../assets/images/memory/project/1170/project35.jpg'
// import Img36 from '../../assets/images/memory/project/1170/project36.jpg'
// import Img37 from '../../assets/images/memory/project/1170/project37.jpg'
// import Img38 from '../../assets/images/memory/project/1170/project38.jpg'
// import Img39 from '../../assets/images/memory/project/1170/project39.jpg'
// import Img40 from '../../assets/images/memory/project/1170/project40.jpg'
// import Img41 from '../../assets/images/memory/project/1170/project41.jpg'
// import Img42 from '../../assets/images/memory/project/1170/project42.jpg'
// import Img43 from '../../assets/images/memory/project/1170/project43.jpg'
// import Img45 from '../../assets/images/memory/project/1170/project45.jpg'
// import Img46 from '../../assets/images/memory/project/1170/project46.jpg'
// import Img47 from '../../assets/images/memory/project/1170/project47.jpg'
// import Img48 from '../../assets/images/memory/project/1170/project48.jpg'
// import Img49 from '../../assets/images/memory/project/1170/project49.jpg'
// import Img50 from '../../assets/images/memory/project/1170/project50.jpg'
// import Img51 from '../../assets/images/memory/project/1170/project51.jpg'
// import Img52 from '../../assets/images/memory/project/1170/project52.jpg'
// import Img53 from '../../assets/images/memory/project/1170/project53.jpg'
// import Img54 from '../../assets/images/memory/project/1170/project54.jpg'


// import Imgs1 from '../../assets/images/memory/project/300/project1.jpg'
// import Imgs2 from '../../assets/images/memory/project/300/project2.jpg'
// import Imgs3 from '../../assets/images/memory/project/300/project3.jpg'
// import Imgs4 from '../../assets/images/memory/project/300/project4.jpg'
// import Imgs5 from '../../assets/images/memory/project/300/project5.jpg'
// import Imgs6 from '../../assets/images/memory/project/300/project6.jpg'
// import Imgs7 from '../../assets/images/memory/project/300/project7.jpg'
// import Imgs8 from '../../assets/images/memory/project/300/project8.jpg'
// import Imgs9 from '../../assets/images/memory/project/300/project9.jpg'
// import Imgs10 from '../../assets/images/memory/project/300/project10.jpg'
// import Imgs11 from '../../assets/images/memory/project/300/project11.jpg'
// import Imgs12 from '../../assets/images/memory/project/300/project12.jpg'
// import Imgs13 from '../../assets/images/memory/project/300/project13.jpg'
// import Imgs14 from '../../assets/images/memory/project/300/project14.jpg'
// import Imgs15 from '../../assets/images/memory/project/300/project15.jpg'
// import Imgs16 from '../../assets/images/memory/project/300/project16.jpg'
// import Imgs17 from '../../assets/images/memory/project/300/project17.jpg'
// import Imgs18 from '../../assets/images/memory/project/300/project18.jpg'
// import Imgs19 from '../../assets/images/memory/project/300/project19.jpg'
// import Imgs20 from '../../assets/images/memory/project/300/project20.jpg'
// import Imgs21 from '../../assets/images/memory/project/300/project21.jpg'
// import Imgs22 from '../../assets/images/memory/project/300/project22.jpg'
// import Imgs23 from '../../assets/images/memory/project/300/project23.jpg'
// import Imgs24 from '../../assets/images/memory/project/300/project24.jpg'
// import Imgs25 from '../../assets/images/memory/project/300/project25.jpg'
// import Imgs26 from '../../assets/images/memory/project/300/project26.jpg'
// import Imgs27 from '../../assets/images/memory/project/300/project27.jpg'
// import Imgs28 from '../../assets/images/memory/project/300/project28.jpg'
// import Imgs29 from '../../assets/images/memory/project/300/project29.jpg'
// import Imgs30 from '../../assets/images/memory/project/300/project30.jpg'
// import Imgs31 from '../../assets/images/memory/project/300/project31.jpg'
// import Imgs32 from '../../assets/images/memory/project/300/project32.jpg'
// import Imgs33 from '../../assets/images/memory/project/300/project33.jpg'
// import Imgs34 from '../../assets/images/memory/project/300/project34.jpg'
// import Imgs35 from '../../assets/images/memory/project/300/project35.jpg'
// import Imgs36 from '../../assets/images/memory/project/300/project36.jpg'
// import Imgs37 from '../../assets/images/memory/project/300/project37.jpg'
// import Imgs38 from '../../assets/images/memory/project/300/project38.jpg'
// import Imgs39 from '../../assets/images/memory/project/300/project39.jpg'
// import Imgs40 from '../../assets/images/memory/project/300/project40.jpg'
// import Imgs41 from '../../assets/images/memory/project/300/project41.jpg'
// import Imgs42 from '../../assets/images/memory/project/300/project42.jpg'
// import Imgs43 from '../../assets/images/memory/project/300/project43.jpg'
// import Imgs45 from '../../assets/images/memory/project/300/project45.jpg'
// import Imgs46 from '../../assets/images/memory/project/300/project46.jpg'
// import Imgs47 from '../../assets/images/memory/project/300/project47.jpg'
// import Imgs48 from '../../assets/images/memory/project/300/project48.jpg'
// import Imgs49 from '../../assets/images/memory/project/300/project49.jpg'
// import Imgs50 from '../../assets/images/memory/project/300/project50.jpg'
// import Imgs51 from '../../assets/images/memory/project/300/project51.jpg'
// import Imgs52 from '../../assets/images/memory/project/300/project52.jpg'
// import Imgs53 from '../../assets/images/memory/project/300/project53.jpg'
// import Imgs54 from '../../assets/images/memory/project/300/project54.jpg'

import { SRLWrapper } from "simple-react-lightbox";

function SSYProject({match, history }) {

    let mainpics = { imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/projectMain.jpg" }

    let picsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project1.jpg" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project2.jpg" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project3.jpg" },
        { id: 4, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project4.jpg" },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project5.jpg" },
        { id: 6, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project6.jpg" },
        { id: 7, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project7.jpg" },
        { id: 8, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project8.jpg" },
        { id: 9, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project9.jpg" },
        { id: 10, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project10.jpg" },
        { id: 11, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project11.jpg" },
        { id: 12, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project12.jpg" },
        { id: 13, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project13.jpg" },
        { id: 14, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project14.jpg" },
        { id: 15, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project15.jpg" },
        { id: 16, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project16.jpg" },
        { id: 17, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project17.jpg" },
        { id: 18, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project18.jpg" },
        { id: 19, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project19.jpg" },
        { id: 20, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project20.jpg" },
        { id: 21, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project21.jpg" },
        { id: 22, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project22.jpg" },
        { id: 23, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project23.jpg" },
        { id: 24, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project24.jpg" },
        { id: 25, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project25.jpg" },
        { id: 26, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project26.jpg" },
        { id: 27, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project27.jpg" },
        { id: 28, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project28.jpg" },
        { id: 29, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project29.jpg" },
        { id: 30, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project30.jpg" },
        { id: 31, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project31.jpg" },
        { id: 32, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project32.jpg" },
        { id: 33, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project33.jpg" },
        { id: 34, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project34.jpg" },
        { id: 35, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project35.jpg" },
        { id: 36, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project36.jpg" },
        { id: 37, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project37.jpg" },
        { id: 38, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project38.jpg" },
        { id: 39, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project39.jpg" },
        { id: 40, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project40.jpg" },
        { id: 41, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project41.jpg" },
        { id: 42, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project42.jpg" },
        { id: 43, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project43.jpg" },
        { id: 45, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project44.jpg" },
        { id: 46, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project45.jpg" },
        { id: 47, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project46.jpg" },
        { id: 48, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project47.jpg" },
        { id: 49, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project48.jpg" },
        { id: 50, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project49.jpg" },
        { id: 51, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project50.jpg" },
        { id: 52, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project51.jpg" },
        { id: 53, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project52.jpg" },
        { id: 54, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project53.jpg" },
        { id: 55, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project54.jpg" },
        { id: 56, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project55.png" },
        { id: 57, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project56.jpg" },
        { id: 58, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project57.jpg" },
        { id: 59, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/1170/project58.jpg" },
    ]

    let spicsData = [
        { id: 1, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project1.jpg" },
        { id: 2, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project2.jpg" },
        { id: 3, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project3.jpg" },
        { id: 4, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project4.jpg" },
        { id: 5, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project5.jpg" },
        { id: 6, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project6.jpg" },
        { id: 7, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project7.jpg" },
        { id: 8, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project8.jpg" },
        { id: 9, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project9.jpg" },
        { id: 10, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project10.jpg" },
        { id: 11, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project11.jpg" },
        { id: 12, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project12.jpg" },
        { id: 13, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project13.jpg" },
        { id: 14, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project14.jpg" },
        { id: 15, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project15.jpg" },
        { id: 16, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project16.jpg" },
        { id: 17, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project17.jpg" },
        { id: 18, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project18.jpg" },
        { id: 19, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project19.jpg" },
        { id: 20, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project20.jpg" },
        { id: 21, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project21.jpg" },
        { id: 22, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project22.jpg" },
        { id: 23, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project23.jpg" },
        { id: 24, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project24.jpg" },
        { id: 25, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project25.jpg" },
        { id: 26, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project26.jpg" },
        { id: 27, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project27.jpg" },
        { id: 28, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project28.jpg" },
        { id: 29, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project29.jpg" },
        { id: 30, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project30.jpg" },
        { id: 31, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project31.jpg" },
        { id: 32, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project32.jpg" },
        { id: 33, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project33.jpg" },
        { id: 34, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project34.jpg" },
        { id: 35, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project35.jpg" },
        { id: 36, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project36.jpg" },
        { id: 37, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project37.jpg" },
        { id: 38, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project38.jpg" },
        { id: 39, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project39.jpg" },
        { id: 40, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project40.jpg" },
        { id: 41, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project41.jpg" },
        { id: 42, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project42.jpg" },
        { id: 43, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project43.jpg" },
        { id: 45, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project44.jpg" },
        { id: 46, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project45.jpg" },
        { id: 47, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project46.jpg" },
        { id: 48, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project47.jpg" },
        { id: 49, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project48.jpg" },
        { id: 50, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project49.jpg" },
        { id: 51, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project50.jpg" },
        { id: 52, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project51.jpg" },
        { id: 53, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project52.jpg" },
        { id: 54, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project53.jpg" },
        { id: 55, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project54.jpg" },
        { id: 56, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project55.png" },
        { id: 57, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project56.jpg" },
        { id: 58, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project57.jpg" },
        { id: 59, imgSrc: "https://ssyproject.s3.ap-northeast-2.amazonaws.com/Memory/Project/300/project58.jpg" },
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
                                        <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MemoryDetailStyleCom>
                    </motion.div>
        </>
    )
}

export default SSYProject
