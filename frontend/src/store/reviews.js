import { csrfFetch } from "./csrf"

const GETREVS = "reviews/GETREVS"
const SETREV = "reviews/SETREV"

// *********** REVIEW ACTIONS *************

const getRevs = (list) => ({
  type: GETREVS,
  list
})

const setRev = (reviews) => ({
  type: SETREV,
  payload: reviews
})


// ************   THUNKS ***********

export const getReviews = () => async (dispatch) => {
  const response = await csrfFetch("/api/reviews");

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getRevs(reviews));
    return reviews;
  }
}

export const createReview = (review) => async (dispatch) => {
  const { venueId, rating, authorId, content } = review;
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify({
      venueId,
      rating,
      authorId,
      content
    })
  })
  if (response.ok) {
    const review = await response.json();
    dispatch(setRev(review))
    return review;
  }
}

// *********************** REVIEW REDUCER **********************

const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case GETREVS: {
      const allReviews = {};
      action.list.forEach((review) => {
        allReviews[review.id] = review
      })
      return allReviews;
    }

    case SETREV:
      const reviews = action.payload;
      const newReview = {};

      for (const review of reviews) {
        newReview[review.id] = reviews
      }

      return newReview
    default:
      return state;
  }
}

export default reviewReducer;
