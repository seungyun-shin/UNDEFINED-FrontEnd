import styled, {css, createGlobalStyle} from "styled-components"

export const RecordScreenStyleCom = styled.div`

    
    
    /* position: relative; */
    /* color:white; */

    display: flex;
    justify-content: center;
    align-items: center;
    
    .contents-container{
        width: 80%;
    }

    .record-contents-container{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* justify-content: space-space-evenly; */
        width: 100%;
        height: 100%;
        margin-top: 9%;
        padding-bottom: 9%;

        
        
        table {
            /* border: 1px solid #ccc; */
            /* border: 1px solid #161616; */
            border-collapse: collapse;
            margin: 0;
            padding: 0;
            width: 100%;
            table-layout: fixed;
            color: #dfd3c3;
        }

        table caption {
            font-size: 1.5em;
            margin: .5em 0 .75em;
        }
        table thead{
            /* border-bottom: 3px solid black; */
            border-bottom: 2px solid #dfd3c3;
            /* border: 1px solid #dfd3c3; */

            th{
                font-size: 1.3rem;
                padding: 1%;
            }
        }
        table tr {
            width: 100%;
            /* background-color: #f8f8f8; */
            background-color: #161616;
            /* border: 1px solid #ddd; */
            /* border: 1px solid #ddd; */
            padding: .35em;
        }

            table th,
            table td {
            /* padding: .625em; */
            text-align: center;
            padding: 1.3%;
            }

            table th {
            font-size: .85em;
            letter-spacing: .1em;
            text-transform: uppercase;
            }

            @media screen and (max-width: 600px) {

            .record-name{
                /* color:white; */
                color: rgba(255,255,255,.9);
            }
            
            table {
                border: 0;
            }

            table caption {
                font-size: 1.3em;
            }
            
            table thead {
                border: none;
                clip: rect(0 0 0 0);
                height: 1px;
                margin: -1px;
                overflow: hidden;
                padding: 0;
                position: absolute;
                width: 1px;
            }
            
            table tr {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .625em;
            }
            
            table td {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;
            }
            
            table td::before {
                /*
                * aria-label has no advantage, it won't be read inside a table
                content: attr(aria-label);
                */
                content: attr(data-label);
                float: left;
                font-weight: bold;
                text-transform: uppercase;
            }
            
            table td:last-child {
                border-bottom: 0;
            }
            }


        }

        a{
            color: #dfd3c3;
            font-weight: 900;
        }
                

        
    
`