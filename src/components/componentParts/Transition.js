import React, {useState, useEffect, useRef } from 'react'

//style
import { TransitionStyleCom } from "../../styles/jsStyles/TransitionStyles"

import {Power4} from 'gsap' 

function Transition({timeline}) {
    const trans = useRef(null);
    const trans2 = useRef(null);

    useEffect(() => {
        
        timeline.from([trans.current,trans2.current], {
            duration: 0.8,
            height:0,
            ease: "power3.inOut",
            transformOrigin: "right top",
            skewY: 2,
            stagger: {
                amount: 0.1
            }
        }).to([trans2.current,trans.current], {
            duration: 0.8,
            height:0,
            ease: "power3.inOut",
            stagger: {
                amount: 0.07
            }
        });
        
        // .to('.contents-container-full', {
        //     opacity:1,
        //     ease: "power3.inOut",
        //     stagger: {
        //         amount: 0.07
        //     }
        // })
        // ;

    })

    return (
        <>        
        <TransitionStyleCom>

            <div className="transition-effect" ref={trans} ></div>
            <div className="transition-effect2" ref={trans2} ></div>
            
        </TransitionStyleCom>    
        </>
    )
}

export default Transition
