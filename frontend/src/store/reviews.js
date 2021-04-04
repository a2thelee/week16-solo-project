import { csrfFetch } from "./csrf"

const GETREVS = "reviews/GETREVS"
const SETREV = "reviews/SETREV"
const EDITREV = "reviews/EDITREV"
const DELETEREV = "reviews/DELETEREV"
const GETUSERREVS = "reviews/GETUSERREVS"   //getting reviews by user. TESTING

// *********** REVIEW ACTIONS *************

const getRevs = (list) => ({
  type: GETREVS,
  list
})

const setRev = (reviews) => ({
  type: SETREV,
  payload: reviews
})

const editRev = (reviewEdit) => ({
  type: EDITREV,
  reviewEdit
})

const deleteRev = (reviewId) => ({
  type: DELETEREV,
  reviewId
});

const getUserRevs = (userId) => ({      //getting reviews by user. TESTING
  type: GETUSERREVS,
  userId
})


// ************   THUNKS ***********
export const getUserReviews = (userId) => async (dispatch) => {     //getting reviews by user. TESTING
  const response = await csrfFetch(`/api/reviews/`)

  const userReviews = await response.json();
  dispatch(getUserRevs(userReviews))

}

export const editReview = (review) => async (dispatch) => {
  const { id, content, rating } = review;
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      content, rating
    })
  })
  const updatedReview = await response.json();
  dispatch(editRev(updatedReview))
}


export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  })
  const res = await response.json();
  dispatch(deleteRev(reviewId))
  return null;
}


// export const editReview = (review) => async (dispatch) => {
//   const response = await csrfFetch(`/api/reviews/${review.id}`, {
//     method: "PUT",
//     body: JSON.stringify(review)
//   });

//   if (response.ok) {
//     const updatedReview = await response.json();
//     dispatch(editRev(updatedReview))
//     return updatedReview;
//   }
// }


export const getReviews = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${id}`);

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

    case SETREV: {
      const newReview = { ...state };

      newReview[action.reviews.id] = action.reviews;
      return newReview
    }

    case EDITREV: {
      const newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    }

    case DELETEREV: {
      const newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    }

    case GETUSERREVS: {
      const allReviews = {};
      action.list.forEach((review) => {
        allReviews[review.id] = review
      })
      return allReviews;
    }

    default:
      return state;
  }
}

export default reviewReducer;
