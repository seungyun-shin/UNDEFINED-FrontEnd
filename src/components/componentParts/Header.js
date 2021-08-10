import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions'

import { HeaderStyleCom } from "../../styles/jsStyles/HeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }

    return (
        <>  
            <HeaderStyleCom>
                <div className="header-wraper">
                <div className="header-container">
                    <div className="left-container">
                        <div className="logo">
                            <LinkStyleCom to="/MainScreen">SEUNGYUN SHIN.</LinkStyleCom>
                        </div>
                        {/* <div className="small-info">
                            <span>Republic of Korea</span>
                            <span>94'</span>
                        </div> */}
                    </div>
                    <div className="right-container">
                        <div className="menu-container">
                            <LinkStyleCom to="/banner"><span>AI</span></LinkStyleCom>
                            <LinkStyleCom to="/ShopScreen"><span>Work</span></LinkStyleCom>
                            <span>Sports Industry</span>
                            <span>Memory</span>
                            <span>About</span>

                            { userInfo ? (
                                <>
                                    <LinkStyleCom to='/profile'><span>{userInfo.name}*</span></LinkStyleCom>
                                    <span onClick={logoutHandler} style={{cursor:"pointer"}}>Logout</span>
                                </>
                            ):(
                                <LinkStyleCom to='/login'><span><i className="fas fa-user"></i> Login</span></LinkStyleCom>
                            )}
                            </div>
                    </div>
                </div>
                </div>
            </HeaderStyleCom>
        </>
    )
}

export default Header
