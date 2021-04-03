const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review } = require("../../db/models")
const Sequelize = require("sequelize")
const Op = Sequelize.Op


// WORKS
router.get("/:id", asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.findAll({ where: { venueId: id } })
  return res.json(reviews);
}))

// WORKS
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

// router.put("/:id", asyncHandler(async (req, res) => {
//   const reviewId = req.params.id;
//   const {
//     id,
//     venueId,
//     rating,
//     authorId,
//     content,
//     updatedAt
//   } = req.body;
//   const review = Review.findByPk(reviewId);
//   // return res.json(review)
// }))

router.patch("/:id", asyncHandler(async (req, res) => {
  const { rating, content } = req.body;
  const editedReviewId = req.params.id;
  const editedReview = await Review(findByPk(editedReviewId))

  await editedReview.update({
    rating, content
  })

  return res.json(editedReview)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const reviewId = req.params.id
  await Review.findByPk(reviewId).destroy();
  return res.json(null)
}))


module.exports = router;


//front end reviewsfetch route
//we want to find reviews based on the venueId
//work out the query AND the route
