import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Create() {
  const navigate = useNavigate();

  const [adaptability, setAdaptability] = useState(0);
  const [affection_level, setAffection_level] = useState(0);
  const [description, setDescription] = useState('Dummy Description');
  const [energy_level, setEnergy_level] = useState(0);
  const [grooming, setGrooming] = useState(0);
  const [health_issues, setHealth_issues] = useState(0);
  const [image_url, setImage_url] = useState('https://dummyimage.com/200x200/fff/aaa');
  const [life_span, setLife_span] = useState('');
  const [name, setName] = useState('New Cat');
  const [origin, setOrigin] = useState('');
  const [temperament, setTemperament] = useState('');
  const [weight, setWeight] = useState('');
  const [wikipedia_url, setWikipedia_url] = useState('')

  const createCat = async (newCat) => {
    try {
        const res = await fetch(`http://locahost:8000/cats`, {
            method: 'POST',
            headers: {
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                    },
                  body: JSON.stringify(newCat) 
            }});

            const catData = await res.join();
            console.log('Product Created!', catData);
    } catch (error) {
        console.error(`There was an error creating a new Cat - error: ${error.message}`);
    }
  }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCat = {
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
        }
        createCat(newCat);

        setAdaptability(0);
        setAffection_level(0);
        setDescription(0);
        setEnergy_level(0);
        setGrooming(0);
        setHealth_issues(0);
        setImage_url('https://dummyimage.com/200x200/fff/aaa');
        setLife_span('');
        setName('');
        setOrigin('');
        setTemperament('');
        setWeight('');
        setWikipedia_url('');
    };

    const goHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

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
            <button className='form-button'>Create</button>
            </div>
        </form>
        </section>
    </div>
    )
}

export default Create;