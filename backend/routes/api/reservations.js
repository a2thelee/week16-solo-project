const express = require('express')
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const router = express.Router();

router.post("", asyncHandler(async (req, res) => {
  const { venueId, reserverId } = req.body;
  const reservation = await db.Reservation.create({ reserverId, venueId })

  return res.json(reservation)
}))

module.exports = router;
