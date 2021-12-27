import React from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

//basic Components
import ContentsBanner from "../componentParts/ContentsBanner"
import ShopHeader from "../ShopComponents/ShopHeader"

//work Components
import ShopContents from "./ShopContents"

//style
import { ShopContentsStyleCom } from "../../styles/jsStyles/ShopStyles/ShopContentsStyle"

function ShopScreen() {
    return (
        <>
            <motion.div
                initial = {{ translateY:60, opacity: 0 }}
                animate = {{ translateY:0, opacity: 1 }}
                exit={{ translateY:60, opacity: 0 }}
                transition={{duration: 0.5}}
            >
            <ShopContentsStyleCom>
                <div className="contents-container">
                    <ContentsBanner bannerTitle={"SHOP"}/>
                    <ShopHeader/>
                    <ShopContents/>
                </div>
            </ShopContentsStyleCom>
            </motion.div>
        </>
    )
}

export default ShopScreen
