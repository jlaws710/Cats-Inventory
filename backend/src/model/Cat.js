const sequelize = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Cat = sequelize.define('cat', {
    weight: DataTypes.STRING,
    cat_id: DataTypes.STRING,
    name: DataTypes.STRING,
    temperament: DataTypes.STRING,
    origin: DataTypes.STRING,
    description: DataTypes.TEXT,
    life_span: DataTypes.STRING,
    adaptability: DataTypes.INTEGER,
    affection_level: DataTypes.INTEGER,
    energy_level: DataTypes.INTEGER,
    grooming: DataTypes.INTEGER,
    health_issues: DataTypes.INTEGER,
    wikipedia_url: DataTypes.STRING,
    image_id: DataTypes.STRING,
    image_width: DataTypes.INTEGER,
    image_height: DataTypes.INTEGER,
    image_url: DataTypes.STRING
});

module.exports = Cat;