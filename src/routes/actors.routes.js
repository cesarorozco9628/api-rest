const {Router} = require('express');
const route = Router();
const {getAll, create,update,remove,getActor} = require('../controllers/actors.contoller');


///////////////////////Endpoints/////////////////

route.get("/actors" , getAll);
route.get("/actors/:id", getActor); 
route.post("/actors", create);
route.put("/actors/:id", update);
route.delete("/actors/:id", remove);

module.exports = route;