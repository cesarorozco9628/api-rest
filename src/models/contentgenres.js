'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentGenres extends Model {
    static associate(models) {
      // define association here
    }
  };
  ContentGenres.init({
    genre_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentGenres',
    underscored: true,
  });
  return ContentGenres;
};