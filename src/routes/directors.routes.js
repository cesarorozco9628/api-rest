const {Router} = require('express');
const route = Router();
const {getAll,create,update,remove} = require('../controllers/directors.controolers');

route.get("/directors", getAll);
route.post("/directors", create);
route.put("/directors/:id", update);
route.delete("/directors/:id", remove);

module.exports = route;
