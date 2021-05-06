'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_genres', {
      genre_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'genres',
          key:'id'
        }
      },
      content_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'contents',
          key:'id'
        }
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('content_genres');
  }
};