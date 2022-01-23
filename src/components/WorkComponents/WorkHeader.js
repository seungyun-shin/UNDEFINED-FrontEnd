import React from 'react'
import { Link } from "react-router-dom";

import { WorkHeaderStyleCom } from "../../styles/jsStyles/WorkStyles/WorkHeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

// import ShopSearchBox from '../../components/ShopComponents/ShopSearchBox'

function WorkHeader() {
    return (
        <>
        <WorkHeaderStyleCom>
            <div className="header-container">
                    <div className="menu-container">
                        {/* <LinkStyleCom to='/ShopScreen'><span className="first-span"><i className="fas fa-home"></i> Home</span></LinkStyleCom> */}
                        
                        <LinkStyleCom to='/WorkScreen'><span >AI</span></LinkStyleCom>
                        <LinkStyleCom to='/WorkScreenART'><span >GL</span></LinkStyleCom>
                        <LinkStyleCom to='/WorkScreenWEB'><span >WEB</span></LinkStyleCom>
                        <LinkStyleCom to='/WorkScreenETC'><span className='lastSpan'>ETC</span></LinkStyleCom>
                        {/* <LinkStyleCom to='/cart'> <span > APP</span></LinkStyleCom> */}
                        
                        {/* <ShopSearchBox/> */}
                        {/* <LinkStyleCom to='/login'><span><i className="fas fa-user"></i> Login</span></LinkStyleCom> */}
                        {/* <span>Memory</span>
                        <span>About</span> */}
                    </div>
                </div>
        </WorkHeaderStyleCom>
        </>
    )
}

export default WorkHeader
