import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions'
import Button from './Button';
import Dropdown from './Dropdown';

import { HeaderStyleCom } from "../../styles/jsStyles/HeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Header() {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    
    const [dropClick, setdropClick] = useState(false)
    const dropDownHandleClick = () => setdropClick(!click)
    
    const [dropClick2, setdropClick2] = useState(false)
    const dropDownHandleClick2 = () => setdropClick2(!click)

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    }

    const onMouseLease = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    }

    const onMouseEnter2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false);
        }else {
            setDropdown2(true);
        }
    }

    const onMouseLease2 = () => {
        if(window.innerWidth < 960){
            setDropdown2(false);
        }else {
            setDropdown2(false);
        }
    }

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>  setClick(false);

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
                    <nav className = 'navbar'>
                    <div className="logo">
                        <LinkStyleCom to="/MainScreen">SEUNGYUN SHIN.</LinkStyleCom>
                    </div>

                    
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <LinkStyleCom to="/WorkScreen" className='nav-links' onClick={closeMobileMenu}>
                                WORK
                            </LinkStyleCom>
                        </li>
                        <li className='nav-item'>
                            <LinkStyleCom to="/ShopScreen" className='nav-links' onClick={closeMobileMenu}>
                                SHOP
                            </LinkStyleCom>
                        </li>
                        <li className='nav-item'>
                            <LinkStyleCom to="/RecordScreen" className='nav-links' onClick={closeMobileMenu}>
                                RECORD
                            </LinkStyleCom>
                        </li>
                        <li className='nav-item'>
                            <LinkStyleCom to="/MemoryScreen" className='nav-links' onClick={closeMobileMenu}>
                                MEMORY
                            </LinkStyleCom>
                        </li>
                        <li className='nav-item'>
                            <LinkStyleCom to="/AboutMe" className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </LinkStyleCom>
                        </li>

                        { userInfo ? (
                                <>

                                <li className='nav-item' 
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLease}
                                >
                                    <LinkStyleCom to="/profile" className='nav-links' onClick={closeMobileMenu}>
                                        {userInfo.name} <i className='fas fa-caret-down'/>
                                    </LinkStyleCom>
                                    {dropdown &&
                                        <ul onClick={dropDownHandleClick} className={'dropdown-menu'}>
                                            <LinkStyleCom className='dropdown-link' to="/profile" >
                                                PROFILE
                                            </LinkStyleCom>
                                            
                                            <li ><span className='dropdown-link-logout' onClick={logoutHandler} style={{cursor:"pointer"}}>LOGOUT</span></li>
                                        </ul>
                                    }   
                                </li>
                                
                                <li className='logout-hamburger' onClick={logoutHandler} style={{cursor:"pointer"}}>LOGOUT</li>
                                </>
                            ):(
                                <li className='nav-item'>
                                    <LinkStyleCom to='/login' className='nav-links' onClick={closeMobileMenu}><i className="fas fa-user"></i> &nbsp; LOGIN</LinkStyleCom>
                                </li>
                            )
                        }

                            {userInfo && userInfo.isAdmin && (

                                <li className='nav-item' 
                                    onMouseEnter={onMouseEnter2}
                                    onMouseLeave={onMouseLease2}
                                >
                                <LinkStyleCom to="/admin/userlist" className='nav-links' onClick={closeMobileMenu}>
                                    ADMIN <i className='fas fa-caret-down'/>
                                </LinkStyleCom> 
                                {dropdown2 &&
                                    <ul onClick={dropDownHandleClick2} className={'dropdown-menu'}>
                                        <LinkStyleCom className='dropdown-link' to="/admin/userlist" >
                                            USER
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/productlist" >
                                            PRODUCT
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/orderlist" >
                                            ORDERS
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/recordlist" >
                                            RECORD
                                        </LinkStyleCom>
                                    </ul>
                                }   
                                {/* {dropdown2 &&
                                    <ul onClick={dropDownHandleClick2} className={dropClick2 ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                                        <LinkStyleCom className='dropdown-link' to="/admin/userlist" onClick={() => setdropClick2(false)}>
                                            Users
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/productlist" onClick={() => setdropClick2(false)}>
                                            Products
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/orderlist" onClick={() => setdropClick2(false)}>
                                            Orders
                                        </LinkStyleCom>
                                        <LinkStyleCom className='dropdown-link' to="/admin/recordlist" onClick={() => setdropClick2(false)}>
                                            Records
                                        </LinkStyleCom>
                                    </ul>
                                }    */}
                                </li>
                            )}
                        
                    </ul>
                    {/* <Button/> */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    
                    </nav>
                </div>
                </div>
            </HeaderStyleCom>
        </>
    )
}

export default Header