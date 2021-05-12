const {Users} = require('../models');
const bcrypt = require('bcryptjs');

const getAll = async (req, res, next) => {
    try{
        const results = await Users.findAll({raw:true});
        res.json(results);
    }catch(error){
        next(error);
    };
};
const getUser = async (req, res, next) => {
    try{
        let id = req.params.id;
        const result = await Users.findByPk(id,{raw:true});
        res.json(result);
    }catch(error){
        next(error);
    };
};

const create = async (req, res, next) => {
    try{
        let {password} = req.body;
        password = await bcrypt.hash(password,8);
        let users = await Users.create({...req.body, password});
        res.json(users);
    }catch(error){
        next(error);
    };
};

const update = async (req, res, next) => {
    try{
        let {password} = req.body;
        let hash = await bcrypt.hash(password,8);
        let usersId = req.params.id;
        let usersObj = await Users.update({...req.body,password:hash}, {where: {id: usersId}},{raw:true});
        res.json(usersObj);
    }catch(error){
        next(error);
    };
};

const remove = async (req, res, next) => {
    try{
        let usersId = Number(req.params.id);
        let usersObj = await Users.destroy({where: {id: usersId}});
        res.json(usersObj);
    }catch(error){
        next(error);
    };
};

module.exports = {
    getAll,
    getUser,
    create,
    update,
    remove
}