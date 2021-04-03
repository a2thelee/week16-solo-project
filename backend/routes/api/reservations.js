const express = require('express')
const asyncHandler = require('express-async-handler');
const { Reservation, Venue, User } = require('../../db/models');
const router = express.Router();
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const { check, validationResult } = require("express-validator")
const { handleValidationErrors } = require("../../utils/validation")

const reservationValidations = [        //making sure non-empty date
  check("date")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please select a valid date."),
  handleValidationErrors
]
// WORKS
router.get("/:id", asyncHandler(async (req, res) => {
  const { id } = req.params;

  const reservations = await Reservation.findAll({ where: { reserverId: id } })
  return res.json(reservations);
}))

// WORKS
router.post("/", reservationValidations, asyncHandler(async (req, res) => {
  const { venueId, reserverId, date } = req.body;
  const reservation = await Reservation.create({ reserverId, venueId, date })
  // const venue = await Venue.findByPk(reservation.venueId, { include: Reservation })

  return res.json(reservation)
}))

module.exports = router;
