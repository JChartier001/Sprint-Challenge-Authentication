const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,    
    findById,
    findBy
};

function find() {
    return db('users').select('id', 'username', 'password');
}

function findById(id) {
    return db('users')
    .where({id})
    .first();
}

async function add(user) {
    return db('users')
    .insert(user)
    .returning('id');
    
}

function findBy(filter) {
    return db('users').where(filter);
  }

