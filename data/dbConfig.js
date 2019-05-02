// Responsibility of this file is to bring knex in
// and then configure it to connect to our database. can use it anywhere.

const knex = require('knex');
const knexConfig = require('../knexfile.js');
// returns the development object's configuration
const db = knex(knexConfig.development)

// make it usable for any file that needs the configured version of knex.(models)
module.exports = db;