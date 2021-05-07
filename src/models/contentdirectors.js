'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentDirectors extends Model {
    static associate(models) {
   
    }
  };
  ContentDirectors.init({
    director_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentDirectors',
    underscored: true,
  });
  return ContentDirectors;
};