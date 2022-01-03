
import React, {useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";
// import Select from 'react-select'

//transition Animation
// import {AnimatePresence, motion} from 'framer-motion'
import Transition from '../componentParts/Transition';

import Observer from "../componentParts/Observer"
import Observer2 from "../componentParts/Observer2"
import Observer3 from "../componentParts/Observer3"
import Observer6 from "../componentParts/Observer6"
import Observer7 from "../componentParts/Observer7"
import Observer8 from "../componentParts/Observer8"
import Observer9 from "../componentParts/Observer9"
import Observer10 from "../componentParts/Observer10"

import gsap from 'gsap' 

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import {ReactComponent as LeftArrow} from "../../assets/svg/arrow-left.svg"
import {ReactComponent as RightArrow} from "../../assets/svg/arrow-right.svg"

import hoverEffect from 'hover-effect'

//style
import { AboutMeStyleCom } from "../../styles/jsStyles/AboutStyles/AboutMeStyle"

import { SRLWrapper } from "simple-react-lightbox";

import useWindowSize from "../../assets/etc/useWindowSize";


import MainImg from '../../assets/images/about/project.jpg'
import overlay from '../../assets/images/about/project2.jpg'
// import Img2 from '../../assets/images/memory/project/1170/project2.jpg'

function AboutMe({match, history }) {

    const home = gsap.timeline();

    const options = {
        settings: {
        }
    }

    const size = useWindowSize();

    const scrollContainer = useRef(null);
    const scrollRef = useRef(null);

    const mainpicRef = useRef(null);

    const itemImage = useRef(null);

    const headerText = useRef(null);
    const subText = useRef(null);
    const subText2 = useRef(null);
    const subText3 = useRef(null);
    const subText4 = useRef(null);
    const subText5 = useRef(null);

    // const middleChunkRef = useRef(null);
    // const rightChunkRef = useRef(null);

    useEffect(() => {
        
        const setupResize = () => {
            window.addEventListener("resize", resize.bind(this))
        }

        const resize = () => {
            if (scrollRef.current !== null) {
                document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`
            }
        }
        const bindedResize = resize.bind(this)
        setupResize();
        return () => {
            document.removeEventListener("resize", bindedResize);
        };
    }, []);

    useEffect(() => {
        
        const tl = gsap.timeline();

        const tl2 = gsap.timeline();

        const tl3 = gsap.timeline();

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
            delay:1.6
        }).from(headerText.current, 1.8,{
            y: 100,
            ease: "power4.out",
            // skewY: 17,
            stagger: {
                amount: 0.3
            },
            opacity: 0,
        });
        
        tl3.from(itemImage.current, 1,{
            y: 100,
            ease: "power4.out",
            skewY: -7,
            opacity: 0,
            delay: 2.5,
        });

        return () => {
            gsap.to( '#mesh-container', {
                duration: 1,
                opacity: 1,
                display: "flex",
            } );
        };
    }, []);

    useEffect(() => {

        document.body.style.background = `#161616`
        document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`
        // document.scrollContainer.current.style.height = `${scrollRef.current.getBoundingClientRect().height}px`
        // document.querySelector('.overall-Layout').style.background = `#191919`
        // document.querySelector('.overall-Layout').style.height = `${scrollRef.current.getBoundingClientRect().height}px`
        // overall-Layout

        // const tl = gsap.timeline();

        // const tl2 = gsap.timeline();

        // const tl3 = gsap.timeline();

        // tl.to('#mesh-container', {
        //     duration: 1,
        //     opacity: 0,
        //     display: "none",
        // })

         
        // tl2.to('.contents-container-full', {
        //     opacity:1,
        //     ease: "power3.inOut",
        //     stagger: {
        //         amount: 0.07
        //     },
        //     delay:1.6
        // }).from(headerText.current, 1.8,{
        //     y: 100,
        //     ease: "power4.out",
        //     // skewY: 17,
        //     stagger: {
        //         amount: 0.3
        //     },
        //     opacity: 0,
        // });
        
        // tl3.from(itemImage.current, 1,{
        //     y: 100,
        //     ease: "power4.out",
        //     skewY: -7,
        //     opacity: 0,
        //     delay: 2.5,
        // });


        return () => {
            document.body.style.background = `black`
            document.body.style.height = `0px`
            // document.querySelector('.overall-Layout').style.height = `0px`
        }

    }, [size.height, size.width])

    useEffect(() => {


        let frameID = requestAnimationFrame(()=> skewScrolling());

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
    
            if ( itemImage.current !== null){
                itemImage.current.style.transform = `translate3d(0, -${window.scrollY * 0.5}px, 0) `
            }
            
            if ( subText.current !== null){
                subText.current.style.transform = `translate3d(0, -${window.scrollY * 0.9}px, 0) `
                subText2.current.style.transform = `translate3d(0, -${window.scrollY * 0.47}px, 0) `
                subText3.current.style.transform = `translate3d(0, -${window.scrollY * 0.7}px, 0) `
                subText4.current.style.transform = `translate3d(0, -${window.scrollY * 0.39}px, 0) `
                subText5.current.style.transform = `translate3d(0, -${window.scrollY * 0.16}px, 0) `
            }
          
            frameID = requestAnimationFrame(() => skewScrolling())
        }

        return () => {
            cancelAnimationFrame(frameID)
        }
    }, [])

    useEffect(() => {
        
        let image_animate = new hoverEffect({
            parent: itemImage.current,
            intensity: .3,
            image1: MainImg,
            image2: overlay,
            displacementImage: overlay
        })

    }, []);

    const skewConfigs = {
        ease: .1,
        current: 0,
        previous: 0,
        rounded: 0
    }
    
    return (
        <>
            <Transition timeline={home}/>
            <AboutMeStyleCom>
                
                <div className="contents-container-full" ref={scrollContainer}>
                    <div className="main-container2" id="main-container2" ref={scrollRef}>
                    <div className="margin-container"></div>

                        <div className="about-main-wraper">

                            <div className="about-header">
                                <div className="header-text" ref={headerText}>
                                    UNDEFINED
                                </div>
                            </div>

                            <div className="photo-container" ref={itemImage}>    
                                <div className="item">
                                    <div className="item-header">
                                        <div className="item-header-heading"></div>
                                        <div className="item-header-heading2"></div>
                                    </div>
                                    <div className="item-image"></div>
                                    <div className="item-footer">
                                        <div className="item-footer-quote"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="sub-text-wraper">
                                <Observer>
                                <div className="sub-text-container" ref={subText}>
                                    <div className="sub-text">
                                        Artificial<br/>Intelligence
                                    </div>
                                </div>
                                </Observer>
                                <Observer>
                                <div className="sub-text-container2" ref={subText2}>
                                    <div className="sub-text" >
                                        Developer
                                    </div>
                                </div>
                                </Observer>
                            </div>

                            <div className="sub-text-wraper">

                            <Observer>
                                <div className="sub-text-container3" ref={subText3}>
                                    <div className="sub-text" >
                                        Photography
                                    </div>
                                </div>
                                </Observer>

                                <Observer>
                                <div className="sub-text-container4" ref={subText4}>
                                    <div className="sub-text" >
                                        CREATOR
                                    </div>
                                </div>
                                </Observer>

                                <Observer>
                                <div className="sub-text-container5" ref={subText5}>
                                    <div className="sub-text" >
                                        Sports Industry
                                    </div>
                                </div>
                                </Observer>

                            </div>

                        </div>

                        <div className="introduce-wraper">
                            <Observer2>
                            <div className="introduce-text-container">
                                <div className="introduce-text">
                                'Undefined' refers to express my ‘belief’ and ‘attitude’
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container">
                                <div className="introduce-text">
                                not to set limit for myself. I believe that I should keep
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container2">
                                <div className="introduce-text">
                                in mind that I need to learn always to communicate 
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container2">
                                <div className="introduce-text">
                                with people in various fields and emphasize with them.
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container2">
                                <div className="introduce-text">
                                My goal is to keep evolving myself always with open
                                </div>
                            </div>
                            </Observer2>
                            
                            <Observer2>
                            <div className="introduce-text-container3">
                                <div className="introduce-text">
                                mindset, without setting any limit in my growth.
                                </div>
                            </div>
                            </Observer2>
                            {/* <Observer2>
                            <div className="introduce-text-container4">
                                <div className="introduce-text">
                                    vcbqwqewqeqweqwe amet consectetur, adiqweqweqweqw
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container5">
                                <div className="introduce-text">
                                   bvvcbvcbvdgfwerqwsadas sectetur, adiqweqweqweqw
                                </div>
                            </div>
                            </Observer2> */}
                        </div>

                        <div className="road-list-title">
                        <Observer2>
                            {/* <div className="title-text">Artificial Intelligence</div> */}
                            <div className="title-text">ARTIFICIAL INTELLIGENCE</div>
                        </Observer2>
                        </div>
                        
                        <div className="AI-stack-container">
                            
                            <div className="AI-stack-pic-wraper">
                            <Observer6>
                                <div className="AI-stack-pic-container">
                                    <img src={MainImg}/>
                                </div>
                            </Observer6>
                            </div>

                            <div className="AI-stack-info">
                                
                                <Observer3>
                                <li className="stack-line margin-top-remove"></li>
                                </Observer3>
                                
                                <li className="stack-content-title"> <span>EXPERIENCE - Machine Learning</span></li>
                                
                                <Observer3>
                                <li className="stack-line"></li>
                                </Observer3>
                                    <div className="stack-content-wraper">
                                    
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span><i class="fas fa-divide"></i> CLASSIFICATION</span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-percent"></i> REGRESSION</span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-chart-line"></i> TIME SERIES</span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-eye"></i> COMPUTER VISION</span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-language"></i>  NATURAL LANGUAGE PROCESSING</span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-infinity"></i>  REINFORCEMENT LEARNING</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                            {/* <li className="stack-content"> <span><i class="fas fa-divide"></i> CLASSIFICATION</span> </li>
                                            <li className="stack-content"> <span><i class="fas fa-percent"></i> REGRESSION</span> </li>
                                            <li className="stack-content"> <span><i class="fas fa-chart-line"></i> TIME SERIES</span> </li>
                                            <li className="stack-content"> <span><i class="fas fa-eye"></i> COMPUTER VISION</span> </li>
                                            <li className="stack-content"> <span><i class="fas fa-language"></i>  NATURAL LANGUAGE PROCESSING</span> </li>
                                            <li className="stack-content"> <span><i class="fas fa-infinity"></i>  REINFORCEMENT LEARNING</span> </li> */}
                                    </div>
                                <Observer3>
                                <li className="stack-line"></li>
                                </Observer3>

                                <li className="stack-content-title topmargin"> <span>FRAME WORK - Skills</span></li>
                                
                                <Observer3>
                                <li className="stack-line"></li>
                                </Observer3>
                                    <div className="stack-content-wraper">

                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td><span><i class="fas fa-angle-double-up iorange"></i> Tensorflow</span></td>
                                                    <td><span><i class="fab fa-kickstarter-k ired"></i> Keras</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span><i class="fas fa-circle iblue"></i> Scikit learn</span></td>
                                                    <td><span><i class="fas fa-fire-alt itorch"></i> Pytorch</span></td>
                                                </tr>
                                                <tr>
                                                    <td><span><i class="fas fa-th inumpy"></i> Numpy </span></td>
                                                    <td><span><i class="fab fa-gitter ipandas"></i> Pandas</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                {/* <Observer3>
                                    <li className="stack-line"></li>
                                </Observer3> */}

                            </div>

                        </div>

                        

                        <div className="road-list-title-left">
                        <Observer2>
                            {/* <div className="title-text">Artificial Intelligence</div> */}
                            <div className="title-text">FRONT-END</div>
                        </Observer2>
                        </div>
                        

                        <div className="small-stack-container">

                            <div className="small-stack-info">

                                
                                <Observer3>
                                    <li className="stack-line margin-top-remove"></li>
                                </Observer3>

                                <li className="stack-content-title"> <span>FRAME WORK - Skills</span></li>
                                    
                                    <Observer3>
                                    <li className="stack-line"></li>
                                    </Observer3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span><i class="fab fa-html5 ihtml"></i> HTML</span> <span><i class="fab fa-css3 icss"></i> CSS</span> <span><i class="fab fa-sass iscss"></i> SCSS</span></td>
                                            </tr>
                                            <tr>
                                                <td> <span><i class="fab fa-js ijs"></i> JS </span> <span><i class="fas fa-square its"></i> TS </span> <span><i class="fas fa-moon ijq"></i> jQ </span> </td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fab fa-react ireact"></i> React </span> <span><i class="fab fa-react ipurple"></i> Redux </span> <span> <i class="fab fa-react igreen"></i> Saga </span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-dice-d20 ithreejs"></i> THREE.JS</span> <span><i class="far fa-moon iwebjs"></i>  WebGL </span> <span><i class="fas fa-adjust iglsl"></i> GLSL</span> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>

                            <div className="small-stack-pic-wraper">
                            <Observer7>
                                <div className="small-stack-pic-container">
                                    <img src={MainImg}/>
                                </div>
                            </Observer7>
                            </div>

                        </div>

                        <div className="road-list-title-right">
                        <Observer2>
                            <div className="title-text">BACK-END</div>
                        </Observer2>
                        </div>
                        

                        <div className="small-stack-container">
                            
                            <div className="small-stack-pic-wraper">
                            <Observer8>
                                <div className="small-stack-pic-container2">
                                    <img src={MainImg}/>
                                </div>
                            </Observer8>
                            </div>

                            <div className="small-stack-info">
                                
                                <Observer3>
                                    <li className="stack-line margin-top-remove"></li>
                                </Observer3>

                                <li className="stack-content-title"> <span>FRAME WORK - Skills</span></li>
                                    
                                    <Observer3>
                                    <li className="stack-line"></li>
                                    </Observer3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span><i class="fab fa-python ipython"></i> Python</span> </td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-hat-cowboy idjango"></i> Django </span> <span><i class="fas fa-hat-cowboy-side idjangodrf"></i> DRF </span> <span><i class="fab fa-affiliatetheme iflask"></i> Flask </span> </td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-square inginx"></i> Nginx </span> <span><i class="fas fa-square iuwsgi"></i> uWSGI </span> <span> <i class="fas fa-square igunicorn"></i> Gunicorn </span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fab fa-node inodejs"></i> Node.js</span> <span><i class="fas fa-cube iwebpack"></i>  Webpack </span> </td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fas fa-database imysql"></i> MySQL</span> <span><i class="fas fa-database ipostgreSQL"></i>  PostgreSQL </span> <span><i class="fas fa-database imongodb"></i>  MongoDB </span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                        
                        <div className="small-stack-title">
                        <Observer2>
                            {/* <div className="title-text">Artificial Intelligence</div> */}
                            <div className="title-text">DEPLOYMENT</div>
                        </Observer2>
                        </div>
                        

                        <div className="small-stack-container">

                            <div className="small-stack-info">

                                
                                <Observer3>
                                    <li className="stack-line margin-top-remove"></li>
                                </Observer3>

                                <li className="stack-content-title"> <span>TOOLS - Skills</span></li>
                                    
                                    <Observer3>
                                    <li className="stack-line"></li>
                                    </Observer3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><span><i class="fab fa-docker idocker"></i> Docker</span></td>
                                            </tr>
                                            <tr>
                                                <td> <span><i class="fab fa-git-square igit"></i> Git </span> <span><i class="fab fa-github igithub"></i> GitHub </span></td>
                                            </tr>
                                            <tr>
                                                <td><span><i class="fab fa-aws iec2"></i> EC2 </span> <span><i class="fab fa-aws is3"></i> S3 </span> <span><i class="fab fa-aws iRDS"></i> RDS </span> </td> 
                                            </tr>
                                            <tr>
                                                <td> <span><i class="fab fa-aws iEB"></i> EB </span> <span> <i class="fab fa-aws ilambda"></i> Lambda </span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>

                            <div className="small-stack-pic-wraper">
                            <Observer9>
                                <div className="small-stack-pic-container3">
                                    <img src={MainImg}/>
                                </div>
                            </Observer9>
                            </div>

                        </div>
                        
                        <div className="site-info-title">
                        <Observer2>
                            <div className="title-text">This Site Architecture</div>
                        </Observer2>
                        </div>

                        <Observer3>
                            <li className="road-line"></li>
                        </Observer3>

                        <div className="site-info-wraper">
                            
                            <Observer3>
                                <li className="road-line"></li>
                            </Observer3>

                            <div className="wrapper">
                                <div className="slider">
                                    <div className="slide">
                                        <span><i class="far fa-moon iwebjs"></i>&nbsp;WebGL</span>
                                        <span><i class="fas fa-dice-d20 ithreejs"></i>&nbsp;THREE.JS</span>
                                        <span><i class="fab fa-react ireact"></i>&nbsp;React</span>
                                        <span><i class="fab fa-react ipurple"></i>&nbsp;Redux</span>
                                        <span><i class="fas fa-cube iwebpack"></i>&nbsp;Webpack</span>
                                        <span><i class="fab fa-node inodejs"></i>&nbsp;Node.js</span>
                                        <span><i class="fab fa-aws is3"></i>&nbsp;S3</span>
                                    </div>
                                    <div className="slide">
                                        <span><i class="far fa-moon iwebjs"></i>&nbsp;WebGL</span>
                                        <span><i class="fas fa-dice-d20 ithreejs"></i>&nbsp;THREE.JS</span>
                                        <span><i class="fab fa-react ireact"></i>&nbsp;React</span>
                                        <span><i class="fab fa-react ipurple"></i>&nbsp;Redux</span>
                                        <span><i class="fas fa-cube iwebpack"></i>&nbsp;Webpack</span>
                                        <span><i class="fab fa-node inodejs"></i>&nbsp;Node.js</span>
                                        <span><i class="fab fa-aws is3"></i>&nbsp;S3</span>
                                    </div>
                                </div>

                                <div className="slider2">
                                    <div className="slide2">
                                        <span><i class="fas fa-hat-cowboy idjango"></i>&nbsp;Django</span>
                                        <span><i class="fas fa-hat-cowboy-side idjangodrf"></i>&nbsp;DRF</span>
                                        <span><i class="fas fa-square inginx"></i>&nbsp;Nginx</span>
                                        <span><i class="fas fa-horse igunicorn"></i>&nbsp;Gunicorn</span>
                                        <span><i class="fab fa-docker idocker"></i>&nbsp;Docker</span>
                                        <span><i class="fab fa-aws iec2"></i>&nbsp;EC2</span>
                                    </div>
                                    <div className="slide2">
                                        <span><i class="fas fa-hat-cowboy idjango"></i>&nbsp;Django</span>
                                        <span><i class="fas fa-hat-cowboy-side idjangodrf"></i>&nbsp;DRF</span>
                                        <span><i class="fas fa-square inginx"></i>&nbsp;Nginx</span>
                                        <span><i class="fas fa-horse igunicorn"></i>&nbsp;Gunicorn</span>
                                        <span><i class="fab fa-docker idocker"></i>&nbsp;Docker</span>
                                        <span><i class="fab fa-aws iec2"></i>&nbsp;EC2</span>
                                    </div>
                                </div>
                            </div>
                            
                            <Observer3>
                                <li className="road-line"></li>
                            </Observer3>
                        </div>

                        <div className="roadpath-list-title">
                        <Observer2>
                            <div className="title-text"> Path and Journey </div>
                        </Observer2>
                        </div>

                        <ul className="road-list">
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            
                            <li className="road-content"> <span>Hankuk University of Foreign Studies - International Sports Industry</span> <span>2013.03 - 2020.07</span></li>
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            <li className="road-content"> <span>PYD in New York, Manhattan </span> <span>2014.08 - 2015.02</span></li>
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            <li className="road-content"> <span>Military Duty</span> <span>2015.08 - 2017.05</span></li>
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            <li className="road-content"> <span>Sports Industry, Seoul</span> <span>2017.12 - 2018.02</span></li>
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            <li className="road-content"> <span>SsangYong Information & Communications, Jakarta Palembang, Asian games </span> <span>2018.07 - 2018.09</span></li>
                            
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                            <li className="road-content"> <span>Chorock Soft, Seoul - AI Development Team </span> <span>2019.07.02 - current</span></li>
                            <li className="road-content"> <span> - Visualizing Data with Python, MICHIGAN</span> <span>2019</span></li>
                            <li className="road-content"> <span> - Machine Learning, Stanford</span> <span>2020</span></li>
                            <li className="road-content"> <span> - Sport special development  </span> <span>Inventor</span></li>
                            <li className="road-content"> <span> - Sport special development  </span> <span>Inventor</span></li>
                            <li className="road-content"> <span> - Sport special development  </span> <span>Inventor</span></li>
                            <li className="road-content"> <span> - Demand and Vacancy Forecasting DeepLearning Models for Train</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Real Estate Sentiment Analysis Natural Language Processing</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - DeepLearning Posture Analysis and Similarity Analysis</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Facial Recognition Mask, Gender, Age Detection Deep Learning</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Cryptocurrency Prediction Machine Learning Model</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Deep Learning Recruitment Recommendation Model</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Pictograms Supplement Model For The Visually Impaired</span> <span>Detail</span></li>
                            <li className="road-content"> <span> - Domestic Tourist Attractions Recommendation Model</span> <span>Detail</span></li>
                            <Observer3>
                            <li className="road-line"></li>
                            </Observer3>
                        </ul>



                        <div className="introduce-wraper">
                            <Observer2>
                            <div className="introduce-text-container">
                                <div className="introduce-text">
                                I’ve learned and looked for the most effective, efficient 
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container2">
                                <div className="introduce-text">
                                way to influence all over the world. I strongly believe that 
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container3">
                                <div className="introduce-text">
                                this website  can be one of options. I’m planning to discuss
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container3">
                                <div className="introduce-text">
                                idea with people all around the world and come up with
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container3">
                                <div className="introduce-text">
                                new idea to distribute positive impact on this world.
                                </div>
                            </div>
                            </Observer2>
                            <Observer2>
                            <div className="introduce-text-container4">
                                <div className="introduce-text">
                                Would you join me?
                                </div>
                            </div>
                            </Observer2>
                            {/* <Observer2>
                            <div className="introduce-text-container5">
                                <div className="introduce-text">
                                   bvvcbvcbvdgfwerqwsadas sectetur, adiqweqweqweqw
                                </div>
                            </div>
                            </Observer2> */}
                        </div>

                        <div className="contact-section-wraper">
                            <Observer2>
                            <div className="contact-box">Feel Free <br/> to reach To Me</div>
                            </Observer2>
                            <Observer2>
                            <div className="contact-info">
                                <span>undefined@gmail.com</span>
                            </div>
                            </Observer2>
                        </div>
                        








                    </div>
                </div>
            </AboutMeStyleCom>
        </>
    )
}

export default AboutMe
