import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions'
import Hamburger from './Hamburger';
import CSSHamburger from './CSSHamburger';

import { HeaderStyleCom } from "../../styles/jsStyles/HeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Header() {

    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    })

    const [disabled, setDisabled] = useState(false)

    const handleMenu = () =>{
        disableMenu();
        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: 'Close'
            });
        } else if (state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    }

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }

    //Determine if our menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        <>  
            <HeaderStyleCom>
                <div className="header-wraper">
                <div className="header-container">
                    <nav>
                    <div className="logo">
                        <LinkStyleCom to="/MainScreen">SEUNGYUN SHIN.</LinkStyleCom>
                    </div>

                    <label htmlFor="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                        <ul className="menu">
                            <li><LinkStyleCom to="/WorkScreen">WORK</LinkStyleCom></li>
                            <li><LinkStyleCom to="/ShopScreen">SHOP</LinkStyleCom></li>
                            <li><LinkStyleCom to="/RecordScreen">RECORD</LinkStyleCom></li>
                            <li><LinkStyleCom to="/MemoryScreen">MEMORY</LinkStyleCom></li>
                            {/* <li><LinkStyleCom to="/banner">About</LinkStyleCom></li> */}
                            
                            <li>
                                <label htmlFor="drop-1" className="toggle">ABOUT +</label>
                                <><span style={{cursor:"pointer"}}>ABOUT +</span></>
                                <input type="checkbox" id="drop-1"/>
                                <ul>
                                    <li className="second-menu"><LinkStyleCom to='/AboutMe'>ME</LinkStyleCom></li>
                                    <li className="second-menu"><LinkStyleCom to='/AboutSite'>SITE</LinkStyleCom></li>
                                </ul> 
                            </li>
                       
                            { userInfo ? (
                                <>
                                <li>
                                    <label htmlFor="drop-1" className="toggle">{userInfo.name} +</label>
                                    <><span style={{cursor:"pointer"}}>{userInfo.name} +</span></>
                                    <input type="checkbox" id="drop-1"/>
                                    <ul>
                                        <li className="second-menu"><LinkStyleCom to='/profile'>Profile</LinkStyleCom></li>
                                        <li><span onClick={logoutHandler} style={{cursor:"pointer"}}>Logout</span></li>
                                    </ul> 
                                </li>
                                </>
                            ):(
                                <li><LinkStyleCom to='/login'><i className="fas fa-user"></i> LOGIN</LinkStyleCom></li>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <li>
                                <label htmlFor="drop-2" className="toggle">Admin +</label>
                                <><span style={{cursor:"pointer"}}>Admin +</span></>
                                <input type="checkbox" id="drop-2"/>
                                <ul>
                                    <li className="second-menu"><LinkStyleCom to='/admin/userlist'>Users</LinkStyleCom></li>
                                    <li className="second-menu"><LinkStyleCom to='/admin/productlist'>Products</LinkStyleCom></li>
                                    <li className="second-menu"><LinkStyleCom to='/admin/orderlist'>Orders</LinkStyleCom></li>
                                    <li className="second-menu"><LinkStyleCom to='/admin/recordlist'>Records</LinkStyleCom></li>
                                </ul> 
                                {/* <LinkStyleCom to='/admin/userlist'><span>Manage</span></LinkStyleCom>  */}
                                </li>
                            )}

                            {/* <li>
                                <div className="hamburger-menu-container">
                                    <button disabled={disabled} onClick={handleMenu}>MENU</button>
                                </div>
                            </li> */}

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
                            {/* <Hamburger state={state}/> */}
                            {/* <CSSHamburger/> */}
                        </ul>
                    </nav>
                </div>
                </div>
            </HeaderStyleCom>
        </>
    )
}

export default Header