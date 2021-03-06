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

  const response = await csrfFetch(`/api/venues/${id}`);

  if (response.ok) {
    const venue = await response.json();
    dispatch(loadOne(venue));
    return venue;
  }
}

// ************** REDUCER **************** //

const venueReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD: {
      const allVenues = {};
      action.list.forEach((venue) => {
        allVenues[venue.id] = venue;
      });

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
