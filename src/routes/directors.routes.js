const {Router} = require('express');
const route = Router();
const {getAll,getDirector,create,update,remove,updateProfile} = require('../controllers/directors.controolers');

route.get("/directors", getAll);
route.get("/directors/:id", getDirector);
route.post("/directors", create);
route.put("/directors/:id", update);
route.put("/directors/:id/profile", updateProfile);
route.delete("/directors/:id", remove);

module.exports = route;
