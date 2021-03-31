const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models/")

const router = express.Router();


//backend get for all venues
router.get('', asyncHandler(async (req, res) => {
  const venues = await db.Venue.findAll(      //finds all our venues in our database
    //order: [[Sequelize.fn("RANDOM")]],         //randomize the order every time or by rating? rating will be added later.
    //limit: 10                                 //Adjust limit number based on size of pictures down the line
  );
  return res.json(venues);      //sends a response object back with all of our venues

}))


//backend get for one venue, after a user clicks on one
router.get('/:find', asyncHandler(async (req, res) => {
  const venue = await db.Venue.findByPk(req.params.find)
  return res.json({ venue });
}))

module.exports = router;
