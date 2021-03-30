const express = require('express');
const asyncHandler = require('express-async-handler');
const { Venue } = require("../../db/models")
const router = express.Router();

router.get('', asyncHandler(async (req, res) => {
  const venues = await db.Venue.findAll();  //finds all our venues in our database
  return res.json(venues);      //sends a response object back with all of our venues

}))

module.exports = router;
