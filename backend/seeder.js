/**
 * Seeder file to populate database
 */

const path = require('path');
const fs = require('fs').promises;
const color = require('colors');

const db = require('./src/db');
const Cat = require('./src/model/Cat.js');

//seed function -> take json file, create rows with our data into it
const seed = async () => {
  try {
    await db.sync({ force: true }); // clear out database + tables
    const catSeedPath = path.join(__dirname, 'src', 'data', 'catData.json'); //gets the path to userData.json
    //asynchronously reads the content in this file
    const catBuffer = await fs.readFile(catSeedPath);
    // converts the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const catsData  = JSON.parse(String(catBuffer));
    
    const CatPromises = catsData.map((cat) => Cat.create({
      weight: cat.weight.imperial,
      cat_id: cat.id,
      name: cat.name,
      temperament: cat.temperament,
      origin: cat.origin,
      description: cat.description,
      life_span: cat.life_span,
      adaptability: cat.adaptability,
      affection_level: cat.affection_level,
      energy_level: cat.energy_level,
      grooming: cat.grooming,
      health_issues: cat.health_issues,
      wikipedia_url: cat.wikipedia_url,
      image_id: cat.image.id,
      image_width: cat.image.width,
      image_height: cat.image.height,
      image_url: cat.image.url
    }));
    // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(CatPromises);
    console.log('User database info populated!');
  } catch(error) {
    console.error(`error: ${error.message}`.red);
  };

};

seed();
