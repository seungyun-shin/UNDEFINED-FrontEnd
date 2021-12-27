import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { ButtonStylesCom } from "../../styles/jsStyles/ButtonStyles";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Button() {
    return (
        <>
            <LinkStyleCom to="/AboutMe" className='nav-links'>
                <button className='btn'>SIGN UP</button>
            </LinkStyleCom>
        </>
    )
}

export default Button
