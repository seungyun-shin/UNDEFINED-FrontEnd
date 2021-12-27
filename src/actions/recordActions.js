import axios from 'axios'
import { PRODUCT_DETAILS_SUCCESS } from '../constants/productConstants'
import {
    RECORD_LIST_REQUEST,
    RECORD_LIST_SUCCESS,
    RECORD_LIST_FAIL,

    RECORD_DETAILS_REQUEST,
    RECORD_DETAILS_SUCCESS,
    RECORD_DETAILS_FAIL,

    RECORD_DELETE_REQUEST,
    RECORD_DELETE_SUCCESS,
    RECORD_DELETE_FAIL,

    RECORD_CREATE_REQUEST,
    RECORD_CREATE_SUCCESS,
    RECORD_CREATE_FAIL,

    RECORD_UPDATE_REQUEST,
    RECORD_UPDATE_SUCCESS,
    RECORD_UPDATE_FAIL,
} from '../constants/recordConstants'

export const listRecords = () => async(dispatch) => {
    try {
        dispatch({ type: RECORD_LIST_REQUEST})

        const { data } = await axios.get('api/records')

        dispatch({
            type:RECORD_LIST_SUCCESS,
            payload: data
        })
        
    } catch(error) {
        dispatch({
            type:RECORD_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                :error.message,
        })
    }
}

export const listRecordDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: RECORD_DETAILS_REQUEST})

        const { data } = await axios.get(`api/records/${id}/`)

        dispatch({
            type:RECORD_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch(error) {
        dispatch({
            type:RECORD_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                :error.message,
        })
    }
}


export const deleteRecord = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type:RECORD_DELETE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/records/delete/${id}/`,
            config
        )

        dispatch({
            type:RECORD_DELETE_SUCCESS,
        })

    }catch(error){
        dispatch({
            type:RECORD_DELETE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const createRecord = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type:RECORD_CREATE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/records/create/`,
            {},
            config
        )

        dispatch({
            type:RECORD_CREATE_SUCCESS,
            payload: data,
        })

    }catch(error){
        dispatch({
            type:RECORD_CREATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}


export const updateRecord = (record) => async (dispatch, getState) => {
    try{
        dispatch({
            type:RECORD_UPDATE_REQUEST
        })

        const {
            userLogin: {userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/records/update/${record._id}/`,
            record,
            config
        )

        dispatch({
            type:RECORD_UPDATE_SUCCESS,
            payload: data,
        })

        dispatch({
            type:RECORD_DETAILS_SUCCESS, 
            payload:data
        })

    }catch(error){
        dispatch({
            type:RECORD_UPDATE_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}