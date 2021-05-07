'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      this.hasOne(models.ContentActors,{
        foreignKey: 'actor_id'
      });
    }
  };
  Actors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actors',
    underscored: true
  });
  return Actors;
};