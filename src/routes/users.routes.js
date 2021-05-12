const {Router} = require('express');
const route = Router();
const {getAll, create,update,remove,getUser} = require('../controllers/users.controller');
const {verifyToken} = require('../controllers/login.controller');

///////////////////////Endpoints/////////////////

route.get("/users" , verifyToken ,getAll);
route.get("/users/:id", verifyToken ,getUser);
route.post("/users", verifyToken ,create);
route.put("/users/:id", verifyToken ,update);
route.delete("/users/:id", verifyToken ,remove);

module.exports = route;