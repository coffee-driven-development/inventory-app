const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Item = sequelize.define("items", {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER,
    category: Sequelize.STRING,
    image: Sequelize.STRING
})

  module.exports = { Item }