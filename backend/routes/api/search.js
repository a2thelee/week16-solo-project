const express = require('express')
const asyncHandler = require('express-async-handler');
const { Venue } = require('../../db/models');
const { Sequelize, Op } = require("sequelize")
const router = express.Router();


router.get('/search', asyncHandler(async (req, res) => {                       //check with nat what our path will want to be... /:id?

  const userSearchInput = req.params.id

  const venues = await Venue.findAll({
    where: {
      state: { [Op.iLike]: `%${userSearchInput}%` }                 //find all in a state?
    }
  })
  return res.json(venues);
}))

module.exports = router;