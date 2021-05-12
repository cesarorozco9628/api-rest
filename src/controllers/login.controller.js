const {Users} = require('../models');
const jwt = require("jsonwebtoken");
const bcryptjs = require('bcryptjs');
const {dotenv} =  require('dotenv').config();




const getToken = async(req, res, next) => {
    const { password } = req.body;
    // let pass = bcryptjs.hash(password,8);
    let user = await Users.findOne({
      where:{
        email: req.body.email
      }
    },{raw:true});
    console.log(user);
   try {
    if (await bcryptjs.compare(password, user.password)) {
      const token = jwt.sign(user.dataValues.id, process.env.JWT_KEY, {
        algorithm: "HS512",
        // expiresIn: "1h"
      });
      res.json({ token });
    }
  } catch (error) {
    console.log(error.message)
  }
}

const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];
  try{
    if (token) {
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({ mensaje: "Token inválido" });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.send({
        mensaje: "Token no proporcionado."
      });
    }
  }catch(error){
    next(error);
  }
};

module.exports = {
  getToken,
  verifyToken
}