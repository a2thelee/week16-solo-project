import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


//action that sets the user
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

//action that removes the user
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};


//user login
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


//restore user
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


//user sign up
export const signup = (user) => async (dispatch) => {
  const { firstName, lastName, username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

//user logout
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

export const demoLogin = () => async (dispatch) => {
  //console.log("asdfdsafdfa")
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential: "Demo-lition",
      password: "password"
    }),
  })
  const data = await response.json()
  dispatch(setUser(data.user));   //post route from api session.js
  return response;
}





const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
