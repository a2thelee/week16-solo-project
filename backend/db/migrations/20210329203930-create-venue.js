'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(75),
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      bookingImgUrl: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      openHours: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      closeHours: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cost: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};
