const { Sequelize } = require('sequelize');
const path = require('path');
const debug = require('debug')('app:sequelize');

const  db = new Sequelize('cats_inventory', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;