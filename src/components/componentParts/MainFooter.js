import React from 'react'

import { MainFooterStyleCom } from "../../styles/jsStyles/MainFooterStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function MainFooter() {
    return (
        <>
            <MainFooterStyleCom>
            <div className="mainfooter-container">
                    <div className="footer-left-container">
                        <div className="small-info">
                            <span>REPUBLIC OF KOREA </span>
                            <span>94.</span>
                        </div>
                    </div>
                    <div className="footer-right-container">
                        <div className="menu-container">
                            <LinkStyleCom to="/banner"><span><i className="fab fa-instagram"></i></span></LinkStyleCom>
                            <LinkStyleCom to="/BoardAppScreen"><span><i className="fab fa-twitter"></i></span></LinkStyleCom>
                            <LinkStyleCom to="/BoardAppScreen"><span><i className="fab fa-linkedin-in"></i></span></LinkStyleCom>
                            <LinkStyleCom to="/BoardAppScreen"><span><i className="fas fa-link"></i></span></LinkStyleCom>
                        </div>
                    </div>
            </div>
            </MainFooterStyleCom>
        </>
    )
}

export default MainFooter
