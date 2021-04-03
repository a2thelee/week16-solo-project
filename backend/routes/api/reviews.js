const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review } = require("../../db/models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op



router.get("/:id", asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.findAll({ where: { venueId: id } })
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

router.delete('/:id', asyncHandler(async (req, res) => {
  const authorId = req.params.id
  await Review.findByPk(authorId).destroy();

}),
);

router.put("/:id", asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const {
    id,
    venueId,
    rating,
    authorId,
    content,
    updatedAt
  } = req.body;
  const review = Review.findByPk(reviewId);
  // return res.json(review)
}))

//need routes for getOne and a patch, and a delete

module.exports = router;


//front end reviewsfetch route
//we want to find reviews based on the venueId
//work out the query AND the route
