import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import api from '../components/componentParts/ApiAxios'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { ProductEditScreenStyleCom } from "../styles/jsStyles/ProductEditScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'
import FormContainer from '../components/componentParts/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET} from '../constants/productConstants'

import imageCompression from 'browser-image-compression';

function ProductEditScreen({match, history}) {
    
    const productId = match.params.id

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {error:errorUpdate, loading:loadingUpdate, success: successUpdate} = productUpdate

    useEffect(()=> {

        if(successUpdate){
            dispatch({type:PRODUCT_UPDATE_RESET})
            history.push('/admin/productlist')
        }else{
            if(!product.name || product._id !== Number(productId)){
                dispatch(listProductDetails(productId))
            }else{
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }
    }, [dispatch, product, productId, history, successUpdate])

    const uploadFileHandler = async (e) => {
        
        const file = e.target.files[0]

        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', productId)

        setUploading(true)

        try{
            const config = {
                header:{
                    'Content-Type':'multipart/form-data'
                }
            }

            const {data} = await api.post('/api/products/upload/', formData, config)

            setImage(data)
            setUploading(false)

        }catch(error){
            setUploading(false)
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        //Update product
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
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
        <ProductEditScreenStyleCom>
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
                            <div className="register-banner">EDIT PRODUCT</div>

                            {/* Update User Loading*/}
                            {loadingUpdate && <Loader/>}
                            {errorUpdate && <Message>{errorUpdate}</Message>}

                            {loading ? <Loader/> : error ? <Message>{error}</Message> : (
                            <form onSubmit={submitHandler}>
                                <div className="field">
                                    <label className="register-label">Name</label>
                                    <input
                                        className='input-name'
                                        autoComplete="off"
                                        type="name"
                                        name="name"
                                        value={name}
                                        placeholder='Enter name'
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Price</label>
                                    <input
                                        className='input-name'
                                        autoComplete="off"
                                        type="price"
                                        name="price"
                                        value={price}
                                        placeholder='Enter price'
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Image</label>
                                    <input
                                        className='input-name'
                                        type="text"
                                        name="image"
                                        value={image}
                                        placeholder='Enter image'
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </div>

                                    <input 
                                        type="file" 
                                        className="image-input-form"
                                        placeholder='Choose image'
                                        onChange={uploadFileHandler}
                                    />
                                    {uploading && <Loader/>}

                                <div className="field">
                                    <label className="register-label">Brand</label>
                                    <input
                                        className='input-name'
                                        type="text"
                                        name="brand"
                                        value={brand}
                                        placeholder='Enter brand'
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Stock</label>
                                    <input
                                        className='input-name'
                                        type="number"
                                        name="countInStock"
                                        value={countInStock}
                                        placeholder='Enter countInStock'
                                        onChange={(e) => setCountInStock(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Category</label>
                                    <input
                                        className='input-name'
                                        type="text"
                                        name="category"
                                        value={category}
                                        placeholder='Enter category'
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>

                                <div className="field">
                                    <label className="register-label">Desctiption</label>
                                    <input
                                        className='input-name'
                                        type="text"
                                        name="desctiption"
                                        value={description}
                                        placeholder='Enter desctiption'
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                

                                <button type="submit" className="register-button"> Update </button>
                                <h3><LinkStyleCom to='/admin/productlist'>Go Back</LinkStyleCom></h3>
                            </form>   
                            )}
                        </div>
                </FormContainer>
            </div>
        </ProductEditScreenStyleCom>
        </motion.div>
        </>
    )
}

export default ProductEditScreen
