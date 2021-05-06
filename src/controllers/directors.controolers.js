const {Directors} = require('../models');

const getAll = async (req, res, next) => {
    try{
        const results = await Directors.findAll({raw:true});
        res.json(results);
    }catch(error){
        next(error);
    }
}

const create = async (req, res, next) => {
    try{
        let directors = await Directors.create(req.body);
        res.json(directors);
    }catch(error){
        next(error);
    }
}

const update = async (req, res, next) => {
    try{
        let directorsId = Number(req.params.id);
        let directorsObj = await Directors.update(req.body, {where:{id:directorsId}});
        res.json(directorsObj);
    }catch(error){
        next(error);
    }
}

const remove = async (req, res, next) => {
    try{
        let directorsId = Number(req.params.id);
        let directorsObj = await Directors.destroy({where: {id:directorsId}});
        res.json(directorsObj);
    }catch(error){
        next(error);
    } 
}

module.exports = {
    getAll,
    create,
    update,
    remove
}