import React from 'react'
import { Link } from "react-router-dom";

import { RecordHeaderStyleCom } from "../../styles/jsStyles/RecordStyles/RecordHeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

// import ShopSearchBox from '../../components/ShopComponents/ShopSearchBox'

function RecordHeader() {
    return (
        <>
        <RecordHeaderStyleCom>
            <div className="header-container">
                    <div className="menu-container">
                        {/* <LinkStyleCom to='/ShopScreen'><span className="first-span"><i className="fas fa-home"></i> Home</span></LinkStyleCom> */}
                        
                        <LinkStyleCom to='/cart'> <span > AI</span></LinkStyleCom>
                        <LinkStyleCom to='/cart'> <span > FrontEnd</span></LinkStyleCom>
                        <LinkStyleCom to='/cart'> <span > Backend</span></LinkStyleCom>
                        <LinkStyleCom to='/cart'> <span > Server</span></LinkStyleCom>
                        <LinkStyleCom to='/cart'> <span > APP</span></LinkStyleCom>
                        
                        {/* <ShopSearchBox/> */}
                        {/* <LinkStyleCom to='/login'><span><i className="fas fa-user"></i> Login</span></LinkStyleCom> */}
                        {/* <span>Memory</span>
                        <span>About</span> */}
                    </div>
                </div>
        </RecordHeaderStyleCom>
        </>
    )
}

export default RecordHeader
