'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.String,
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
    Venue.hasMany(models.Review, { foreignKey: "venueId" })
    Venue.belongsTo(models.User, { foreignKey: "ownerId" })
    Venue.hasMany(models.Reservation, { foreignKey: "venueId" })
  };
  return Venue;
};
