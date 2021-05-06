'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directors extends Model {
    static associate(models) {
      this.belongsTo(models.ContentDirectors,{
        foreignKey:'director_id'
      });
    }
  };
  Directors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.TIME,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Directors',
    underscored: true
  });
  return Directors;
};