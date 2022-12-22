const { Item } = require('./Item')
const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

module.exports = { db: sequelize, Item }
