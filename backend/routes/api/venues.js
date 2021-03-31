const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models/")

const router = express.Router();


//backend get for all venues
router.get('', asyncHandler(async (req, res) => {
  const venues = await db.Venue.findAll();  //finds all our venues in our database
  return res.json(venues);      //sends a response object back with all of our venues

}))


//backend get for one venue, after a user clicks on one
router.get("/:id", asyncHandler(async (req, res) => {
  const venue = await db.Venue.findByPK(req.params.id);

  return res.json(venue);
}))

module.exports = router;
