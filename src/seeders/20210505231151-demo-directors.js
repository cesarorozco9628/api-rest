'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('directors', [{
      first_name: 'Jorge',
      last_name: 'Araque',
      dob: '1990-02-10',
      biography: 'ooooooooooooooooooo',
      profile_photo:'oooooooooooooooooo',
      active: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('directors', null, {});
  }
};
