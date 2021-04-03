'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    reserverId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    gameDate: DataTypes.DATE,
    games: DataTypes.TEXT
  }, {});
  Reservation.associate = function (models) {
    // Reservation.belongsTo(models.User, { foreignKey: "reserverId" })
    // Reservation.belongsTo(models.Venue, { foreignKey: "venueId" });
  };
  return Reservation;
};
