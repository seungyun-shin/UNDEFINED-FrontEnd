import styled from "styled-components"

export const DropdownStylesCom = styled.div`

    .dropdown-menu {
    background: red;
    width: 100px;
    position: absolute;
    top: 143px;
    list-style: none; 
    text-align: start;
    }

    .dropdown-menu li {
    background: #1888ff;
    cursor: pointer;
    }

    .dropdown-menu li:hover {
    background: #5cabff;
    }

    .dropdown-menu.clicked {
    display: none;
    }

    .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
    }

    @media screen and (max-width: 960px) {
    .fa-caret-down {
        display: none;
    }
    }

`

