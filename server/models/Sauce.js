const {sequelize} = require('../db');
const { Sequelize } = require('sequelize');

const Sauce = sequelize.define("sauces", {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
});

module.exports = { Sauce }