import { csrfFetch } from './csrf';

const LOAD = 'search/LOAD';

const load = list => ({
  type: LOAD,
  list,
});



// ********* THUNK ********** //

export const getSearch = (param) => async dispatch => {

  const response = await csrfFetch(`/api/search/${param}`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
    return list;
  }
}

// ***** REDUCER ******* //

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      const newState = {}
      action.list.forEach((search) => {
        newState[search.id] = search;
      })

      return newState;
    default:
      return state;
  }
}


export default searchReducer;
