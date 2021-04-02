import { csrfFetch } from "./csrf";

const SETRES = "reservation/SETRES"
const GETRES = "reservation/GETRES"

// ********** ACTION ***********

const setRes = (userId, venueId) => ({
  type: SETRES,
  payload: userId, venueId      //might need to put these inside an object
})

const getRes = (userId) => ({
  type: GETRES,
  userId
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
    return dispatch(setRes(data))
  }
}


export const getReservation = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reservations/${userId}`);

  if (response.ok) {
    const reservations = await response.json()
    return dispatch(getRes(reservations))
  }
}


// ************* REDUCER **************

const reservationReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SETRES:
      newState = action.payload;
      return newState;

    case GETRES:
      newState = action.userId;
      return newState;

    default:
      return state;
  }
}


export default reservationReducer;
//need reservation reducer
