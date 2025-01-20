import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({cats}) {
    return (
        <div className='cards'>
            <h2>{cats.name} </h2>
            <img className = "catPhotos" src={cats.image_url} alt={cats.name}></img>
            <Link className='product-select-btn' to={`/${cats.id}`}>Details</Link>
        </div>
    )

}

export default ProductCard