'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reservations', [
      {
        reserverId: 2,
        venueId: 1,
        gameStart: new Date(),
        gameEnd: new Date(),
        games: "Twilight Imperium, Root, DnD5e"
      }
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
