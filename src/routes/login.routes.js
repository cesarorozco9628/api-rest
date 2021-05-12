const {Router} = require('express');
const route = Router();
const {getToken} = require('../controllers/login.controller');


route.post('/login',getToken);

module.exports = route;