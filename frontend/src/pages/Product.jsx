import React , {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import "./popup.css"

function Product() {
    const [user, setUser] = useState(null);
    const params = useParams();

    const getUser = async (id) => {
        const response = await fetch(`http://localhost:8000/cats/${id}`);
        const data = await response.json();

        setUser(data.cat);
    }

    const deleteCat = async () => {
        const res = await fetch(`http://localhost:8000/cats/${params.id}`, {
            method: `DELETE`,
            headers: {
                'SameSite': 'None'
            }
        });
        const deletedCat = await res.json();
        console.log(`Cat deleted`);
    }
    useEffect(() => {
        getUser(params.id);
    },[params.id])

    if(user) {
        return (
            <div className='container'>
                 <div className='images'>
                     <img src={user.image_url} alt={user.name} />
                 </div>
                 <div className='cat'>
                     <h1>{user.name}</h1>
                     <p className='desc'>{user.description}</p>
                     <div className='cat-btns'>
                     <Link className='product-select-btn' to={`/edit-cat/${params.id}`}>Edit</Link>
                     <Link className='product-select-btn' to='/' onClick={deleteCat}>Delete</Link>
                     <Link className='product-select-btn' to='/'>Home</Link>
                     </div>
                 </div>
            </div>
                )
    } else {
            <p>Still Loading...</p>
        }
}

export default Product;