const knex = require('knex');
const config = require('../knexfile');

const environment = process.env.NODE_ENV || "development";

const db = knex(config.development);

module.exports = db;
