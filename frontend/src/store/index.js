import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session"
import venueReducer from "./venues"
import searchReducer from "./search"
import reservationReducer from "./reservations"
import reviewReducer from "./reviews"
import userReviewReducer from "./userReviews"

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  venue: venueReducer,
  search: searchReducer,
  reservation: reservationReducer,
  reviews: reviewReducer,
  userReview: userReviewReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
