import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

import { CSSHamburgerStyleCom } from "../../styles/jsStyles/CSSHamburgerStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function CSSHamburger({state}) {

    return (
        <>  
        <CSSHamburgerStyleCom>
            <li className="s-button">
                <input type="checkbox" />
                <span ></span>
                <span></span>
                <span></span>
                <div className="menu-screen">
                    <div className="menu-container">
                        <div classname="small-menu-span"><LinkStyleCom to="/WorkScreen">WORK</LinkStyleCom></div>
                        <div classname="small-menu-span"><LinkStyleCom to="/ShopScreen">SHOP</LinkStyleCom></div>
                        <div classname="small-menu-span"><LinkStyleCom to="/RecordScreen">RECORD</LinkStyleCom></div>
                        <div classname="small-menu-span"><LinkStyleCom to="/MemoryScreen">MEMORY</LinkStyleCom></div>
                        <div classname="small-menu-span"><LinkStyleCom to='/AboutMe'>ABOUT</LinkStyleCom></div>
                    </div>
                </div>
            </li>
        </CSSHamburgerStyleCom>
        </>
    )
}

export default CSSHamburger