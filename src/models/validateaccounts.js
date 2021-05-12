'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ValidateAccounts extends Model {
    static associate(models) {
      // define association here
    }
  };
  ValidateAccounts.init({
    hash: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ValidateAccounts',
  });
  return ValidateAccounts;
};