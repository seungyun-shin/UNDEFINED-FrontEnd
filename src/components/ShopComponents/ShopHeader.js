import React from 'react'
import { Link } from "react-router-dom";

import { ShopHeaderStyleCom } from "../../styles/jsStyles/ShopStyles/ShopHeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import ShopSearchBox from '../../components/ShopComponents/ShopSearchBox'

function ShopHeader() {
    return (
        <>
        <ShopHeaderStyleCom>
            <div className="header-container">
                    <div className="menu-container">
                        {/* <LinkStyleCom to='/ShopScreen'><span className="first-span"><i className="fas fa-home"></i> Home</span></LinkStyleCom> */}
                        
                        <LinkStyleCom to='/cart'> <span ><i className="fas fa-shopping-cart"></i> Cart</span></LinkStyleCom>
                        <ShopSearchBox/>
                        {/* <LinkStyleCom to='/login'><span><i className="fas fa-user"></i> Login</span></LinkStyleCom> */}
                        {/* <span>Memory</span>
                        <span>About</span> */}
                    </div>
                </div>
        </ShopHeaderStyleCom>
        </>
    )
}

export default ShopHeader
