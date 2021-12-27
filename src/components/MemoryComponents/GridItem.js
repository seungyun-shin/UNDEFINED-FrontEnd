import React from 'react'

//style
import { MemoryGridItemStyleCom } from "../../styles/jsStyles/MemoryStyles/MemoryGridItemStyle"

function GridItem({url, description}) {
    return (
        <MemoryGridItemStyleCom>
        <div className="grid-item">
            <img className="grid-item-media" src={url} />
            <p>{description}</p>
        </div>
        </MemoryGridItemStyleCom>
    )
}

export default GridItem
