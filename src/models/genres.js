'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      this.hasOne(models.ContentGenres,{
        foreignKey: 'genre_id'
      });
    }
  };
  Genres.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Genres',
    underscored:true
  });
  return Genres;
};