const {Router} = require('express');
const route = Router();
const {getAll, create,update,remove,getActor,updateProfile} = require('../controllers/actors.contoller');
const {verifyToken} = require('../controllers/login.controller')

///////////////////////Endpoints/////////////////

route.get("/actors", verifyToken ,getAll);
route.get("/actors/:id",verifyToken, getActor); 
route.post("/actors", verifyToken, create);
route.put("/actors/:id/profile",verifyToken, updateProfile);
route.put("/actors/:id", verifyToken,update);
route.delete("/actors/:id", verifyToken, remove);

module.exports = route;