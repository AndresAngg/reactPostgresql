const { Router } = require('express');
const rou = Router();
const { getUsers, create, show, destroy } = require('../controller/index.controller')

rou.get('/users', getUsers);
rou.post('/users', create);
rou.get('/users/:id', show);
rou.delete('/users/:id', destroy);

module.exports = rou;
