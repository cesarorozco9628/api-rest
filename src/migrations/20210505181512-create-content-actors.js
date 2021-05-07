'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('content_actors', {
      actor_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        references:{
          model:'actors',
          key:'id'
        }
      },
      content_id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
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
    await queryInterface.dropTable('content_actors');
  }
};