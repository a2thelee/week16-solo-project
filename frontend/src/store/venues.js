import { csrfFetch } from './csrf';

const LOAD = 'venues/LOAD';
const LOADONE = "venues/LOADONE"


// *************  ACTIONS ************* //

const load = (list) => ({
  type: LOAD,
  list
});

const loadOne = (venue) => ({
  type: LOADONE,
  venue
})


// *************** THUNKS ****************//

export const getVenues = () => async (dispatch) => {
  const response = await csrfFetch(`/api/venues`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const getOneVenue = (id) => async (dispatch) => {

  const response = await fetch(`/api/venues/${id}`);

  if (response.ok) {
    const venue = await response.json();
    dispatch(loadOne(venue));
  }
}

// ************** REDUCER **************** //

const venueReducer = (state = null, action) => {
  switch (action.type) {
    case LOAD: {
      const allVenues = {};
      action.list.forEach((venue) => {
        allVenues[venue.id] = venue;
      });
      // return {
      //   ...allVenues,
      //   ...state,
      //   list: action.list
      // }

      return allVenues;
    }
    default:
      return state;
    case LOADONE: {
      return {
        ...state,
        [action.venue.id]: action.venue,
      }
    }
  }
}

export default venueReducer;


//reducer logic for LOADONE
