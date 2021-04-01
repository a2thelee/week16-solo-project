'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Venues', [
      {
        name: "That's Entertainment",
        ownerId: 1,
        address: "20 chandler street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: 'https://bloximages.newyork1.vip.townnews.com/wvgazettemail.com/content/tncms/assets/v3/editorial/7/11/711030ba-c026-5997-be4f-5c6b03deb7b0/5fdd31682182b.image.jpg?resize=1200%2C762',
        description: "A hobby shop looking for players to enjoy some good times!",
        openHours: new Date(),
        closeHours: new Date(),
        cost: 40.00
      },
      {
        name: "The Lucky Goblin",
        ownerId: 2,
        address: "115 Park Ave",
        state: "Massachusetts",
        city: "Boston",
        bookingImgUrl: 'https://gameoftravel.files.wordpress.com/2016/10/featured5.jpg?w=840',
        description: "Hobby shop look and feel!",
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
        bookingImgUrl: 'https://i.imgur.com/9qldvrE.jpg',
        description: "complementary meatloaf made by my mom!",
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
        bookingImgUrl: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/33/23/a7.jpg',
        description: "Right on the water! BYOB",
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
        bookingImgUrl: 'https://i.imgur.com/psa9ezs.jpg',
        description: "A TPK may happen here but that doesn't mean it wasn't a good time!",
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
        bookingImgUrl: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/346942b0-204f-4ed1-9094-b87e54587913-man-cave-golf-simulator.jpg',
        description: "just frat guys who play dnd",
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
        bookingImgUrl: 'https://www.familyhandyman.com/wp-content/uploads/2017/10/mancave5.jpg?w=1200',
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
