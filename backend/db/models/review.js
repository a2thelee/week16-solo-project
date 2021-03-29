'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    venueId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "authorId" })
    Review.belongsTo(models.Venue, { foreignKey: "venueId" })
  };
  return Review;
};
