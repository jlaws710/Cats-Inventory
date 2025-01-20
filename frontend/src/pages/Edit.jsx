import {useEffect, useState} from 'react';
import { useParams, useNavigate, Navigate} from 'react-router-dom';
import './edit.css'

export default function Edit() {
  let {id} = useParams();
  const navigate = useNavigate();

  const [adaptability, setAdaptability] = useState('');
  const [affection_level, setAffection_level] = useState('');
  const [description, setDescription] = useState('');
  const [energy_level, setEnergy_level] = useState('');
  const [grooming, setGrooming] = useState('');
  const [health_issues, setHealth_issues] = useState('');
  const [image_url, setImage_url] = useState('');
  const [life_span, setLife_span] = useState('');
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [temperament, setTemperament] = useState('');
  const [weight, setWeight] = useState('');
  const [wikipedia_url, setWikipedia_url] = useState('');
  
  const getCat = async (catId) => {
    try{
      const res = await fetch(`http://localhost:8000/cats/${catId}`,{
        headers: {
          'SameSite': 'None',
        }
      });
      await res.json()
      .then((res) => {
        setAdaptability(res.cat.adaptability);
        setAffection_level(res.cat.affection_level);
        setDescription(res.cat.description);
        setEnergy_level(res.cat.energy_level);
        setGrooming(res.cat.grooming);
        setHealth_issues(res.cat.health_issues);
        setImage_url(res.cat.image_url);
        setLife_span(res.cat.life_span);
        setName(res.cat.name);
        setOrigin(res.cat.origin);
        setTemperament(res.cat.temperament);
        setWeight(res.cat.weight);
        setWikipedia_url(res.cat.wikipedia_url);
      });
    } catch(error) {
      console.error(error.message);
    };
  }
  
  const updateCat = async (catId, updatedCat) => {
    try{
      const res = await fetch(`http://localhost:8000/cats/${catId}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'SameSite': 'None'
        },
        body: JSON.stringify(updatedCat)
      });
      const catData = await res.json();
      navigate(`/${id}`);
      console.log(`successfully updated cat`);
    } catch(error) {
      console.error(`Product did not update - Error: ${error.message}`);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedCat ={
      adaptability,
      affection_level,
      description,
      energy_level,
      grooming,
      health_issues,
      image_url,
      life_span,
      name,
      origin,
      temperament,
      weight,
      wikipedia_url 
    };
    updateCat(id, updatedCat);
  }

  const goHome = (e) => {
    e.preventDefault();
    navigate('/');
  }
  
  useEffect(() => {
    getCat(id)
  },[id]);
  
  return(
    <div className="edit-container">
      <section className="edit-form">
        <h2>Details:</h2>

        <form onSubmit={handleSubmit}>
          Adaptability: <input type={"number"} value={adaptability} onChange={(e) => setAdaptability(e.target.value) } />
          Affection level: <input type={"number"} value={affection_level} onChange={(e) => setAffection_level(e.target.value) } />
          Description: <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value) } />
          Energy level: <input type={"number"} value={energy_level} onChange={(e) => setEnergy_level(e.target.value) } />
          Grooming: <input type={"number"} value={grooming} onChange={(e) => setGrooming(e.target.value) } />
          Health issues: <input type={"number"} value={health_issues} onChange={(e) => setHealth_issues(e.target.value) } />
          Image URL: <input type={"text"} value={image_url} onChange={(e) => setImage_url(e.target.value) } />
          Life span: <input type={"text"} value={life_span} onChange={(e) => setLife_span(e.target.value) } />
          Name: <input type={"text"} value={name} onChange={(e) => setName(e.target.value) } />
          Origin: <input type={"text"} value={origin} onChange={(e) => setOrigin(e.target.value) } />
          Temperament: <input type={"text"} value={temperament} onChange={(e) => setTemperament(e.target.value) } />
          Weight: <input type={"text"} value={weight} onChange={(e) => setWeight(e.target.value) } />
          Wikipedia URL: <input type={"text"} value={wikipedia_url} onChange={(e) => setWikipedia_url(e.target.value) } />
          <div>
            <button className='form-button' onClick={goHome}>Home</button>
            <button className='form-button'>Save</button>
          </div>
        </form>
      </section>
    </div>
  )
}