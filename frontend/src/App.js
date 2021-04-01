import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/Signup";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Venues from "./components/Venues"
import SingleVenue from "./components/singleVenue";
import SearchListPage from "./components/searchListPage"

import wallhaven from "./images/wallhaven.jpg"
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path="/login">
            <LoginFormPage />
          </Route>

          <Route exact path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path="/venues">
            <Venues />
          </Route>

          <Route exact path="/venues:id">
            <SingleVenue />
          </Route>

          <Route exact path="/list">
            <SearchListPage />
          </Route>

        </Switch>
      )}
      <img src={wallhaven} alt="Board Game" id="wallpaper" />
    </>
  );
}

export default App;
