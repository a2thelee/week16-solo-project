'use strict';
const { Random } = require("random-js")
const faker = require("faker")
const random = new Random();

module.exports = {
  up: (queryInterface, Sequelize) => {

    const randomDescription = () => {
      const descriptions = [
        "A TPK may happen here but that doesn't mean it wasn't a good time!",
        "A hobby shop looking for players to enjoy some good times!",
        "Hobby shop look and feel!",
        "complementary meatloaf made by my mom!",
        "just frat guys who play dnd",
        "place smells like hookah. pretty good",
        "the lodge is great dor a dnd setting!",
        "Come down to my mom's basement!",
        "My therapist said I need friends!"
      ]
      return descriptions[random.integer(0, 7)]

    }

    const randomName = () => {
      const words = [
        "The", "Juice", "Box", "House", "Garage", "Lodge", "Home", "Room", "A", "Academy", "School", "Venue", "Krab", "Alley", "Bar", "Tavern", "Game Shop", "Mom's", "Institute",
        "Dorm", "Arena", "Alpha", "Hobby", "Lucky", "Dragon", "Class", "Monster", "Place", "Road House", "Camp", "Den", "Restaurant", "Lounge"
      ]

      const titleLength = random.integer(2, 5)
      const title = []
      for (let i = 0; i < titleLength; i++) {
        let newWord = words[random.integer(0, words.length - 1)]
        title.push(newWord)
      }
      return title.join(" ")
    }


    const randomVenuePhoto = () => {
      const pictures = [
        "https://bloximages.newyork1.vip.townnews.com/wvgazettemail.com/content/tncms/assets/v3/editorial/7/11/711030ba-c026-5997-be4f-5c6b03deb7b0/5fdd31682182b.image.jpg?resize=1200%2C762",
        "https://gameoftravel.files.wordpress.com/2016/10/featured5.jpg?w=840",
        "https://i.imgur.com/9qldvrE.jpg",
        "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/33/23/a7.jpg",
        "https://i.imgur.com/psa9ezs.jpg",
        "https://loveincorporated.blob.core.windows.net/contentimages/gallery/346942b0-204f-4ed1-9094-b87e54587913-man-cave-golf-simulator.jpg",
        "https://www.familyhandyman.com/wp-content/uploads/2017/10/mancave5.jpg?w=1200",
        "https://i.ytimg.com/vi/MkyKX_KHeQ4/maxresdefault.jpg",
        "https://i.pinimg.com/564x/90/c1/93/90c1939847299b5915474742188d50fa.jpg",
        "https://i.ebayimg.com/images/g/ldcAAOSw9N1VzVrR/s-l300.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6388/6388600cv16d.jpg",
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347047cv14d.jpg"
      ]

      return pictures[random.integer(0, pictures.length - 1)]
    }

    let seederData = [];

    for (let i = 0; i < 200; i++) {

      seederData.push({
        name: randomName(),
        ownerId: random.integer(1, 3),
        address: faker.address.streetAddress(),
        state: faker.address.state(),
        city: faker.address.city(),
        bookingImgUrl: randomVenuePhoto(),
        description: randomDescription(),
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 10),
        cost: random.integer(20, 80)
      })
    }

    return queryInterface.bulkInsert('Venues', [
      {
        name: "That's Entertainment",
        ownerId: 1,
        address: "20 chandler street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: 'https://bloximages.newyork1.vip.townnews.com/wvgazettemail.com/content/tncms/assets/v3/editorial/7/11/711030ba-c026-5997-be4f-5c6b03deb7b0/5fdd31682182b.image.jpg?resize=1200%2C762',
        description: "A hobby shop looking for players to enjoy some good times!",
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
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
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
        cost: 40.00
      },
      {
        name: "The Dragon's Lair",
        ownerId: 3,
        address: "998 rosemary street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: randomVenuePhoto(),
        description: "place smells like hookah. pretty good",
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
        cost: 40.00
      },
      {
        name: "jim's house",
        ownerId: 2,
        address: "12 elm street",
        state: "Massachusetts",
        city: "Boston",
        bookingImgUrl: randomVenuePhoto(),
        description: "Perfect place for a game!",
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
        cost: 40.00
      },
      {
        name: "the elks club",
        ownerId: 2,
        address: "2 mill street",
        state: "Massachusetts",
        city: "Worcester",
        bookingImgUrl: randomVenuePhoto(),
        description: "the lodge is great dor a dnd setting!",
        openHours: random.integer(8, 11),
        closeHours: random.integer(8, 11),
        cost: 40.00
      },

      ...seederData

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Venues', null, {});

  }
};


// ["https://bloximages.newyork1.vip.townnews.com/wvgazettemail.com/content/tncms/assets/v3/editorial/7/11/711030ba-c026-5997-be4f-5c6b03deb7b0/5fdd31682182b.image.jpg?resize=1200%2C762", "https://gameoftravel.files.wordpress.com/2016/10/featured5.jpg?w=840", "https://i.imgur.com/9qldvrE.jpg", "https://media-cdn.tripadvisor.com/media/vr-splice-j/0b/33/23/a7.jpg", "https://i.imgur.com/psa9ezs.jpg", "https://loveincorporated.blob.core.windows.net/contentimages/gallery/346942b0-204f-4ed1-9094-b87e54587913-man-cave-golf-simulator.jpg", "https://www.familyhandyman.com/wp-content/uploads/2017/10/mancave5.jpg?w=1200" ]
