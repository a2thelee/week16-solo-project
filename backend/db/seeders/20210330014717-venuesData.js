'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Venues', [
      {
        name: "the dump",
        ownerId: 1,
        address: "20 chandler street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: 'www.nothing.com',
        description: "awful place. i think i heard gunshots",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
