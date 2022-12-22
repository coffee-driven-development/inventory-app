<<<<<<< HEAD
const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
};
=======
const {Item} = require('./Item')

module.exports = { Item };
>>>>>>> 7f493279e5e98e03480eaa6f4d5ea223468b3625
