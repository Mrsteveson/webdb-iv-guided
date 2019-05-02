// exports some functions
// needs to know about the database
const db = require('../data/dbConfig.js');

module.exports = {
    find,
    
    

}

function find() {
    return db('tracks');
};