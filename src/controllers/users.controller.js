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
const getActor = async (req, res, next) => {
    try{
        let id = req.params.id;
        const result = await Users.findByPk({raw:true},{where: {id:id}});
        res.json(result);
    }catch(error){
        next(error);
    };
};

const create = async (req, res, next) => {
    try{
        let {first_name,last_name,email,password,reset_token} = req.body;
        password = await bcrypt.hashSync(password,8);
        let users = await Users.create({first_name,last_name,email,password,reset_token});
        res.json(users);
    }catch(error){
        next(error);
    };
};

const update = async (req, res, next) => {
    try{
        let {first_name,last_name,email,password,reset_token} = req.body;
        let hash = await bcrypt.hashSync(password,8);
        let usersId = Number(req.params.id);
        let usersObj = await Users.update({
            first_name:first_name,
            last_name: last_name,
            email:email,
            password: hash,
            reset_token:reset_token
        }, {where: {id: usersId}});
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
    getActor,
    create,
    update,
    remove
}