const {Router} = require('express');
const route = Router();
const {getAll,getDirector,create,update,remove,updateProfile} = require('../controllers/directors.controolers');
const {verifyToken} = require('../controllers/login.controller');


route.get("/directors", verifyToken,getAll);
route.get("/directors/:id",verifyToken ,getDirector);
route.post("/directors", verifyToken ,create);
route.put("/directors/:id", verifyToken ,update);
route.put("/directors/:id/profile", verifyToken ,updateProfile);
route.delete("/directors/:id", verifyToken ,remove);

module.exports = route;
