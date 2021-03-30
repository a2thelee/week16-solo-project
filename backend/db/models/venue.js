'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    bookingImgUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    openHours: DataTypes.DATE,
    closeHours: DataTypes.DATE,
    cost: DataTypes.INTEGER
  }, {});
  Venue.associate = function (models) {
    Venue.hasMany(models.Review, { foreignKey: "venueId", as: "location" })
    Venue.belongsTo(models.User, { foreignKey: "ownerId" })

    Venue.belongsToMany(models.User, {
      through: "Reservations",
      otherKey: "reserverId",
      foreignKey: "VenueId"
    })

    Venue.belongsToMany(models.User, {
      through: "Reviews",
      otherKey: "authorId",
      foreignKey: "VenueId"
    })
  };
  return Venue;
};
