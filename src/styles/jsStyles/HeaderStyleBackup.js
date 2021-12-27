import styled, {css, createGlobalStyle} from "styled-components"

export const HeaderStyleCom = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .header-wraper{
        position:relative;
        /* top:0; */
        /* left:0; */
        width: 100%;
        /* max-width: 1700px; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 9vh;
        padding-top: 9vh; */
        color: white;
        font-size: 1rem;
        z-index: 200;

        .header-container{

            display: flex;
            width: 100%;
            justify-content: space-between;
            padding-left: 8%;
            padding-right: 8%;
            height: 9vh;
            padding-top: 9vh;

                h1 {
                    font-size: 60px;
                    text-align: center;
                    color: #FFF;
                }	

                h3 {
                    font-size: 30px;
                    line-height: 34px;
                    text-align: center;
                    color: #FFF;
                }

                h3 a {
                    color: #FFF;
                }

                a {
                    color: #FFF;
                }

                h1 {
                    margin-top: 100px;
                    text-align:center;
                    font-size:60px;
                    line-height: 70px;
                    font-family: 'roboto';
                    }

                #container {
                    margin: 0 auto;
                    max-width: 890px;
                }

                p {
                    text-align: center;
                }

                .toggle,
                [id^=drop] {
                    display: none;
                }

                /* Giving a background-color to the nav container. */
                nav { 
                    width: 100%;
                    margin:0;
                    padding: 0;
                    /* background-color: #254441; */
                    font-weight: 600;
                }

                .logo {
                    display: block;
                    /* padding: 0 30px; */
                    float: left;
                    font-weight: 900;
                    /* font-size:20px; */
                    /* line-height: 60px; */
                }

                /* Since we'll have the "ul li" "float:left"
                * we need to add a clear after the container. */

                nav:after {
                    content:"";
                    display:table;
                    clear:both;
                }

                /* Removing padding, margin and "list-style" from the "ul",
                * and adding "position:reltive" */
                nav ul {
                    float: right;
                    padding:0;
                    margin:0;
                    list-style: none;
                    position: relative;
                    z-index: 990;

                    }
                    
                /* Positioning the navigation items inline */
                nav ul li {
                    margin: 0px;
                    display:inline-block;
                    float: left;
                    /* background-color: #000000; */
                }

                nav ul li:hover {
                    display: block;
                    position: relative;
                    z-index: 300;
                }

                /* Styling the links */
                nav a {
                    display:block;
                    padding:14px 20px;	
                    color:#FFF;
                    font-size:17px;
                    text-decoration:none;
                }

                nav span {
                    display:block;
                    padding:14px 20px;	
                    color:#FFF;
                    font-size:17px;
                    text-decoration:none;
                }

                nav ul li ul li:hover { background: #000000; }

                /* Background color change on Hover */
                nav a:hover { 
                    /* background-color: #000000; 
                    position: relative;
                    z-index: 998;
                    display: block; */
                }

                /* Hide Dropdowns by Default
                * and giving it a position of absolute */
                nav ul ul {
                    display: none;
                    position: absolute; 
                    /* has to be the same number as the "line-height" of "nav a" */
                    /* top: 60px;  */
                }
                    
                /* Display Dropdowns on Hover */
                nav ul li:hover > ul {
                    display:inherit;

                }
                    
                /* Fisrt Tier Dropdown */
                nav ul ul li {
                    width:170px;
                    float:none;
                    display:list-item;
                    position: relative;
                }

                /* Second, Third and more Tiers	
                * We move the 2nd and 3rd etc tier dropdowns to the left
                * by the amount of the width of the first tier.
                */
                nav ul ul ul li {
                    position: relative;
                    top:-60px;
                    /* has to be the same number as the "width" of "nav ul ul li" */ 
                    left:170px; 
                }

                    
                /* Change ' +' in order to change the Dropdown symbol */
                li > a:after { content:  ' +'; }
                li > a:only-child:after { content: ''; }
            
                

                /* Media Queries
                --------------------------------------------- */
                /* @media all and (max-width : 1100px) {
                    .s-button{
                        display: block;
                } */
            }
            
            .s-button{
                /* display: none; */
                /* visibility: hidden; */
                padding-top: 15px;


                input{
                    display: block;
                    width: 40px;
                    height: 32px;
                    position: absolute;
                    top: 6px;
                    left: -5px;
                    
                    cursor: pointer;
                    
                    opacity: 0; /* hide this */
                    z-index: 999999999; /* and place it over the hamburger */
                    
                    -webkit-touch-callout: none;
                }
                
                span{
                    padding: 0px 0px 0px 0px !important;
                    /* display: block; */
                    width: 33px;
                    height: 4px;
                    margin-bottom: 5px;
                    position: relative;
                    
                    background: #cdcdcd;
                    border-radius: 3px;
                    
                    z-index: 9999999;
                    
                    transform-origin: 4px 0px;
                    
                    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                                opacity 0.55s ease;
                }

                span:first-child{
                    transform-origin: 0% 0%;
                }

                span:nth-last-child(2)
                {
                    transform-origin: 0% 100%;
                }

                /* 
                * Transform all the slices of hamburger
                * into a crossmark.
                */
                input:checked ~ span
                {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                    background: #232323;
                }

                /*
                * But let's hide the middle one.
                */
                input:checked ~ span:nth-last-child(3)
                {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                /*
                * Ohyeah and the last one should go the other direction
                */
                input:checked ~ span:nth-last-child(2)
                {
                    transform: rotate(-45deg) translate(0, -1px);
                }
                input:checked ~ span
                {
                    opacity: 1;
                    transform: rotate(45deg) translate(-2px, -1px);
                    background: #ffffff;
                }

                /*
                * But let's hide the middle one.
                */
                input:checked ~ span:nth-last-child(3)
                {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                /*
                * Ohyeah and the last one should go the other direction
                */
                input:checked ~ span:nth-last-child(2)
                {
                    transform: rotate(-45deg) translate(0, -1px);
                }
                input:checked ~ .menu-screen
                {
                    /* display: block; */
                    /* visibility: visible; */
                    transform: scaleY(1);
                }

                .menu-screen{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #161616;
                    z-index: 999999;
                    /* display: none; */
                    /* opacity: 1; */
                    /* visibility: hidden; */
                    transform: scaleY(0);
                    transition: all 1s;
                    
                    .menu-container{
                        display: flex;
                        width: 100%;
                        height: 100%;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }   
                }

            }

            .hamburger-menu-container{
                z-index: 99999999999;
                /* display: none; */
                
                /* @media ${props => props.theme.laptop} {
                    display: block;
                } */

                button{
                    /* z-index: 99999; */
                    border:none;
                    background: none;
                    outline: none;
                    cursor: pointer;
                    font-size: 0.8rem;
                    color:white;
                    
                    padding:14px 20px;	
                    color:#FFF;
                    font-size:17px;
                    text-decoration:none;

                    font-weight:900;
                }
            }

                /* dfd3c3 */
    }

    
`

