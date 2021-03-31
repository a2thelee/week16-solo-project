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
      {
        name: "that's entertainment",
        ownerId: 2,
        address: "115 Park Ave",
        state: "Massachusetts",
        city: "Boston",
        bookingImgUrl: 'www.nothing.com',
        description: "looked like a real dungeon!",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "my mom's basement",
        ownerId: 3,
        address: "33 main street",
        state: "Massachusetts",
        city: "Quincy",
        bookingImgUrl: 'www.nothing.com',
        description: "complementary meatloaf",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "A&M Games",
        ownerId: 1,
        address: "78 rehobeth blvd",
        state: "Maine",
        city: "Thornton",
        bookingImgUrl: 'www.nothing.com',
        description: "Right by the water, but the salt destroyed our cards",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "Rick's House",
        ownerId: 2,
        address: "37 Montague road",
        state: "Massachusetts",
        city: "Springfield",
        bookingImgUrl: 'www.nothing.com',
        description: "TPK happened here",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "The Alpha House",
        ownerId: 1,
        address: "434 Howard Ave",
        state: "New York",
        city: "New York",
        bookingImgUrl: 'www.nothing.com',
        description: "just frat guys who play dnd. pretty sweet, actually",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "Arlo Road",
        ownerId: 1,
        address: "34 Arlo road",
        state: "New York",
        city: "New York",
        bookingImgUrl: 'www.nothing.com',
        description: "fun time despite losing all my games!",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "The Dragon's Lair",
        ownerId: 3,
        address: "998 rosemary street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: 'www.nothing.com',
        description: "place smells like hookah. pretty good",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "jim's house",
        ownerId: 2,
        address: "12 elm street",
        state: "Massachusetts",
        city: "Boston",
        bookingImgUrl: 'www.nothing.com',
        description: "it's just a garage and there isn't any heating!",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "the elks club",
        ownerId: 2,
        address: "2 mill street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: 'www.nothing.com',
        description: "the lodge is great dor a dnd setting!",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Venues', null, {});

  }
};
