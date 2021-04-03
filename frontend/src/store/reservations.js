import { csrfFetch } from "./csrf";

const SETRES = "reservation/SETRES"
const GETRES = "reservation/GETRES"

// ********** ACTION ***********

const setRes = (newRes) => ({
  type: SETRES,
  newRes
})

const getRes = (userId) => ({
  type: GETRES,
  userId
})

// ************** THUNK ***************

export const setReservation = (reserverId, venueId, date) => async (dispatch) => {

  const response = await csrfFetch("/api/reservations", {
    method: "POST",
    body: JSON.stringify({
      venueId,
      reserverId,
      date
    })
  })
  if (response.ok) {
    const data = await response.json();
    return dispatch(setRes(data))
  } else {
    return alert("Please select a date")
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
  let newState = {};

  switch (action.type) {
    case SETRES:
      newState = { ...state }
      const key = Object.values(state).length + 1;        //not a good fix
      newState[key] = action.newRes;
      // newState[action.newRes.id] = action.newRes;    // <-------- this is what we want. find way to fix. indexes are 1 less than where they should, hence the above
      return newState;

    case GETRES:
      const array = action.reservations
      for (let i = 0; i < array.length; i++) {
        let key = array[i].id;
        // newState[key] = array[i]
        newState[i + 1] = array[i]
      }
      return newState;
    default:
      return state;
  }
}


export default reservationReducer;
//need reservation reducer
