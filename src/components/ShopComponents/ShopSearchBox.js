import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

//style
import { ShopSearchBoxStyleCom } from "../../styles/jsStyles/ShopStyles/ShopSearchBoxStyle"

function ShopSearchBox( ) {

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) =>{
        e.preventDefault()
        if(keyword){
            history.push(`/ShopScreen/?keyword=${keyword}&page=1`)
        }else{
            history.push(history.push(history.location.pathname))
        }
    }

    return (
        <>
            <ShopSearchBoxStyleCom>
                <div className="shop-search-container">
                    <form onSubmit={submitHandler}>
                        <div className="field">
                            <input
                                className='input-search'
                                type="text"
                                placeholder='Search'
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        
                    <button type="submit" className="search-button"> Search </button>
                    </form>  
                </div>
            </ShopSearchBoxStyleCom>
        </>
    )
}

export default ShopSearchBox
