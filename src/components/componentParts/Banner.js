import React from 'react'
import { ReactComponent as RightArrow} from '../../assets/svg/arrow-right.svg' 
import { BannerStyleCom } from "../../styles/jsStyles/BannerStyle"
import { motion } from 'framer-motion'

function Banner() {

    // useEffect(() => {

    // }, [])
    
    return (
        <>
        <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <BannerStyleCom>
            <div className="contents-container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brand is</span>
                        </div>
                        <div className="line">
                            <span>what we do.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">More about us <RightArrow/> </a>
                    </div>
                </div>
            </div>
        </BannerStyleCom>
        </motion.div>
        </>
    )
}

export default Banner
