import { csrfFetch } from './csrf';

const LOAD = 'search/LOAD';

const load = list => ({
  type: LOAD,
  list,
});



// ********* THUNK ********** //

export const getSearch = (params) => async dispatch => {

  const response = await fetch(`/api/search/${param}`);

  if (response.ok) {
    const list = await response.json();
    return list;
  }
}

// ***** REDUCER ******* //
const initalState = {       //let search results be in an array?
  search =[]
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      return { ...state, search: [...action.list] }
    }

    default:

      return state;
  }
}
