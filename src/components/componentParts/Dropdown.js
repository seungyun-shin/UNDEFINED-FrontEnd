import React, { useState } from 'react';

import { DropdownStylesCom } from "../../styles/jsStyles/DropdownStyles";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import {MenuItemsUser} from './MenuItem';

function Dropdown() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <DropdownStylesCom>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItemsUser.map((item, index) => {
                    return(
                        <li key={index}>
                            <LinkStyleCom className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </LinkStyleCom>
                        </li>
                    )
                })}

            </ul>
        </DropdownStylesCom>
        </>
    )
}

export default Dropdown
