const express = require('express')
const asyncHandler = require('express-async-handler');
const { Reservation } = require('../../db/models');
const Venue = require("../../db/models/venue.js")
const router = express.Router();
const Sequelize = require("sequelize")
const Op = Sequelize.Op

router.get("/:id", asyncHandler(async (req, res) => {
  const { id } = req.params;
  let array = [];         //declare empty array to hold venue Ids after query

  const reservations = await db.Reservation.findAll({ where: { reserverId: id } })      //grab all the reservations a person has, where we can also grab all the venueIds

  if (reservations[0]) {
    reservations.forEach(reservation => {
      array.push(reservation.venueId)
    })

    const venues = await Venue.findAll({        //grabbing all the venues based on the venueIds we get from the query above on line 13
      where: {
        id: {
          [Op.in]: array
        }
      }
    })

    return res.json(venues)
  }
}))

router.post("", asyncHandler(async (req, res) => {
  const { venueId, reserverId } = req.body;
  const reservation = await Reservation.create({ reserverId, venueId })

  return res.json(reservation)
}))

module.exports = router;
