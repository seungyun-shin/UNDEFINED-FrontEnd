import React, {useState, useEffect } from 'react'
import { RecordStyleCom } from "../../styles/jsStyles/RecordStyles/RecordStyle"
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

function Record( {record} ) {

    return (
            <tr>
                <td data-label="ID">{record._id}</td>
                <td data-label="TITLE"><LinkStyleCom to={`/records/${record._id}`}>{record.title}</LinkStyleCom></td>
                <td data-label="AUTHOR">{record.user}</td>
                <td data-label="PUBLISHED">{record.createdAt.substring(0, 10)}</td>
                <td data-label="VISIT">{record.visit_count}</td>
            </tr>
    )
}

export default Record
