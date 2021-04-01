import { csrfFetch } from "./csrf";

const SETRES = "reservation/setReservation"

// ********** ACTION ***********

const setRes = (userId, venueId) => ({
  type: SETRES,
  payload: userId, venueId

})

// ************** THUNK ***************

export const setReservation = (reserverId, venueId) => async (dispatch) => {

  const response = await csrfFetch("/api/reservations", {
    method: "POST",
    body: JSON.stringify({
      venueId,
      reserverId
    })
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(setRes(data))
    return data
  }
}


// ************* REDUCER **************

const reservationReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SETRES:
      newState = action.payload;
      return newState;
    default:
      return state
  }
}


export default reservationReducer;
//need reservation reducer
