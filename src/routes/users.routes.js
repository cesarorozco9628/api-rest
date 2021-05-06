const {Router} = require('express');
const route = Router();
const {getAll, create,update,remove,getActor} = require('../controllers/users.controller');


///////////////////////Endpoints/////////////////

route.get("/users" , getAll);
route.get("/users/:id", getActor); 
route.post("/users", create);
route.put("/users/:id", update);
route.delete("/users/:id", remove);

module.exports = route;