const {Actors} = require('../models');

const getAll = async (req, res, next) => {
    try{
        const results = await Actors.findAll({raw:true});
        res.json(results);
    }catch(error){
        next(error);
    }
}
const getActor = async (req, res, next) => {
    try{
        let id = req.params.id;
        const result = await Actors.findByPk(id,{raw:true});
        res.json(result);
    }catch(error){
        next(error);
    }
}

const create = async (req, res, next) => {
    try{
        let {first_name,last_name,dob,biography,profile_photo,active} = req.body;
        let actors = await Actors.create({
            first_name,last_name,dob,biography,profile_photo,active
        });
        res.json(actors);
    }catch(error){
        next(error);
    }
}

const update = async (req, res, next) => {
    try{
        let actorId = Number(req.params.id);
        let actorObj = await Actors.update(req.body, {where: {id: actorId}})
        res.json(actorObj);
    }catch(error){
        next(error);
    }
}

const remove = async (req, res, next) => {
    try{
        let actorId = Number(req.params.id);
        let actorObj = await Actors.destroy({where: {id: actorId}});
        res.json(actorObj);
    }catch(error){
        next(error);
    } 
}

module.exports = {
    getAll,
    getActor,
    create,
    update,
    remove
}