const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review } = require("../../db/models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op



router.get("/", asyncHandler(async (req, res) => {
  const reviews = await Review.findAll({})
  return res.json(reviews);
}))

router.post("/", asyncHandler(async (req, res) => {
  const {
    venueId,
    rating,
    authorId,
    content
  } = req.body;

  const review = await Review.create({
    venueId,
    rating,
    authorId,
    content
  })

  return res.json(review)
}))

//need routes for getOne and a patch, and a delete

module.exports = router;
