import React, { useState, useEffect } from 'react'
import DisplayList from '../components/DisplayList';

function Products(props) {
    const [cats, setCats] = useState([]);

    const getData = async () => {
        const response = await fetch('http://localhost:8000/cats');
        const data = await response.json();
    
        console.log('Data: ', data);
        const { cats } = data;
        setCats(cats);
        console.log('Cats: ', cats);
      }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='display-list-app'>
            <div className='header'>
                <h1> Cat Inventory </h1>
            </div>
            {cats.length > 0 ? <DisplayList cats={cats} /> 
            : "No cats to display"}
        </div>
    )
}

export default Products;