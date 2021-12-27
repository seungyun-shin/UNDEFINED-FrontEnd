import React, {useState, useEffect} from 'react'

//transition Animation
import {AnimatePresence, motion} from 'framer-motion'

import { LinkStyleCom } from "../styles/jsStyles/LinkStyle";

import { ProductListScreenStyleCom } from "../styles/jsStyles/ProductListScreenStyle";

import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/componentParts/Loader'
import Message from '../components/componentParts/Message'

import { listProducts, deleteProduct, createProduct } from '../actions/productActions'

import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import Paginate from '../components/componentParts/Paginate';

function ProductListScreen({ history, match }) {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products, pages, page } = productList

    const productDelete = useSelector(state => state.productDelete)
    const {loading: loadingDelete, error:errorDelete, success:successDelete } = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const {loading: loadingCreate, error:errorCreate, success:successCreate, product:createdProduct } = productCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search

    useEffect( () => {
        dispatch({type:PRODUCT_CREATE_RESET})

        if(!userInfo.isAdmin){
            history.push('/login')
        }

        if(successCreate){
            history.push(`/admin/product/${createdProduct._id}/edit`)
        }else{
            dispatch(listProducts(keyword))
        }
        
    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, keyword])

    const deleteHandler = (id) => {
        var confirmMessage = window.confirm('Are you sure you want to delete this product?');
        if(confirmMessage){
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

    return (
        <>
            <motion.div
            initial = {{ translateY:60, opacity: 0 }}
            animate = {{ translateY:0, opacity: 1 }}
            exit={{ translateY:60, opacity: 0 }}
            transition={{duration: 0.5}}
        >
        <ProductListScreenStyleCom>
            <div className="register-screen-container">
                    {/* {error && <Message>{error}</Message>} */}
                    {/* {loading && <Loader/>} */}
                    <div className="register-wraper">
                        <div className="profile-order-wraper">
                            <div className="productlist-top">
                                <div className="register-banner">PRODUCT</div>
                                <div className="create-button-wraper">
                                    <button className="create-button" onClick={createProductHandler}>+ CREATE PRODUCT</button>
                                </div>
                            </div>
                                
                                { loadingDelete && <Loader/>}
                                { errorDelete && <Message>{errorDelete}</Message>}

                                { loadingCreate && <Loader/>}
                                { errorCreate && <Message>{errorCreate}</Message>}

                                {loading
                                    ? (<Loader/>)
                                    : error
                                        ? (<Message>{error}</Message>)
                                        : (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">NAME</th>
                                                    <th scope="col">PRICE</th>
                                                    <th scope="col">CATEGORY</th>
                                                    <th scope="col">BRAND</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map(product => (
                                                    <tr key={product._id}>
                                                        <td data-label="ID">{product._id}</td>
                                                        <td data-label="name">{product.name}</td>
                                                        <td data-label="email">${product.price}</td>
                                                        <td data-label="isAdmin">{product.category}</td>
                                                        <td data-label="brand">{product.brand}</td>

                                                        <td data-label="ID">
                                                            <LinkStyleCom to={`/admin/product/${product._id}/edit`}> 
                                                                <button className="profile-order-button">
                                                                    <i className='far fa-edit'></i>
                                                                </button> 
                                                            </LinkStyleCom>

                                                            <button className="profile-delete-button" onClick={() => deleteHandler(product._id)}>
                                                                <i className='fas fa-trash'></i>
                                                            </button> 
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        )
                                    }
                                    
                                <Paginate page={page} pages={pages} isAdmin={true}/>
                                </div>
                            </div>
                        </div>
            </ProductListScreenStyleCom>
            </motion.div>
        </>
    )
}

export default ProductListScreen
