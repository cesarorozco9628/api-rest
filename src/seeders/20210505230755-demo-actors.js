'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkInsert('actors', [{
      first_name: 'John',
      last_name: 'Doe',
      dob: '1990-02-02',
      biography: 'ehrjehrg',
      profile_photo:'kdjfkjdfd',
      active: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('actors', null, {});
  }
};
