import React, {useState, useEffect} from 'react'

//transition Animation
import { motion } from 'framer-motion'

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import { RecordEditScreenStyleCom } from "../../styles/jsStyles/RecordStyles/RecordEditScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/componentParts/Loader'
import Message from '../../components/componentParts/Message'
import FormContainer from '../../components/componentParts/FormContainer'
import { listRecordDetails,  updateRecord} from '../../actions/recordActions'
import { RECORD_UPDATE_RESET } from '../../constants/recordConstants'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


function RecordEditScreen({match, history}) {

    const recordId = match.params.id

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [contents, setContents] = useState('')

    const dispatch = useDispatch()

    const recordDetails = useSelector(state => state.recordDetails)
    const {error, loading, record } = recordDetails

    const recordUpdate = useSelector(state => state.recordUpdate)
    const {error:errorUpdate, loading:loadingUpdate, success:successUpdate } = recordUpdate

    // const productUpdate = useSelector(state => state.productUpdate)
    // const {error:errorUpdate, loading:loadingUpdate, success: successUpdate} = productUpdate
    

    useEffect(()=> {

        if(successUpdate){
            dispatch({type:RECORD_UPDATE_RESET})
            history.push('/admin/recordlist')
        }else{
            if(!record.title || record._id !== Number(recordId)){
                dispatch(listRecordDetails(recordId))
            }else{
                setTitle(record.title)
                setCategory(record.category)
                setContents(record.contents)
            }
        }
        
    }, [dispatch, record, recordId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        //Update product
        dispatch(updateRecord({
            _id: recordId,
            title,
            category,
            contents
        }))
    }

    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <RecordEditScreenStyleCom>
            <div className="register-screen-container">
                <FormContainer>
                    <div className="register-wraper">
                        <div className="register-message-wraper">
                            <div className="register-message-container">
                                {/* {loading && <Loader/>}
                                {message && <Message>{message}</Message>}
                                {error && <Message>{error}</Message>} */}
                            </div>
                        </div>
                            <div className="register-banner">EDIT RECORD</div>

                            {/* Update User Loading*/}
                            {loadingUpdate && <Loader/>}
                            {errorUpdate && <Message>{errorUpdate}</Message>}

                            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
                            <form onSubmit={submitHandler}>
                                <div className="field">
                                    <label className="register-label">Title</label>
                                    <input
                                        className='input-name'
                                        autoComplete="off"
                                        type="title"
                                        name="title"
                                        value={title}
                                        placeholder='Enter title'
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Category</label>
                                    <input
                                        className='input-name'
                                        autoComplete="off"
                                        type="category"
                                        name="category"
                                        value={category}
                                        placeholder='Enter category'
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>

                                <CKEditor
                                    className='CK-editor'
                                    editor={ ClassicEditor }
                                    data={contents}
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                        setContents(data)
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />

                                {/* <div className="field">
                                    <label className="register-label">Contents</label>
                                    <input
                                        className='input-name'
                                        type="text"
                                        name="contents"
                                        value={contents}
                                        placeholder='Enter contents'
                                        onChange={(e) => setContents(e.target.value)}
                                    />
                                </div> */}

                                <button type="submit" className="register-button"> Update </button>
                                <h3><LinkStyleCom to='/admin/recordlist'>Go Back</LinkStyleCom></h3>
                            </form>   
                            )}
                        </div>
                </FormContainer>
            </div>
        </RecordEditScreenStyleCom>
        </motion.div>
        </>
    )
}

export default RecordEditScreen
