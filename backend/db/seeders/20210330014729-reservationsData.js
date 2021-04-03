'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reservations', [
      {
        reserverId: 1,
        venueId: 1,
        gameDate: new Date(),
        games: "Twilight Imperium, Root, DnD5e"
      },
      {
        reserverId: 2,
        venueId: 1,
        gameDate: new Date(),
        games: "diplomacy, twister"
      },
      {
        reserverId: 3,
        venueId: 3,
        gameDate: new Date(),
        games: "Twilight Imperium"
      },
      {
        reserverId: 2,
        venueId: 2,
        gameDate: new Date(),
        games: "Monopoly"
      },
      {
        reserverId: 3,
        venueId: 2,
        gameDate: new Date(),
        games: "axis and allies"
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});

  }
};
