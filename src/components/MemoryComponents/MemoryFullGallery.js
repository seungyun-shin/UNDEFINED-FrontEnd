
// import React, { useEffect, useRef } from 'react'
// // import Select from 'react-select'

// //transition Animation
// import { motion } from 'framer-motion'

// //basic Components
// import ContentsBanner from "../componentParts/ContentsBanner"

// import photos from "../../assets/etc/fullGalleryData"

// //style
// import { MemoryFullGalleryStyleCom } from "../../styles/jsStyles/MemoryStyles/MemoryFullGalleryStyle"

// // import { SRLWrapper } from "simple-react-lightbox";
// import GridItem from './GridItem';

// import useWindowSize from "../../assets/etc/useWindowSize";

// function MemoryFullGallery({match, history }) {

//     const size = useWindowSize();

//     const scrollContainer = useRef(null);
//     const scrollRef = useRef(null);
//     // const leftChunkRef = useRef(null);
//     const middleChunkRef = useRef(null);
//     // const rightChunkRef = useRef(null);

//     useEffect(() => {
//         document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`

//         return () => {
//             document.body.style.height = `0px`
//         }

//     }, [size.height])

//     useEffect(() => {
//         const frameID = requestAnimationFrame(()=> skewScrolling());

//         return () => {
//             cancelAnimationFrame(frameID)
//         }
//     }, [])

//     const skewConfigs = {
//         ease: .1,
//         current: 0,
//         previous: 0,
//         rounded: 0
//     }

//     const skewScrolling = () => {
//         console.log('///',skewConfigs.rounded)
//         skewConfigs.current = window.scrollY;
//         skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
//         skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

//         //varibles
//         const difference = skewConfigs.current - skewConfigs.rounded;
//         const acceleration = difference / size.width
//         const velocity = + acceleration;
//         const skew = velocity * 27.5; 

//         if (scrollRef.current !== null) {
//             scrollRef.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`
//         }
            
//         requestAnimationFrame(() => skewScrolling())
//     }

//     // const leftChunk = [ ... photos].splice(0,2);
//     const middleChunk = [ ... photos].splice(2,5);
//     // const rightChunk = [ ... photos].splice(5,8);
    
//     return (
//         <>
//                     <motion.div
//                         initial = {{ translateY:60, opacity: 0 }}
//                         animate = {{ translateY:0, opacity: 1 }}
//                         exit={{ translateY:60, opacity: 0 }}
//                         transition={{duration: 0.5}}
//                     >
//                     <MemoryFullGalleryStyleCom>
                        
//                         <div className="contents-container-full" ref={scrollContainer}>
//                             <div className="main-container2" id="main-container2" ref={scrollRef}>
//                             <div className="margin-container"></div>
//                             <ContentsBanner bannerTitle={"Memory Gallery"}/>

//                             <div className="grid-wrap">
//                                     <div className="middle-column" ref={middleChunkRef}>
//                                         {
//                                             middleChunk.map(( {id, url, description}, index) => (
//                                                 <GridItem key={id} url={url} description={description} />
//                                             ))
//                                         }
//                                     </div>
//                                 </div>

//                             </div>
//                             {/* <div className="biarrow-container">
//                                 <div className="arrow-container">
//                                     <div className="arrow-box">
//                                         <LinkStyleCom to="/Thanks" style={{textDecoration:"none"}}><LeftArrow/></LinkStyleCom>
//                                         <span>&nbsp;&nbsp;PREV</span> 
//                                     </div>
//                                     <div className="arrow-box">
//                                         <LinkStyleCom to="/MemoryScreen" style={{textDecoration:"none"}}>BACK TO MEMORY</LinkStyleCom>
//                                     </div>
//                                     <div className="arrow-box">
//                                         <span>NEXT&nbsp;&nbsp;</span>
//                                         <LinkStyleCom to="/MemoryDetailGalapagos" style={{textDecoration:"none"}}><RightArrow/></LinkStyleCom>
//                                     </div>
//                                 </div>
//                             </div> */}
//                         </div>
//                     </MemoryFullGalleryStyleCom>
//                     </motion.div>
//         </>
//     )
// }

// export default MemoryFullGallery
