const {Router} = require('express');
const route = Router();
const {getAll, create,update,remove,getActor,updateProfile} = require('../controllers/actors.contoller');
const {verifyToken} = require('../controllers/login.controller')

///////////////////////Endpoints/////////////////

route.get("/actors", getAll);
route.get("/actors/:id", getActor); 
route.post("/actors", create);
route.put("/actors/:id/profile", updateProfile);
route.put("/actors/:id", update);
route.delete("/actors/:id", remove);

module.exports = route;