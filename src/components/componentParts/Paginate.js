import React from 'react'
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";


//style
import { PaginateStyleCom } from "../../styles/jsStyles/PaginateStyle"

function Paginate({pages, page, keyword='', isAdmin=false}) {

    if (keyword){
        keyword = keyword.split('?keyword=')[1].split('&')[0]
    }

    return (  
        pages > 1 && (
        <>
            <PaginateStyleCom>
            <div className="pagination-container">
                {[...Array(pages).keys()].map((x) =>(
                    <LinkStyleCom
                        key={x + 1}
                        to={ !isAdmin ? 
                            `/ShopScreen/?keyword=${keyword}&page=${x + 1}`
                            : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
                        }
                    >
                        <span style={ x + 1 === page ? { color: "gray", cursor:"default"} : {color: "white"}} >{x + 1}</span>
                    </LinkStyleCom>
                ))}
            </div>    
            </PaginateStyleCom>
        </>

    )
    )
}

export default Paginate
