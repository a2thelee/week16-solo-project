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
        venueId: 1,
        gameDate: new Date(),
        games: "axis and allies"
      },
      {
        reserverId: 3,
        venueId: 6,
        gameDate: new Date(),
        games: "dnd pathfinder"
      },
      {
        reserverId: 1,
        venueId: 1,
        gameDate: new Date(),
        games: "monopoly and triopoly"
      },
      {
        reserverId: 2,
        venueId: 5,
        gameDate: new Date(),
        games: "root"
      },
      {
        reserverId: 3,
        venueId: 1,
        gameDate: new Date(),
        games: "the game of life"
      },
      {
        reserverId: 1,
        venueId: 3,
        gameDate: new Date(),
        games: "Risk: 2210 AD"
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservations', null, {});

  }
};
