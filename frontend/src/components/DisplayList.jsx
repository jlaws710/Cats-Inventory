import React from 'react'
import ProductCard from './Display'
import { Link } from 'react-router-dom'

function DisplayList({cats}) {

    return ( 
            <div className='cats'>
                <Link className='product-select-btn' to={`create-cat`}>Create New Cat!</Link>
                <div className='list'>
                    {
                        cats.length > 0 ?
                        cats.map((cat) => <ProductCard key={cat.id} cats = {cat}/>)
                        : 'No Cats In This List'
                    }
                </div>
            </div>
    )
}

export default DisplayList