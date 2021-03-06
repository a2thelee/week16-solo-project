const express = require('express')
const asyncHandler = require('express-async-handler');
const { Venue } = require('../../db/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const router = express.Router();

//WORKS
router.get('/:location', asyncHandler(async (req, res) => {

  const userSearchInput = req.params.location
  // console.log(userSearchInput, "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")

  const venues = await Venue.findAll({
    where: {
      [Op.or]: {
        state: {
          [Op.iLike]: `%${userSearchInput}`
        },
        city: {
          [Op.iLike]: `%${userSearchInput}`
        }
      }
    }
  })
  console.log(venues)
  return res.json(venues);

}))

module.exports = router;
