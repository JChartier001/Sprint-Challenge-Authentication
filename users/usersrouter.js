const router = require('express').Router();

const Users = require('./usersmodel.js');
const restricted = require('../auth/authenticate-middleware.js');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    });
});

module.exports = router;