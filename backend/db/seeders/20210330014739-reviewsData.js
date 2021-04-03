'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
        venueId: 1,
        rating: 10,
        authorId: 1,
        content: "Great time despite a TPK!"
      },
      {
        venueId: 1,
        rating: 4,
        authorId: 2,
        content: "I'm pretty sure I saw a drug deal"
      },
      {
        venueId: 3,
        rating: 10,
        authorId: 3,
        content: "the complementary meatloaf was awesome!"
      },
      {
        venueId: 8,
        rating: 8,
        authorId: 1,
        content: "hookah and boardgames is a great mix!"
      },
      {
        venueId: 9,
        rating: 1,
        authorId: 2,
        content: "this place isn't perfect for anything. it's just a dirty garage! we left after 30 minutes."
      },
      {
        venueId: 4,
        rating: 7,
        authorId: 3,
        content: "Right on the water but make sure your cards are sleeved and weighted, otherwise the wind or stray splash water will get em :("
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
