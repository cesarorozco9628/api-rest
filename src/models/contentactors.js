'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentActors extends Model {
    static associate(models) {
      this.hasMany(models.Actors,{
        foreignKey:'id'
      })
      this.hasOne(models.Contents,{
        foreignKey:'id'
      })
    }
  };
  ContentActors.init({
    actor_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentActors',
    underscored: true,
  });
  return ContentActors;
};