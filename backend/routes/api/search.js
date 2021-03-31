const express = require('express')
const asyncHandler = require('express-async-handler');
const { Venue } = require('../../db/models');
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const router = express.Router();


router.get('/:id', asyncHandler(async (req, res) => {                       //check with nat what our path will want to be... /:id?

  const userSearchInput = req.params.id
  // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
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
