
import React, {useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
// import {AnimatePresence, motion} from 'framer-motion'
import Transition from '../componentParts/Transition';

import gsap from 'gsap' 

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import {ReactComponent as LeftArrow} from "../../assets/svg/arrow-left.svg"
import {ReactComponent as RightArrow} from "../../assets/svg/arrow-right.svg"

import photos from "../../assets/etc/fullGalleryData"

//style
import { AboutSiteStyleCom } from "../../styles/jsStyles/AboutStyles/AboutSiteStyle"

import { SRLWrapper } from "simple-react-lightbox";

import useWindowSize from "../../assets/etc/useWindowSize";

function AboutSite({match, history }) {

    const home = gsap.timeline();

    const options = {
        settings: {
        }
    }

    const size = useWindowSize();

    const scrollContainer = useRef(null);
    const scrollRef = useRef(null);
    const leftChunkRef = useRef(null);
    const middleChunkRef = useRef(null);
    const rightChunkRef = useRef(null);

    useEffect(() => {

        document.body.style.background = `#161616`
        document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`
        // document.querySelector('.overall-Layout').style.background = `#191919`
        // document.querySelector('.overall-Layout').style.height = `${scrollRef.current.getBoundingClientRect().height}px`

        // overall-Layout

        const tl = gsap.timeline();

        const tl2 = gsap.timeline();

        tl.to('#mesh-container', {
            duration: 1,
            opacity: 0,
            display: "none",
        })

        
        tl2.to('.contents-container-full', {
            opacity:1,
            ease: "power3.inOut",
            stagger: {
                amount: 0.07
            },
            delay:1
        }).from('.sub-title', 1.8,{
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3
            },
        });

        // tl.to('#mesh-container', {
        //     duration: 1,
        //     opacity: 0,
        //     display: "none",
        // }).to(".earthContainer", {
        //     duration: 1,
        //     opacity: 1,
        // });

        return () => {
            document.body.style.background = `black`
            document.body.style.height = `0px`
            // document.querySelector('.overall-Layout').style.height = `0px`

            gsap.to( '#mesh-container', {
                duration: 1,
                opacity: 1,
                display: "flex",
            } );
        }

    }, [size.height])

    useEffect(() => {
        const frameID = requestAnimationFrame(()=> skewScrolling());

        return () => {
            cancelAnimationFrame(frameID)
        }
    }, [])

    const skewConfigs = {
        ease: .1,
        current: 0,
        previous: 0,
        rounded: 0
    }

    const skewScrolling = () => {
        console.log('//////',window.scrollY)
        console.log('///',skewConfigs.rounded)
        skewConfigs.current = window.scrollY;
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

        //varibles
        const difference = skewConfigs.current - skewConfigs.rounded;
        const acceleration = difference / size.width
        const velocity = + acceleration;
        const skew = velocity * 27.5; 

        //
        if (scrollRef.current !== null) {
            scrollRef.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`
        }
            
        requestAnimationFrame(() => skewScrolling())
    }

    const leftChunk = [ ... photos].splice(0,2);
    const middleChunk = [ ... photos].splice(2,5);
    const rightChunk = [ ... photos].splice(5,8);
    
    return (
        <>
            <Transition timeline={home}/>
            <AboutSiteStyleCom>
                
                <div className="contents-container-full" ref={scrollContainer}>
                    <div className="main-container2" id="main-container2" ref={scrollRef}>
                    <div className="margin-container"></div>
                    <ContentsBanner bannerTitle={"SITE"}/>
                        <div className="grid-wrap">

                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>
                            <div className="qwetr">adqwe</div>

                        </div>
                    </div>
                </div>
            </AboutSiteStyleCom>
        </>
    )
}

export default AboutSite
