import { csrfFetch } from "./csrf"
import { useDispatch } from "react-redux"

const LOAD = "venues/LOAD";

const load = (list) => ({
  type: LOAD,
  list
});

const initialState = {
  list: []
}

export const getVenues = () => async (dispatch) => {

  const response = await csrfFetch("./api/venues");

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list)) //this is a return. sort of implicit
  }
}

const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allvenues = {};
      action.list.forEach((venue) => {
        allVenues[venue.id] = venue;
      })
      return {
        ...allVenues,
        ...state,
        //sort by rating possible?
      }
    }
    default:
      return state;
  }
}

export default venueReducer;
