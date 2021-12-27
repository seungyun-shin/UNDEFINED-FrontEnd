import React, {useEffect, useRef} from 'react';
import { Link } from "react-router-dom";

import { HamburgerStyleCom } from "../../styles/jsStyles/HamburgerStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Hamburger({state}) {

    let menu = useRef(null)

    useEffect(() => {
        
        if(state.clicked === false){
            menu.style.display = "none";
        }else if( state.clicked === true || (state.clicked === true && state.initial === null)){
            menu.style.display = "block";
        }

        return () => {
            
        }
    });

    return (
        <>  
        <HamburgerStyleCom>
            <div ref={el => (menu = el)} className="hamburger-menu">
                <div className="menu-secondary-background-color"></div>
                <div className="menu-layer">
                    <div className="menu-background">

                    </div>
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li><LinkStyleCom to="/WorkScreen">WORK</LinkStyleCom></li>
                                        <li><LinkStyleCom to="/WorkScreen">WORK</LinkStyleCom></li>
                                        <li><LinkStyleCom to="/WorkScreen">WORK</LinkStyleCom></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HamburgerStyleCom>
        </>
    )
}

export default Hamburger